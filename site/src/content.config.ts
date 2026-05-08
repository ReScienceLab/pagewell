import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const ctaSchema = z.object({
  label: z.string(),
  href: z.string().optional(),
  command: z.string().optional(),
  copyLabel: z.string().optional(),
  note: z.string().optional(),
});

const cardSchema = z.object({
  kicker: z.string().optional(),
  title: z.string(),
  text: z.string(),
});

const sectionSchema = z.object({
  eyebrow: z.string().optional(),
  heading: z.string(),
  body: z.string().optional(),
  bullets: z.array(z.string()).optional(),
  cards: z.array(cardSchema).optional(),
  codeTitle: z.string().optional(),
  codeLines: z.array(z.string()).optional(),
  rows: z.array(z.array(z.string())).optional(),
});

const faqItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const relatedLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
  text: z.string().optional(),
});

const finalCtaSchema = z.object({
  eyebrow: z.string().optional(),
  heading: z.string().optional(),
  copy: z.string().optional(),
  command: z.string().optional(),
  copyLabel: z.string().optional(),
  note: z.string().optional(),
  secondaryLabel: z.string().optional(),
  secondaryHref: z.string().optional(),
});

const generatedPageSchema = z.object({
  title: z.string(),
  description: z.string(),
  canonical: z.string(),
  noindex: z.boolean().optional(),
  eyebrow: z.string(),
  h1: z.string(),
  lede: z.string(),
  primaryCta: ctaSchema.optional(),
  secondaryCta: ctaSchema.optional(),
  highlights: z.array(cardSchema).optional(),
  sections: z.array(sectionSchema),
  faqs: z.array(faqItemSchema).optional(),
  related: z.array(relatedLinkSchema).optional(),
  relatedHeading: z.string().optional(),
  showFinalCta: z.boolean().optional(),
  finalCta: finalCtaSchema.optional(),
});

const home = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/home" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroEyebrow: z.string(),
    heroH1: z.string(),
    heroDescription: z.string(),
    heroProof: z.array(z.string()),
    primaryCtaCommand: z.string(),
    secondaryCtaLabel: z.string(),
    secondaryCtaHref: z.string(),
    generatesSection: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      lede: z.string(),
    }),
    stackSection: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      lede: z.string(),
      stackLines: z.array(z.string()),
    }),
    designSection: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      lede: z.string(),
      designLines: z.array(z.string()),
    }),
    qaSection: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      lede: z.string(),
      items: z.array(z.object({ title: z.string(), text: z.string() })),
    }),
    faqItems: z.array(faqItemSchema),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: generatedPageSchema,
});

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: generatedPageSchema,
});

const useCases = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/use-cases" }),
  schema: generatedPageSchema,
});

const alternatives = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/alternatives" }),
  schema: generatedPageSchema,
});

const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
  schema: generatedPageSchema,
});

const glossary = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/glossary" }),
  schema: generatedPageSchema,
});

const faq = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faq" }),
  schema: generatedPageSchema,
});

const toolPages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tool-pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    canonical: z.string(),
    heroEyebrow: z.string(),
    heroH1: z.string(),
    heroLede: z.string(),
    heroProof: z.array(z.string()),
    primaryCtaLabel: z.string(),
    primaryCtaHref: z.string(),
    sections: z.array(z.object({
      eyebrow: z.string(),
      heading: z.string(),
      lede: z.string().optional(),
      cards: z.array(cardSchema).optional(),
      codeTitle: z.string().optional(),
      codeLines: z.array(z.string()).optional(),
    })),
    relatedTools: z.array(z.object({
      label: z.string(),
      href: z.string(),
      text: z.string(),
      kicker: z.string(),
    })).optional(),
    finalCta: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      lede: z.string(),
      command: z.string().optional(),
      note: z.string().optional(),
    }).optional(),
    faqs: z.array(faqItemSchema).optional(),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tools" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroEyebrow: z.string(),
    heroH1: z.string(),
    heroLede: z.string(),
    sections: z.array(z.object({
      eyebrow: z.string(),
      heading: z.string(),
      lede: z.string(),
    })),
    tools: z.array(z.object({
      name: z.string(),
      href: z.string(),
      category: z.string(),
      description: z.string(),
    })),
    faqs: z.array(faqItemSchema),
  }),
});

export const collections = {
  home,
  pages,
  products,
  "use-cases": useCases,
  alternatives,
  docs,
  glossary,
  faq,
  tools,
  "tool-pages": toolPages,
};
