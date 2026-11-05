# Auditoría técnica y editorial final

**Fecha:** 5 de noviembre de 2026. **Ámbito:** repositorio local y consultas HTTP GET a
<https://matacalapsicologia.es/>. Sin despliegue, commits, envíos reales, configuración
de correo, acceso a secretos, navegador automatizado ni capturas.

## Estado global

**CORREGIDO — código local validado, con pendientes importantes. No equivale a producción corregida.**
Se conservaron los cambios preexistentes sin confirmar. El baseline es ese árbol local,
no `HEAD`. No se han añadido rutas ni rediseñado la identidad editorial.

**PENDIENTE prioritario:** producción aún presenta campos de contacto habilitados.
El interruptor local está desactivado y se comprueba tanto en HTML como en el handler;
no se ha ejecutado ningún POST remoto para comprobar el estado del backend publicado.

## Correcciones de esta continuación

| Estado | Defecto comprobado y solución | Archivos principales |
|---|---|---|
| CORREGIDO | El build no detectaba 13 errores de tipado/sintaxis. Se repararon comentarios dentro de expresiones Astro, atributos ARIA y colisiones de variables globales. Se incorporó una comprobación de tipos reproducible. | `OptimizedImage.astro`, `contacto.astro`, `package.json` |
| CORREGIDO | Dos flags podían desincronizar la UI y el backend. Ahora comparten `src/config/contact.mjs`, en `false`. El envío sigue en código, pero no se sirve su script ni se lee el cuerpo del POST desactivado. | `src/config/`, `api/contact.js` |
| CORREGIDO | Un límite posterior a `request.text()` no evitaba leer cuerpos grandes. Se limita durante la lectura a 16 KiB; se preservan validación, consentimiento, honeypot y fallback HTML. Se añadieron comprobación de origen, TLS para STARTTLS, timeouts, comprobación de destinatarios aceptados y logs sin respuestas SMTP sensibles. | `api/contact.js` |
| CORREGIDO | El mapa conectaba automáticamente con Google; la política anunciaba un banner y cookies propias inexistentes. El mapa solo se crea al pulsar su botón, con información y enlace de privacidad. Se actualizaron los textos legales a la implementación, sin inventar datos del titular. | `contacto.astro`, `cookies.astro`, `privacidad.astro`, `aviso-legal.astro` |
| CORREGIDO | Todo el bloque de tarifas quedaba en la columna de 4/12 de escritorio. Se separaron encabezado y listado; precios/CTA permiten envolver en móvil. Se aclaran las tarifas por consultar y qué confirmar antes de reservar, sin alterar importes. | `servicios.astro` |
| CORREGIDO | El menú modal dejaba activo el fondo; el header podía ocultar elementos enfocados. Se aísla el fondo con `inert`, se añade cierre interior, se restaura foco y se protege la carrera de cierre antes del frame. El menú completo pasa a 1280 px para evitar compresión en tablet. | `Header.astro`, `MobileStickyCTA.astro` |
| CORREGIDO | Reveal podía descartar un lote de observaciones y dejar contenido invisible. El contenido ahora es visible por defecto; cada lote se procesa y el movimiento respeta preferencias. Se retiró el interceptor de anclas que anulaba hash/foco nativos y se limitaron animaciones decorativas continuas. | `RevealAnimation.astro`, `Layout.astro`, `global.css`, portada |
| CORREGIDO | HTML no conforme: `div` dentro de botón/summary, `style` en body, fieldset sin legend y jerarquía del footer tras el H1 de 404. Se corrigieron conservando la composición. Botones de compartir tienen nombre accesible; 14 imágenes interiores del blog ya reservan sus dimensiones. | `Header.astro`, `FAQItem.astro`, páginas, `Footer.astro`, `blog.ts` |
| CORREGIDO | Contraste insuficiente en enlaces de footer y algunos estados de texto; títulos oscuros en secciones oscuras. Se ajustaron los casos identificados y el foco visible. No implica certificación WCAG global. | componentes, landings y estilos |
| CORREGIDO | Dos referencias bibliográficas apuntaban a estudios ajenos. Gould: PMID `21709684` → `22283717`. Hoge: `36102337` → `36350591`, con título y año bibliográfico corregidos. `modifiedDate` refleja la corrección técnica real, no una revisión clínica. | `blog.ts`, `tests/content.test.mjs` |
| CORREGIDO | Se usaba `inLanguage` en Person/ProfessionalService y `position` directamente en Offer. Se retiraron esas propiedades de tipos incorrectos. Se escapa `<` al serializar JSON-LD compartido. | `Schema.astro`, `Layout.astro` |

Las protecciones ya existentes —borradores sin autoría profesional publicada, `lastmod`
coherente, categorías pequeñas `noindex`, contactos alternativos— se conservaron y
se volvieron a comprobar; no se atribuyen aquí como trabajo nuevo.

## Mejoras adicionales y mantenimiento

- **CORREGIDO:** actualización compatible del lockfile con `npm audit fix`, sin `--force`;
  Nodemailer actualizado a 10.3.1 tras revisar compatibilidad. El árbol pasa de **18 a
  5 vulnerabilidades**, no a cero. SMTP no se ha probado contra un servidor.
- **CORREGIDO:** `@astrojs/check` y TypeScript son herramientas de desarrollo explícitas.
  `npm ci` queda fijado para Vercel: el antiguo `bun.lockb` no debe seleccionar otra instalación.
- **CORREGIDO:** importaciones tipográficas limitadas al subconjunto latino y precarga
  de los dos pesos iniciales. Se eliminan prefetches incondicionales. La medición de abajo
  es inventario de archivos, no ahorro demostrado de transferencia de cada visita.
- **CORREGIDO:** caché inmutable solo para recursos con hash; los estáticos públicos
  reemplazables pasan a un día con revalidación, evitando conservar un OG/manifest antiguo un año.
- **VERIFICADO:** datos de contacto legales reutilizan la configuración; se eliminó una
  copia redundante de credenciales en una sección. No se añadieron credenciales, precios,
  testimonios, ratings, resultados clínicos ni trackers.
- **VERIFICADO:** scripts repetibles de métricas y rastreo GET; tests aislados de interacción
  y contacto. La documentación distingue estado local, estado público y reactivación autorizada.

## Validaciones y pruebas

| Estado | Comprobación | Resultado y alcance |
|---|---|---|
| VERIFICADO | `npm ci` | Instalación reproducible con lockfile. Node 26.7.0, npm 11.19.0. Avisos de scripts de instalación y deprecación, no fallos de build. |
| VERIFICADO | `npm run build` | 35 páginas estáticas. Ninguna ruta nueva respecto al baseline. |
| VERIFICADO | `npm run check` | 0 errores, 0 warnings y 0 hints del comprobador. |
| VERIFICADO | `npm test` | 22 tests: endpoint cerrado sin lectura, retorno HTML/JSON, validación, límites, origen, escape, fallos SMTP simulados, MIME en memoria, menú/foco, reveal y referencias corregidas. Los mensajes de error impresos corresponden a ramas negativas deliberadas. |
| VERIFICADO | `npm run check:seo` | 35 páginas, 20 URLs de sitemap, 14 cabeceras de artículos; títulos, descriptions, canonical/OG, noindex, enlaces/anchors, assets locales, imágenes, landmarks, niveles de headings, labels, referencias ARIA, JSON-LD, fechas y protecciones editoriales/contacto. |
| VERIFICADO | `html-validate@11.18.0` | Las 35 páginas sin errores con `html-validate:recommended`. Se exceptúan cuatro reglas de estilo, no de contenido permitido: inline styles, espacios del teléfono, cierre de void tags y espacios finales. |
| VERIFICADO | Contraste calculado | Olive/alabaster 5,41:1; olive/cream 4,71:1; terracotta/alabaster 5,77:1; taupe/cream 4,64:1; alabaster al 60% sobre charcoal 5,60:1. Son pares calculados, no estilos computados de todas las pantallas. |
| VERIFICADO | Identidad bibliográfica | Diez PMIDs contrastados con Europe PMC: ocho coincidían y dos se corrigieron. DOI `10.1111/jmft.12336` coincide en Crossref. Esto no valida cada afirmación clínica. |
| VERIFICADO | `git diff --check` | Sin errores de whitespace tras corregir el encontrado. |
| PENDIENTE | `npm audit` | Sigue devolviendo error: 1 crítica, 3 altas, 1 baja; Astro, sharp, zod, zod-to-ts y esbuild. El remedio propuesto por npm cruza a Astro 7.4.7; exige migración revisada, no un `--force` automático. |

La validación de JSON-LD cubre sintaxis y contratos comprobados del proyecto, **no** una
certificación completa del vocabulario ni una prueba de resultados enriquecidos de Google.
No se declara elegibilidad de FAQ rich results para esta consulta.

## Inventario antes/después

Medido con el mismo recorrido de `dist/` y `scripts/build-metrics.py`, sin compresión.
No es un test de LCP, INP, CLS ni velocidad percibida. El baseline de contacto ya excluía
el script de envío desactivado; las nuevas protecciones añaden código, no lo reducen.

| Estado | Medida | Baseline | Final | Variación |
|---|---|---:|---:|---:|
| VERIFICADO | Rutas HTML / sitemap | 35 / 20 | 35 / 20 | Sin cambio |
| VERIFICADO | HTML total | 1.978.563 B | 1.997.729 B | +0,97% |
| VERIFICADO | CSS total | 151.524 B | 116.684 B | −22,99% |
| VERIFICADO | Fuentes WOFF/WOFF2 del build | 1.079.228 B | 346.252 B | −67,92% |
| VERIFICADO | WebP bajo `_astro/` | 4.748.982 B | 4.719.158 B | −0,63% |
| VERIFICADO | JS inline Contacto, sin JSON-LD | 5.815 B | 6.236 B | +7,24% |
| VERIFICADO | Tests / errores de tipado | 7 / 13 | 22 / 0 | Mayor cobertura |
| CORREGIDO / PENDIENTE | Vulnerabilidades del árbol | 18 | 5 | No resueltas totalmente |

## Producción: resultado del rastreo de solo lectura

**VERIFICADO**, 5/11/2026, alrededor de 20:26 UTC:

- Las **23 URLs** del sitemap público devuelven 200, tienen title, description, un H1 y
  canonical al apex `.es` coincidente. **171 recursos rastreados** responden 200. No se
  encontraron enlaces internos/anchors rotos entre las páginas rastreadas.
- Las otras **11 rutas locales** (6 servicios + 5 artículos pendientes) devuelven 404:
  todavía no se han desplegado; no son enlaces rotos de los listados públicos comprobados.
- HTTP → HTTPS y `www.es` → apex devuelven 308. Se comprobó conservación de un path de blog.
  Las rutas comerciales sin slash también devuelven 308.
- `.com` y `www.com` no resuelven; la respuesta DNS de Google es NXDOMAIN. Tener reglas
  en `vercel.json` no activa un dominio que no resuelve. **PENDIENTE:** titular/DNS/Vercel.
- `/services` y `/contact` redirigen a sus variantes con slash y terminan en 404. Las
  reglas locales prevén `/servicios/` y `/contacto/`; verificar tras un despliegue autorizado.
- `robots.txt` y sitemap son accesibles. Una ruta inexistente devuelve 404 real, con noindex.
- HSTS está presente; faltan `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`
  y `Permissions-Policy` en el HTML publicado, aunque se configuran localmente.
- Seis referencias ARIA siguen rotas en producción: Aviso legal, Blog, Contacto, Cookies,
  Privacidad y Servicios. Las correcciones locales pasan sus controles.
- El formulario público no tiene fieldset deshabilitado. `GET /api/contact/` devuelve 405
  y no-store; no demuestra cómo respondería POST. **NO COMPROBABLE:** envío/bloqueo remoto.
- Producción mantiene textos antiguos, incluido «respuesta en menos de 24 h», y sitemap
  anterior a las modificaciones locales. No se ha actualizado ni enviado nada a Google.

### Inventario de URLs indexables locales

En todas estas rutas se verifican metadatos/canonical y pertenencia al sitemap local.
Todas responden 200 actualmente en producción; eso **no demuestra indexación en Google**.

| Estado | URL |
|---|---|
| VERIFICADO | `/` |
| VERIFICADO | `/sobre-mi/` |
| VERIFICADO | `/servicios/` |
| VERIFICADO | `/contacto/` |
| VERIFICADO | `/aviso-legal/` |
| VERIFICADO | `/privacidad/` |
| VERIFICADO | `/cookies/` |
| VERIFICADO | `/blog/` |
| VERIFICADO | `/blog/cuando-ir-al-psicologo/` |
| VERIFICADO | `/blog/ansiedad-personas-mayores/` |
| VERIFICADO | `/blog/atencion-plena-mindfulness-psicologia/` |
| VERIFICADO | `/blog/ansiedad-persistente-tratamiento-psicologico/` |
| VERIFICADO | `/blog/terapia-de-pareja-cuando-empezar/` |
| VERIFICADO | `/blog/beneficios-terapia-individual/` |
| VERIFICADO | `/blog/comunicacion-pareja/` |
| VERIFICADO | `/blog/gestion-ansiedad/` |
| VERIFICADO | `/blog/autoestima-saludable/` |
| VERIFICADO | `/blog/categoria/ansiedad/` |
| VERIFICADO | `/blog/categoria/salud-mental/` |
| VERIFICADO | `/blog/categoria/relaciones/` |

Las categorías `/blog/categoria/atencion-plena/`, `/bienestar/` y `/crecimiento-personal/`
(las tres bajo `/blog/categoria/`) son navegables pero `noindex` localmente; producción
aún las incluye en su sitemap. La 404 también es noindex. Las otras 11 exclusiones son
los borradores descritos a continuación. No se bloquean con robots: deben poder leerse
sus noindex. **`noindex` no es un control de acceso.**

## Cobertura de búsqueda local

Se verifica presencia y encaje del contenido, no volumen de búsqueda, ranking ni tráfico.
El mapa ampliado está en [arquitectura local](seo/arquitectura-local-cordoba.md).

| Intención | Cobertura existente | Destino específico preparado | Estado |
|---|---|---|---|
| Psicóloga/psicólogo en Córdoba | Inicio, perfil, dirección y servicios | `/` | VERIFICADO técnico; profesión por confirmar documentalmente |
| Terapia individual | `/servicios/#individual`, artículos relacionados | `/servicios/terapia-individual/` | PENDIENTE aprobación; landing noindex |
| Ansiedad | Servicio individual y tres guías temáticas | `/servicios/ansiedad-cordoba/` | PENDIENTE aprobación; landing noindex |
| Pareja | `/servicios/#pareja`, dos guías | `/servicios/terapia-pareja-cordoba/` | PENDIENTE aprobación; landing noindex |
| Evaluación neuropsicológica | `/servicios/#evaluacion` | `/servicios/evaluacion-neuropsicologica/` | PENDIENTE aprobación; landing + artículo noindex |
| Estimulación cognitiva | `/servicios/#cognitiva`, modalidad a domicilio/online | `/servicios/estimulacion-cognitiva/` | PENDIENTE aprobación; landing + artículo noindex |
| Personas mayores/cuidadores | Inicio, servicios y guía de ansiedad en mayores | `/servicios/psicologia-personas-mayores/` | PENDIENTE aprobación; landing + dos guías de memoria noindex |

El quinto artículo pendiente es `/blog/precio-psicologo-cordoba-cuanto-cuesta/`.
Se mantienen los cinco fuera de índices editoriales y del sitemap; las landings tienen
aviso de revisión y noindex. No se ha autorizado su publicación/indexación.

## Confirmaciones profesionales y pendientes

1. **PENDIENTE, prioridad alta — responsable técnico:** migración de Astro y dependencias
   vulnerables. El sitio es estático y el endpoint está cerrado localmente, pero eso no
   convierte todos los avisos en inocuos: revisar especialmente optimización AVIF y build.
   No incorporar imágenes no confiables mientras se resuelve. Estudiar CSP compatible
   con scripts inline y rate limiting antes de cualquier reactivación del formulario.
2. **PENDIENTE, prioridad alta — titular/operación:** resolver `.com` y verificar dominios,
   redirecciones, cabeceras y formulario en una publicación expresamente autorizada.
   Este trabajo no incluye ese despliegue.
3. **PENDIENTE — María Ángeles:** aprobar 6 landings y 5 borradores; revisar contenido
   clínico ya existente y sus límites. Confirmar colegiación AN 12177, habilitación sanitaria,
   titulaciones/años/centros, horarios, modalidades, ámbito domiciliario y disponibilidad.
   No se han acreditado consultando expedientes o un registro personal.
4. **PENDIENTE — tarifas/alcance:** confirmar 60/70/80 €, duraciones y primera cita;
   evaluación 90–120 minutos (sesión o proceso), informe, estimulación, desplazamientos
   y cancelaciones. Se conservaron cifras publicadas, no se certificó su vigencia.
5. **PENDIENTE — titular/asesoría jurídica:** identidad fiscal y registro sanitario cuando
   proceda; bases jurídicas, datos de salud, proveedores/encargados, transferencias,
   conservación y canales externos. La corrección técnica de cookies no es un dictamen RGPD/LSSI.
6. **PENDIENTE — contenido gráfico y reputación:** licencias de imágenes y exactitud de
   la mención de prensa. El perfil externo contiene información profesional discordante:
   no se usó para ampliar credenciales. Confirmar perfil de Google Business y conseguir
   un enlace estable de reseñas; el enlace actual es una URL de búsqueda larga.
7. **PENDIENTE — validación manual:** móvil y escritorio en 320, 375, 768, 1024, 1280 y
   1440 px; zoom 200–400%, teclado real, lector de pantalla, mapa, reflow y contraste sobre
   fotos/estados hover. Se revisaron CSS/HTML y simulaciones, no el resultado renderizado.
8. **NO COMPROBABLE:** Search Console, URLs indexadas, consultas/posiciones, Google Business
   verificado y Core Web Vitals de usuarios reales. No hay acceso ni se inventaron resultados.
9. **NO COMPROBABLE:** PageSpeed de laboratorio respondió 429 por cuota; no se obtuvo
   puntuación ni LCP/INP/CLS. No se ejecutó Lighthouse/navegador. Medir tras publicación
   autorizada y separar laboratorio de CrUX/Search Console.
10. **NO COMPROBABLE por diseño:** entrega SMTP y recepción de mensajes. Las pruebas
    usan transportes simulados o MIME en memoria, nunca correo real. No se tocaron secretos.

### Repetición de los controles

```sh
npm ci
npm run check
npm run build
npm test
npm run check:seo
npm exec --yes --package=html-validate@11.18.0 -- html-validate 'dist/**/*.html'
python3 scripts/build-metrics.py
node scripts/audit-production.mjs
npm audit
git diff --check
```

El rastreador solo hace GET; `npm audit` sigue fallando por los avisos documentados.
`astro preview` no ejecuta la función de Vercel: las pruebas de `api/contact.js` la llaman
directamente. Un build estático correcto no verifica por sí solo el despliegue serverless.
