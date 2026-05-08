# Product Marketing Context

*Last updated: 2026-05-04*

> Auto-drafted from the repository README, PAGEWELL.md, DESIGN.md, site pages, docs, playbooks, package metadata, and license. Sections marked unknown or needs validation should be confirmed with customer/user input.

## Product Overview
**One-liner:** Pagewell is a framework-agnostic, repo-native skill pack that helps coding agents generate, QA, and maintain SEO/GEO pages as normal code inside an existing website repo.

**What it does:** Pagewell turns a page brief plus `PAGEWELL.md` and `DESIGN.md` into search-ready website code: routes, components, content, metadata, schema, QA notes, and discovery-file updates. It routes natural-language requests to specialized modules and playbooks for SEO/GEO pages, free tools, docs, landing pages, product pages, use-case pages, comparison pages, FAQs, glossary pages, topic clusters, and private ABM pages. It is designed to keep product facts, design rules, framework conventions, and claim checks explicit before an agent edits a repo.

**Product category:** Repo-native AI page generation; coding-agent skill pack; SEO/GEO pages as code; agent workflow for marketing pages.

**Product type:** Open-source developer tool / installable coding-agent skill pack, with a static marketing/docs site and browser-based free tools.

**Business model:** MIT-licensed repository. The public website does not list a paid Pagewell cloud plan or hosted tier today. Users install through the skills CLI (`bunx skills add ReScienceLab/pagewell --skill pagewell`); external AI model, coding-agent, CI, hosting, analytics, and deployment costs are separate.

## Target Audience
**Target companies:**
- Developers and founders maintaining marketing sites in code.
- Growth, SEO, and content teams that already work with coding agents or developer review.
- Agencies shipping SEO/GEO pages, free tools, docs, and comparison pages for clients.
- Technical SaaS/software teams that want acquisition pages without moving the site into a hosted builder.

**Decision-makers:** Founders, technical founders, engineering leads, developer-marketers, growth leads, SEO leads, content operations leads, and agency owners.

**Primary use case:** Turn a content plan, page brief, or natural-language page request into production-ready website code while preserving repo ownership, brand rules, factual claims, SEO basics, and code review.

**Jobs to be done:**
- Give coding agents durable context and guardrails before they generate or edit marketing pages.
- Ship SEO/GEO pages, docs, comparisons, FAQs, glossary pages, topic clusters, and free tools faster as normal repo changes.
- Keep design, framework conventions, metadata, schema, crawlability, claims, and discovery files aligned.
- Avoid generic AI landing pages and unsupported claims.

**Use cases:**
- Generate SEO/GEO pages as code.
- Generate no-signup free tools as code.
- Create and validate `PAGEWELL.md` repo context.
- Create page briefs before generation.
- QA generated landing pages for genericness, unsupported claims, CTA clarity, metadata, schema, and discovery readiness.
- Build product, use-case, docs, FAQ, glossary, comparison, LP/campaign, private ABM, and tools-hub routes.
- Maintain internal links, titles, sitemap, robots, and `llms.txt`/AI discovery files.

## Personas
| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| Developer / coding-agent operator | Clean diffs, framework conventions, reusable components, build safety | AI-generated pages can ignore stack patterns, duplicate UI, or break metadata/schema | Pagewell reads repo context, uses adapters, generates normal code/content, and runs QA before completion |
| Growth or SEO lead | Search visibility, page velocity, topical authority, AI-answer readiness | Content maps turn into slow tickets, generic pages, or incomplete SEO implementation | Turn briefs into search-ready routes with metadata, schema, internal links, FAQs, and discovery updates |
| Founder / technical founder | Fast acquisition experiments without lock-in | No-code builders move source of truth outside the repo; manual implementation is slow | Keep the website repo as the system of record while using agents to ship more page work |
| Agency lead | Repeatable client delivery, quality control, claim safety | Each client stack and brand requires different conventions; generic generation risks trust | Use `PAGEWELL.md`, `DESIGN.md`, page playbooks, adapters, and QA gates as a repeatable delivery system |
| Engineering lead / technical influencer | Maintainability, reviewability, no runtime surprises | Marketing tooling can introduce external runtimes, hidden hosting, or publishing workflows | Pagewell is not a hosted builder; it produces reviewable repo changes and does not auto-publish |

## Problems & Pain Points
**Core problem:** Teams have content plans and page ideas, but turning them into production website pages is slow, inconsistent, or risky because implementation must handle route conventions, components, design, metadata, schema, claims, internal links, sitemap/discovery files, and code review.

**Why alternatives fall short:**
- Ad hoc coding-agent prompts lack durable product facts, design rules, page-type playbooks, and QA gates.
- Hosted/no-code page builders can be fast but move the page system out of the repo and create lock-in for teams that want code ownership.
- CMS-only workflows may manage content but do not automatically enforce framework-specific implementation, schema, claim checking, discovery files, or anti-generic QA.
- Manual developer tickets preserve quality but slow down SEO/GEO page velocity.

**What it costs them:** Delayed page launches, missed search demand, missed AI-answer visibility, more engineering handoff, inconsistent brand execution, unsupported claims, broken SEO basics, duplicated components, and loss of repo/source-of-truth control.

**Emotional tension:** Frustration that “the content plan is ready” but the repo is not; concern about generic AI slop; anxiety about agents inventing claims or breaking the site; fear of no-code/builder lock-in; pressure to ship more acquisition pages without lowering quality.

## Competitive Landscape
**Direct:** DIY coding-agent prompts or internal page-generation playbooks — falls short because quality depends on remembering the right context, page-type rules, adapters, and QA checks in every prompt.

**Direct/adjacent:** Other agent-based page-generation workflows — falls short for Pagewell’s ideal users when they do not keep `PAGEWELL.md`, `DESIGN.md`, route taxonomy, claim rules, adapters, and discovery updates as explicit repo-native source files.

**Secondary:** Hosted AI landing-page builders and autonomous web platforms such as Flint — fall short for repo-native teams because the editing, hosting, publishing, or page-management surface may live outside the existing website repo.

**Secondary:** Traditional CMS/no-code site builders — fall short when teams need generated output to be normal code reviewed through the current stack.

**Indirect:** Manual developer implementation through tickets — falls short because it preserves control but slows page velocity and repeats the same SEO/schema/discovery work.

## Differentiation
**Key differentiators:**
- Repo-native: outputs normal website code or content in the existing repo.
- Framework-agnostic: adapter guidance for Astro, Next.js, Cloudflare Workers, static HTML, and unknown/custom frameworks.
- Context-first: uses `PAGEWELL.md` for product/site/claim/page-pattern truth and `DESIGN.md` for visual identity.
- Playbook-driven: supports product, use-case, FAQ, glossary, alternatives/comparisons, docs, LP/campaign, private ABM, topic clusters, free tools, and tools hubs.
- QA built into the workflow: metadata, schema, crawlability, claims, design consistency, conversion, private page behavior, discovery files, and anti-generic checks.
- No hosted builder runtime, no auto-publishing, and no lock-in.
- Free-tool workflow requires first value before signup.

**How we do it differently:** Pagewell routes a natural-language request to the correct module/playbook, creates a framework-neutral spec, reads durable repo context, implements using the current site’s conventions, then runs QA and updates discovery files when relevant.

**Why that's better:** Teams get AI-assisted page velocity without surrendering source control, design consistency, claim safety, SEO fundamentals, or code review.

**Why customers choose us:** They want agents to create real website diffs—not mockups, hosted artifacts, or generic landing pages—and they need those diffs to respect the repo, brand, page patterns, and search/discovery requirements.

## Objections
| Objection | Response |
|-----------|----------|
| “Why not just prompt a coding agent directly?” | You can, but Pagewell packages the recurring context, playbooks, adapters, and QA gates so quality does not depend on one long prompt every time. |
| “We do not use Astro.” | Pagewell is framework-agnostic. Current adapters cover Astro, Next.js, Cloudflare Workers, static HTML, and unknown/custom frameworks, and agents should follow the target repo’s existing conventions. |
| “Will this guarantee rankings, AI citations, or conversions?” | No. Pagewell does not guarantee rankings, traffic, revenue, AI citations, or conversion lift. It helps enforce the fundamentals: intent, metadata, schema, crawlability, facts, links, and quality gates. |
| “Can marketers use it without developers?” | Pagewell is best when the site lives in a repo and changes are reviewed like code. If the team needs a visual no-code UI and hosted publishing, a hosted platform may be a better fit. |
| “Does Pagewell publish pages for me?” | No. It generates normal code/content in the existing repo. The user’s build, review, hosting, and deployment workflow still owns publishing. |

**Anti-persona:** Teams that want a purely no-code visual builder, a hosted CMS/page platform, automatic publishing, guaranteed rankings, mass low-quality page generation, or marketers with no access to a repo/coding-agent workflow.

## Switching Dynamics
**Push:** Content maps become developer tickets; ad hoc AI pages are generic; no-code builders create repo/source-of-truth friction; SEO/schema/discovery tasks are easy to miss; unsupported claims create review risk.

**Pull:** Installable skill pack; repo-native output; explicit `PAGEWELL.md` and `DESIGN.md` context; framework adapters; page-type playbooks; QA gates; discovery updates; free tools that work before signup.

**Habit:** Manual implementation, CMS workflows, hosted landing-page builders, spreadsheets/docs for content maps, copy-pasting long prompts into coding agents, and relying on human reviewers to remember every SEO/schema/claim check.

**Anxiety:** Setup may take time; agents may edit too much; custom frameworks may not fit documented adapters; generated pages might still feel generic; SEO or claims could be harmed if QA is skipped; non-technical stakeholders may prefer a visual editor.

## Customer Language
**How they describe the problem:**
- “Your content plan is ready. Your website repo should be too.”
- “SEO plans usually become a pile of tickets.”
- “A content map may be clear, but implementation still has to cross framework details, component reuse, metadata, schema, canonical URLs, internal links, and discovery files.”
- “Marketing pages need to ship faster but still belong in the existing codebase.”
- “Fast pages still need gates.”
- “Generate SEO pages as code without losing control of the repo.”

**How they describe us:**
- “Agent skills for production SEO/GEO pages.”
- “Not mockups. Mergeable page work.”
- “A page system for coding agents, not another CMS.”
- “Repo-native skill pack.”
- “Brief → spec → route.”
- “Astro here. Your framework in your repo.”
- “Put the brand rules where agents can follow them.”
- “Start with a working utility, not a signup wall.”

**Words to use:** Repo-native; pages as code; normal website code; coding agents; page brief; brief-to-merge; framework-neutral spec; adapters; playbooks; QA gates; claim checks; anti-generic QA; SEO/GEO; discovery files; `PAGEWELL.md`; `DESIGN.md`; no hosted builder; no lock-in; first value before signup.

**Words to avoid:** Guaranteed rankings; guaranteed traffic; guaranteed AI citations; guaranteed conversions; auto-publishing; hosted builder; no-code editor; visual builder; customer logos; benchmarks; conversion lift; revenue claims; “best”/“#1”/superlatives without proof; unsupported framework/integration claims.

**Glossary:**
| Term | Meaning |
|------|---------|
| `PAGEWELL.md` | Unified Pagewell source of truth for product facts, supported/prohibited claims, site implementation, route taxonomy, page/component patterns, generation rules, and QA rules. |
| `DESIGN.md` | Visual identity contract following the Google Labs Code `DESIGN.md` spec; source of truth for colors, typography, spacing, components, and visual rules. |
| Page brief | Route-specific input that captures audience, intent, page type, keyword/query, CTA, facts, constraints, and schema guidance. |
| Adapter | Framework-specific implementation guidance for the target repo, e.g. Astro, Next.js, Cloudflare Worker, static HTML, or unknown/custom. |
| Playbook | Page-type or workflow coverage rules for generating product pages, use-case pages, docs, FAQs, glossary pages, alternatives, LPs, private pages, free tools, QA, or SEO ops. |
| QA gates | Checks for metadata, schema, crawlability, claims, design consistency, genericness, conversion, private page behavior, and discovery files. |
| Discovery files | Files and outputs that help crawlers/AI systems discover content, such as sitemap, robots, and `llms.txt`. |
| SEO | Search engine optimization for crawlable/indexable search pages. |
| GEO | Generative engine optimization / AI-answer visibility. |
| Private ABM page | Personalized outbound/sales page that should be `noindex,nofollow` and excluded from sitemap/discovery files. |

## Brand Voice
**Tone:** Technical, precise, direct, restrained, and product-forward.

**Style:** Command-forward and concrete. Prefer mechanisms, files, commands, routes, examples, QA gates, and “when to use” framing over abstract benefits or hype. Copy should sound like a developer-grade workflow, not a generic SaaS promise.

**Personality:** Precise; pragmatic; repo-native; anti-generic; trustworthy; tool-obsessed.

## Proof Points
**Metrics:** No customer performance metrics, rankings, traffic numbers, conversion rates, adoption counts, or benchmarks are documented in the repo. Do not invent them.

**Customers:** No public customer logos or named customers are documented in the repo. Do not invent them.

**Testimonials:**
> No documented testimonials yet.

**Value themes:**
| Theme | Proof |
|-------|-------|
| Repo control | README and site copy state Pagewell outputs normal website code/content in the user’s repo with no hosted builder runtime. |
| Framework flexibility | Documented adapters include Astro, Next.js, Cloudflare Worker, static HTML, and unknown/custom frameworks. |
| Context quality | `PAGEWELL.md` and `DESIGN.md` are required context files before generation/QA. |
| Page coverage | Supports product, use-case, FAQ, glossary, alternatives/comparisons, docs, LP/campaign, private ABM, free-tool, tools-hub, and topic-cluster workflows. |
| QA discipline | QA rules cover metadata, schema, crawlability, supported claims, design consistency, conversion, genericness, sitemap/robots/llms behavior, and private-page exclusion. |
| Open-source accessibility | Repository includes an MIT License; public pricing page says no paid Pagewell plan is listed today. |
| Useful free tools | Site includes browser-based tools such as Page Brief Generator, AI Landing Page QA Grader, Metadata + Schema Checker, llms.txt Validator, and PAGEWELL.md Validator. |

## Goals
**Business goal:** Drive adoption of Pagewell as the default repo-native workflow for coding agents that generate, QA, and maintain SEO/GEO pages and free tools as code.

**Conversion action:** Primary: install Pagewell with `bunx skills add ReScienceLab/pagewell --skill pagewell`. Secondary: view GitHub, read setup docs, use free tools, generate page briefs, and validate `PAGEWELL.md`.

**Current metrics:** Unknown / not documented in the repo. Add install counts, GitHub stars, tool usage, docs engagement, conversion rate, Search Console data, or testimonials when available.
