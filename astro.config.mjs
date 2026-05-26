// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Site configuration
  site: 'https://www.matacalapsicologia.es',

  // Build output directory
  outDir: './dist',

  // Prefetch configuration
  prefetch: false,

  // Integrations
  redirects: {
    '/services': '/servicios',
    '/contact': '/contacto',
  },

  integrations: [sitemap({
    i18n: {
      defaultLocale: 'es',
      locales: {
        es: 'es-ES',
      },
    },
    filter: (page) => {
      const excludedPages = ['/404', '/privacidad/', '/aviso-legal/', '/cookies/'];
      return !excludedPages.some((excludedPage) => page.includes(excludedPage));
    },
  })],

  // Server configuration
  server: {
    port: 4321,
    host: true,
  },

  // Vite configuration
  vite: {
    plugins: [tailwindcss()],
    server: {
      // No forzar puerto específico para evitar conflictos
      strictPort: false,
      // Desactivar overlay de errores HMR que puede causar problemas
      hmr: {
        overlay: false,
      },
    },
    build: {
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      sourcemap: false,
    },
  },

  // Compress HTML output
  compressHTML: true,

  // Experimental features
  experimental: {
    clientPrerender: false
  }
});
