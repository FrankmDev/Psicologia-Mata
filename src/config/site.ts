/** Canonical production URL (apex, no www). */
export const SITE_URL = 'https://matacalapsicologia.es';

export const SITE_NAME = 'María Ángeles Mata | Psicóloga en Córdoba y online';

export const DEFAULT_DESCRIPTION =
  'Psicóloga en Córdoba y online: terapia individual, de pareja y familiar, evaluación neuropsicológica y estimulación cognitiva. Primera consulta sin compromiso.';

export const DEFAULT_OG_IMAGE = '/profile.jpg';

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

/** Perfil de Google Maps / negocio local. */
export const GOOGLE_MAPS_URL =
  'https://maps.google.com/?q=C%2F+Rodr%C3%ADguez+S%C3%A1nchez%2C+9%2C+14003+C%C3%B3rdoba%2C+Espa%C3%B1a';

export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=C%2F+Rodr%C3%ADguez+S%C3%A1nchez%2C+9%2C+14003+C%C3%B3rdoba%2C+Espa%C3%B1a&output=embed';

/** Enlace directo al perfil de Google para dejar una reseña. */
export const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?sca_esv=e56dd46b96dbd51c&sxsrf=APpeQntM8MhbC_mRbTE_z7XDUmTZ5VUhkg:1785757528978&q=mari+angeles+mata+cala&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_3AE5VgHdxnE8eo_omhLtR6U-kqNNUEU0d7sgRfSC1JkzcxV6By18O7CRSSZjpVAgKQCG4w%3D&uds=AJ5uw1_sainNaeRyvmf1hc0XfC1vkc8WlboURZDPI9Dyq-TMMXLtHtIp90-2mEfLsnzz7KTGR2ac81dQ25WnbEvHIOf_jLpQ1BOcwTMJn4ZFApUcH3eqs1gnza2cPzwVbbFL7ZAV2Kp0&sa=X&sqi=2&ved=2ahUKEwjusa2ZsYSWAxVUaqQEHUnfDKgQ3PALegQINRAF&biw=961&bih=954&dpr=2';

export const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE_E164.replace('+', '')}?text=${encodeURIComponent('Hola, me gustaría pedir información sobre una consulta.')}`;

export const SOCIAL_PROFILES = [
  SOCIAL_INSTAGRAM,
  SOCIAL_FACEBOOK,
  GOOGLE_MAPS_URL,
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
