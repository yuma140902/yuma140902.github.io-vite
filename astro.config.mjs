// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import rehypeTextAutospace from "rehype-text-autospace";
import rehypeSlug from "rehype-slug";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://yuma14.net",
  integrations: [icon(), sitemap(), react(), mdx()],
  redirects: {
    "/deploys/": "/monitor/",
    "/services/": "/monitor/",
    "/works/forks/": "/monitor/",
    "/webtools/": "/apps/",
    "/webtools/sort.html": "/apps/sort/",
    "/webtools/diff.html": "https://old.yuma14.net/webtools/diff.html",
    "/webtools/csv2tex.html": "/apps/table/",
  },
  markdown: {
    shikiConfig: {
      theme: "one-light",
      wrap: true,
    },
    syntaxHighlight: "shiki",
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeTextAutospace, rehypeKatex, rehypeSlug],
  },
});
