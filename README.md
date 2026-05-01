# Pagewell

Framework-agnostic agent skills for generating SEO, GEO, free tools, landing, docs, and private ABM pages as code.

Pagewell captures the useful parts of AI landing-page systems without a no-code builder:

```txt
DESIGN.md + SITE_PROFILE.md + product facts + page brief
→ framework-neutral page spec
→ implementation in the current site's stack
→ SEO/GEO/schema/claim QA
→ discovery files updated
```

The output is normal website code or content in your repo. No runtime, no hosted builder, no lock-in.

## What Pagewell is

- A reusable skill pack for coding agents.
- A page-generation workflow that works across frameworks.
- One installable Pagewell skill with modular reference files behind it.
- A set of quality gates for search, AI-answer visibility, free-tool usefulness, and factual claims.

## What Pagewell is not

- Not a no-code editor.
- Not a visual builder.
- Not an auto-publisher.
- Not tied to Astro, Next.js, Workers, or any specific framework.

## Skill surface

Most users only need one installable entrypoint:

```txt
skills/pagewell/SKILL.md
```

It routes natural-language requests to the right core module and playbook using progressive disclosure.

The installable package includes the 9 core modules as references:

```txt
skills/pagewell/
  SKILL.md
  references/
    MANIFEST.md
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
    playbooks/
    adapters/
    docs/
    schemas/
```

Detailed page-type, SEO, free-tool, and claim-check guidance lives in `skills/pagewell/references/playbooks/` for installed users. The root-level `skills/*.md`, `playbooks/`, `adapters/`, `docs/`, and `schemas/` directories remain source references for development.

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
skills/pagewell/  Installable skills.sh package (`SKILL.md` + references).
skills/*.md       Source core modules used to build packaged references.
playbooks/        Source page-type, SEO, free-tool, and claim-check rules.
adapters/         Source framework-specific implementation guidance.
schemas/          Source JSON schemas for site profiles, product facts, briefs, specs, and clusters.
docs/             Source strategy docs for design, SEO/GEO, page types, and comparisons.
examples/         Example briefs, product facts, design files, and site profiles.
site/             Static Astro marketing/docs website.
```

## Quick start for a website repo

1. Install Pagewell with the skills CLI:

   ```bash
   bunx skills add ReScienceLab/pagewell --skill pagewell
   ```

   For Pi specifically:

   ```bash
   bunx skills add ReScienceLab/pagewell --skill pagewell -a pi
   ```

2. Ask your agent to use Pagewell and describe what you want in natural language.
3. The router will ask for missing setup or route to the right core reference module.
4. For generation requests, it will default to generator → QA → discovery file updates.

Advanced users working from this repo can inspect source modules directly:

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
Use Pagewell to make a page for people searching "find feature requests from Reddit".
Product is RequestHunt.
```

```txt
Use Pagewell to build a free markdown preview tool for Markshare.
```

```txt
Use Pagewell to review Search Console data and suggest the next SEO actions.
```

If you already have a brief, you can still be explicit:

```txt
Use Pagewell with briefs/use-cases/find-feature-requests-from-reddit.yaml.
Run generate-page, then qa and update-discovery-files.
```

## Packaging the installable skill

The installable skills.sh package is built from the source references with Bun:

```bash
bun run build:skill
bun run check:skill
```

`check:skill` verifies that `skills add . --list` discovers exactly the packaged `pagewell` skill. Keep `skills/pagewell/references/` in sync before publishing changes.

## DESIGN.md requirement

Pagewell does not define its own design format. It uses Google's `DESIGN.md` format as the normative spec.

Useful commands:

```bash
bunx @google/design.md spec --rules
bunx @google/design.md lint DESIGN.md
bunx @google/design.md export --format tailwind DESIGN.md > tailwind.theme.json
```

`DESIGN.md` must have zero linter errors before page-generation skills rely on it.

## Supported site types

Pagewell is intentionally framework-agnostic. Current adapters cover:

- Astro
- Next.js
- Cloudflare Worker HTML routing
- Plain static HTML
- Unknown/custom frameworks

Adapters are instructions, not generators. Agents should inspect the target repo and use the closest existing convention.

## Topical authority workflow

Pagewell supports topic clusters across:

- product pages
- use-case pages
- FAQ pages
- glossary pages
- free tools
- docs/tutorials
- alternative/comparison pages

Use Pagewell to plan a cluster, then let the router select `references/skills/generate-page.md` or `references/skills/generate-free-tool.md`. Use `references/skills/seo-ops.md` to operate the cluster over time.

## Core rule

Every generated page must map to a real search, conversion, support, or outbound intent. Do not generate pages merely because a system can.
