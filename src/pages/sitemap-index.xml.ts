import type { APIRoute } from 'astro';
import { blogPosts } from '../data/blog';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = (site?.toString().replace(/\/$/, '') || 'https://psicologia-mata.es');
  const today = new Date().toISOString().split('T')[0];
  
  // Static pages configuration
  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/services', priority: 0.9, changefreq: 'monthly' },
    { url: '/contact', priority: 0.9, changefreq: 'monthly' },
    { url: '/blog', priority: 0.8, changefreq: 'weekly' },
  ];

  // Dynamic blog posts from data
  const blogSlugs = Object.keys(blogPosts);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
  ${blogSlugs.map(slug => `  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
