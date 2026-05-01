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
- A set of quality gates for search, AI-answer visibility, free-tool usefulness, and factual claims.

## What Sitewright is not

- Not a no-code editor.
- Not a visual builder.
- Not an auto-publisher.
- Not tied to Astro, Next.js, Workers, or any specific framework.

## Required inputs in a consumer website repo

| File | Purpose |
|---|---|
| `SITE_PROFILE.md` | Describes how the current website is built and where pages/routes/metadata live. |
| `DESIGN.md` | Describes visual identity and design tokens. Must strictly conform to the Google Labs Code `DESIGN.md` spec: https://github.com/google-labs-code/design.md. |
| Product/company facts | Canonical truth source for product names, descriptions, commands, URLs, claims, pricing/status. |
| Page brief | The specific page to generate: route, intent, keyword, audience, CTA, facts, constraints. |

If `SITE_PROFILE.md` or `DESIGN.md` does not exist, run the relevant skills first.

## Repository layout

```txt
skills/      Agent skills: discover site, extract design, generate page types, QA.
adapters/    Framework-specific implementation guidance.
schemas/     JSON schemas for site profiles, product facts, briefs, and page specs.
docs/        Design, SEO/GEO, page type, and comparison rules.
examples/    Example briefs, product facts, and site profiles.
```

## Quick start for a website repo

1. Copy or reference this skill pack from your website repo.
2. Run/follow `skills/discover-site.md` to create `SITE_PROFILE.md`.
3. Run/follow `skills/extract-design.md` to create `DESIGN.md` using the Google Labs Code `DESIGN.md` spec.
4. Run/follow `skills/validate-design.md` to ensure `DESIGN.md` has zero linter errors.
5. Run/follow `skills/define-product-facts.md` to create or normalize product facts.
6. Write a page brief.
7. Run the relevant page generation skill.
8. For free tools, optionally run `skills/launch-free-tool.md` after QA.
9. Run `skills/qa-page.md`.
10. Run `skills/update-discovery-files.md`.

Example prompt:

```txt
Use Sitewright.
Read SITE_PROFILE.md, DESIGN.md, and products.yaml.
Using briefs/use-cases/find-feature-requests-from-reddit.yaml,
run the generate-use-case-page skill, then run qa-page and update-discovery-files.
```

Free tool example:

```txt
Use Sitewright.
Read SITE_PROFILE.md, DESIGN.md, and products.yaml.
Using briefs/tools/markdown-preview.yaml,
run generate-free-tool-page, qa-page, update-discovery-files,
then launch-free-tool.
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

## Core rule

Every generated page must map to a real search, conversion, support, or outbound intent. Do not generate pages merely because a system can.
