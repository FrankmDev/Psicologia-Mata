// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Site configuration
  site: 'https://psicologia-mata.es',
  
  // Build output directory
  outDir: './dist',
  
  // Prefetch configuration - desactivado para evitar caché en desarrollo
  prefetch: false,
  
  // Vite configuration
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Enable CSS minification
      cssMinify: true,
      // Minify JS for production
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      // Rollup options for better chunking
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate vendor chunks for better caching
            'animations': ['./src/components/RevealAnimation.astro']
          }
        }
      }
    },
    // Optimize deps for faster dev
    optimizeDeps: {
      include: []
    },
    // Enable source maps for debugging (disable in production if needed)
    sourcemap: false
  },
  
  // Image optimization configuration
  image: {
    // Default service for image optimization
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Limit concurrent image processing
        limitInputPixels: 268402689,
        // Default quality for images (lower for better performance)
        quality: 75
      }
    },
    // Remote image patterns for external images
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
  
  // Experimental features - desactivado para evitar caché en desarrollo
  experimental: {
    clientPrerender: false
  }
});
