import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Specify tsconfig explicitly
  resolve: {
    conditions: ['development'],
  },
  esbuild: {
    tsconfigRaw: require('./tsconfig.app.json'),
  },
});
