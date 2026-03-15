// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Site configuration
  site: 'https://psicologia-mata.es',
  
  // Build output directory
  outDir: './dist',
  
  // Prefetch configuration
  prefetch: false,

  // Server configuration
  server: {
    port: 4321,
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
  
  // Image optimization configuration
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: 268402689,
        quality: 75
      }
    },
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**'
      }
    ]
  },
  
  // Compress HTML output
  compressHTML: true,
  
  // Experimental features
  experimental: {
    clientPrerender: false
  }
});
