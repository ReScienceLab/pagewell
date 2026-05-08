import type { APIRoute } from "astro";

const body = `# Pricing — Pagewell

Last updated: 2026-05-04

Pagewell is a repo-native agent skill pack for generating, QA'ing, and maintaining SEO/GEO pages as normal website code. This website does not list a hosted Pagewell cloud plan, paid tier, seat price, usage quota, SLA, or managed deployment service today.

## Pagewell skill pack

- Public listed price: No paid Pagewell plan is listed on this website today.
- License signal: The ReScienceLab/pagewell repository includes an MIT License.
- Pagewell install command: bunx skills add ReScienceLab/pagewell --skill pagewell
- Pi install command: bunx skills add ReScienceLab/pagewell --skill pagewell -a pi
- Source: https://github.com/ReScienceLab/pagewell
- Product page: https://pagewell.dev/products/pagewell

## Included workflow coverage

- PAGEWELL.md product and site context
- DESIGN.md visual and UX context
- Page briefs for route, audience, intent, CTA, and constraints
- Page-type playbooks for product, use-case, FAQ, glossary, comparison, docs, LP, private/ABM, free-tool, and tools-hub pages
- QA guidance for metadata, schema, crawlability, claims, design consistency, conversion, and genericness
- Discovery-file guidance for llms.txt, sitemap, robots, and related routes

## External costs not included

- AI coding agent subscriptions or model/API usage
- Repository hosting, CI, preview deployments, production hosting, analytics, or monitoring
- Third-party data sources, design tools, SEO tools, or content workflows
- Human review, copyediting, legal review, or production release work

## Pricing caveats

- Pagewell does not host generated pages.
- Pagewell does not auto-publish production deployments.
- Pagewell does not guarantee rankings, revenue, traffic, conversion lift, or publishing outcomes.
- Review generated code and claims before merging or deploying.
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
