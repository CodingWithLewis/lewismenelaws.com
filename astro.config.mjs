import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import mediumPlugin from "./src/plugins/mediumplugin.js";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
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
