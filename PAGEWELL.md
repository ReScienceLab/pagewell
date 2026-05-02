# PAGEWELL.md

Generated: 2026-05-02
Last reviewed: 2026-05-02

PAGEWELL.md is the Pagewell source of truth for this repo. Use it with `DESIGN.md` before planning, generating, QAing, or maintaining pages.

- `DESIGN.md` remains the visual identity contract and must not be duplicated here.
- `PAGEWELL.md` captures product facts, claim rules, site implementation, route taxonomy, reusable page patterns, and Pagewell-specific generation rules.

## Product facts

### Product

- Name: Pagewell
- URL: https://pagewell.dev
- Category: Repo-native page-generation skill pack for coding agents
- One-sentence description: Pagewell is a framework-agnostic skill pack that helps coding agents generate, QA, and maintain SEO/GEO pages, free tools, docs, landing pages, comparison pages, and private ABM pages as normal code in an existing website repo.
- Primary audience:
  - developers and founders who maintain marketing sites in code
  - growth and SEO teams that work with coding agents
  - agencies shipping SEO/GEO pages and free tools for clients
- Primary CTA:
  - Label: Install Pagewell
  - Command: `bunx skills add ReScienceLab/pagewell --skill pagewell`
  - Pi command: `bunx skills add ReScienceLab/pagewell --skill pagewell -a pi`
- Secondary CTA:
  - Label: View GitHub
  - URL: https://github.com/ReScienceLab/pagewell

### What Pagewell does

- Routes natural-language page requests to the correct Pagewell module and playbook.
- Creates framework-neutral page specs before implementation.
- Generates normal website code or content inside the user's existing repo.
- Supports product, use-case, FAQ, glossary, alternative/comparison, docs, LP/campaign, private/ABM, free-tool, and tools-hub page types.
- Uses `DESIGN.md` for visual rules and this `PAGEWELL.md` file for product/site/page-pattern truth.
- Runs QA for metadata, schema, crawlability, claims, design consistency, conversion, and genericness.
- Updates discovery files such as sitemap, robots, and llms.txt when appropriate.

### What Pagewell does not do

- Pagewell is not a no-code website builder.
- Pagewell is not a hosted CMS or page-hosting platform.
- Pagewell does not auto-publish without the user's repo/deploy flow.
- Pagewell does not replace product facts, Search Console data, or user-provided claims.
- Pagewell must not invent metrics, customers, prices, integrations, or competitor claims.

## Supported claims

Use these claims when relevant. Keep copy factual and specific.

| Claim | Source | Confidence |
|---|---|---|
| Pagewell is framework-agnostic and works through adapters/instructions for Astro, Next.js, Cloudflare Workers, static HTML, and unknown/custom frameworks. | README.md, adapters/ | High |
| Pagewell outputs normal website code/content in the user's repo, with no hosted builder runtime. | README.md | High |
| Pagewell supports SEO/GEO pages, free tools, docs, comparisons, FAQs, glossary pages, topic clusters, private ABM pages, QA, and discovery files. | README.md, skills/pagewell/SKILL.md | High |
| Pagewell uses `DESIGN.md` as the visual source of truth. | README.md, skills/design-system.md | High |
| Pagewell uses `PAGEWELL.md` plus `DESIGN.md` as the default setup context after site discovery. | Current implementation | High |
| Pagewell includes claim-check rules for comparisons and other high-risk claims. | skills/qa.md, playbooks/qa/claim-check.md | High |
| Free tools generated through Pagewell must provide first value without signup. | skills/generate-free-tool.md, playbooks/free-tools/page.md | High |

## Prohibited or unknown claims

Do not claim these unless a user provides evidence and PAGEWELL.md is updated.

- Do not claim Pagewell automatically publishes to production.
- Do not claim Pagewell hosts pages.
- Do not claim Pagewell has live Search Console or analytics integrations.
- Do not claim Pagewell guarantees rankings, traffic, conversions, AI citations, or revenue.
- Do not claim specific customer logos, case studies, adoption numbers, benchmarks, or testimonials for Pagewell unless added here with a source.
- Do not claim support for frameworks beyond the documented adapters unless the target repo has a clear compatible convention.
- Do not claim a generated tool stores or processes user data server-side unless that behavior is implemented.

## Site implementation

### Current repo/site

- Framework: Astro
- Rendering: static
- Site root: `/site`
- Routes: file-based routes in `/site/src/pages`
- Styling: global CSS variables/classes in `/site/src/styles/global.css`
- Fonts: self-hosted Fontsource packages for Geist Variable, Inter Variable, and Geist Mono Variable
- Components: reusable `.astro` components in `/site/src/components`
- Layouts: `/site/src/layouts`
- Content collections: placeholder folders under `/site/src/content` configured by `/site/src/content.config.ts`; current public/dry-run pages are file-based routes under `/site/src/pages`
- Metadata: layout props rendered through `/site/src/components/SEOHead.astro`
- Design source: `/DESIGN.md`
- Discovery files: static files in `/site/public` plus Astro sitemap output
- Deployment: Static Astro output; deployment target is not encoded in the repo
- Recommended adapter: `adapters/astro.md`

### Commands

- Dev: `cd site && bun run dev`
- Build: `cd site && bun run build`
- Check: `cd site && bun run check`
- Preview: `cd site && bun run preview`
- Skill package: `bun run build:skill`
- Skill package check: `bun run check:skill`
- Design lint: `bun run lint:design`

### Implementation conventions

- Use Bun for all package installation, scripts, and local commands.
- Do not use npm, pnpm, or yarn.
- Keep the Astro app framework-light: no React, Svelte, Vue, or Tailwind unless explicitly requested.
- Use static generation for public SEO/GEO pages.
- Use `DESIGN.md` as the visual source of truth.
- Add reusable UI in `/site/src/components` before duplicating page markup.
- Keep generated public routes crawlable, with title, description, canonical, Open Graph/Twitter where supported, and JSON-LD when supported by visible facts.
- Keep private/ABM pages `noindex,nofollow`, out of sitemap/discovery files, and out of public navigation.

## Route taxonomy

Preferred route patterns for this repo:

| Intent | Route pattern | Notes |
|---|---|---|
| Product/entity | `/products/<slug>` | Durable product/entity pages. |
| Use case/workflow | `/use-cases/<slug>` | Specific job-to-be-done pages. |
| FAQ | `/faq/<question-slug>` | One exact searched question per URL. |
| Glossary | `/glossary/<term-slug>` | One term/definition per URL. |
| Alternative/comparison | `/alternatives/<target>` or `/compare/<a-vs-b>` | Requires claim-check. |
| Docs/tutorial | `/docs/<task-slug>` | Command-forward task pages. |
| Free tool | `/tools/<slug>` | Must work without signup. |
| Tools hub | `/tools` | Lists public/indexable tools only. |
| LP/campaign | `/lp/<slug>` | Usually noindex unless durable SEO intent. |
| Private ABM | `/private/<slug>` or `/accounts/<slug>` | Always noindex,nofollow and sitemap-excluded. |

If an existing site in a consumer repo uses different conventions, prefer that repo's `PAGEWELL.md` route taxonomy over Pagewell defaults.

## Page and component patterns

Use these existing site patterns before inventing new UI.

### Page shell

- `BaseLayout.astro` provides global nav, footer, metadata, font imports, and the main content shell.
- Pages should pass `title`, `description`, `canonical`, `noindex`, and `jsonLd` where relevant.
- Public generated pages should use dark sections, centered containers, large compressed Geist headings, Inter body copy, and restrained blue accents from `DESIGN.md`.

### Hero patterns

- Use a small mono uppercase eyebrow before a large heading.
- Hero copy should be specific to the route intent, not a generic product slogan.
- Primary CTA should appear above the fold when conversion intent exists.
- Command-style CTAs should use `CommandCopy.astro` when showing install commands.

### Proof and explanation patterns

- Use dark cards with blue ring shadows for claims, QA gates, capabilities, and examples.
- Use `CodeWindow.astro` for command, config, spec, and workflow snippets.
- Use grid cards for page types, features, checks, and related links.
- Use comparison tables only for verified or scoped facts.

### FAQ and CTA patterns

- Use `FAQ.astro` for visible FAQ sections.
- Use `CTASection.astro` or a page-specific CTA block near the end.
- FAQ schema must match visible questions and answers.

### Free-tool UI patterns

- Tool interfaces should use the dark card/input style from `DESIGN.md`.
- Tool inputs need labels, validation, helpful errors, and a visible result area.
- Text outputs should include copy-to-clipboard when useful.
- The tool must provide first value without signup.

## Generation rules

- Always read `DESIGN.md` and `PAGEWELL.md` before generating or QAing pages.
- Do not recreate legacy context files; update `PAGEWELL.md` when Pagewell context changes.
- Treat playbook section names as required coverage, not literal headings or fixed layout order.
- Create a page architecture/evidence map before implementation when the page is substantive.
- Every public page must target a real search, conversion, support, or outbound intent.
- Every high-risk claim must be supported by this file, a user-provided brief, or visible source material.
- Prefer concrete product mechanics over generic benefits.
- Prefer fewer, stronger pages over mass low-value generation.
- Reuse existing components and patterns before creating new ones.
- Do not create near-duplicate FAQ, glossary, or use-case pages.

## Anti-generic QA rules

A generated page should receive a warning or fail QA when:

- It could describe any SaaS product after swapping the product name.
- It uses generic headings such as `Problem`, `Solution`, or `Benefits` without specific context.
- It lacks at least three product-specific mechanics or repo/site-specific implementation details where relevant.
- It lacks a concrete workflow, example, command, comparison dimension, or tool output.
- Its section order exactly mirrors the playbook without adapting to the intent or site pattern.
- It uses claims that are not supported by `PAGEWELL.md`, the brief, or cited source material.
- Its CTA does not match the page's audience and intent.

## QA rules

Before considering a generated page complete:

- Run safe build/check commands when available.
- Check route existence and indexability behavior.
- Check unique title, description, canonical, one H1, and supported JSON-LD.
- Check private pages are noindex,nofollow and sitemap-excluded.
- Check discovery files when indexable routes changed.
- Check design consistency with `DESIGN.md` and page patterns above.
- Run claim-check for comparisons, competitor mentions, performance/revenue claims, customer claims, security/compliance claims, and superlatives.
- Run anti-generic QA rules above.
