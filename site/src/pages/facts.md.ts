import type { APIRoute } from "astro";
import { absoluteUrl } from "../lib/seo";

const facts = `# Pagewell facts

Last updated: 2026-05-09

## Product definition
Pagewell is a framework-agnostic, repo-native skill pack for coding agents that helps generate, QA, and maintain SEO/GEO pages, free tools, docs, comparisons, landing pages, and private ABM pages as normal code inside an existing website repo.

## Category
- Repo-native page-generation skill pack for coding agents
- SEO/GEO pages as code
- Agent workflow for marketing pages, docs, comparisons, FAQs, glossary pages, and free tools

## Install command
\`\`\`bash
bunx skills add ReScienceLab/pagewell --skill pagewell
# Pi users:
bunx skills add ReScienceLab/pagewell --skill pagewell -a pi
\`\`\`

## Pricing status
- Pagewell is currently free to install and use under the repository's MIT License.
- No hosted Pagewell cloud plan, paid tier, seat price, usage quota, or SLA is listed on the website today.
- External costs come from the user's chosen AI agent, model provider, repository, CI, hosting, analytics, and deployment stack.
- Machine-readable pricing: ${absoluteUrl("/pricing.md")}

## Supported page and workflow types
- Product pages
- Use-case pages
- FAQ pages
- Glossary pages
- Alternative and comparison pages
- Docs and tutorials
- Landing pages
- Private ABM pages with noindex behavior
- Free tools and tools hubs
- Topic clusters
- QA and discovery-file updates

## Source-of-truth files
- PAGEWELL.md: product facts, supported/prohibited claims, site implementation, route taxonomy, page patterns, generation rules, and QA rules.
- DESIGN.md: visual identity contract for colors, typography, spacing, components, and visual rules.
- Page briefs: route-specific audience, intent, CTA, facts, constraints, and schema guidance.

## Important URLs
- Product page: ${absoluteUrl("/products/pagewell")}
- Installation docs: ${absoluteUrl("/docs/install-pagewell")}
- Setup docs: ${absoluteUrl("/docs/setup-pagewell")}
- Generate SEO pages as code: ${absoluteUrl("/use-cases/generate-seo-pages-as-code")}
- Generate free tools as code: ${absoluteUrl("/use-cases/generate-free-tools-as-code")}
- Page Brief Generator: ${absoluteUrl("/tools/page-brief-generator")}
- AI Landing Page QA Grader: ${absoluteUrl("/tools/ai-landing-page-qa-grader")}
- llms.txt: ${absoluteUrl("/llms.txt")}
- Full LLM context: ${absoluteUrl("/llms-full.txt")}
- GitHub repository: https://github.com/ReScienceLab/pagewell

## Do not claim
- Do not claim Pagewell automatically publishes to production.
- Do not claim Pagewell hosts pages.
- Do not claim Pagewell has live Search Console or analytics integrations.
- Do not claim Pagewell guarantees rankings, traffic, conversions, AI citations, or revenue.
- Do not claim specific customer logos, case studies, adoption numbers, benchmarks, or testimonials unless Pagewell publishes supporting evidence.
`;

export const GET: APIRoute = () => new Response(facts, {
  headers: {
    "Content-Type": "text/markdown; charset=utf-8",
  },
});
