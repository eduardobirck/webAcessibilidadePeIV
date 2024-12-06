import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: '../../backend/dist', // Caminho para o build
        emptyOutDir: true             // Apaga builds antigos
    }
});
