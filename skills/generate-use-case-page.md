# Skill: Generate Use-Case Page

## Purpose

Generate an indexable SEO/GEO page for a real job-to-be-done or search intent.

Use-case pages should give a clear answer, explain the problem, map the product to the use case, and convert readers with a relevant CTA.

## Required inputs

- `SITE_PROFILE.md`
- `DESIGN.md`
- canonical product facts
- page brief with route, keyword/intent, audience, product, CTA, and constraints

## Framework-neutral page spec

```yaml
route: /use-cases/<slug>
pageType: use-case
title: <Primary keyword> | <Product or Site>
description: <direct benefit in under ~160 chars>
h1: <Primary keyword>
primaryKeyword: <keyword>
product: <product-slug>
noindex: false
sections:
  - hero
  - direct-answer
  - problem
  - solution
  - how-it-works
  - examples-or-use-cases
  - faq
  - related-links
  - cta
schema:
  - WebPage
  - BreadcrumbList
  - FAQPage
```

## Required structure

1. H1 with the primary keyword.
2. Short direct answer paragraph in the first screen.
3. Problem section.
4. How the product solves the problem.
5. How it works / steps.
6. Practical use cases or examples.
7. FAQ section.
8. Internal links.
9. CTA.

## Content rules

- The page must satisfy the query directly, not just sell.
- Use the product as the solution only where it naturally fits.
- Include commands, examples, or concrete workflows when available.
- Avoid thin pages; if there is not enough substance, ask for more input instead of generating.

## Implementation rules

- Read the recommended adapter from `SITE_PROFILE.md`.
- Follow existing route/content conventions.
- Reuse existing components and layout.
- Do not create a new design language.

## SEO/GEO rules

- Use the primary keyword in title, H1, intro, and at least one subheading where natural.
- Include canonical URL.
- Include visible FAQ and matching FAQ schema when relevant.
- Add related internal links to product, adjacent use-case, and alternative pages.
- Keep copy factual and citation-friendly.

## Acceptance criteria

- Page exists at requested route.
- It answers the intent within the first 150 words.
- It links to the product page and at least one related page where available.
- It passes `qa-page.md`.
