import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // Plugins for Vite
  plugins: [react()],
  
  // Optional Esbuild settings (Vite should handle JSX without this)
  esbuild: {
    loader: 'jsx', // Ensures JSX is processed in .js and .jsx files
    include: /\.[jt]sx?$/, // Matches both .js, .jsx, .ts, and .tsx files
    exclude: /node_modules/ // Avoid processing node_modules
  },

  css: {
    postcss: 'postcss.config.js',
  },
  
  // Resolve alias for better import paths
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
