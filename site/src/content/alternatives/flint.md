---
title: "Pagewell vs Flint: Repo or platform?"
description: "Keep your pages in your repo, or move them to a hosted platform. Here's how to choose."
canonical: "/alternatives/flint"
eyebrow: "Comparison"
h1: "Pagewell vs Flint: Keep pages in your repo, or use a platform?"
lede: "Both help you ship more pages. The difference is where those pages live: in your repo with Pagewell, or on Flint's platform."
directAnswer: "Choose Pagewell when your website already lives in a repo and page generation should produce reviewable code changes. Choose Flint when the team wants a hosted platform for page creation, editing, publishing, and GTM workflows outside the existing codebase."
primaryCta:
  label: "Install Pagewell"
  command: "bunx skills add ReScienceLab/pagewell --skill pagewell"
secondaryCta:
  label: "Read setup doc"
  href: "/docs/setup-pagewell"
highlights:
  - kicker: "Pagewell"
    title: "Stays in your repo"
    text: "Best fit when agents should edit the existing codebase and produce routes, content, components, metadata, schema, QA notes, and discovery updates."
  - kicker: "Flint"
    title: "Hosted platform"
    text: "Best fit when teams want an integrated platform for brand import, page creation, editing, hosting, publishing, and GTM workflows."
  - kicker: "Decision"
    title: "Choose by where you want control"
    text: "The practical question is whether your source of truth should remain in the repo or move into a managed page platform."
sections:
  - eyebrow: "Decision summary"
    heading: "Start with where your website changes should live."
    body: "If marketing pages must be normal code reviewed through your existing repo, Pagewell is the more natural architecture. If the team wants a hosted product surface that handles page creation, editing, hosting, and GTM integrations together, Flint may fit better."
  - eyebrow: "Comparison table"
    heading: "Different systems for different operating models."
    rows:
      - ["Dimension", "Pagewell", "Flint"]
      - ["System of record", "Existing website repo", "Hosted Flint platform"]
      - ["Primary user", "Coding agents with developer review", "Marketing and GTM teams using a product UI/API"]
      - ["Design source", "DESIGN.md plus existing site components", "Brand import from an existing website"]
      - ["Output", "Normal code/content changes", "Pages managed and hosted through Flint"]
      - ["Best-fit motion", "SEO/GEO pages, docs, free tools, and repo-native page clusters", "Ad pages, ABM pages, GEO pages, and programmatic hosted campaigns"]
  - eyebrow: "Choose Pagewell when"
    heading: "The repo needs to stay the source of truth."
    bullets:
      - "Your team wants to review page changes as diffs before merge."
      - "Generated pages must reuse existing layouts, components, static generation, and deployment conventions."
      - "You want explicit claim checks, anti-generic QA, and discovery updates documented in the same repo."
      - "Free tools or docs need to live beside the product website code rather than in a hosted page builder."
  - eyebrow: "Choose Flint when"
    heading: "The marketing team needs an integrated page platform."
    bullets:
      - "Marketers need a dedicated UI for creating and editing pages without opening a repo."
      - "Hosted page workflows, brand import, publishing, and GTM integrations are the main requirement."
      - "ABM or ad-page operations need a managed product surface rather than repo-based code review."
related:
  - label: "Pagewell product page"
    href: "/products/pagewell"
    text: "Learn what Pagewell does and does not do."
  - label: "Generate SEO pages as code"
    href: "/use-cases/generate-seo-pages-as-code"
    text: "See the repo-native use case in detail."
  - label: "llms.txt validator"
    href: "/tools/llms-txt-validator"
    text: "Try the free AI discovery validator."
faqs:
  - question: "Is Pagewell a Flint alternative?"
    answer: "Only for teams that specifically want repo-native agent workflows. Flint is a hosted autonomous web platform; Pagewell is a skill pack that operates inside an existing website repo."
  - question: "When should I choose a hosted platform like Flint?"
    answer: "A hosted platform can be a better fit when marketers need an integrated editing, hosting, publishing, and workflow surface without working in a codebase."
  - question: "When should I choose Pagewell?"
    answer: "Choose Pagewell when your site already lives in code and you want agents to create routes, components, metadata, schema, and discovery updates as reviewable repo changes."
finalCta:
  eyebrow: "Install Pagewell"
  heading: "Ready to compare on your own site?"
  copy: "Add Pagewell to your repo and generate comparison pages that cite real product facts from your own context files."
---
