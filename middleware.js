/**
 * Fuerza el host canónico sin www en todas las peticiones.
 * Complementa vercel.json; no sustituye la configuración de dominios en Vercel.
 */
const CANONICAL_HOST = 'matacalapsicologia.es';

export default function middleware(request) {
  const url = new URL(request.url);

  if (url.hostname === `www.${CANONICAL_HOST}`) {
    url.hostname = CANONICAL_HOST;
    url.protocol = 'https:';
    return Response.redirect(url, 308);
  }
}

export const config = {
  matcher: '/((?!_astro|favicon|icon-|.*\\.).*)',
};
