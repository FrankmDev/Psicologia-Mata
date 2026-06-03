// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
const SITE = 'https://matacalapsicologia.es';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',

  // Build output directory
  outDir: './dist',

  // Prefetch configuration
  prefetch: false,

  // Integrations
  redirects: {
    '/services': '/servicios',
    '/contact': '/contacto',
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
        },
      },
      filter: (page) => {
        const excluded = [
          '/404',
          '/aviso-legal/',
          '/cookies/',
          '/privacidad/',
        ];
        return !excluded.some((path) => page.includes(path));
      },
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const entry = { ...item };

        if (pathname === '/') {
          return { ...entry, priority: 1, changefreq: 'weekly' };
        }
        if (pathname === '/servicios/' || pathname === '/contacto/') {
          return { ...entry, priority: 0.9, changefreq: 'monthly' };
        }
        if (pathname === '/blog/') {
          return { ...entry, priority: 0.85, changefreq: 'weekly' };
        }
        if (pathname.startsWith('/blog/') && pathname.length > '/blog/'.length) {
          return { ...entry, priority: 0.7, changefreq: 'monthly' };
        }
        return { ...entry, priority: 0.5, changefreq: 'yearly' };
      },
    }),
  ],

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
