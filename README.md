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

## Skill surface

Most users only need one entrypoint:

```txt
skills/sitewright.md
```

It routes natural-language requests to the right core skill and playbook.

Under the router, Sitewright has 9 core skills:

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
skills/      One router skill plus 9 core agent skills.
playbooks/   Detailed page-type, SEO, free-tool, and claim-check rules.
adapters/    Framework-specific implementation guidance.
schemas/     JSON schemas for site profiles, product facts, briefs, page specs, and clusters.
docs/        Strategy docs for design, SEO/GEO, page types, and comparisons.
examples/    Example briefs, product facts, design files, and site profiles.
```

## Quick start for a website repo

1. Copy or reference this skill pack from your website repo.
2. Run/follow `skills/sitewright.md` and describe what you want in natural language.
3. The router will ask for missing setup or route to the right core skill.
4. For generation requests, it will default to generator → QA → discovery file updates.

Advanced users can call core skills directly:

- `skills/discover-site.md`
- `skills/design-system.md`
- `skills/define-product-facts.md`
- `skills/plan-topic-cluster.md`
- `skills/generate-page.md`
- `skills/generate-free-tool.md`
- `skills/qa.md`
- `skills/update-discovery-files.md`
- `skills/seo-ops.md`

Example prompts:

```txt
Use Sitewright to make a page for people searching "find feature requests from Reddit".
Product is RequestHunt.
```

```txt
Use Sitewright to build a free markdown preview tool for Markshare.
```

```txt
Use Sitewright to review Search Console data and suggest the next SEO actions.
```

If you already have a brief, you can still be explicit:

```txt
Use Sitewright with briefs/use-cases/find-feature-requests-from-reddit.yaml.
Run generate-page, then qa and update-discovery-files.
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
