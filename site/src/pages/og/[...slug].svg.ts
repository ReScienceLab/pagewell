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

function blueField() {
  const marks: string[] = [];
  for (let row = 0; row < 24; row += 1) {
    for (let col = 0; col < 30; col += 1) {
      const x = 600 + col * 21 + (row % 2) * 8;
      const y = 22 + row * 25;
      const wave = Math.sin(col * 0.62 + row * 0.48);
      const diagonal = (col - row * 0.58) / 20;
      const band = Math.max(0, 1 - Math.abs(diagonal - 0.62));
      const radius = Math.max(1.1, 7.8 * band + wave * 1.4);
      const opacity = Math.max(0.03, Math.min(0.42, band * 0.34 + 0.05));
      if (band < 0.08 && (row + col) % 5 !== 0) continue;
      marks.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${radius.toFixed(1)}" fill="#0099ff" fill-opacity="${opacity.toFixed(2)}"/>`);
    }
  }
  return marks.join("\n  ");
}

function glyphMist() {
  const rows = ["PAGEWELL  ROUTES  SCHEMA", "////  BRIEF  QA  LLM", "{ metadata }  { claims }", "ASTRO NEXT WORKERS HTML", "SITEMAP ROBOTS OG SVG"];
  return rows
    .map((row, index) => `<text x="716" y="${184 + index * 48}" class="glyph">${escapeXml(row)}</text>`)
    .join("\n  ");
}

function svg({ title, eyebrow }: OgPage) {
  const lines = wrapText(title);
  const text = lines
    .map((line, index) => `<text x="72" y="${250 + index * 84}" class="title">${escapeXml(line)}</text>`)
    .join("\n  ");
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#000000"/>
  <path d="M716 0C843 95 948 173 1200 188V630H847C787 496 731 341 716 0Z" fill="#0099ff" fill-opacity="0.055"/>
  <path d="M651 76C786 144 919 146 1124 88" stroke="#0099ff" stroke-opacity="0.18" stroke-width="2" fill="none"/>
  <path d="M595 438C746 359 949 386 1180 292" stroke="#0099ff" stroke-opacity="0.14" stroke-width="2" fill="none"/>
  <path d="M676 565C803 494 966 525 1156 454" stroke="#0099ff" stroke-opacity="0.12" stroke-width="2" fill="none"/>
  ${blueField()}
  ${glyphMist()}
  <style>
    .brand{font: 500 28px Inter, system-ui, sans-serif; fill: #ffffff; letter-spacing: -0.03em;}
    .eyebrow{font: 450 19px 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace; fill: #0099ff; letter-spacing: 0.08em; text-transform: uppercase;}
    .title{font: 650 77px Geist, Inter, system-ui, sans-serif; fill: #ffffff; letter-spacing: -0.056em;}
    .caption{font: 400 23px Inter, system-ui, sans-serif; fill: #a6a6a6;}
    .glyph{font: 450 18px 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace; fill: #0099ff; fill-opacity: 0.16; letter-spacing: 0.06em;}
  </style>
  <text x="72" y="102" class="brand">Pagewell</text>
  <text x="72" y="160" class="eyebrow">${escapeXml(eyebrow)}</text>
  ${text}
  <text x="72" y="552" class="caption">Repo-native SEO/GEO pages, tools, docs, and QA as code.</text>
</svg>`;
}

export const getStaticPaths: GetStaticPaths = () =>
  pages.map((page) => ({ params: { slug: page.slug }, props: page }));

export const GET: APIRoute = ({ props }) =>
  new Response(svg(props as OgPage), {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8" },
  });
