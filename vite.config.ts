import react from '@vitejs/plugin-react';
import path from 'path';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [react({}), vike({ prerender: true })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
