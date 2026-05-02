import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://pagewell.dev",
  output: "static",
  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),
});