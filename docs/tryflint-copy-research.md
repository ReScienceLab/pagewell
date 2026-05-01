# TryFlint copy research notes

Research date: 2026-05-01
Source reviewed: `https://www.tryflint.com/sitemap.xml` plus page HTML for the 110 unique URLs listed there.

## Sitemap inventory

| Area | Count | What Flint uses it for |
|---|---:|---|
| Homepage | 1 | Broad pain-led positioning, primary CTA, proof, product promise. |
| Product | 2 | MCP/API positioning and integration-led product education. |
| Solutions | 6 | Use-case pages for ad pages, ABM microsites, GEO pages, agency partners, and landing-page builder intent. |
| Comparisons | 11 | High-intent pages against web builders, AI app builders, personalization tools, and coding assistants. |
| Customers | 7 | Outcome-led case studies with numbers in the headline. |
| Docs/guides | 49 | Product education, implementation, setup, integrations, and playbooks. |
| Blog | 20 | Thought leadership, statistics posts, alternatives posts, announcements, and problem education. |
| Webinars | 3 | Campaign pages for timely topics. |
| Programs/misc/legal/security | 11 | Partner/startup programs, sales, careers, audit, security, privacy, and terms. |

## Copy patterns worth adapting for Pagewell

1. **Lead with the workflow bottleneck, not the product category.** Flint frames the pain as campaigns moving faster than pages. Pagewell should frame the pain as SEO/GEO/content requests moving faster than a repo can safely absorb.
2. **Make speed credible with control.** Flint pairs “minutes” with brand, publishing, and production controls. Pagewell should pair agent speed with SITE_PROFILE.md, DESIGN.md, product facts, QA gates, schema, and discovery updates.
3. **Turn page types into use cases.** Flint has dedicated pages for ad landing pages, ABM, GEO, comparisons, docs, and audits. Pagewell should clearly name the page types it can generate: landing, comparison, docs, FAQ, glossary, free tools, and private ABM.
4. **Use concrete artifacts as proof when customer proof is not available.** Flint uses case-study numbers. Pagewell is early, so copy should avoid invented performance claims and instead show tangible outputs: route code, metadata, JSON-LD, internal links, QA notes, sitemap/discovery updates.
5. **Use comparisons to define the category.** Flint compares itself against Webflow, Framer, Mutiny, Lovable, Wix, Unbounce, and Claude Code. Pagewell’s future comparison pages should explain “repo-native agent workflow” vs hosted builders, no-code CMSs, and generic coding agents.
6. **Make docs part of the acquisition surface.** Flint’s docs cover setup, publishing, assets, APIs/MCP, analytics, forms, and playbooks. Pagewell should invest in docs and examples for Astro, Next.js, Cloudflare Workers, static HTML, and page-type workflows.

## Pagewell positioning distilled from the research

- **Audience:** developers, founders, and growth teams using coding agents to ship SEO/GEO, landing, docs, free-tool, and ABM pages.
- **Primary pain:** AI can draft pages quickly, but production sites need stack conventions, design consistency, facts, metadata, schema, internal links, and QA.
- **Core promise:** turn page briefs into normal website code that can be reviewed and merged.
- **Differentiator:** no hosted builder, no visual editor lock-in, no runtime dependency; Pagewell runs as an agent skill pack inside the existing repo.
- **Proof style for now:** artifact-based proof, not invented metrics.

## Recommended future Pagewell page map

- `/product` — Pagewell product overview.
- `/use-cases/seo-pages-as-code` — SEO/GEO page generation workflow.
- `/use-cases/free-tools-as-code` — no-signup free-tool pages generated in the repo.
- `/use-cases/private-abm-pages` — noindex account pages for outbound and sales follow-up.
- `/compare/pagewell-vs-ai-website-builders` — repo-native workflow vs hosted AI builders.
- `/compare/pagewell-vs-generic-coding-agents` — page-generation skills and QA vs blank-prompt coding.
- `/docs/getting-started` — required files and first page.
- `/docs/adapters` — Astro, Next.js, Cloudflare Worker, static HTML, unknown framework.
- `/tools/page-brief-generator` — free tool for generating Pagewell briefs.
