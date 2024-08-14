import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";
import remarkMermaid from "remark-mermaidjs";

// https://astro.build/config
export default defineConfig({
  site: "https://heyjaywilson.com",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkMermaid],
  },
});
