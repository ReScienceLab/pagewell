import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://pagewell.dev",
  output: "static",
  integrations: [
    mdx(),
    sitemap({
      customPages: ["https://pagewell.dev/pricing.md", "https://pagewell.dev/llms.txt", "https://pagewell.dev/llms-full.txt"],
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return !pathname.startsWith("/private/") && !pathname.startsWith("/og/");
      },
    }),
  ],
});
