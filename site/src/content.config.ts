import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  canonical: z.string().optional(),
  ogImage: z.string().optional(),
  noindex: z.boolean().optional(),
  updated: z.coerce.date().optional(),
});

const docs = defineCollection({
  type: "content",
  schema: pageSchema.extend({
    sidebarOrder: z.number().optional(),
  }),
});

const useCases = defineCollection({
  type: "content",
  schema: pageSchema.extend({
    audience: z.string().optional(),
    intent: z.string().optional(),
  }),
});

const alternatives = defineCollection({
  type: "content",
  schema: pageSchema.extend({
    comparedWith: z.string().optional(),
  }),
});

const glossary = defineCollection({
  type: "content",
  schema: pageSchema.extend({
    term: z.string().optional(),
  }),
});

const faq = defineCollection({
  type: "content",
  schema: pageSchema.extend({
    question: z.string().optional(),
  }),
});

const freeTools = defineCollection({
  type: "content",
  schema: pageSchema.extend({
    toolType: z.string().optional(),
  }),
});

const examples = defineCollection({
  type: "content",
  schema: pageSchema.extend({
    stack: z.string().optional(),
  }),
});

export const collections = {
  docs,
  "use-cases": useCases,
  alternatives,
  glossary,
  faq,
  "free-tools": freeTools,
  examples,
};
