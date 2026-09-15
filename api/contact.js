import nodemailer from 'nodemailer';

const DEFAULT_SMTP_HOST = 'smtp.dondominio.com';
const DEFAULT_SMTP_PORT = 465;
const DEFAULT_SMTP_SECURE = true;
const MAX_REQUEST_BYTES = 16 * 1024;
const ALLOWED_SERVICES = new Set(['', 'individual', 'pareja', 'familiar', 'evaluacion', 'cognitiva', 'otro']);

function jsonResponse(payload, status = 200, headers = {}) {
  return new Response(status === 204 ? null : JSON.stringify(payload), {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      ...headers
    }
  });
}

function redirectResponse(request, result) {
  const url = new URL('/contacto/', request.url);
  url.searchParams.set('contacto', result);
  url.hash = 'contact-form-status';

  return new Response(null, {
    status: 303,
    headers: {
      'Cache-Control': 'no-store',
      Location: url.toString()
    }
  });
}

function publicResponse(request, payload, status = 200) {
  const acceptsHtml = (request.headers.get('accept') || '').includes('text/html');
  const prefersJson = (request.headers.get('accept') || '').includes('application/json');

  if (acceptsHtml && !prefersJson) {
    return redirectResponse(request, status >= 200 && status < 300 ? 'enviado' : 'error');
  }

  return jsonResponse(payload, status);
}

function cleanField(value) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanMessage(value) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim();
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

async function parseBody(request) {
  const contentType = (request.headers.get('content-type') || '').split(';', 1)[0].trim().toLowerCase();
  const contentLength = Number(request.headers.get('content-length'));

  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    const error = new Error('request-too-large');
    error.code = 'REQUEST_TOO_LARGE';
    throw error;
  }

  if (!['application/json', 'application/x-www-form-urlencoded'].includes(contentType)) {
    const error = new Error('unsupported-content-type');
    error.code = 'UNSUPPORTED_CONTENT_TYPE';
    throw error;
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
    const error = new Error('request-too-large');
    error.code = 'REQUEST_TOO_LARGE';
    throw error;
  }

  const body = contentType === 'application/json'
    ? JSON.parse(rawBody)
    : Object.fromEntries(new URLSearchParams(rawBody));

  if (!isRecord(body)) {
    const error = new Error('invalid-body');
    error.code = 'INVALID_BODY';
    throw error;
  }

  return body;
}

function readField(body, key, maxLength, cleaner = cleanField) {
  const value = body[key];
  if (value === undefined || value === null) return { value: '', valid: true };
  if (typeof value !== 'string') return { value: '', valid: false };

  const cleaned = cleaner(value);
  return { value: cleaned, valid: cleaned.length <= maxLength };
}

function formatService(service) {
  const labels = {
    individual: 'Me siento mal y no sé por qué',
    pareja: 'Problemas con mi pareja',
    familiar: 'Conflictos familiares',
    evaluacion: 'Problemas de memoria o atención',
    cognitiva: 'Estimulación para persona mayor',
    otro: 'Otro / No estoy seguro'
  };

  return labels[service] || 'No especificado';
}

function buildEmail({ nombre, telefono, email, servicio, mensaje }) {
  const serviceLabel = formatService(servicio);
  const subject = `Nueva consulta web de ${nombre}`;
  const text = [
    'Nueva consulta enviada desde matacalapsicologia.es',
    '',
    `Nombre: ${nombre}`,
    `Email: ${email}`,
    `Telefono: ${telefono || 'No indicado'}`,
    `Motivo: ${serviceLabel}`,
    '',
    'Mensaje:',
    mensaje
  ].join('\n');

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:16px;line-height:1.6;color:#1B1E19">
      <h1 style="font-size:22px;margin:0 0 18px">Nueva consulta web</h1>
      <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefono:</strong> ${escapeHtml(telefono || 'No indicado')}</p>
      <p><strong>Motivo:</strong> ${escapeHtml(serviceLabel)}</p>
      <hr style="border:0;border-top:1px solid #D4CDBC;margin:24px 0" />
      <p style="white-space:pre-wrap">${escapeHtml(mensaje)}</p>
    </div>
  `;

  return { subject, text, html };
}

function getSmtpConfig() {
  const host = cleanField(process.env.SMTP_HOST || DEFAULT_SMTP_HOST);
  const port = Number(process.env.SMTP_PORT || DEFAULT_SMTP_PORT);
  const user = cleanField(process.env.SMTP_USER || '');
  const pass = process.env.SMTP_PASS || '';
  const from = cleanField(process.env.CONTACT_FROM || user);
  const recipient = cleanField(process.env.CONTACT_TO || '');
  const secureValue = cleanField(process.env.SMTP_SECURE || '').toLowerCase();
  const secure = secureValue ? secureValue === 'true' : DEFAULT_SMTP_SECURE;

  if (
    !host ||
    !user ||
    !pass ||
    !from ||
    !recipient ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    (secureValue && !['true', 'false'].includes(secureValue)) ||
    /[\r\n]/.test(from) ||
    /[\r\n]/.test(recipient)
  ) {
    return null;
  }

  return {
    host,
    port,
    secure,
    auth: {
      user,
      pass
    },
    from,
    recipient
  };
}

function createTransport(config) {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth
  });
}

export function OPTIONS() {
  return jsonResponse({}, 204, { Allow: 'POST, OPTIONS' });
}

export function GET() {
  return jsonResponse({ message: 'Método no permitido.' }, 405, { Allow: 'POST, OPTIONS' });
}

export async function POST(request) {
  let body;
  try {
    body = await parseBody(request);
  } catch (error) {
    if (error?.code === 'REQUEST_TOO_LARGE') {
      return publicResponse(request, { message: 'La solicitud es demasiado grande.' }, 413);
    }
    if (error?.code === 'UNSUPPORTED_CONTENT_TYPE') {
      return publicResponse(request, { message: 'Formato de solicitud no compatible.' }, 415);
    }
    return publicResponse(request, { message: 'No se han podido leer los datos del formulario.' }, 400);
  }

  // Honeypot: no se revela si el mensaje se ha descartado.
  if (cleanField(body.website).length > 0) {
    return publicResponse(request, { ok: true });
  }

  const nombreField = readField(body, 'nombre', 120);
  const telefonoField = readField(body, 'telefono', 30);
  const emailField = readField(body, 'email', 180);
  const servicioField = readField(body, 'servicio', 30);
  const mensajeField = readField(body, 'mensaje', 2000, cleanMessage);
  const privacidadField = readField(body, 'privacidad', 40);

  const nombre = nombreField.value;
  const telefono = telefonoField.value;
  const email = emailField.value.toLowerCase();
  const servicio = servicioField.value;
  const mensaje = mensajeField.value;
  const privacidad = privacidadField.value;

  const validName = /^[\p{L}\p{M}][\p{L}\p{M}\s.'’\-]{1,119}$/u.test(nombre);
  const validPhone = !telefono || (/^[0-9+().\s-]{6,30}$/.test(telefono) && (telefono.match(/\d/g) || []).length >= 6);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && !/[\r\n]/.test(email);
  const validMessage = mensaje.length >= 10;

  if (
    !nombre ||
    !email ||
    !mensaje ||
    !nombreField.valid ||
    !telefonoField.valid ||
    !emailField.valid ||
    !servicioField.valid ||
    !mensajeField.valid ||
    !privacidadField.valid ||
    !validName ||
    !validPhone ||
    !validEmail ||
    !validMessage
  ) {
    return publicResponse(request, { message: 'Revisa el nombre, teléfono, email y mensaje antes de enviarlos.' }, 400);
  }

  if (!ALLOWED_SERVICES.has(servicio)) {
    return publicResponse(request, { message: 'Selecciona un motivo de contacto válido.' }, 400);
  }

  if (privacidad !== 'aceptada') {
    return publicResponse(request, { message: 'Debes aceptar la política de privacidad.' }, 400);
  }

  const smtpConfig = getSmtpConfig();
  if (!smtpConfig) {
    console.error('Contact form is not configured: missing or invalid SMTP/contact environment variables.');
    return publicResponse(request, { message: 'El formulario no está disponible temporalmente. Inténtalo de nuevo más tarde.' }, 500);
  }

  const emailContent = buildEmail({ nombre, telefono, email, servicio, mensaje });

  try {
    const transporter = createTransport(smtpConfig);

    await transporter.sendMail({
      from: smtpConfig.from,
      to: smtpConfig.recipient,
      replyTo: email,
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html
    });

    return publicResponse(request, { ok: true });
  } catch (error) {
    console.error('SMTP contact form error:', error);
    return publicResponse(request, { message: 'No se ha podido enviar el mensaje. Inténtalo de nuevo más tarde.' }, 502);
  }
}
