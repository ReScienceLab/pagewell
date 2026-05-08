# Repository Guidelines

## Project Structure & Module Organization

Pagewell is a Bun-managed repository for an installable agent skill pack plus a static Astro site. Root source references live in `skills/*.md`, `playbooks/`, `adapters/`, `docs/`, and `schemas/`. The packaged installable skill is generated into `skills/pagewell/`, including `SKILL.md` and `references/`. The marketing/docs site lives in `site/`, with Astro pages in `site/src/pages/`, shared components in `site/src/components/`, helpers in `site/src/lib/`, styles in `site/src/styles/`, and public assets in `site/public/`. Example briefs, products, and design files are under `examples/`.

## Build, Test, and Development Commands

Use Bun 1.3.13 or the version declared in `package.json`.

- `bun run build:skill`: sync root references into `skills/pagewell/references/`.
- `bun run check:skill`: rebuild the skill package and verify `skills add . --list` can discover it.
- `bun run lint:design`: lint root `DESIGN.md` against the Google design.md rules.
- `bun run build:site`: run the Astro production build from `site/`.
- `bun run check:site`: run Astro type/content checks.
- `cd site && bun run dev`: start the local Astro dev server.
- `cd site && bun run preview`: preview the built site.

## Coding Style & Naming Conventions

This repo uses ESM JavaScript/TypeScript and Astro. Prefer two-space indentation, double quotes in TS/JS, explicit exports for shared helpers, and descriptive kebab-case route filenames such as `generate-seo-pages-as-code.astro`. Astro components use PascalCase filenames, for example `SEOHead.astro` and `CTASection.astro`. Keep Markdown source files concise, task-oriented, and path-specific. Do not hand-edit generated packaged references when the root source file should be changed and synced instead.

## Testing Guidelines

There is no dedicated unit test suite currently. Treat `bun run check:site`, `bun run build:site`, `bun run lint:design`, and `bun run check:skill` as the required verification gates for relevant changes. For schema or Pagewell workflow changes, add or update examples in `examples/` when they clarify expected input shape. For site pages, verify generated metadata, schema, and routes build without Astro errors.

## Commit & Pull Request Guidelines

Git history uses short imperative commits, often Conventional Commit style with scopes, for example `docs(marketing): add product marketing context`, `design(site): refine OG image system`, and `chore(release): bump version to 0.2.3`. Prefer `type(scope): summary` when a clear scope exists. Pull requests should describe the user-facing change, list verification commands run, link related issues when available, and include screenshots for visual changes under `site/`. Note any skipped checks with the reason.
