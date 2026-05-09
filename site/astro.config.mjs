import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://pagewell.dev",
  output: "static",
  integrations: [mdx()],
});
