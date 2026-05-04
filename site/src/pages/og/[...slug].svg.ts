import type { APIRoute, GetStaticPaths } from "astro";

const pages = [
  { slug: "home", title: "Turn page briefs into production website code", eyebrow: "Pagewell" },
  { slug: "products/pagewell", title: "Repo-native SEO page generation", eyebrow: "Product" },
  { slug: "use-cases/generate-seo-pages-as-code", title: "Generate SEO pages as code", eyebrow: "Use case" },
  { slug: "use-cases/generate-free-tools-as-code", title: "Generate free tools as code", eyebrow: "Use case" },
  { slug: "docs/install-pagewell", title: "Install the Pagewell agent skill", eyebrow: "Docs" },
  { slug: "docs/setup-pagewell", title: "Set up PAGEWELL.md context", eyebrow: "Docs" },
  { slug: "alternatives/flint", title: "Pagewell vs Flint", eyebrow: "Comparison" },
  { slug: "faq/can-i-use-pagewell-with-astro", title: "Can I use Pagewell with Astro?", eyebrow: "FAQ" },
  { slug: "faq/does-pagewell-work-with-nextjs", title: "Does Pagewell work with Next.js?", eyebrow: "FAQ" },
  { slug: "faq/what-is-pagewell-md", title: "What is PAGEWELL.md?", eyebrow: "FAQ" },
  { slug: "glossary/generative-engine-optimization", title: "Generative Engine Optimization", eyebrow: "Glossary" },
  { slug: "tools", title: "Free Pagewell tools", eyebrow: "Tools" },
  { slug: "pricing", title: "Transparent repo-native pricing", eyebrow: "Pricing" },
  { slug: "tools/llms-txt-validator", title: "llms.txt Validator", eyebrow: "Free tool" },
  { slug: "tools/pagewell-context-validator", title: "PAGEWELL.md Validator", eyebrow: "Free tool" },
];

type OgPage = (typeof pages)[number];

function escapeXml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function wrapText(value: string, maxLineLength = 20) {
  const words = value.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxLineLength && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 3);
}

function ditherField() {
  const dots: string[] = [];
  for (let row = 0; row < 17; row += 1) {
    for (let col = 0; col < 23; col += 1) {
      const cx = 730 + col * 20;
      const cy = 92 + row * 20;
      const wave = Math.sin((row * 0.9 + col * 0.6) * 0.9);
      const falloff = Math.max(0, 1 - (row + col * 0.38) / 24);
      const radius = Math.max(1.2, 5.2 * falloff + wave * 1.1);
      const opacity = Math.max(0.05, Math.min(0.45, falloff * 0.46));
      dots.push(`<circle cx="${cx}" cy="${cy}" r="${radius.toFixed(1)}" fill="#0099ff" fill-opacity="${opacity.toFixed(2)}"/>`);
    }
  }
  return dots.join("\n  ");
}

function asciiTexture() {
  const rows = [
    "PAGEWELL.md  DESIGN.md  BRIEF.md",
    "route:/pricing  schema:offer  qa:claims",
    "adapter:astro  output:normal-code",
    "llms.txt  sitemap  robots  og/svg",
  ];
  return rows
    .map((row, index) => `<text x="86" y="${486 + index * 24}" class="ascii">${escapeXml(row)}</text>`)
    .join("\n  ");
}

function svg({ title, eyebrow }: OgPage) {
  const lines = wrapText(title);
  const text = lines
    .map((line, index) => `<text x="84" y="${252 + index * 84}" class="title">${escapeXml(line)}</text>`)
    .join("\n  ");
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#000000"/>
  <rect x="40" y="40" width="1120" height="550" rx="20" fill="#030303" stroke="#1b1b1b"/>
  <path d="M781 40H1160V419C1051 322 961 229 781 40Z" fill="#0099ff" fill-opacity="0.08"/>
  ${ditherField()}
  <path d="M77 87H225" stroke="#0099ff" stroke-width="2"/>
  <path d="M77 87V207" stroke="#0099ff" stroke-width="2"/>
  <path d="M1123 543H976" stroke="#0099ff" stroke-width="2"/>
  <path d="M1123 543V424" stroke="#0099ff" stroke-width="2"/>
  <rect x="72" y="451" width="620" height="104" rx="12" fill="#090909" stroke="#1c2b36"/>
  <style>
    .brand{font: 500 28px Inter, system-ui, sans-serif; fill: #ffffff; letter-spacing: -0.03em;}
    .mark{font: 650 28px Geist, Inter, system-ui, sans-serif; fill: #000000;}
    .eyebrow{font: 450 20px 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace; fill: #0099ff; letter-spacing: 0.08em; text-transform: uppercase;}
    .title{font: 650 76px Geist, Inter, system-ui, sans-serif; fill: #ffffff; letter-spacing: -0.055em;}
    .caption{font: 400 24px Inter, system-ui, sans-serif; fill: #a6a6a6;}
    .ascii{font: 450 14px 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace; fill: #a6a6a6; letter-spacing: 0.01em;}
  </style>
  <rect x="84" y="78" width="36" height="36" rx="8" fill="#ffffff"/>
  <text x="94" y="104" class="mark">P</text>
  <text x="136" y="104" class="brand">Pagewell</text>
  <text x="84" y="166" class="eyebrow">${escapeXml(eyebrow)}</text>
  ${text}
  ${asciiTexture()}
  <text x="744" y="537" class="caption">Repo-native SEO/GEO pages, tools, docs, and QA as code.</text>
</svg>`;
}

export const getStaticPaths: GetStaticPaths = () =>
  pages.map((page) => ({ params: { slug: page.slug }, props: page }));

export const GET: APIRoute = ({ props }) =>
  new Response(svg(props as OgPage), {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8" },
  });
