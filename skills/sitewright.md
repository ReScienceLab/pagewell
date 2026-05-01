# Skill: Sitewright Router

## Purpose

Be the single front door for Sitewright.

Use this when the user asks for anything related to SEO/GEO pages, landing pages, free tools, topic clusters, design extraction, QA, discovery files, or SEO operations but does not remember the exact skill, page type, tool type, or mode.

This router improves UX without lowering output quality. It must route to the appropriate core skill and playbook instead of bypassing them.

## Quality invariant

The router must never generate final output by itself when a specialized Sitewright skill should be used.

It should:

1. infer intent
2. create or normalize a brief/spec
3. select the right core skill
4. ensure the selected skill reads the correct playbook
5. run QA and discovery updates when relevant

Quality is preserved because page-type, free-tool, SEO, and claim-check rules still live in the underlying skills and playbooks.

## Required context

Before routing, check for:

- `SITE_PROFILE.md`
- `DESIGN.md`
- canonical product/company facts, e.g. `products.yaml`, `src/data/products.*`, or equivalent
- existing briefs if mentioned

If missing:

- no `SITE_PROFILE.md` → route first to `skills/discover-site.md`
- no `DESIGN.md` or invalid design → route first to `skills/design-system.md`
- no product facts → route first to `skills/define-product-facts.md`

## Intent routing

### Setup and source of truth

| User asks for | Route to |
|---|---|
| inspect/detect/current stack/framework | `skills/discover-site.md` |
| extract design / create DESIGN.md / validate design | `skills/design-system.md` |
| define products / product facts / canonical claims | `skills/define-product-facts.md` |

### Topic planning

| User asks for | Route to |
|---|---|
| SEO plan / content map / topic cluster / what pages should we create | `skills/plan-topic-cluster.md` |

### Standard page generation

Route to `skills/generate-page.md` and infer `pageType`.

| Cue | pageType | Playbook |
|---|---|---|
| `/products/...`, product landing, canonical product page | `product` | `playbooks/page-types/product.md` |
| `/use-cases/...`, workflow, job-to-be-done, "for X use case" | `use-case` | `playbooks/page-types/use-case.md` |
| `/faq/...`, "how do I", "can I", one question | `faq` | `playbooks/page-types/faq.md` |
| `/glossary/...`, "what is", definition, meaning, term | `glossary` | `playbooks/page-types/glossary.md` |
| `/alternatives/...`, `/compare/...`, "vs", "alternative" | `alternative` | `playbooks/page-types/alternative.md` |
| `/docs/...`, technical how-to, install, setup, troubleshooting | `docs` | `playbooks/page-types/docs.md` |
| `/lp/...`, ads, campaign, launch, conversion page | `lp` | `playbooks/page-types/lp.md` |
| `/private/...`, `/accounts/...`, ABM, personalized outbound, sales follow-up | `private` | `playbooks/page-types/private.md` |

### Free tools

Route to `skills/generate-free-tool.md`.

| Cue | Mode/category |
|---|---|
| brainstorm free tools, tool ideas | brainstorm mode |
| `/tools/...`, "build a free tool" | generate page mode |
| `/tools` hub, list tools | hub mode |
| launch/promote a tool | launch mode |
| "generator" | category: generator |
| "converter" | category: converter |
| "analyzer", "checker", "grader", "audit" | category: analyzer |
| "calculator", "estimator" | category: calculator |
| "preview", "renderer", "viewer" | category: previewer |
| "validator", "linter" | category: validator |

### QA and operations

| User asks for | Route to |
|---|---|
| check, review, validate page quality | `skills/qa.md` |
| sitemap / robots / llms.txt / discovery files | `skills/update-discovery-files.md` |
| title CTR, internal links, SEO maintenance, stuck pages, GSC review | `skills/seo-ops.md` |

## Route inference

If a route is provided, infer page type from path first:

```txt
/products/*       → product
/use-cases/*      → use-case
/faq/*            → faq
/glossary/*       → glossary
/alternatives/*   → alternative
/compare/*        → alternative
/docs/*           → docs
/lp/*             → lp
/private/*        → private
/accounts/*       → private
/tools            → free-tool hub mode
/tools/*          → free-tool generate page mode
```

If no route is provided, infer from natural language.

## Natural-language inference

| Phrase pattern | Likely route |
|---|---|
| "What is <term>?" | glossary if term definition; FAQ if product/support question |
| "How do I <action>?" | FAQ if short answer; docs if technical steps; use-case if workflow/benefits page |
| "How to <technical task>" | docs |
| "Use <product> for <workflow>" | use-case |
| "<competitor> alternative" | alternative |
| "<product> vs <competitor>" | alternative |
| "free <thing> generator/converter/calculator/previewer" | free-tool |
| "page for paid ads / campaign" | lp |
| "page for Acme / personalized sales page" | private |

## Ambiguity handling

If intent is ambiguous, ask at most one concise clarification question.

Examples:

```txt
This could be either a FAQ answer or a docs tutorial. Should it be a short answer page or a step-by-step setup guide?
```

```txt
This looks like either a glossary definition or a free tool opportunity. Do you want a definition page or a working tool?
```

If the user says "you decide", choose the path with the highest expected utility and explain briefly.

## Brief creation

When the user gives a natural language request instead of a YAML brief, create a temporary framework-neutral brief before routing.

Minimum fields for a standard page:

```yaml
route: <inferred-or-proposed-route>
pageType: <inferred-page-type>
title: <draft-title>
description: <draft-description>
h1: <draft-h1>
primaryKeyword: <inferred-keyword>
product: <product-if-known>
intent: <search/conversion/support/outbound intent>
noindex: <true|false>
```

Minimum fields for a free tool:

```yaml
route: /tools/<slug>
pageType: free-tool
title: <draft-title>
description: <draft-description>
h1: <draft-h1>
primaryKeyword: <keyword>
product: <product-if-known>
tool:
  category: <generator|converter|analyzer|calculator|previewer|validator|other>
  input: []
  output: []
  logic: <draft logic>
  privacy: <privacy behavior>
```

Show the brief only when useful or when asking for approval. Otherwise proceed with the selected skill.

## Default follow-up chain

For page/tool generation requests, default to:

```txt
1. selected generator skill
2. skills/qa.md
3. skills/update-discovery-files.md when indexability/routes changed
```

For alternatives/comparisons, ensure `skills/qa.md` runs the claim-check subroutine.

For private pages, ensure `noindex,nofollow` and sitemap exclusion.

For free tools, ensure the tool gives first value without signup.

## Output

When routing, report the selected path clearly:

```md
# Sitewright Routing

Intent: <inferred intent>
Selected skill: <skill>
Selected playbook/mode: <playbook or mode>
Reason: <one sentence>

Next: <what will be done>
```

Then execute or propose the next step depending on user approval/context.

## Rules

- Do not make the user remember page types, tool categories, or modes.
- Do not bypass the underlying skills/playbooks.
- Do not reduce QA requirements for convenience.
- Do not generate pages without a real search, conversion, support, or outbound intent.
- Ask one clarification question when ambiguity materially affects output quality.
- Prefer explicit user-provided routes/briefs over inference.
