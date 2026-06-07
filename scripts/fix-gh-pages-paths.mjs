import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

function collectHtmlFiles(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      collectHtmlFiles(path, files);
    } else if (entry.endsWith(".html")) {
      files.push(path);
    }
  }
  return files;
}

function relativePrefix(file, outDir) {
  const dir = relative(outDir, file).split("/").slice(0, -1);
  if (dir.length === 0 || (dir.length === 1 && dir[0] === "")) {
    return "./";
  }
  return "../".repeat(dir.length);
}

function rewriteHtml(html, prefix) {
  let output = html
    .replace(/href="\/_next\//g, `href="${prefix}_next/`)
    .replace(/src="\/_next\//g, `src="${prefix}_next/`)
    .replace(/href="\/images\//g, `href="${prefix}images/`)
    .replace(/src="\/images\//g, `src="${prefix}images/`)
    .replace(/href="\/logo\.svg"/g, `href="${prefix}logo.svg"`)
    .replace(/href="\/icon\.svg"/g, `href="${prefix}icon.svg"`);

  output = output.replace(/href="\/([^"#?]*?)"/g, (match, path) => {
    if (
      path.startsWith("_next/") ||
      path.startsWith("images/") ||
      path === "logo.svg" ||
      path === "icon.svg"
    ) {
      return match;
    }

    const normalized = path.endsWith("/") || path === "" ? path : `${path}/`;
    return normalized === "" || normalized === "/"
      ? `href="${prefix}"`
      : `href="${prefix}${normalized}"`;
  });

  return output;
}

const outDir = join(process.cwd(), "out");
const htmlFiles = collectHtmlFiles(outDir);

for (const file of htmlFiles) {
  const prefix = relativePrefix(file, outDir);
  const html = readFileSync(file, "utf8");
  writeFileSync(file, rewriteHtml(html, prefix));
}

console.log(`Rewrote asset paths in ${htmlFiles.length} HTML files for GitHub Pages.`);
