// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  redirects: {
    "/deploys/": "/monitor/",
    "/services/": "/monitor/",
    "/works/forks/": "/monitor/",
    "/webtools/": "/apps/",
  },
});
