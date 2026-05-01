# Sitewright

Framework-agnostic agent skills for generating SEO, GEO, free tools, landing, docs, and private ABM pages as code.

Sitewright captures the useful parts of AI landing-page systems without a no-code builder:

```txt
DESIGN.md + SITE_PROFILE.md + product facts + page brief
→ framework-neutral page spec
→ implementation in the current site's stack
→ SEO/GEO/schema/claim QA
→ discovery files updated
```

The output is normal website code or content in your repo. No runtime, no hosted builder, no lock-in.

## What Sitewright is

- A reusable skill pack for coding agents.
- A page-generation workflow that works across frameworks.
- A compact set of top-level skills with detailed playbooks behind them.
- A set of quality gates for search, AI-answer visibility, free-tool usefulness, and factual claims.

## What Sitewright is not

- Not a no-code editor.
- Not a visual builder.
- Not an auto-publisher.
- Not tied to Astro, Next.js, Workers, or any specific framework.

## Top-level skills

Sitewright intentionally exposes only 9 top-level skills:

```txt
skills/
  discover-site.md
  design-system.md
  define-product-facts.md
  plan-topic-cluster.md
  generate-page.md
  generate-free-tool.md
  qa.md
  update-discovery-files.md
  seo-ops.md
```

Detailed page-type, SEO, free-tool, and claim-check guidance lives in `playbooks/`.

## Required inputs in a consumer website repo

| File | Purpose |
|---|---|
| `SITE_PROFILE.md` | Describes how the current website is built and where pages/routes/metadata live. |
| `DESIGN.md` | Describes visual identity and design tokens. Must strictly conform to the Google Labs Code `DESIGN.md` spec: https://github.com/google-labs-code/design.md. |
| Product/company facts | Canonical truth source for product names, descriptions, commands, URLs, claims, pricing/status. |
| Page brief | The specific page to generate: route, intent, keyword, audience, CTA, facts, constraints. |

If `SITE_PROFILE.md`, `DESIGN.md`, or product facts do not exist, run the relevant setup skills first.

## Repository layout

```txt
skills/      9 top-level agent skills.
playbooks/   Detailed page-type, SEO, free-tool, and claim-check rules.
adapters/    Framework-specific implementation guidance.
schemas/     JSON schemas for site profiles, product facts, briefs, page specs, and clusters.
docs/        Strategy docs for design, SEO/GEO, page types, and comparisons.
examples/    Example briefs, product facts, design files, and site profiles.
```

## Quick start for a website repo

1. Copy or reference this skill pack from your website repo.
2. Run/follow `skills/discover-site.md` to create `SITE_PROFILE.md`.
3. Run/follow `skills/design-system.md` to create and validate Google-spec `DESIGN.md`.
4. Run/follow `skills/define-product-facts.md` to create or normalize product facts.
5. Write a page brief.
6. Run `skills/generate-page.md` for standard pages or `skills/generate-free-tool.md` for free tools.
7. Run `skills/qa.md`.
8. Run `skills/update-discovery-files.md`.
9. Use `skills/seo-ops.md` for ongoing title, internal-link, indexing, and maintenance work.

Example prompt:

```txt
Use Sitewright.
Read SITE_PROFILE.md, DESIGN.md, and products.yaml.
Using briefs/use-cases/find-feature-requests-from-reddit.yaml,
run generate-page, then qa and update-discovery-files.
```

Free tool example:

```txt
Use Sitewright.
Read SITE_PROFILE.md, DESIGN.md, and products.yaml.
Using briefs/tools/markdown-preview.yaml,
run generate-free-tool, qa, update-discovery-files,
then generate a launch plan with generate-free-tool launch mode.
```

## DESIGN.md requirement

Sitewright does not define its own design format. It uses Google's `DESIGN.md` format as the normative spec.

Useful commands:

```bash
npx @google/design.md spec --rules
npx @google/design.md lint DESIGN.md
npx @google/design.md export --format tailwind DESIGN.md > tailwind.theme.json
```

`DESIGN.md` must have zero linter errors before page-generation skills rely on it.

## Supported site types

Sitewright is intentionally framework-agnostic. Current adapters cover:

- Astro
- Next.js
- Cloudflare Worker HTML routing
- Plain static HTML
- Unknown/custom frameworks

Adapters are instructions, not generators. Agents should inspect the target repo and use the closest existing convention.

## Topical authority workflow

Sitewright supports topic clusters across:

- product pages
- use-case pages
- FAQ pages
- glossary pages
- free tools
- docs/tutorials
- alternative/comparison pages

Use `skills/plan-topic-cluster.md` to plan a cluster, then run `skills/generate-page.md` or `skills/generate-free-tool.md`. Use `skills/seo-ops.md` to operate the cluster over time.

## Core rule

Every generated page must map to a real search, conversion, support, or outbound intent. Do not generate pages merely because a system can.
