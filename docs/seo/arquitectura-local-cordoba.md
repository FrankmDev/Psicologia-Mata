# Arquitectura SEO local: Córdoba

**Preparado:** 5 de noviembre de 2026  
**Ámbito:** seis páginas de servicio y seis contenidos prioritarios (cinco borradores nuevos y una URL existente ampliada).

## Criterio y límites de la investigación

No hay datos de Google Search Console disponibles para este trabajo. Por tanto, las prioridades que siguen son cualitativas y se basan en el encaje con los servicios publicados, la intención de búsqueda aparente y una revisión competitiva limitada. No se atribuyen volúmenes, posiciones, tráfico ni dificultad numérica a ninguna consulta.

La muestra competitiva consultada el 5 de noviembre de 2026 se limita a páginas relacionadas con neuropsicología y estimulación cognitiva en Córdoba:

- [Ítaca Psicología — Neuropsicología en adultos](https://itacapsicologia.es/neuropsicologia-adultos)
- [Centro Salud Mental CSM — Estimulación cognitiva en Córdoba](https://centrosaludmental.com/servicios/estimulacion-cognitiva-cordoba)

Es una referencia temática, no un censo de competidores ni una comparación de posiciones. Para verificar colegiación se enlaza al [directorio del COPAO](https://www.copao.com/).

## Páginas de servicio y grupos de intención

| Grupo | Consulta principal y variantes | Intención | URL objetivo | Enlaces de apoyo |
|---|---|---|---|---|
| Terapia individual local | psicóloga en Córdoba; terapia individual Córdoba; psicóloga online | Comercial local / comparar opciones | `/servicios/terapia-individual/` | `/servicios/`, `/blog/cuando-ir-al-psicologo/`, `/blog/beneficios-terapia-individual/` |
| Ansiedad | psicóloga para ansiedad en Córdoba; terapia para ansiedad Córdoba | Comercial local, con necesidad informativa previa | `/servicios/ansiedad-cordoba/` | `/blog/ansiedad-persistente-tratamiento-psicologico/`, `/blog/gestion-ansiedad/`, terapia individual |
| Pareja | terapia de pareja Córdoba; psicóloga de pareja; terapia de pareja online | Comercial local / evaluación de encaje | `/servicios/terapia-pareja-cordoba/` | `/blog/terapia-de-pareja-cuando-empezar/`, `/blog/comunicacion-pareja/` |
| Personas mayores | psicología para personas mayores Córdoba; psicóloga geriátrica Córdoba | Comercial local / orientación familiar | `/servicios/psicologia-personas-mayores/` | Evaluación, estimulación cognitiva y contenidos de memoria cuando reciban aprobación |
| Estimulación cognitiva | estimulación cognitiva a domicilio Córdoba; estimulación cognitiva personas mayores | Comercial local / conocer modalidad y alcance | `/servicios/estimulacion-cognitiva/` | Evaluación neuropsicológica y artículo de estimulación a domicilio, tras aprobación |
| Evaluación | evaluación neuropsicológica Córdoba; evaluación de memoria y atención | Comercial local / informarse antes de consultar | `/servicios/evaluacion-neuropsicologica/` | Artículo sobre evaluación y contenidos de cambios de memoria, tras aprobación |

Las páginas nuevas tienen `noindex` y aviso de revisión profesional. No incorporarlas al índice ni al sitemap hasta que María Ángeles Mata Cala revise y apruebe el contenido. Antes de indexarlas, comprobar otra vez tarifas, duración, modalidades, límites clínicos, datos estructurados y enlaces.

## Contenidos prioritarios

| Prioridad | Consulta / cluster | Intención | URL | Estado y enlaces internos previstos |
|---|---|---|---|---|
| 1 | evaluación neuropsicológica: cuándo consultar, qué evalúa y cómo funciona | Informativa con siguiente paso comercial | `/blog/evaluacion-neuropsicologica-cuando-consultar/` | Borrador `pending`; enlazar a evaluación y personas mayores tras aprobación |
| 2 | estimulación cognitiva a domicilio: para quién, proceso y precio | Informativa / valorar servicio | `/blog/estimulacion-cognitiva-domicilio/` | Borrador `pending`; enlazar a estimulación y evaluación tras aprobación |
| 3 | mi madre o mi padre olvida cosas: qué observar y cuándo consultar | Informativa para familiares | `/blog/mi-madre-padre-olvida-cosas-que-hacer/` | Borrador `pending`; enlazar a evaluación y personas mayores tras aprobación |
| 4 | olvidos normales con la edad y señales para consultar | Informativa / orientación | `/blog/olvidos-normales-edad-senales/` | Borrador `pending`; enlazar a evaluación y estimulación tras aprobación |
| 5 | precio de psicólogo en Córdoba; tarifas y duración por servicio | Comercial / comparar precio | `/blog/precio-psicologo-cordoba-cuanto-cuesta/` | Borrador `pending`; verificar tarifas al aprobar y enlazar a `/servicios/#tarifas` |
| 6 | cuándo ir al psicólogo; cómo elegir psicóloga en Córdoba; primera sesión | Informativa con intención local | `/blog/cuando-ir-al-psicologo/` | URL existente ampliada; mantener su canonical y reforzar enlaces a `/servicios/` y `/contacto/` |

Los cinco artículos nuevos no se deben mostrar en el índice ni en el sitemap mientras estén pendientes. Las rutas de revisión llevan `noindex, follow` y schema `WebPage`, sin atribuir autoría ni declarar fechas de publicación. Solo al aprobarse se emite `BlogPosting` con autoría y fechas. La versión final de todo contenido clínico requiere revisión profesional.

`noindex` no es un control de acceso: estas rutas se generan en el build y pueden visitarse si se despliegan. No deben contener datos privados.

## Enlazado interno y conversión

- Mantener `/servicios/` como índice comercial y conservar sus anchors actuales, incluido `#tarifas`.
- Conectar inicio, navegación y pie de página con el índice de servicios; usar páginas específicas como destino cuando el servicio encaje con el texto del enlace.
- Desde cada artículo, enlazar a una página de servicio pertinente y a una guía complementaria; no crear URLs nuevas para consultas que ya cubre un artículo existente.
- Evitar enlaces a borradores desde módulos editoriales públicos antes de su aprobación.
- Mantener los CTA conectados a canales operativos. El formulario de contacto permanece deshabilitado; no prometer envío mediante ese formulario.

## Fuentes clínicas para revisión editorial

Los borradores incluyen referencias enlazadas a guías y recursos institucionales, entre ellos NICE NG97, National Institute on Aging, Alzheimer's Association y OMS. Deben revisarse en contexto clínico antes de aprobar cada artículo. Estas referencias no sustituyen la revisión de la profesional ni justifican promesas de diagnóstico, prevención o resultado.

## Comprobación antes de publicar

1. Aprobar cada página y artículo con la profesional; confirmar que el servicio, el alcance y las tarifas coinciden con la oferta vigente.
2. Cambiar el estado editorial y retirar el `noindex` solo para contenido aprobado.
3. Incluir únicamente URLs aprobadas en el sitemap y revisar canonical, robots, títulos, descripciones, autoría y datos estructurados en el HTML generado.
4. Comprobar todos los enlaces internos, los canales de contacto y las imágenes/licencias de uso. Las licencias de los recursos gráficos existentes siguen pendientes de verificación.
5. Revisar rendimiento real en Search Console cuando haya acceso; no inferir demanda ni resultados a partir de esta planificación.

## Comprobaciones técnicas repetibles

```sh
npm run build
npm run check:seo
npm test
```

`check:seo` usa Python 3 sin paquetes externos para revisar el HTML, enlaces internos, referencias accesibles, metadatos y sitemap generados. Los tests de Node verifican el endpoint deshabilitado y los mensajes de contacto con un DOM mínimo simulado, sin navegador ni envíos reales. Consulta [la revisión técnica](./revision-tecnica.md) para el alcance y las mediciones.
