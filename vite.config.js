import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// Capacitor (Android/iOS) serves assets from the WebView root, not from
// `/english-learning-app/` (which is where GitHub Pages hosts the web build).
// Set VITE_CAPACITOR_BUILD=true when building for `npx cap sync` so the
// emitted HTML uses relative paths that resolve correctly inside the APK.
const isCapacitorBuild = process.env.VITE_CAPACITOR_BUILD === 'true'

export default defineConfig({
  base: isCapacitorBuild ? './' : '/english-learning-app/',
  plugins: [
    vue(),
    // PWA service worker only makes sense for the web build. Skip it on
    // Capacitor — the SW interferes with WebView asset resolution and
    // there's no install-from-browser flow.
    ...(isCapacitorBuild ? [] : [VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'English Practice',
        short_name: 'EnglishPro',
        description: 'Learn English with interactive exercises',
        theme_color: '#6366f1',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })])
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
