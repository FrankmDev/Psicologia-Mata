# Analítica y medición de conversión

**Estado:** no hay ninguna herramienta de analítica instalada en el proyecto (revisado el 5 de
noviembre de 2026). No se han añadido trackers: la elección de proveedor y el consentimiento
corresponden a la titular del sitio.

## Qué se puede medir sin datos de salud

Solo eventos de interacción, nunca contenido de formularios ni información clínica:

| Evento | Disparador | Parámetros permitidos |
| --- | --- | --- |
| `contact_phone_click` | clic en `tel:` | `location` (`header`, `hero`, `sticky`, `footer`, `contact`) |
| `contact_whatsapp_click` | clic en `wa.me` | `location` |
| `cta_appointment_click` | clic en CTA hacia `/contacto/` | `location`, `label` |
| `service_click` | clic en una tarjeta de servicio | `service_id` |
| `form_unavailable` | vista del aviso de formulario desactivado | ninguno |

No enviar: nombre, email, teléfono, motivo de consulta, mensaje, URLs con datos personales ni
parámetros de salud.

## Propuesta de implementación cuando haya proveedor

1. Elegir proveedor sin cookies por defecto (por ejemplo Plausible o Fathom) o GA4 con
   Consent Mode y banner previo.
2. Añadir el script una sola vez en `src/layouts/Layout.astro`.
3. Centralizar el helper en `src/lib/analytics.ts`:

   ```ts
   export function track(event: string, params: Record<string, string> = {}) {
     if (typeof window === 'undefined') return;
     const w = window as Window & { plausible?: (e: string, o: { props: Record<string, string> }) => void };
     w.plausible?.(event, { props: params });
   }
   ```

4. Añadir `data-analytics` a los enlaces de `Header`, `MobileStickyCTA`, `Footer`, hero y
   `CTASection`, y un único listener delegado en el layout.
5. Documentar el proveedor, la retención y el consentimiento en `docs/analytics.md` y en la
   política de cookies.

## Limitaciones actuales

- El formulario está desactivado, por lo que no hay eventos de envío que medir.
- Sin Search Console no se pueden atribuir consultas, impresiones ni posiciones.
- No se ha medido LCP/INP real: no hay navegador ni datos de campo disponibles en este entorno.
