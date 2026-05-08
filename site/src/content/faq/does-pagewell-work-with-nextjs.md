---
title: "Does Pagewell Work with Next.js? - Yes, via Adapter Guidance"
description: "Pagewell works with Next.js by following the repo's App Router or Pages Router conventions, metadata patterns, and existing components."
canonical: "/faq/does-pagewell-work-with-nextjs"
eyebrow: "FAQ"
h1: "Does Pagewell work with Next.js?"
lede: "Yes. Pagewell is framework-agnostic and includes Next.js adapter guidance, so the agent should follow the target repo's App Router or Pages Router conventions, metadata patterns, components, and styling rules."
primaryCta:
  label: "Install Pagewell"
  command: "bunx skills add ReScienceLab/pagewell --skill pagewell"
secondaryCta:
  label: "Astro support"
  href: "/faq/can-i-use-pagewell-with-astro"
highlights:
  - kicker: "Adapter-based"
    title: "Pagewell does not assume Astro"
    text: "The router selects the closest adapter from the discovered repo context. Next.js repos should use the Next.js adapter guidance."
  - kicker: "Repo conventions"
    title: "App Router and Pages Router are different"
    text: "Pagewell should detect whether routes live in app/**/page.* or pages/* and implement the page using that site's convention."
  - kicker: "Same QA"
    title: "Metadata, schema, and claims still matter"
    text: "Next.js pages need the same Pagewell QA: title, description, canonical, crawlability, schema, internal links, and supported claims."
sections:
  - eyebrow: "Direct answer"
    heading: "Pagewell can generate pages in a Next.js repo when the repo conventions are clear."
    body: "The discovery step should record whether the project uses App Router, Pages Router, MDX/content files, route handlers, shared layouts, and metadata helpers. Generation then follows those patterns instead of introducing a new structure."
  - eyebrow: "What Pagewell checks"
    heading: "The context file should tell the agent where pages and metadata belong."
    rows:
      - ["Area", "What to document", "Why"]
      - ["Routes", "app/**/page.* or pages/*", "Prevents files from landing in the wrong router"]
      - ["Metadata", "metadata exports, head helpers, SEO components, or layout conventions", "Keeps titles, descriptions, canonicals, and Open Graph consistent"]
      - ["Content", "MDX/content folders or inline page components", "Matches how the existing site publishes durable pages"]
      - ["Styling", "CSS modules, global CSS, Tailwind, design tokens, or component library", "Avoids one-off visual systems"]
  - eyebrow: "Recommended prompt"
    heading: "Ask Pagewell to discover the Next.js site before generating pages."
    codeTitle: "agent prompt"
    codeLines:
      - "Use Pagewell to discover this Next.js repo and create PAGEWELL.md."
      - "Detect App Router vs Pages Router, metadata conventions, route patterns, components, styling, and discovery files."
      - "Then generate /use-cases/<slug>, run QA, and update sitemap/robots/llms.txt if the page is indexable."
related:
  - label: "Can I use Pagewell with Astro?"
    href: "/faq/can-i-use-pagewell-with-astro"
    text: "The same adapter logic applied to Astro repos."
  - label: "Set up Pagewell"
    href: "/docs/setup-pagewell"
    text: "Create the repo context before generation."
  - label: "Install Pagewell"
    href: "/docs/install-pagewell"
    text: "Add the skill to your coding agent."
faqs:
  - question: "Does Pagewell work with Next.js?"
    answer: "Yes. Pagewell is framework-agnostic and includes Next.js adapter guidance. It should follow the target repo's App Router or Pages Router conventions instead of forcing a new page structure."
---
