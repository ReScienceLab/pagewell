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
  { slug: "tools/llms-txt-validator", title: "llms.txt Validator", eyebrow: "Free tool" },
  { slug: "tools/pagewell-context-validator", title: "PAGEWELL.md Validator", eyebrow: "Free tool" },
];

type OgPage = (typeof pages)[number];

function escapeXml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function wrapText(value: string, maxLineLength = 22) {
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

function svg({ title, eyebrow }: OgPage) {
  const lines = wrapText(title);
  const text = lines
    .map((line, index) => `<text x="80" y="${330 + index * 92}" class="title">${escapeXml(line)}</text>`)
    .join("");
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#000000"/>
  <circle cx="1010" cy="116" r="260" fill="#0099ff" fill-opacity="0.16"/>
  <circle cx="1045" cy="128" r="122" fill="#0099ff" fill-opacity="0.20"/>
  <rect x="48" y="48" width="1104" height="534" rx="28" stroke="#1c2b36"/>
  <style>
    .brand{font: 500 34px Inter, system-ui, sans-serif; fill: #ffffff; letter-spacing: -0.03em;}
    .eyebrow{font: 500 24px ui-monospace, SFMono-Regular, Menlo, monospace; fill: #0099ff; letter-spacing: 0.08em; text-transform: uppercase;}
    .title{font: 650 78px Inter, system-ui, sans-serif; fill: #ffffff; letter-spacing: -0.055em;}
    .caption{font: 400 26px Inter, system-ui, sans-serif; fill: #a6a6a6;}
  </style>
  <text x="80" y="120" class="brand">Pagewell</text>
  <text x="80" y="218" class="eyebrow">${escapeXml(eyebrow)}</text>
  ${text}
  <text x="80" y="535" class="caption">Repo-native SEO/GEO pages, tools, docs, and QA as code.</text>
</svg>`;
}

export const getStaticPaths: GetStaticPaths = () =>
  pages.map((page) => ({ params: { slug: page.slug }, props: page }));

export const GET: APIRoute = ({ props }) =>
  new Response(svg(props as OgPage), {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8" },
  });
