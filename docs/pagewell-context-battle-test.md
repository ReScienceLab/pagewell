# Pagewell Context Implementation and Battle Test

Date: 2026-05-02

## What changed

Implemented the unified Pagewell context direction:

- Added root `PAGEWELL.md` for this repo.
- Updated `skills/discover-site.md` to create/update the unified `PAGEWELL.md` context on first run.
- Updated the Pagewell router to require `PAGEWELL.md` + `DESIGN.md` instead of separate `SITE_PROFILE.md` + product facts.
- Kept `DESIGN.md` separate because it follows the Google Labs Code `DESIGN.md` spec/linter.
- Updated generation, free-tool, QA, discovery, SEO ops, product-facts, and site-discovery skills to use `PAGEWELL.md`.
- Reframed playbook section lists as required coverage, not literal headings or fixed layout order.
- Added anti-generic QA checks.
- Added `schemas/pagewell-context.schema.json`.
- Updated packaged references through `bun run build:skill` / `bun run check:skill`.

## Dry-run context

Test site: the Pagewell Astro site in `/site`.

Primary context files:

- `PAGEWELL.md` — product facts, claims, site implementation, route taxonomy, page/component patterns, generation rules, anti-generic QA rules.
- `DESIGN.md` — visual source of truth.

Site adapter:

- `adapters/astro.md`

Generated implementation pattern:

- Added `site/src/components/GeneratedPage.astro` for dry-run pages.
- Added route files under `site/src/pages/**`.
- Added a no-signup free tool with client-side JavaScript.
- Added sitemap filter for `/private/*` routes.
- Added `site/public/llms.txt` with private routes excluded.

## Generated pages

| Page type | Route | File | Status |
|---|---|---|---|
| Product | `/products/pagewell` | `site/src/pages/products/pagewell.astro` | PASS |
| Use case | `/use-cases/generate-seo-pages-as-code` | `site/src/pages/use-cases/generate-seo-pages-as-code.astro` | PASS |
| Alternative/comparison | `/alternatives/flint` | `site/src/pages/alternatives/flint.astro` | PASS WITH NOTES |
| Docs/tutorial | `/docs/setup-pagewell` | `site/src/pages/docs/setup-pagewell.astro` | PASS |
| FAQ | `/faq/can-i-use-pagewell-with-astro` | `site/src/pages/faq/can-i-use-pagewell-with-astro.astro` | PASS |
| Glossary | `/glossary/generative-engine-optimization` | `site/src/pages/glossary/generative-engine-optimization.astro` | PASS |
| Free tool | `/tools/llms-txt-validator` | `site/src/pages/tools/llms-txt-validator.astro` | PASS |
| Private ABM | `/private/anthropic-pagewell` | `site/src/pages/private/anthropic-pagewell.astro` | PASS |

Comparison page note: the Flint comparison uses public positioning observed from tryflint.com and avoids unverifiable claims, pricing claims, customer claims, or product weaknesses.

## Page specs used for the dry run

### `/products/pagewell`

```yaml
route: /products/pagewell
pageType: product
primaryKeyword: Pagewell
intent: explain Pagewell as the repo-native page-generation skill pack
cta: install Pagewell
coverage:
  - product definition
  - who it is for
  - mechanism: DESIGN.md + PAGEWELL.md + playbooks + adapters + QA
  - install command
  - related cluster links
schema:
  - SoftwareApplication
  - BreadcrumbList
  - FAQPage
```

### `/use-cases/generate-seo-pages-as-code`

```yaml
route: /use-cases/generate-seo-pages-as-code
pageType: use-case
primaryKeyword: generate SEO pages as code
intent: show a repo-native workflow for SEO/GEO generation
cta: install Pagewell
coverage:
  - direct answer
  - repo workflow
  - context files
  - adapter implementation
  - QA and discovery gates
schema:
  - BreadcrumbList
  - FAQPage
```

### `/alternatives/flint`

```yaml
route: /alternatives/flint
pageType: alternative
primaryKeyword: Pagewell vs Flint
intent: compare repo-native skills with hosted autonomous page platform
cta: install Pagewell / read setup doc
coverage:
  - decision summary
  - what each option is for
  - factual comparison table
  - when to choose Pagewell
  - when to choose Flint
  - FAQ
schema:
  - BreadcrumbList
  - FAQPage
claimCheck: required
```

### `/docs/setup-pagewell`

```yaml
route: /docs/setup-pagewell
pageType: docs
primaryKeyword: set up Pagewell
intent: explain first-run PAGEWELL.md discovery/setup
cta: install Pagewell
coverage:
  - quickstart command
  - context file explanation
  - required inputs
  - verification commands
schema:
  - BreadcrumbList
  - FAQPage
```

### `/faq/can-i-use-pagewell-with-astro`

```yaml
route: /faq/can-i-use-pagewell-with-astro
pageType: faq
question: Can I use Pagewell with Astro?
intent: answer one exact implementation question
cta: install Pagewell / read setup doc
coverage:
  - direct answer in first sentence
  - Astro adapter explanation
  - generated route example
schema:
  - BreadcrumbList
  - FAQPage
```

### `/glossary/generative-engine-optimization`

```yaml
route: /glossary/generative-engine-optimization
pageType: glossary
term: Generative engine optimization
intent: define GEO and connect it to Pagewell workflows
cta: generate GEO pages as code
coverage:
  - one-line definition
  - expanded explanation
  - concrete Pagewell application
  - related terms/page types
schema:
  - DefinedTerm
  - BreadcrumbList
```

### `/tools/llms-txt-validator`

```yaml
route: /tools/llms-txt-validator
pageType: free-tool
toolType: validator
primaryKeyword: llms.txt validator
intent: provide a no-signup utility for AI discovery file QA
cta: install Pagewell for discovery updates
coverage:
  - working tool interface
  - browser-only privacy note
  - how to use
  - example output
  - product CTA
  - FAQ
schema:
  - WebApplication
  - BreadcrumbList
```

### `/private/anthropic-pagewell`

```yaml
route: /private/anthropic-pagewell
pageType: private
noindex: true
nofollow: true
intent: demonstrate noindex private ABM handling with supplied/generic context
coverage:
  - personalized but non-speculative hero
  - supplied context only
  - proposed workflow
  - next step
schema: []
sitemap: excluded
```

## QA summary

### Routing

- All generated routes build successfully.
- Private route exists for direct review but is not linked from nav.

### Metadata

- All generated pages have titles, descriptions, canonicals, and one H1.
- Private page has `noindex,nofollow`.

### Schema

- Product page includes `SoftwareApplication`, `BreadcrumbList`, and `FAQPage`.
- FAQ/use-case/docs/comparison pages include visible FAQ where FAQPage schema is present.
- Glossary page includes `DefinedTerm`.
- Free tool includes `WebApplication` with `offers.price = 0`.
- Private page has no JSON-LD.

### Discovery

- Astro sitemap builds.
- `/private/*` is excluded from sitemap by config.
- `site/public/llms.txt` excludes private pages.
- Free tool is included in sitemap and llms.txt.

### Anti-generic QA

- Pages avoid literal generic headings like `Problem`, `Solution`, `Benefits`.
- Each page references Pagewell-specific mechanics: `PAGEWELL.md`, `DESIGN.md`, adapters, playbooks, claim checks, discovery files, or repo-native code review.
- Each page includes concrete implementation examples, commands, comparison dimensions, or tool output.
- CTAs are specific to the route intent.

### Claim check

- No invented Pagewell customer logos, rankings, conversion metrics, prices, integrations, or guarantees.
- Comparison page uses restrained “when to choose” framing.
- Private page avoids invented account facts.

## Test results

Commands run:

```bash
bun run build:skill
bun run check:skill
bun run lint:design
bun run build:site
bun run check:site
```

Results:

- `bun run build:skill`: PASS
- `bun run check:skill`: PASS — installable package exposes one skill, `pagewell`.
- `bun run lint:design`: PASS — 0 errors, 0 warnings.
- `bun run build:site`: PASS — 9 pages built, 0 errors, 0 warnings, 0 hints.
- `bun run check:site`: PASS — 0 errors, 0 warnings, 0 hints.

Route smoke checks from `site/dist`:

- All 8 generated pages exist.
- All 8 generated pages have exactly one H1.
- All 8 generated pages have canonical URLs.
- Public generated pages have JSON-LD where expected.
- `/private/anthropic-pagewell` has `noindex,nofollow`.
- `/private/anthropic-pagewell` is absent from `sitemap-0.xml`.
- `/private/anthropic-pagewell` is absent from `llms.txt`.

## Local review URLs

When local dev is running, review:

- http://localhost:4321/products/pagewell
- http://localhost:4321/use-cases/generate-seo-pages-as-code
- http://localhost:4321/alternatives/flint
- http://localhost:4321/docs/setup-pagewell
- http://localhost:4321/faq/can-i-use-pagewell-with-astro
- http://localhost:4321/glossary/generative-engine-optimization
- http://localhost:4321/tools/llms-txt-validator
- http://localhost:4321/private/anthropic-pagewell

## Remaining recommendations

- Decide whether to keep these dry-run pages as public site content or move them under an internal review namespace after evaluation.
- Add a generated tools hub only if the llms.txt validator remains public.
- If the Flint comparison is kept, preserve the current restrained framing and only add stronger claims when sourced.
- Consider adding an automated smoke-test script if generated test pages become a recurring release gate.
