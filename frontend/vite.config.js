// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),

    // ✨ Auto-import functions and config
    AutoImport({
      imports: [
        'vue',         // ref, reactive, computed, watch, etc.
        'vue-router',  // useRoute, useRouter, etc. (optional if using vue-router)
      ],
      dirs: [
        'src/mixins', // your custom composables
        'src/config',      // config files like axios, constants, etc.
      ],
      dts: 'src/auto-imports.d.ts', // generates types automatically
    }),

    // ✨ Auto-import components
    Components({
      dirs: [
        'src/components',
        'src/pages',
        'src/templates'
      ], // your components folder
      extensions: ['vue'],
      deep: true,
      dts: 'src/components.d.ts', // generates types automatically
    }),
  ],

  // 🛡️ Optional: Setup server CORS if needed
  server: {
    cors: true,
  }
})
