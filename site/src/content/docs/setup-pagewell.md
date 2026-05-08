---
title: "Set up Pagewell in three steps"
description: "Install Pagewell, discover your repo, and create PAGEWELL.md — so every future page uses real product facts and follows your conventions."
canonical: "/docs/setup-pagewell"
eyebrow: "Docs"
h1: "Set up Pagewell in three steps."
lede: "Install the skill, let Pagewell inspect your repo, and create PAGEWELL.md — the single source of truth your agent needs before generating any page."
primaryCta:
  label: "Install Pagewell"
  command: "bunx skills add ReScienceLab/pagewell --skill pagewell"
secondaryCta:
  label: "View generated product page"
  href: "/products/pagewell"
highlights:
  - kicker: "Step 01"
    title: "Install"
    text: "Add Pagewell through skills.sh so the router and packaged references are available to your coding agent."
  - kicker: "Step 02"
    title: "Discover"
    text: "Let discover-site inspect repo files, legacy product facts, routes, components, metadata, and page patterns."
  - kicker: "Step 03"
    title: "Generate"
    text: "Future runs read PAGEWELL.md and DESIGN.md before selecting a page playbook and adapter."
sections:
  - eyebrow: "Quickstart"
    heading: "Run the installer, then ask Pagewell to discover the repo."
    codeTitle: "terminal"
    codeLines:
      - "bunx skills add ReScienceLab/pagewell --skill pagewell"
      - "# Pi users:"
      - "bunx skills add ReScienceLab/pagewell --skill pagewell -a pi"
      - ""
      - "# Then ask your agent:"
      - "Use Pagewell to discover this repo and create PAGEWELL.md."
  - eyebrow: "Context file"
    heading: "PAGEWELL.md is the Pagewell memory for the repo."
    body: "The discover-site skill should consolidate product facts, supported and prohibited claims, site implementation details, route taxonomy, page/component patterns, generation rules, anti-generic QA rules, and QA rules."
    bullets:
      - "Capture framework, routing, metadata, component, and deployment conventions in the site implementation section."
      - "Import products.yaml or other product data into product facts and supported claims."
      - "Inventory reusable page patterns from existing routes and components."
      - "Mark uncertain facts as unknown instead of letting future generation invent them."
  - eyebrow: "Required context"
    heading: "Generation now has two durable inputs before the brief."
    rows:
      - ["File", "Purpose", "Why it's separate"]
      - ["DESIGN.md", "Visual identity contract", "External spec and linter"]
      - ["PAGEWELL.md", "Product, site, patterns, claims, and QA truth", "Pagewell-specific repo context"]
      - ["Page brief", "Route, intent, audience, CTA, and constraints", "Varies by request"]
  - eyebrow: "Verification"
    heading: "Confirm the package and site before trusting generation."
    codeTitle: "checks"
    codeLines:
      - "bun run build:skill"
      - "bun run check:skill"
      - "bun run lint:design"
      - "bun run build:site"
      - "bun run check:site"
related:
  - label: "PAGEWELL.md validator"
    href: "/tools/pagewell-context-validator"
    text: "Check context sections before asking an agent to generate routes."
  - label: "Page brief generator"
    href: "/tools/page-brief-generator"
    text: "Create a route-specific brief after the repo context is ready."
  - label: "Generate SEO pages as code"
    href: "/use-cases/generate-seo-pages-as-code"
    text: "The primary repo-native use case."
faqs:
  - question: "What does PAGEWELL.md contain?"
    answer: "PAGEWELL.md is the default Pagewell context file. It contains product truth, site implementation details, route patterns, supported claims, generation rules, and QA expectations for future runs."
  - question: "Why keep DESIGN.md separate?"
    answer: "DESIGN.md follows an external Google Labs Code spec and can be linted independently. PAGEWELL.md references it instead of duplicating the design token contract."
  - question: "What happens on the first Pagewell run?"
    answer: "The router checks for PAGEWELL.md and DESIGN.md. If PAGEWELL.md is missing, it routes to discover-site to inspect the repo and create the unified context file."
finalCta:
  eyebrow: "Set up Pagewell"
  heading: "Ready to set up your repo context?"
  copy: "Install Pagewell and run discover-site to create PAGEWELL.md so every future page uses real product facts."
---
