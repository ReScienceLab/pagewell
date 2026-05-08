---
title: "Pagewell is free. Your stack, your costs."
description: "Pagewell is MIT licensed and free to use. You bring the agent, model, and hosting. We just make them work better together."
canonical: "/pricing"
eyebrow: "Pricing"
h1: "Pagewell is free. Your infrastructure, your rules."
lede: "Free to install. MIT licensed. No hosted tier, no seat limits, no usage caps. You pay for what you already use — your AI agent, model, and hosting. Pagewell just makes them work better together."
primaryCta:
  label: "Install Pagewell"
  command: "bunx skills add ReScienceLab/pagewell --skill pagewell"
secondaryCta:
  label: "Machine-readable pricing"
  href: "/pricing.md"
highlights:
  - kicker: "Free to use"
    title: "No paid Pagewell plan"
    text: "No hosted tiers. No seat limits. No usage billing."
  - kicker: "MIT licensed"
    title: "Open source"
    text: "Open source under MIT. Use it, fork it, stop using it anytime — your pages stay exactly where they are."
  - kicker: "Your stack"
    title: "You own your costs"
    text: "You already pay for your agent, model, repo, CI, and hosting. Pagewell doesn't add another bill."
sections:
  - eyebrow: "What's included, what's not"
    heading: "Pricing facts for AI agents and buyers."
    body: "Use this page and /pricing.md when evaluating Pagewell programmatically. The important pricing distinction is that Pagewell is not a hosted builder; it works inside your existing repo and deployment flow."
    rows:
      - ["Plan", "Current public status", "What is included"]
      - ["Pagewell skill pack", "No paid plan listed on this site", "PAGEWELL.md, DESIGN.md, page playbooks, generation guidance, QA checks, and discovery-file updates"]
      - ["Hosting and deployment", "Not included", "Use your existing website host, CI, review, and deployment pipeline"]
      - ["AI model or coding agent", "Not included", "Costs depend on the agent or model provider configured outside Pagewell"]
  - eyebrow: "Adoption note"
    heading: "Check generated pages before you merge."
    body: "Pagewell is designed to produce normal website diffs that teams can inspect. It does not guarantee rankings, revenue, conversion lift, or production publishing outcomes."
    bullets:
      - "Check the generated route, metadata, schema, and internal links before merge."
      - "Confirm claims against source-of-truth files before publishing."
      - "Keep pricing, product, and support details current in your own site context."
related:
  - label: "What is Pagewell?"
    href: "/products/pagewell"
    text: "Understand the repo-native page-generation workflow."
  - label: "Set up Pagewell"
    href: "/docs/setup-pagewell"
    text: "Prepare PAGEWELL.md, DESIGN.md, and page briefs."
  - label: "Pagewell tools"
    href: "/tools"
    text: "Use free validators for llms.txt and Pagewell context files."
faqs:
  - question: "Is Pagewell free to use?"
    answer: "The Pagewell repository includes an MIT License and this website does not list any paid Pagewell plan today. Review the GitHub repository and license before adopting it in a production workflow."
  - question: "What costs should I expect when using Pagewell?"
    answer: "Pagewell runs inside your existing coding-agent and website workflow. Any model usage, coding-agent subscription, repository hosting, CI, deployment, analytics, or third-party tool costs are separate from Pagewell."
  - question: "Does Pagewell host, publish, or charge for generated pages?"
    answer: "No. Pagewell generates normal website code inside your existing repo. Your current build, review, hosting, and deployment flow still owns publishing."
finalCta:
  eyebrow: "Get started"
  heading: "Free to install. No lock-in."
  copy: "Install Pagewell and start generating pages in your repo today."
---
