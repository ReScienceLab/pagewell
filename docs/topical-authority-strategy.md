# Topical Authority Strategy

Sitewright builds topical authority through connected clusters of useful pages, not isolated one-off landing pages.

## Principle

Each page should target one clear intent:

- a product/entity query
- a specific workflow/use case
- a searched question
- a domain term/definition
- a practical free tool query
- a comparison/alternative decision
- a technical task/tutorial

Short pages are acceptable when they fully satisfy a narrow query. Thin, duplicative, or unhelpful pages are not.

## Cluster model

A healthy cluster includes:

```txt
Product/hub page
├─ Use-case pages
├─ FAQ pages
├─ Glossary pages
├─ Free tools
├─ Docs/tutorials
└─ Alternatives/comparisons
```

Each supporting page should link back to the hub/product page. The hub should link to the strongest supporting pages.

## Page roles

| Page type | Role |
|---|---|
| Product | canonical product/entity page |
| Use case | long-tail workflow intent |
| FAQ | exact question intent |
| Glossary | definition and topical vocabulary |
| Free tool | utility intent and backlinks/trust |
| Docs | task completion and developer/support intent |
| Alternative | high-intent decision/comparison |

## Workflow

1. Pick a product or seed topic.
2. Define ICP and jobs-to-be-done.
3. Inventory existing coverage.
4. Run `skills/plan-topic-cluster.md`.
5. Generate only the highest-signal pages first with `skills/generate-page.md` or `skills/generate-free-tool.md`.
6. Run `skills/seo-ops.md` internal-link mode.
7. Monitor with `skills/seo-ops.md` maintenance mode.
8. Expand based on real Search Console queries.

## Guardrails

- Do not generate pages just for volume.
- Avoid near-duplicate pages.
- Avoid unsupported comparison claims.
- Make every page useful on its own.
- Use internal links to help users, not to stuff anchors.
- Prefer data-backed expansion after initial cluster launch.
