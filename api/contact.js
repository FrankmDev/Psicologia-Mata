import nodemailer from 'nodemailer';

const DEFAULT_EMAIL = 'info@matacalapsicologia.es';
const DEFAULT_SMTP_HOST = 'smtp.dondominio.com';
const DEFAULT_SMTP_PORT = 465;
const DEFAULT_SMTP_SECURE = true;

function jsonResponse(payload, status = 200, headers = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...headers
    }
  });
}

function cleanField(value, maxLength = 1000) {
  if (typeof value !== 'string') return '';
  return value.replace(/\s+/g, ' ').trim().slice(0, maxLength);
}

function cleanMessage(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim().slice(0, 4000);
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

async function parseBody(request) {
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    return request.json();
  }

  if (contentType.includes('application/x-www-form-urlencoded')) {
    const rawBody = await request.text();
    return Object.fromEntries(new URLSearchParams(rawBody));
  }

  return {};
}

function formatService(service) {
  const labels = {
    individual: 'Me siento mal y no se por que',
    pareja: 'Problemas con mi pareja',
    familiar: 'Conflictos familiares',
    evaluacion: 'Problemas de memoria o atencion',
    cognitiva: 'Estimulacion para persona mayor',
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
  const host = process.env.SMTP_HOST || DEFAULT_SMTP_HOST;
  const portValue = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER || DEFAULT_EMAIL;
  const pass = process.env.SMTP_PASS;
  const from = process.env.CONTACT_FORM || `Psicologia Mata <${DEFAULT_EMAIL}>`;
  const recipient = process.env.CONTACT_TO || DEFAULT_EMAIL;
  const secureFlag = cleanField(process.env.SMTP_SECURE || '', 10).toLowerCase();
  const port = Number(portValue || DEFAULT_SMTP_PORT);
  const secure = secureFlag ? secureFlag === 'true' : DEFAULT_SMTP_SECURE;

  if (!host || !user || !pass || !from || !recipient || Number.isNaN(port)) {
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

export async function POST(request) {
  const smtpConfig = getSmtpConfig();

  if (!smtpConfig) {
    return jsonResponse({
      message: `El formulario no esta configurado todavia. Escribe a ${DEFAULT_EMAIL}.`
    }, 500);
  }

  let body;
  try {
    body = await parseBody(request);
  } catch {
    return jsonResponse({ message: 'No se han podido leer los datos del formulario.' }, 400);
  }

  if (cleanField(body.website, 200)) {
    return jsonResponse({ ok: true });
  }

  const nombre = cleanField(body.nombre, 120);
  const telefono = cleanField(body.telefono, 60);
  const email = cleanField(body.email, 180).toLowerCase();
  const servicio = cleanField(body.servicio, 80);
  const mensaje = cleanMessage(body.mensaje);
  const privacidad = cleanField(body.privacidad, 40);

  if (!nombre || !email || !mensaje) {
    return jsonResponse({ message: 'Completa nombre, email y mensaje.' }, 400);
  }

  if (privacidad !== 'aceptada') {
    return jsonResponse({ message: 'Debes aceptar la politica de privacidad.' }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ message: 'Introduce un email valido.' }, 400);
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

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error('SMTP contact form error:', error);
    return jsonResponse({
      message: `No se ha podido enviar el mensaje. Escribe a ${DEFAULT_EMAIL}.`
    }, 502);
  }
}
