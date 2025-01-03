import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development';

  return {
    plugins: [react()],
    server: {
      proxy: isDevelopment
        ? {
            '/api': {
              target: 'http://localhost:5000', // API server for development
              changeOrigin: true,
            },
          }
        : {
            '/api': {
              target:  "https://hassan-store-server-v-0.vercel.app", // API server for production
              changeOrigin: true,
            },
          },
    },
  };
});
