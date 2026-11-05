// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { blogPosts, blogPostsList, getBlogSitemapEntries, getCategorySitemapEntries, getIndexableCategoryPaths, getLatestPostModifiedDate } from './src/data/blog.ts';
import { PENDING_SERVICE_PATHS } from './src/data/serviceLandings.ts';

// https://astro.build/config
const SITE = 'https://matacalapsicologia.es';

const blogSitemapByPath = new Map(
  getBlogSitemapEntries().map((entry) => [entry.path, entry.lastmod]),
);

const categorySitemapByPath = new Map(
  getCategorySitemapEntries().map((entry) => [entry.path, entry.lastmod]),
);

const pendingEditorialPaths = new Set([
  ...PENDING_SERVICE_PATHS,
  ...Object.values(blogPosts)
    .filter((post) => post.reviewStatus === 'pending')
    .map((post) => `/blog/${post.slug}/`),
]);

/** Categorías con un solo artículo: navegables, pero no indexables ni en sitemap. */
const indexableCategoryPaths = new Set(getIndexableCategoryPaths());

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
        const pathname = new URL(page).pathname;
        const isNotFoundPage = pathname === '/404' || pathname === '/404/';
        const isThinCategory =
          pathname.startsWith('/blog/categoria/') && !indexableCategoryPaths.has(pathname);
        return !isNotFoundPage && !pendingEditorialPaths.has(pathname) && !isThinCategory;
      },
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const entry = { ...item };

        if (pathname === '/blog/') {
          const lastmod = getLatestPostModifiedDate(blogPostsList);
          return lastmod ? { ...entry, lastmod } : entry;
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
    host: true,
  },

  // Vite configuration
  vite: {
    plugins: [tailwindcss()],
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
