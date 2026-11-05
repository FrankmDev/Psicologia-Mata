# Design

Sistema visual de Psicología Mata. Deriva de los tokens reales de `src/styles/global.css`.
No sustituye al código: si hay conflicto, manda el token.

## Theme

Editorial cálido, luminoso, con mucho aire. Fondo papel (`alabaster`), tinta casi negra y
verde musgo como color de marca. Terracota solo como acento puntual. La fotografía se trata
con desaturación y mezcla suave para integrarse en el papel.

## Color

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-alabaster` | `#F7F5F0` | Fondo base |
| `--color-cream` | `#EBE5DB` | Secciones alternas, inputs |
| `--color-stone` | `#D4CDBC` | Detalles y selección |
| `--color-olive` | `#5E6759` | Marca, enlaces, precios, CTA |
| `--color-olive-dark` | `#3F473A` | Hover y texto sobre fondos claros |
| `--color-ink` | `#1B1E19` | Títulos y fondos oscuros |
| `--color-charcoal` | `#2A2E28` | Cuerpo de texto |
| `--color-taupe` | `#68655F` | Texto secundario sobre claro |
| `--color-taupe-light` | `#A8A39C` | Texto secundario sobre oscuro |
| `--color-terracotta` | `#8A5143` | Acento y errores |
| `--color-terracotta-light` | `#D9B3A7` | Acento sobre fondo oscuro |

Reglas:

- Todo texto de cuerpo cumple 4.5:1. El placeholder también.
- Sobre fondo oscuro usar `alabaster` o `taupe-light`, nunca gris neutro.
- No introducir morados, azules corporativos ni degradados de texto.

## Typography

- Display y títulos: **Cormorant Garamond** 300/400 (+ itálicas). Tracking entre `-0.02em` y `-0.015em`.
- UI y cuerpo: **Manrope** 300/400/500/600.
- Escala: `text-label-xs` 11–12 px, `text-body-sm` 15–16 px, `text-body` 16–18 px, `text-lead` 17–20 px,
  `title-section` 28–48 px, hero 56–88 px.
- Cuerpo limitado a 65–75 caracteres (`max-w-2xl`/`max-w-3xl`).
- `text-wrap: balance` en titulares y `pretty` en prosa larga.
- Los titulares pueden ser grandes, pero nunca a costa de desbordar en móvil.

## Spacing & Layout

- Contenedor: `container-editorial`, máx. 1280 px, padding fluido `clamp(1rem, 4vw, 4rem)`.
- Secciones: `section` con `clamp(4rem, 8vw, 8rem)` vertical.
- Rejilla de 12 columnas en escritorio; una columna en móvil.
- Alternar `alabaster` y `cream`; el oscuro (`ink`/`charcoal`) se reserva para proceso y CTA final.
- No anidar tarjetas. Radios de tarjeta 12–16 px; botones en píldora.

## Components

- **Button**: `.btn` + `btn-sage` / `btn-outline`; mayúsculas, tracking amplio, altura mínima 44 px.
- **Label**: `.label-section` con línea corta; no repetir en cada bloque sin motivo.
- **Card**: borde 1 px `border-delicate`, sin sombra por defecto; hover con borde y elevación de 2 px.
- **FAQ**: `<details>` nativo, summary con icono +, sin JS.
- **Media**: `astro:assets`, `width` + `sizes`, `webp`, calidad 82–85.
- **Form**: inputs sobre `cream`, borde delicado, foco `olive`; errores `terracotta` y `aria-describedby`.
- **CTA móvil fijo**: 3 acciones (llamar, WhatsApp, cita), 52 px de alto, `safe-area-inset`.

## Motion

- Entradas con `data-reveal`: opacidad + `translateY(30px)`, 1 s, `cubic-bezier(0.16, 1, 0.3, 1)`.
- Hover: 300–500 ms; sin rebotes ni elásticos.
- `prefers-reduced-motion` desactiva todo y deja el contenido visible.
- Nunca ocultar contenido esencial esperando una animación.

## Voice

Frases cortas, segunda persona, verbos concretos. Sin "transforma tu vida", "seamless" ni
promesas de curación. Se explican límites clínicos y precios con naturalidad.

## Don't

- No `border-left` grueso como acento decorativo en tarjetas o avisos.
- No degradados de texto, glassmorphism decorativo ni tarjetas idénticas repetidas.
- No más de 3 familias tipográficas.
- No animaciones en bucle salvo el fondo `aurora`, que se detiene con reduced motion.
- No formularios que simulen éxito si el endpoint está desactivado.
