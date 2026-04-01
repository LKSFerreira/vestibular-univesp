import { defineConfig } from 'vite';
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
});
