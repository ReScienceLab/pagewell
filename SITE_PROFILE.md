# SITE_PROFILE.md

Generated: 2026-05-01

## Summary

Framework: Astro
Rendering: static
Site root: `/site`
Routing: file-based routes in `/site/src/pages`
Styling: global CSS variables and reusable classes in `/site/src/styles/global.css`
Fonts: self-hosted Fontsource packages for Geist Variable, Inter Variable, and Geist Mono Variable
Components: reusable `.astro` components in `/site/src/components`
Layouts: `/site/src/layouts`
Content collections: `/site/src/content` configured by `/site/src/content.config.ts`
Metadata: layout props rendered through `/site/src/components/SEOHead.astro`
Design source: `/DESIGN.md`
Discovery files: static files in `/site/public` and generated Astro sitemap output
Deployment: Cloudflare Pages or Vercel
Recommended adapter: `adapters/astro.md`

## Commands

Dev command: `cd site && bun run dev`
Build command: `cd site && bun run build`
Check command: `cd site && bun run check`
Preview command: `cd site && bun run preview`

## Conventions to follow

- Use Bun for all package installation, scripts, and local commands. Do not use npm, pnpm, or yarn.
- Keep the Astro app framework-light: no React, Svelte, Vue, or Tailwind unless explicitly requested.
- Use static generation for public SEO/GEO pages.
- Use `DESIGN.md` as the visual source of truth.
- Add reusable UI in `/site/src/components` before duplicating page markup.
- Add future docs, use cases, alternatives, glossary, FAQ, free tools, and examples as content collections.
- Every public page should support `title`, `description`, `canonical`, `ogImage`, `noindex`, and `jsonLd`.
- Keep private ABM pages `noindex` and out of sitemap/discovery files.
