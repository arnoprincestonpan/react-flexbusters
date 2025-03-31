import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ''); // Load env variables
  return {
    plugins: [react()],
    define: {
      'process.env.REACT_APP_API_KEY': JSON.stringify(env.REACT_APP_API_KEY), // Define API key
    },
  };
});