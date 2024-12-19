import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // App is served from the root, not a subpath
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
