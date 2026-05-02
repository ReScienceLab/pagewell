#!/usr/bin/env bun
import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillRoot = join(root, "skills", "pagewell");
const referencesRoot = join(skillRoot, "references");

const directoryCopies = ["adapters", "playbooks", "schemas"];
const docsExclude = new Set(["tryflint-copy-research.md", "pagewell-context-battle-test.md"]);

async function copyDirectory(src, dest) {
  if (!existsSync(src)) return;
  await mkdir(dirname(dest), { recursive: true });
  await cp(src, dest, {
    recursive: true,
    force: true,
    filter(source) {
      const name = basename(source);
      if (name === ".DS_Store") return false;
      if (source.includes(`${join("", "node_modules")}`)) return false;
      if (source.includes(`${join("", ".git")}`)) return false;
      return true;
    },
  });
}

function rewritePackagedReferences(markdown) {
  return markdown
    .replaceAll("skills/pagewell/SKILL.md", "SKILL.md")
    .replaceAll("skills/pagewell.md", "SKILL.md")
    .replace(/(?<!references\/)skills\/([a-z0-9-]+)\.md/g, "references/skills/$1.md")
    .replace(/(?<!references\/)playbooks\//g, "references/playbooks/")
    .replace(/(?<!references\/)adapters\//g, "references/adapters/")
    .replace(/(?<!references\/)schemas\//g, "references/schemas/")
    .replace(/(?<!references\/)docs\/([a-z0-9-]+\.md)/g, "references/docs/$1");
}

async function transformMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) {
        await transformMarkdownFiles(path);
        return;
      }
      if (!entry.name.endsWith(".md")) return;
      const original = await readFile(path, "utf8");
      const updated = rewritePackagedReferences(original);
      if (updated !== original) await writeFile(path, updated);
    })
  );
}

async function copyCoreSkillModules() {
  const sourceDir = join(root, "skills");
  const targetDir = join(referencesRoot, "skills");
  await mkdir(targetDir, { recursive: true });

  const entries = await readdir(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".md")) continue;
    const source = join(sourceDir, entry.name);
    const target = join(targetDir, entry.name);
    await cp(source, target, { force: true });
  }
}

async function copyDocs() {
  const sourceDir = join(root, "docs");
  const targetDir = join(referencesRoot, "docs");
  if (!existsSync(sourceDir)) return;
  await mkdir(targetDir, { recursive: true });

  const entries = await readdir(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile() || docsExclude.has(entry.name)) continue;
    await cp(join(sourceDir, entry.name), join(targetDir, entry.name), { force: true });
  }
}

async function writeManifest() {
  const manifest = `# Pagewell Reference Manifest

This directory is packaged with the installable \`pagewell\` skill.

## Path resolution

When a reference mentions a Pagewell source path, resolve it inside this package:

| Source path | Packaged path |
|---|---|
| \`skills/<module>.md\` | \`references/skills/<module>.md\` |
| \`playbooks/...\` | \`references/playbooks/...\` |
| \`adapters/...\` | \`references/adapters/...\` |
| \`docs/...\` | \`references/docs/...\` |
| \`schemas/...\` | \`references/schemas/...\` |

## Core modules

- \`references/skills/discover-site.md\`
- \`references/skills/design-system.md\`
- \`references/skills/define-product-facts.md\`
- \`references/skills/plan-topic-cluster.md\`
- \`references/skills/generate-page.md\`
- \`references/skills/generate-free-tool.md\`
- \`references/skills/qa.md\`
- \`references/skills/update-discovery-files.md\`
- \`references/skills/seo-ops.md\`

## Generation routes

| Intent | Read |
|---|---|
| Initialize unified Pagewell context or detect/document a site stack in PAGEWELL.md | \`references/skills/discover-site.md\` |
| Create, validate, or update design rules | \`references/skills/design-system.md\` |
| Define product facts and claim sources in PAGEWELL.md | \`references/skills/define-product-facts.md\` |
| Plan a topic cluster | \`references/skills/plan-topic-cluster.md\` |
| Generate a standard page | \`references/skills/generate-page.md\` and the matching \`references/playbooks/page-types/*.md\` |
| Generate or plan a free tool | \`references/skills/generate-free-tool.md\` and \`references/playbooks/free-tools/*.md\` |
| QA a page or claim set | \`references/skills/qa.md\` and \`references/playbooks/qa/claim-check.md\` |
| Update discovery files | \`references/skills/update-discovery-files.md\` |
| Maintain SEO/GEO clusters | \`references/skills/seo-ops.md\` and \`references/playbooks/seo/*.md\` |

## Adapters

- \`references/adapters/astro.md\`
- \`references/adapters/nextjs.md\`
- \`references/adapters/cloudflare-worker.md\`
- \`references/adapters/static-html.md\`
- \`references/adapters/unknown-framework.md\`
`;

  await writeFile(join(referencesRoot, "MANIFEST.md"), manifest);
}

async function assertPackage() {
  const required = [
    join(skillRoot, "SKILL.md"),
    join(referencesRoot, "MANIFEST.md"),
    join(referencesRoot, "skills", "generate-page.md"),
    join(referencesRoot, "skills", "generate-free-tool.md"),
    join(referencesRoot, "skills", "qa.md"),
    join(referencesRoot, "playbooks", "page-types", "alternative.md"),
    join(referencesRoot, "playbooks", "free-tools", "page.md"),
    join(referencesRoot, "adapters", "astro.md"),
    join(referencesRoot, "schemas", "page-spec.schema.json"),
    join(referencesRoot, "schemas", "pagewell-context.schema.json"),
  ];

  for (const path of required) {
    try {
      await stat(path);
    } catch {
      throw new Error(`Missing packaged reference: ${path}`);
    }
  }
}

await mkdir(skillRoot, { recursive: true });
await rm(referencesRoot, { recursive: true, force: true });
await mkdir(referencesRoot, { recursive: true });

await copyCoreSkillModules();
for (const dir of directoryCopies) {
  await copyDirectory(join(root, dir), join(referencesRoot, dir));
}
await copyDocs();
await transformMarkdownFiles(referencesRoot);
await writeManifest();
await assertPackage();

console.log("Synced skills/pagewell references.");
