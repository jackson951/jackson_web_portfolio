import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/jackson_web_portfolio/', // For GitHub Pages deployment in subdirectory
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'styled-components']
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true
  }
})
