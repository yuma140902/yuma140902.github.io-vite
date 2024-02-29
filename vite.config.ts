import vike from 'vike/plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

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
