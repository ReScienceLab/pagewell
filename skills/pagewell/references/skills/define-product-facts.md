# Skill: Define Product Facts

## Purpose

Create or normalize the canonical product/company facts used by generated pages.

Generated pages must use this source instead of inventing product claims.

## Inputs

- Existing website content.
- Product websites/docs if available.
- User-provided product facts.
- Existing data files such as `products.ts`, `products.yaml`, `site.ts`, or CMS data.

## Preferred output

If no product facts file exists, create `products.yaml` at repo root.

Example:

```yaml
requesthunt:
  name: RequestHunt
  url: https://requesthunt.com
  category: Feature request discovery
  description: Discover real feature requests from Reddit, X, and GitHub.
  audience:
    - solo founders
    - product builders
    - indie hackers
  command: bunx @resciencelab/requesthunt-mcp-server
  claims:
    - Finds feature requests from Reddit, X, and GitHub.
    - Offers an MCP server install command.
  cta:
    label: Try RequestHunt
    href: https://requesthunt.com
```

If a canonical facts file already exists, update it using the existing format instead.

## Required fields per product

- stable slug/key
- name
- URL
- category
- one-sentence description
- audience
- primary CTA
- install command if applicable
- factual claims
- prohibited/unknown claims if useful

## Rules

- Do not invent claims, metrics, testimonials, customer names, prices, or integrations.
- If a fact is uncertain, mark it as `unknown` or leave it out.
- Keep product descriptions consistent across pages.
- Product facts are the truth source; page copy should reference them.

## Acceptance criteria

- A canonical product facts source exists.
- Each product has enough information to generate product, use-case, LP, docs, and alternative pages.
- Unverified claims are absent or explicitly marked unknown.
