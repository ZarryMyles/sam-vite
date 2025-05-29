import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inject from '@rollup/plugin-inject'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    react(),
    svgr({
      svgrOptions: { exportType: 'named' },
      include: '**/*.svg',
    }),
  ],
  optimizeDeps: {
    include: ['jquery'],
  },
})
