// Read-only HTTP audit. No browser, form submission, SMTP, credentials or deployment.
// Run after building: node scripts/audit-production.mjs > /path/to/report.json
import { readdir, readFile } from 'node:fs/promises';
import { relative, resolve } from 'node:path';

const origin = 'https://matacalapsicologia.es';
const dist = resolve('dist');
const headersToCheck = ['content-type', 'location', 'strict-transport-security', 'x-content-type-options',
  'x-frame-options', 'referrer-policy', 'permissions-policy', 'cache-control', 'x-robots-tag'];

async function request(url) {
  try {
    const response = await fetch(url, {
      redirect: 'manual', signal: AbortSignal.timeout(25000),
      headers: { 'User-Agent': 'MataQualityAudit/1.0' },
    });
    const bytes = new Uint8Array(await response.arrayBuffer());
    return {
      url, status: response.status, bytes: bytes.byteLength,
      headers: Object.fromEntries(headersToCheck.map((key) => [key, response.headers.get(key)])),
      body: new TextDecoder().decode(bytes),
    };
  } catch (error) {
    return { url, error: error.cause?.code ?? error.message };
  }
}

async function pool(items, callback) {
  const results = new Array(items.length);
  let index = 0;
  await Promise.all(Array.from({ length: Math.min(4, items.length) }, async () => {
    while (index < items.length) {
      const next = index++;
      results[next] = await callback(items[next]);
    }
  }));
  return results;
}

const sitemapIndex = await request(`${origin}/sitemap-index.xml`);
const sitemapFiles = [...(sitemapIndex.body ?? '').matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((match) => match[1]).filter((url) => url.startsWith(`${origin}/`));
const sitemaps = await pool(sitemapFiles, request);
const sitemapUrls = sitemaps.flatMap((entry) => [...(entry.body ?? '').matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((match) => match[1])).filter((url) => url.startsWith(`${origin}/`));
const files = await readdir(dist, { recursive: true });
const localPaths = files.filter((file) => file.endsWith('.html') && file !== '404.html')
  .map((file) => `/${file.replaceAll('\\', '/').replace(/index\.html$/, '')}`);
const urls = [...new Set([...sitemapUrls, ...localPaths.map((path) => origin + path)])].sort();

const resources = new Set();
const pages = await pool(urls, async (url) => {
  const entry = await request(url);
  const html = entry.body ?? '';
  for (const match of html.matchAll(/(?:src|href)=["']([^"'#]+)["']/g)) {
    const asset = new URL(match[1], url);
    if (asset.origin === origin && /\.(?:css|js|webp|avif|jpe?g|png|ico|woff2?|webmanifest)$/.test(asset.pathname)) {
      resources.add(asset.href);
    }
  }
  const metas = Object.fromEntries([...html.matchAll(/<meta\b[^>]*(?:name|property)="([^"]+)"[^>]*content="([^"]*)"[^>]*>/g)]
    .map((match) => [match[1], match[2]]));
  const canonical = /<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/.exec(html)?.[1];
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map((match) => { try { return JSON.parse(match[1])['@type']; } catch { return 'INVALID JSON'; } });
  delete entry.body;
  const path = new URL(url).pathname;
  const file = resolve(dist, `.${path}`, 'index.html');
  let localRobots;
  // Only the fixed apex and generated path list can select local files.
  if (!relative(dist, file).startsWith('..')) {
    try { localRobots = /<meta name="robots" content="([^"]+)"/.exec(await readFile(file, 'utf8'))?.[1]; } catch { /* live-only URL */ }
  }
  return { ...entry, title: /<title>([^<]*)<\/title>/.exec(html)?.[1], description: metas.description,
    canonical, robots: metas.robots, localRobots, h1: [...html.matchAll(/<h1\b/g)].length, schemas,
    formDisabled: url.endsWith('/contacto/') ? /<fieldset\b[^>]*\bdisabled\b/.test(html) : undefined,
    ids: [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
    refs: [...html.matchAll(/\baria-(?:labelledby|describedby|controls)="([^"]+)"/g)].flatMap((match) => match[1].split(/\s+/)),
    links: [...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((match) => new URL(match[1], url).href),
  };
});

// Include CSS-linked local font/image resources; never follow external requests.
const assetResults = await pool([...resources].sort(), request);
const nested = new Set();
for (const asset of assetResults) {
  if (!asset.url.endsWith('.css')) continue;
  for (const match of (asset.body ?? '').matchAll(/url\(["']?([^\s)"']+)/g)) {
    const url = new URL(match[1], asset.url);
    if (url.origin === origin && /\.(?:woff2?|webp|avif|jpe?g|png|svg)$/.test(url.pathname) && !resources.has(url.href)) nested.add(url.href);
  }
}
assetResults.push(...await pool([...nested].sort(), request));
const probes = await pool([
  'http://matacalapsicologia.es/', 'https://www.matacalapsicologia.es/',
  'https://www.matacalapsicologia.es/blog/cuando-ir-al-psicologo/',
  'https://matacalapsicologia.com/', 'https://www.matacalapsicologia.com/',
  ...['/servicios', '/blog', '/contacto', '/services', '/services/', '/contact', '/contact/', '/sobre-mi',
    '/no-existe-auditoria/', '/api/contact', '/api/contact/', '/robots.txt'].map((path) => origin + path),
], request);
for (const entry of [...assetResults, ...probes]) {
  if (!entry.url.endsWith('/robots.txt')) delete entry.body;
}
const linkIssues = [];
const ariaIssues = [];
const pageMap = new Map(pages.map((page) => [page.url, page]));
for (const page of pages) {
  if (page.status !== 200) continue;
  for (const ref of page.refs) if (!page.ids.includes(ref)) ariaIssues.push({ page: page.url, missingId: ref });
  for (const href of new Set(page.links)) {
    const url = new URL(href);
    if (url.origin !== origin) continue;
    const target = pageMap.get(url.origin + url.pathname);
    if (target?.status === 404 || (url.hash && target?.status === 200 && !target.ids.includes(decodeURIComponent(url.hash.slice(1))))) {
      linkIssues.push({ page: page.url, href, reason: target.status === 404 ? '404' : 'missing anchor' });
    }
  }
}
for (const page of pages) {
  delete page.links;
  delete page.ids;
  delete page.refs;
}
console.log(JSON.stringify({ checkedAt: new Date().toISOString(), method: 'GET only', sitemapUrls,
  sitemapIndex, sitemaps, pages, assets: assetResults, probes, linkIssues, ariaIssues }, null, 2));
