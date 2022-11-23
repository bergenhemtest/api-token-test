import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/\.jsx?$/]
    },
    deps: {
      inline: [/solid-js/, /testing-library/]
    } 
  },
  resolve: {
    conditions: ['development', 'browser']
  }
});
