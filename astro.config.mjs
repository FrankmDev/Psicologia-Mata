// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Site configuration
  site: 'https://psicologia-mata.es',
  
  // Build output directory
  outDir: './dist',
  
  // Prefetch configuration for instant navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  
  // Vite configuration
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Enable CSS minification
      cssMinify: true,
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
    }
  },
  
  // Image optimization configuration
  image: {
    // Default service for image optimization
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Limit concurrent image processing
        limitInputPixels: 268402689,
        // Default quality for images
        quality: 80
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
  
  // Experimental features
  experimental: {
    // Client prerender for faster page loads
    clientPrerender: true
  }
});
