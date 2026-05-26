/** Canonical production URL (apex, no www). */
export const SITE_URL = 'https://matacalapsicologia.es';

export const SITE_NAME = 'María Ángeles Mata — Psicóloga en Córdoba';

export const DEFAULT_DESCRIPTION =
  'Psicóloga en Córdoba: terapia individual, de pareja y familiar, evaluación neuropsicológica y sesiones online. Primera consulta sin compromiso.';

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
