/// <reference types="vitest" />
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

// Get the directory path for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: './',
  build: {
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'electron-trpc',
      formats: ['es', 'cjs'],
      fileName: (format) => ({ es: 'main.mjs', cjs: 'main.cjs' })[format as 'es' | 'cjs'],
    },
    outDir: path.resolve(__dirname, '../../dist'),
    rollupOptions: {
      external: ['electron'],
    },
  },
  esbuild: {
    target: 'es2020',
    supported: {
      'bigint': true
    },
  },
  optimizeDeps: {
    include: ['@trpc/client', '@trpc/server']
  }
});
