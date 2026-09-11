// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { getBlogSitemapEntries, getCategorySitemapEntries } from './src/data/blog.ts';

// https://astro.build/config
const SITE = 'https://matacalapsicologia.com';

const blogSitemapByPath = new Map(
  getBlogSitemapEntries().map((entry) => [entry.path, entry.lastmod]),
);

const categorySitemapByPath = new Map(
  getCategorySitemapEntries().map((entry) => [entry.path, entry.lastmod]),
);

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',

  // Build output directory
  outDir: './dist',

  // Prefetch configuration
  prefetch: false,

  integrations: [
    sitemap({
      filter: (page) => {
        const excluded = [
          '/404',
        ];
        return !excluded.some((path) => page.includes(path));
      },
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const entry = { ...item };

        if (pathname === '/blog/') {
          const featuredLastmod = blogSitemapByPath.get('/blog/cuando-ir-al-psicologo/');
          return featuredLastmod ? { ...entry, lastmod: featuredLastmod } : entry;
        }
        if (pathname.startsWith('/blog/categoria/')) {
          const lastmod = categorySitemapByPath.get(pathname);
          return lastmod ? { ...entry, lastmod } : entry;
        }
        if (pathname.startsWith('/blog/') && pathname.length > '/blog/'.length) {
          const lastmod = blogSitemapByPath.get(pathname);
          return lastmod ? { ...entry, lastmod } : entry;
        }
        return entry;
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
