import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@dominio': path.resolve(__dirname, 'src/dominio'),
      '@componentes': path.resolve(__dirname, 'src/componentes'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@paginas': path.resolve(__dirname, 'src/paginas'),
      '@conteudo': path.resolve(__dirname, 'src/conteudo'),
      '@infraestrutura': path.resolve(__dirname, 'src/infraestrutura'),
      '@estilos': path.resolve(__dirname, 'src/estilos'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/testes/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      include: ['src/dominio/**'],
      thresholds: {
        statements: 70,
        branches: 70,
        functions: 70,
        lines: 70,
      },
    },
  },
});
