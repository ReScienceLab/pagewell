# SITE_PROFILE.md

Generated: 2026-05-01

## Summary

Framework: Astro
Rendering: static
Routing: file-based routes in `src/pages`
Styling: global CSS in `src/styles/global.css`
Components: reusable `.astro` components in `src/components`
Layouts: `src/layouts`
Content: markdown/content collections in `src/content` if configured
Metadata: layout props and SEO head component
Discovery files: route files in `src/pages` for `robots.txt`, `sitemap.xml`, and `llms.txt`
Deployment: Cloudflare Pages

## Conventions to follow

- Use existing layouts and components.
- Prefer content collections if similar page types already use them.
- Use static generation for SEO pages.
- Keep private pages noindex and out of sitemap.

## Recommended adapter

Use `adapters/astro.md`.
