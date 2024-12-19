import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/social-website-final/', // Ensure this matches the deployment subdirectory on Render
  build: {
    outDir: 'dist', // Correct output directory for build
    assetsDir: 'assets', // Ensure assets are stored in a dedicated folder
  },
});
