import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { runInNewContext } from 'node:vm';
import { GET, OPTIONS, POST } from '../api/contact.js';
import { CONTACT_FORM_ENABLED } from '../src/config/contact.mjs';
import nodemailer from 'nodemailer';

// Use the rendered script and a minimal DOM stub, not browser automation.
function contactStatus(query) {
  const html = readFileSync(new URL('../dist/contacto/index.html', import.meta.url), 'utf8');
  const script = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)]
    .map((match) => match[1])
    .find((text) => text.includes('const contactResult'));
  assert.ok(script, 'Build the site before running contact tests.');
  const status = { hidden: true, textContent: '', classList: { add() {}, remove() {} } };
  let replacedUrl;
  runInNewContext(script, {
    URL,
    URLSearchParams,
    document: { getElementById: (id) => id === 'contact-form-status' ? status : null },
    window: {
      location: new URL(`https://matacalapsicologia.es/contacto/${query}`),
      history: { replaceState: (_state, _title, url) => { replacedUrl = url; } },
    },
  });
  return { status, replacedUrl };
}

test('disabled JSON endpoint refuses requests before reading any data', async () => {
  const response = await POST({
    url: 'https://matacalapsicologia.es/api/contact',
    headers: new Headers({ accept: 'application/json' }),
    text() { throw new Error('Disabled endpoint must not read the body.'); },
    json() { throw new Error('Disabled endpoint must not parse the body.'); },
  });
  assert.equal(response.status, 503);
  assert.equal(response.headers.get('Retry-After'), '3600');
  assert.equal(response.headers.get('Cache-Control'), 'no-store');
  assert.equal((await response.json()).ok, false);
});

test('disabled HTML endpoint redirects with an explicit disabled result', async () => {
  const response = await POST(new Request('https://matacalapsicologia.es/api/contact', {
    method: 'POST',
    headers: { accept: 'text/html' },
  }));
  assert.equal(response.status, 303);
  assert.equal(new URL(response.headers.get('Location')).searchParams.get('contacto'), 'deshabilitado');
});

test('contact status handles disabled redirects and preserves other query parameters', () => {
  const { status, replacedUrl } = contactStatus('?utm_source=test&contacto=deshabilitado#contact-form-status');
  assert.equal(status.hidden, false);
  assert.match(status.textContent, /deshabilitado/);
  assert.equal(replacedUrl, '/contacto/?utm_source=test#contact-form-status');
});

test('a success query cannot claim a successful submission while the form is disabled', () => {
  const { status } = contactStatus('?contacto=enviado');
  assert.match(status.textContent, /deshabilitado/);
  assert.doesNotMatch(status.textContent, /enviada correctamente/);
});

test('normal contact visits do not show a submission message or rewrite the URL', () => {
  const { status, replacedUrl } = contactStatus('?utm_source=test');
  assert.equal(status.hidden, true);
  assert.equal(replacedUrl, undefined);
});

test('contact method contracts remain unchanged', () => {
  assert.equal(GET().status, 405);
  assert.equal(OPTIONS().status, 204);
});

test('the site and API use a single disabled configuration', () => {
  const site = readFileSync(new URL('../src/config/site.ts', import.meta.url), 'utf8');
  const api = readFileSync(new URL('../api/contact.js', import.meta.url), 'utf8');
  assert.equal(CONTACT_FORM_ENABLED, false);
  assert.match(site, /export \{ CONTACT_FORM_ENABLED, CONTACT_FORM_DISABLED_MESSAGE \} from '.\/contact.mjs'/);
  assert.match(api, /import \{ CONTACT_FORM_ENABLED, CONTACT_FORM_DISABLED_MESSAGE \} from '..\/src\/config\/contact.mjs'/);
});

// Execute the real handler with a synthetic configuration and a transport with no network.
// No environment variables, SMTP server or credentials are read or modified by these tests.
let fixtureId = 0;
async function enabledFixture({ reject = false, missingConfig = false } = {}) {
  const source = readFileSync(new URL('../api/contact.js', import.meta.url), 'utf8')
    .replace("import nodemailer from 'nodemailer';", `
      export const deliveries = [];
      export let transportOptions;
      const nodemailer = { createTransport(options) {
        transportOptions = options;
        return { async sendMail(message) {
          deliveries.push(message);
          return ${reject ? "{ accepted: [], rejected: ['receiver@example.invalid'] }" : "{ accepted: ['receiver@example.invalid'], rejected: [] }"};
        }};
      }};
    `)
    .replace(/import \{ CONTACT_FORM_ENABLED, CONTACT_FORM_DISABLED_MESSAGE \} from '[^']+';/,
      "const CONTACT_FORM_ENABLED = true; const CONTACT_FORM_DISABLED_MESSAGE = 'disabled';")
    .replaceAll('process.env', `(${JSON.stringify(missingConfig ? {} : {
      SMTP_HOST: 'smtp.example.invalid', SMTP_PORT: '465', SMTP_SECURE: 'true',
      SMTP_USER: 'fixture@example.invalid', SMTP_PASS: 'synthetic-test-value',
      CONTACT_FROM: 'fixture@example.invalid', CONTACT_TO: 'receiver@example.invalid',
    })})`);
  return import(`data:text/javascript;base64,${Buffer.from(`${source}\n// fixture ${fixtureId++}`).toString('base64')}`);
}

const validPayload = {
  nombre: 'Persona de prueba', email: 'visitor@example.invalid', telefono: '',
  servicio: 'individual', mensaje: '<script>alert("test")</script>', privacidad: 'aceptada',
};
function contactRequest(body = validPayload, headers = {}) {
  return new Request('https://matacalapsicologia.es/api/contact/', {
    method: 'POST', headers: { accept: 'application/json', 'content-type': 'application/json', ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}

test('enabled handler rejects cross-site requests without delivering', async () => {
  const fixture = await enabledFixture();
  assert.equal((await fixture.POST(contactRequest(validPayload, { origin: 'https://other.invalid' }))).status, 403);
  assert.equal(fixture.deliveries.length, 0);
});

test('enabled handler rejects invalid input, consent, types and malformed JSON', async () => {
  const fixture = await enabledFixture();
  for (const payload of [{ ...validPayload, privacidad: '' }, { ...validPayload, email: [] },
    { ...validPayload, nombre: '\r\nInjected: header' }, { ...validPayload, servicio: 'invalid' },
    { ...validPayload, mensaje: 'short' }, 'not json', []]) {
    assert.equal((await fixture.POST(contactRequest(payload))).status, 400);
  }
  assert.equal((await fixture.POST(contactRequest('text', { 'content-type': 'text/plain' }))).status, 415);
  assert.equal(fixture.deliveries.length, 0);
});

test('enabled handler enforces the byte limit without Content-Length and cancels the stream', async () => {
  const fixture = await enabledFixture();
  let cancelled = false;
  const body = new ReadableStream({
    pull(controller) { controller.enqueue(new Uint8Array(17000)); },
    cancel() { cancelled = true; },
  });
  const request = new Request('https://matacalapsicologia.es/api/contact/', {
    method: 'POST', headers: { 'content-type': 'application/json' }, body, duplex: 'half',
  });
  assert.equal((await fixture.POST(request)).status, 413);
  assert.equal(cancelled, true);
  assert.equal(fixture.deliveries.length, 0);
});

test('enabled handler escapes HTML and retains the SMTP contract in a network-free fixture', async () => {
  const fixture = await enabledFixture();
  assert.equal((await fixture.POST(contactRequest())).status, 200);
  assert.equal(fixture.deliveries.length, 1);
  assert.match(fixture.deliveries[0].html, /&lt;script&gt;/);
  assert.doesNotMatch(fixture.deliveries[0].html, /<script>/);
  assert.equal(fixture.deliveries[0].replyTo, validPayload.email);
  assert.equal(fixture.transportOptions.disableFileAccess, true);
  assert.equal(fixture.transportOptions.disableUrlAccess, true);
  assert.equal(fixture.transportOptions.connectionTimeout, 10000);
});

test('enabled handler cannot report success when the SMTP recipient was rejected', async () => {
  const fixture = await enabledFixture({ reject: true });
  assert.equal((await fixture.POST(contactRequest())).status, 502);
});

test('enabled handler fails closed without configuration, without trying SMTP', async () => {
  const fixture = await enabledFixture({ missingConfig: true });
  assert.equal((await fixture.POST(contactRequest())).status, 500);
  assert.equal(fixture.deliveries.length, 0);
});

test('enabled handler preserves the non-JavaScript form POST and redirects after a synthetic delivery', async () => {
  const fixture = await enabledFixture();
  const request = new Request('https://matacalapsicologia.es/api/contact/', {
    method: 'POST', headers: { accept: 'text/html', 'content-type': 'application/x-www-form-urlencoded', origin: 'https://matacalapsicologia.es' },
    body: new URLSearchParams(validPayload),
  });
  const response = await fixture.POST(request);
  assert.equal(response.status, 303);
  assert.match(response.headers.get('location'), /contacto=enviado#contact-form-status$/);
  assert.equal(fixture.deliveries.length, 1);
});

test('honeypot avoids any transport and an oversized Content-Length avoids reading a body', async () => {
  const fixture = await enabledFixture();
  assert.equal((await fixture.POST(contactRequest({ ...validPayload, website: 'spam' }))).status, 200);
  const response = await fixture.POST({
    url: 'https://matacalapsicologia.es/api/contact/',
    headers: new Headers({ accept: 'application/json', 'content-type': 'application/json', 'content-length': '17000' }),
    get body() { throw new Error('Must reject Content-Length before reading.'); },
  });
  assert.equal(response.status, 413);
  assert.equal(fixture.deliveries.length, 0);
});

test('installed Nodemailer can compose the handler MIME in memory, without SMTP or any network transport', async () => {
  const fixture = await enabledFixture();
  await fixture.POST(contactRequest());
  const transport = nodemailer.createTransport({ streamTransport: true, buffer: true, newline: 'unix',
    disableFileAccess: true, disableUrlAccess: true });
  const result = await transport.sendMail(fixture.deliveries[0]);
  assert.ok(Buffer.isBuffer(result.message));
  assert.match(result.message.toString(), /Reply-To: visitor@example.invalid/);
  assert.match(result.message.toString(), /Content-Type: multipart\/alternative/);
});
