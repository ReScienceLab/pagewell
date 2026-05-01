# Skill: Generate Page

## Purpose

Generate or update a framework-agnostic website page from a page brief.

This single skill handles standard page types through page-type playbooks. Free tools have their own specialized skill because they require a working utility interface.

## Required inputs

- `SITE_PROFILE.md`
- validated `DESIGN.md`
- canonical product/company facts
- page brief with `pageType`, route, title, description, H1, intent, CTA, and constraints

## Supported page types

| pageType | Playbook |
|---|---|
| `product` | `playbooks/page-types/product.md` |
| `use-case` | `playbooks/page-types/use-case.md` |
| `faq` | `playbooks/page-types/faq.md` |
| `glossary` | `playbooks/page-types/glossary.md` |
| `alternative` | `playbooks/page-types/alternative.md` |
| `docs` | `playbooks/page-types/docs.md` |
| `lp` | `playbooks/page-types/lp.md` |
| `private` | `playbooks/page-types/private.md` |
| `custom` | infer closest existing pattern, then ask if unclear |

For `free-tool` and `tools-hub`, use `skills/generate-free-tool.md`.

## Framework-neutral process

1. Read `SITE_PROFILE.md` and its recommended adapter.
2. Read `DESIGN.md` and follow its tokens/prose.
3. Read product/company facts.
4. Read the page brief.
5. Select the matching page-type playbook.
6. Create a framework-neutral page spec:
   - route
   - pageType
   - title
   - description
   - H1
   - noindex/nofollow
   - sections
   - schema
   - related links
   - CTA
7. Implement using the current site's conventions:
   - Astro: content collection or `src/pages`
   - Next.js: `app/` or `pages/`
   - Cloudflare Worker: page registry/render helper
   - Static HTML: route folder with `index.html`
   - Unknown: mirror existing route patterns
8. Run or recommend `skills/qa.md`.
9. Run or recommend `skills/update-discovery-files.md` when indexability changes.

## Universal requirements

Every indexable generated page should have:

- unique title
- unique meta description
- one H1
- canonical URL
- crawlable HTML content
- relevant internal links
- schema only when supported by visible content/facts
- design consistent with `DESIGN.md`

## Page-type guardrails

### Product

- Use canonical product facts.
- Explain what the product is, who it is for, and how it works.
- Include product command/demo when available.

### Use case

- Target a specific workflow/scenario.
- Use problem → solution → step-by-step → benefits.
- Include concrete commands/examples when available.

### FAQ

- One searched question per URL.
- H1 is the exact question.
- First sentence answers directly.

### Glossary

- One term per URL.
- Include clear one-line definition and example/application.
- Use `DefinedTerm` schema when supported.

### Alternative/comparison

- Be factual and fair.
- Run claim checks in `skills/qa.md`.
- Use “when to choose X/Y” framing.

### Docs

- Command-forward and task-oriented.
- Do not invent flags, APIs, or expected outputs.

### LP

- Conversion-focused.
- One primary CTA.
- Default to `noindex` for temporary/paid campaign pages unless brief says durable SEO.

### Private

- Always `noindex,nofollow`.
- Exclude from sitemap and public navigation.
- Do not invent account facts.

## Acceptance criteria

- Page exists at requested route.
- It follows the correct page-type playbook.
- It follows current framework conventions.
- It uses product facts and avoids unsupported claims.
- It passes `skills/qa.md`.
