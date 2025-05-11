// frontend/vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: '../app/static/dist', // Output folder for Django static files
    emptyOutDir: true,
    rollupOptions: {
      input: './src/main.js', // Your app entry file
      output: {
        entryFileNames: 'assets/index.js',         // predictable filename
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  server: {
    proxy: {
      '/static': 'http://127.0.0.1:8000', // Allow serving Django static via dev server
    },
  },
});
