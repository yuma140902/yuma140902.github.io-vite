import react from '@vitejs/plugin-react';
import * as child from 'child_process';
import path from 'path';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';

const gitBranch = child.execSync('git branch --show-current').toString().trim();
const gitHash = child.execSync('git rev-parse --short HEAD').toString().trim();
const buildTime = new Date().toISOString().replace(/T/, ' ');

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
  define: {
    __GIT_BRANCH__: JSON.stringify(gitBranch),
    __GIT_HASH__: JSON.stringify(gitHash),
    __BUILD_TIME__: JSON.stringify(buildTime),
  },
});
