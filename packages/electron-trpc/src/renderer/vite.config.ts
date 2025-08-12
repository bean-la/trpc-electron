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
    // Importantly, `main` build runs first and empties the out dir
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'electron-trpc',
      formats: ['es', 'cjs'],
      fileName: (format) => ({ es: 'renderer.mjs', cjs: 'renderer.cjs' })[format as 'es' | 'cjs'],
    },
    outDir: path.resolve(__dirname, '../../dist'),
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
