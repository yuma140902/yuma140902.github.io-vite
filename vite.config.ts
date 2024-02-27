import vike from 'vike/plugin';
import react from '@vitejs/plugin-react';
import YAMLPlugin from 'unplugin-yaml/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [react({}), vike({ prerender: true }), YAMLPlugin({})],
});
