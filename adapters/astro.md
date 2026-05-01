# Adapter: Astro

Use this adapter when `SITE_PROFILE.md` identifies Astro.

## Detection

Common signs:

- `astro.config.*`
- `src/pages/`
- `.astro` files
- optional `src/content/`

## Page implementation

Prefer the site's existing convention:

1. If content collections exist and similar pages use them, create or update content files.
2. If routes are file-based `.astro` pages, create route files under `src/pages`.
3. If dynamic routes exist, add entries to the existing data/content source.

Examples:

- `/products/requesthunt` → `src/pages/products/requesthunt.astro` or `src/content/products/requesthunt.md`
- `/use-cases/foo` → `src/pages/use-cases/foo.astro` or `src/content/use-cases/foo.md`

## Metadata

Use the existing layout/head component. If absent, create the smallest reusable SEO head component consistent with the repo.

Include:

- title
- description
- canonical
- robots
- Open Graph/Twitter if convention exists
- JSON-LD where supported

## Discovery files

Astro can serve static route files such as:

- `src/pages/robots.txt.ts`
- `src/pages/sitemap.xml.ts`
- `src/pages/llms.txt.ts`

Use existing conventions if present.

## Rules

- Reuse layouts/components.
- Do not introduce a content collection if a simpler existing pattern exists unless the user asks.
- Do not install integrations unless necessary and approved.
