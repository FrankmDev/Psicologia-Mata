/** Canonical production URL (apex, no www). */
export const SITE_URL = 'https://matacalapsicologia.es';

export const SITE_NAME = 'María Ángeles Mata | Psicóloga en Córdoba y online';
export const SITE_SHORT_NAME = 'Psicología Mata';

export const DEFAULT_DESCRIPTION =
  'Psicóloga en Córdoba y online: terapia individual, de pareja y familiar, evaluación neuropsicológica y estimulación cognitiva.';

export const DEFAULT_OG_IMAGE = '/og-image.jpg';
export const DEFAULT_OG_IMAGE_ALT = 'Consulta de psicología en Córdoba: espacio de terapia tranquilo y confidencial';
export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const CONTACT_PHONE_E164 = '+34697733060';
export const CONTACT_PHONE_DISPLAY = '697 733 060';
export const CONTACT_PHONE_SCHEMA = '+34 697 733 060';
export const CONTACT_EMAIL = 'mangelesmatacala@hotmail.com';

export const CONTACT_ADDRESS = {
  streetAddress: 'C/ Rodríguez Sánchez, 9',
  addressLocality: 'Córdoba',
  postalCode: '14003',
  addressCountry: 'ES',
  full: 'C/ Rodríguez Sánchez, 9, 14003 Córdoba',
} as const;

export const SOCIAL_INSTAGRAM = 'https://www.instagram.com/psicologamata';
export const SOCIAL_FACEBOOK = 'https://www.facebook.com/psicologamata';

/** Horario de atención. Fuente única para web, footer y datos estructurados. */
export const CONTACT_HOURS = {
  days: 'Lunes a viernes',
  time: '9:00 – 20:00',
  schema: 'Mo-Fr 09:00-20:00',
} as const;

/**
 * Interruptor del formulario de contacto.
 *
 * Mantener en `false` hasta que el correo esté configurado en producción
 * (SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_FROM y
 * CONTACT_TO) y se haya verificado un envío real de extremo a extremo.
 *
 * Astro y el endpoint comparten el interruptor de contact.mjs.
 */
export { CONTACT_FORM_ENABLED, CONTACT_FORM_DISABLED_MESSAGE } from './contact.mjs';

/** Genera una URL de WhatsApp con un mensaje contextual. */
export function buildWhatsAppUrl(
  message = 'Hola, me gustaría pedir información sobre una consulta.',
): string {
  const phone = CONTACT_PHONE_E164.replace('+', '');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/** Perfil de Google Maps / negocio local. */
export const GOOGLE_MAPS_URL =
  'https://maps.google.com/?q=C%2F+Rodr%C3%ADguez+S%C3%A1nchez%2C+9%2C+14003+C%C3%B3rdoba%2C+Espa%C3%B1a';

export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=C%2F+Rodr%C3%ADguez+S%C3%A1nchez%2C+9%2C+14003+C%C3%B3rdoba%2C+Espa%C3%B1a&output=embed';

/** Enlace directo al perfil de Google para dejar una reseña. */
export const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?sca_esv=e56dd46b96dbd51c&sxsrf=APpeQntM8MhbC_mRbTE_z7XDUmTZ5VUhkg:1785757528978&q=mari+angeles+mata+cala&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_3AE5VgHdxnE8eo_omhLtR6U-kqNNUEU0d7sgRfSC1JkzcxV6By18O7CRSSZjpVAgKQCG4w%3D&uds=AJ5uw1_sainNaeRyvmf1hc0XfC1vkc8WlboURZDPI9Dyq-TMMXLtHtIp90-2mEfLsnzz7KTGR2ac81dQ25WnbEvHIOf_jLpQ1BOcwTMJn4ZFApUcH3eqs1gnza2cPzwVbbFL7ZAV2Kp0&sa=X&sqi=2&ved=2ahUKEwjusa2ZsYSWAxVUaqQEHUnfDKgQ3PALegQINRAF&biw=961&bih=954&dpr=2';

export const WHATSAPP_URL = buildWhatsAppUrl();

export const SOCIAL_PROFILES = [
  SOCIAL_INSTAGRAM,
  SOCIAL_FACEBOOK,
] as const;

export const PUBLIC_GSC_VERIFICATION = import.meta.env.PUBLIC_GSC_VERIFICATION ?? '';

/** Build absolute URL. Pages get a trailing slash; static assets (with extension) do not. */
export function absoluteUrl(path: string = '/'): string {
  if (path.startsWith('http')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') return `${SITE_URL}/`;
  if (/\.[a-z0-9]+$/i.test(normalized)) {
    return `${SITE_URL}${normalized}`;
  }
  const withSlash = normalized.endsWith('/') ? normalized : `${normalized}/`;
  return `${SITE_URL}${withSlash}`;
}
