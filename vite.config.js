import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // Plugins for Vite
  plugins: [react()],
  
  // Optional Esbuild settings (Vite should handle JSX without this)
  esbuild: {
    loader: 'jsx', // Explicitly tell Vite to treat `.js` files as `.jsx` 
    include: /\.(js|jsx)$/, // Ensure .js and .jsx files are included
    exclude: /node_modules/, // Exclude node_modules folder
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
