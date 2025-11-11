import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    // REMOVED: catchMalformedUri() — it was commented out but still called
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.png', 'vite.svg'],
      manifest: {
        short_name: 'My React App',
        name: 'My React Progressive Web App',
        icons: [
          {
            src: 'icon.png',
            type: 'image/png',
            sizes: '192x192'
          },
          {
            src: 'icon.png',
            type: 'image/png',
            sizes: '512x512'
          }
        ],
        start_url: '.',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff'
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
 server: {
  host: true,        // This exposes to network
  port: 5173,
  strictPort: true,
  hmr: {
    overlay: true
  }
},
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})