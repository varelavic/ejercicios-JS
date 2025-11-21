import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, '/index.html'),
        ejercicio1: resolve(__dirname, '/ejercicio1.html'),
        ejercicio2: resolve(__dirname, '/ejercicio2.html'),
        ejercicio3: resolve(__dirname, '/ejercicio3.html'),
        ejercicio4: resolve(__dirname, '/ejercicio4.html'),
        ejercicio5: resolve(__dirname, '/ejercicio5.html'),
        ejercicio6: resolve(__dirname, '/ejercicio6.html'),
        ejercicio7: resolve(__dirname, '/ejercicio7.html'),
        ejercicio8: resolve(__dirname, '/ejercicio8.html'),
        ejercicio9: resolve(__dirname, '/ejercicio9.html'),
      }
    }
  }
});
