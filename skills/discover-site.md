# Skill: Discover Site

## Purpose

Create or update `SITE_PROFILE.md`, a concise description of how the current website repo is built.

All other Sitewright skills must read `SITE_PROFILE.md` before making changes. If it does not exist, run this skill first.

## Inputs

- Current repository files.
- Build/deploy config if present.
- Existing routes, layouts, components, content, metadata, and discovery files.

## Files/directories to inspect

Inspect what exists; do not assume all files exist.

- `package.json`
- `astro.config.*`
- `next.config.*`
- `remix.config.*`
- `svelte.config.*`
- `vite.config.*`
- `wrangler.toml`
- `worker.js`, `src/worker.*`, `functions/`
- `src/pages/`, `src/app/`, `app/`, `pages/`, `routes/`
- `src/content/`, `content/`, `data/`, `src/data/`
- `src/components/`, `components/`
- `src/layouts/`, `layouts/`
- `public/`, `static/`
- existing `robots.txt`, `sitemap.xml`, `llms.txt`
- deployment configs: Cloudflare Pages, Vercel, Netlify, GitHub Actions

## Detection hints

- Astro: `astro.config.*`, `src/pages`, `.astro` files.
- Next.js App Router: `next.config.*`, `app/**/page.*`.
- Next.js Pages Router: `pages/*.tsx`, `pages/_app.*`.
- Cloudflare Worker: `wrangler.toml`, `worker.js`, `export default { fetch(...) }`.
- Vite SPA/static: `vite.config.*`, `index.html`, `src/main.*`.
- Plain static: route folders with `index.html` and no framework config.
- Custom: infer from routing/build scripts and existing file patterns.

## Output

Create or update `SITE_PROFILE.md` at the repo root.

Use this structure:

```md
# SITE_PROFILE.md

Generated: YYYY-MM-DD

## Summary

Framework: <Astro | Next.js App Router | Next.js Pages Router | Cloudflare Worker | Static HTML | Custom | Unknown>
Rendering: <static | SSR | edge worker | SPA | mixed>
Routing: <where routes live and how new routes are added>
Styling: <global CSS, Tailwind, CSS modules, inline CSS, etc.>
Components: <where reusable components live, or none>
Layouts: <where layouts live, or none>
Content: <content collections, markdown, data files, inline JS objects, or none>
Metadata: <how title/meta/canonical/schema are handled>
Discovery files: <robots/sitemap/llms status>
Deployment: <Cloudflare Pages, Workers, Vercel, etc. if known>

## Conventions to follow

- <route naming convention>
- <component naming convention>
- <metadata convention>
- <content/frontmatter convention>
- <style/design convention>

## Recommended adapter

Use `adapters/<adapter>.md` from Sitewright.

## Known gaps

- <missing sitemap, no llms.txt, giant inline HTML, etc.>

## Safe implementation strategy

- <smallest safe way to add new generated pages>
```

## Rules

- Do not modify site behavior except creating/updating `SITE_PROFILE.md`.
- Do not install packages.
- Do not migrate frameworks.
- Be factual and specific.
- If uncertain, write `Unknown` and describe how to verify.
