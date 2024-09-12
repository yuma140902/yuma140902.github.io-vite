// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://yuma14.net",
  integrations: [icon(), sitemap(), react()],
  redirects: {
    "/deploys/": "/monitor/",
    "/services/": "/monitor/",
    "/works/forks/": "/monitor/",
    "/webtools/": "/apps/",
    "/webtools/sort.html": "https://old.yuma14.net/webtools/sort.html",
    "/webtools/diff.html": "https://old.yuma14.net/webtools/diff.html",
    "/webtools/csv2tex.html": "https://old.yuma14.net/webtools/csv2tex.html",
  },
  markdown: {
    shikiConfig: {
      theme: "one-light",
      wrap: true,
    },
    syntaxHighlight: "shiki",
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
