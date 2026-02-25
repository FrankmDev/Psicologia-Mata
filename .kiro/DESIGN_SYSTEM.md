# Sistema de Diseño Unificado - Psicología Mata

## Espaciado de Secciones

- **Estándar**: `py-32 lg:py-40` (128px/160px)
- **Hero**: `min-h-screen` con padding interno
- **Compacto** (si necesario): `py-24 lg:py-32`

## Tipografía

### Headers de Sección

```
Eyebrow: text-[0.625rem] font-bold tracking-[0.25em] uppercase
H2 Principal: font-serif text-[clamp(2.75rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.04em]
H2 Alternativo: font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em]
Descripción: text-lg text-text-secondary/80 font-light leading-relaxed
```

### Contenido

```
Título Card: font-serif text-2xl lg:text-3xl font-light
Cuerpo: text-[0.9375rem] leading-relaxed font-light
Pequeño: text-sm font-light
```

### CTAs

```
Botón: text-[0.6875rem] font-bold tracking-[0.15em] uppercase
Padding: px-9 py-5 (estándar) | px-8 py-4 (compacto)
```

## Colores y Opacidades

### Fondos

- Primario: `bg-bg-primary`
- Secundario: `bg-bg-secondary`
- Oscuro: `bg-charcoal` o `bg-linear-to-br from-charcoal via-[#1F1F1D] to-charcoal`

### Textos

- Principal: `text-text-primary`
- Secundario: `text-text-secondary/80`
- Terciario: `text-text-tertiary`
- Sobre oscuro: `text-ivory` con opacidades `/60`, `/50`, `/40`

### Bordes

- Sutil: `border-border/60`
- Hover: `border-olive/30`

## Componentes Reutilizables

### Header de Sección (Centrado)

```astro
<div class="flex items-center justify-center gap-4 mb-8">
  <div class="w-12 h-px bg-linear-to-r from-transparent via-olive/40 to-transparent"></div>
  <span class="text-[0.625rem] font-bold tracking-[0.25em] uppercase text-olive">Label</span>
  <div class="w-12 h-px bg-linear-to-r from-transparent via-olive/40 to-transparent"></div>
</div>
<h2 class="font-serif text-[clamp(2.75rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.04em] text-text-primary mb-8">
  Título<br/>
  <span class="italic text-olive font-light mt-2">destacado</span>
</h2>
<p class="text-lg text-text-secondary/80 font-light leading-relaxed max-w-2xl mx-auto">
  Descripción
</p>
```

### Header de Sección (Izquierda)

```astro
<div class="flex items-center gap-4 mb-8">
  <div class="w-16 h-px bg-linear-to-r from-olive/40 to-transparent"></div>
  <span class="text-[0.625rem] font-bold tracking-[0.25em] uppercase text-olive">Label</span>
</div>
<h2 class="font-serif text-[clamp(2.75rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.04em] text-text-primary mb-10">
  <span class="block font-light">Título</span>
  <span class="block italic text-olive font-light mt-2">destacado</span>
</h2>
```

### CTA Primario

```astro
<a href="/contact" class="inline-flex items-center gap-3 px-9 py-5 bg-charcoal text-ivory rounded-full text-[0.6875rem] font-bold tracking-[0.15em] uppercase transition-all duration-700 hover:shadow-2xl hover:shadow-charcoal/40 hover:scale-[1.03] hover:-translate-y-0.5 group">
  <span>Texto</span>
  <svg class="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3" />
  </svg>
</a>
```

### CTA Secundario

```astro
<a href="/services" class="inline-flex items-center gap-3 px-9 py-5 bg-transparent text-charcoal border-2 border-border/80 rounded-full text-[0.6875rem] font-bold tracking-[0.15em] uppercase transition-all duration-700 hover:border-charcoal hover:bg-charcoal hover:text-ivory hover:scale-[1.03] hover:shadow-xl group">
  <span>Texto</span>
  <svg class="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3" />
  </svg>
</a>
```

## Animaciones

- Duración estándar: `duration-700`
- Duración larga: `duration-1000` o `duration-1600`
- Hover translate: `hover:-translate-y-1` o `hover:-translate-y-0.5`
- Hover scale: `hover:scale-[1.03]` o `hover:scale-110`

## Fondos Decorativos

```astro
<div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
  <div class="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-[60%_40%_30%_70%/40%_60%_70%_30%] bg-linear-to-br from-olive/4 to-transparent blur-[130px] animate-float" style="animation-duration: 28s;"></div>
  <div class="absolute bottom-1/4 left-0 w-[450px] h-[450px] rounded-[40%_60%_70%_30%/60%_30%_70%_40%] bg-linear-to-tr from-warm/3 to-transparent blur-[120px] animate-float" style="animation-duration: 32s; animation-delay: -12s;"></div>
</div>
```
