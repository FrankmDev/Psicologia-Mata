# Revisión técnica SEO y contacto

**Fecha:** 5 de noviembre de 2026. Revisión local del build estático, sin despliegue, navegador ni capturas.

> Registro de una revisión anterior. El estado actual, las nuevas herramientas y los
> resultados posteriores están en [auditoria-final.md](../auditoria-final.md).

## Hallazgos y correcciones

| Hallazgo comprobado | Corrección |
|---|---|
| `lastmod` de «Cuándo ir al psicólogo» seguía indicando agosto, aunque su actualización visible era de noviembre. | Usar `modifiedDate` cuando existe; calcular la fecha del blog y las categorías con la última modificación de sus artículos publicados. |
| Seis secciones referenciaban IDs inexistentes. Las categorías y «Sobre mí» etiquetaban la cabecera con un encabezado de otra sección. | Añadir un ID opcional a `PageHeader` y conectar cada sección con su H1, sin eliminar anchors de contenido existentes. |
| Los cinco borradores atribuían autoría profesional y emitían `BlogPosting` antes de aprobarse. | Emitir `WebPage`, omitir autoría en metadatos y marcar la revisión pendiente junto al perfil profesional. Mantener `noindex`. |
| Un borrador con índice `-1` recibía el primer artículo publicado como «anterior»; también duplicaba «Blog» en breadcrumbs. | No asignar navegación anterior/siguiente fuera del listado publicado y eliminar el destino duplicado. |
| Las 14 cabeceras de artículos tenían imagen `loading="lazy"`. | Usar carga `eager` y prioridad `high` para la imagen inicial; conservar imágenes secundarias diferidas. |
| El formulario deshabilitado seguía sirviendo el código de validación y envío. | Emitir ese código solo cuando se habilite el formulario; conservar un manejador pequeño para mensajes de retorno. |
| El retorno `contacto=deshabilitado` no mostraba aviso y `contacto=enviado` podía mostrar éxito con el formulario cerrado. | Manejar explícitamente el estado deshabilitado y conservar el resto de parámetros al limpiar el resultado. |
| Algunos servicios mostraban una lista de lecturas vacía después de filtrar borradores. | Ocultar el bloque vacío y admitir únicamente artículos existentes que no estén pendientes. |
| Tres categorías con un solo artículo duplicaban el contenido del artículo y competían con él. | Mantenerlas navegables, pero con `noindex, follow` y fuera del sitemap. |
| Varios textos auxiliares no alcanzaban 4.5:1 (`taupe`, `terracotta`, `charcoal/50-60`). | Oscurecer los tokens y subir la opacidad mínima del texto secundario; el placeholder también cumple AA. |
| El CTA móvil fijo no ofrecía WhatsApp y podía quedar pegado al indicador inferior. | Tres acciones (llamar, WhatsApp, cita), altura mínima de 52 px y `padding-bottom` con `safe-area-inset`. |
| Se servían 3 pesos de fuente sin uso y tres imágenes de blog a `quality=100`. | Retirar pesos no usados y bajar las imágenes a `quality=82`. |
| El icono `chatBubble` contenía una ruta SVG corrupta de ~37 KB. | Sustituirla por una ruta válida y corta. |

## Comparación con el mismo build y comprobaciones

- Páginas generadas: **35**, antes y después; sitemap: **20 URLs** (se excluyen las tres
  categorías con un solo artículo, que siguen navegables con `noindex, follow`). No se añadieron rutas.
- JavaScript inline de `/contacto/`, excluido JSON-LD: **9.754 → 5.815 bytes**, **3.939 bytes menos (40,4%)**. Se mide el código servido, sin compresión; no es una medición de LCP, INP ni velocidad real.
- `npm run check:seo`: pasa en las 35 páginas, 20 URLs de sitemap y 14 cabeceras. Comprueba enlaces/anchors internos, IDs y referencias ARIA, canonical, imágenes sociales locales, schema JSON, fechas y protección editorial.
- `npm test`: **7 tests pasan**, incluidos rechazo del API antes de leer datos, mensajes de retorno con DOM simulado y sincronía de los dos flags del formulario.
- `npm run build` y `git diff --check`: correctos.

## Límites y pendientes

- No hay métricas de Search Console ni mediciones de navegador; no se afirman mejoras de ranking ni Core Web Vitals.
- `astro check` requiere `@astrojs/check` y TypeScript, ausentes del proyecto; no se instalaron dependencias.
- Los cinco borradores y seis páginas de servicio siguen pendientes de aprobación clínica y excluidos del sitemap. `noindex` no restringe el acceso por URL.
- Revisar licencias de las imágenes y validar la versión clínica definitiva antes de publicar.
