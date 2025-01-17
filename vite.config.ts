import path from 'path';
import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import { defineConfig as defineVitestConfig } from 'vitest/config';

import react from '@vitejs/plugin-react';

const viteConfig = defineViteConfig({
  plugins: [react(), svgr()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./__tests__/setup.ts'],
  },
});

export default mergeConfig(viteConfig, vitestConfig);
