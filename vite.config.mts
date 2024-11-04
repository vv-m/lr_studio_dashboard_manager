import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/lr_studio_dashboard_manager/',
  plugins: [react()],
  resolve: {
    alias: {
      App: '/src/App',
      pages: '/src/pages',
      static: '/src/static',
      store: '/src/store',
      shared: '/src/shared',
      styles: '/src/styles',
      assets: '/src/assets',
    },
  },
  server: {
    port: 5137,
    host: 'localhost',
    open: 'http://localhost:5137',
  },
  preview: {
    port: 5137,
  },
});
