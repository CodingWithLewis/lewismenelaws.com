import {defineConfig} from "astro/config";

import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mediumPlugin from "./src/plugins/mediumplugin.js";
export default defineConfig({
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  markdown: {
    drafts: true,
    shikiConfig: { theme: "css-variables" },
    remarkPlugins: [mediumPlugin],
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },
  site: "https://lewismenelaws.com",
  integrations: [preact(), tailwind(), sitemap()],
});
