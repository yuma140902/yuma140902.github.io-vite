import react from '@vitejs/plugin-react';
import path from 'path';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [
    react({}),
    vike({
      prerender: true,
      redirects: {
        '/webtools/csv2tex.html': 'http://old.yuma14.net/webtools/csv2tex.html',
        '/webtools/diff.html': 'http://old.yuma14.net/webtools/diff.html',
        '/webtools/sort.html': 'http://old.yuma14.net/webtools/sort.html',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
