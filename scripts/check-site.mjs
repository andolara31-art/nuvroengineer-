import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const dist = path.resolve("dist");
async function walk(folder) {
  const entries = await readdir(folder, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) =>
      entry.isDirectory()
        ? walk(path.join(folder, entry.name))
        : [path.join(folder, entry.name)],
    ),
  );
  return files.flat();
}
const files = (await walk(dist)).filter((file) => file.endsWith(".html"));
const sitemap = await readFile(path.join(dist, "sitemap.xml"), "utf8");
const robots = await readFile(path.join(dist, "robots.txt"), "utf8");
assert.match(robots, /Sitemap: https:\/\/nuvroenginer\.site\/sitemap\.xml/);
assert.ok(!sitemap.includes("/propuesta") && !sitemap.includes("/404"));
const titles = new Set();
let links = 0;
for (const file of files) {
  const html = await readFile(file, "utf8");
  const relative = path.relative(dist, file).replaceAll("\\", "/");
  const route =
    relative === "index.html" ? "/" : `/${relative.replace(/\.html$/, "")}`;
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert.ok(
    title && !titles.has(title),
    `Título ausente o duplicado: ${route}`,
  );
  titles.add(title);
  assert.match(
    html,
    new RegExp(
      `<link rel="canonical" href="https://nuvroenginer.site${route}"`,
    ),
  );
  assert.match(html, /<meta name="description" content="[^"]+"/);
  assert.ok(!html.includes("<!--seo:"));
  if (route === "/propuesta") {
    assert.match(html, /noindex, follow/);
    continue;
  }
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `Debe existir un h1: ${route}`,
  );
  assert.match(
    html,
    /<main[^>]*id="contenido"|<main[^>]*class[^>]*id="contenido"/,
  );
  if (route !== "/404") {
    assert.ok(
      sitemap.includes(`https://nuvroenginer.site${route}</loc>`),
      `Falta en sitemap: ${route}`,
    );
    for (const json of html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    )) {
      assert.equal(JSON.parse(json[1])["@context"], "https://schema.org");
    }
    assert.ok(
      html.includes("application/ld+json"),
      `Faltan datos estructurados: ${route}`,
    );
  }
  for (const link of html.matchAll(
    /(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g,
  )) {
    const target = link[1];
    if (target === "/") continue;
    const resolved = path.join(
      dist,
      decodeURIComponent(target).replace(/^\//, ""),
    );
    assert.ok(resolved.startsWith(dist + path.sep));
    let exists = false;
    for (const candidate of [
      resolved,
      `${resolved}.html`,
      path.join(resolved, "index.html"),
    ]) {
      try {
        exists ||= (await stat(candidate)).isFile();
      } catch {}
    }
    assert.ok(exists, `Enlace o recurso roto en ${route}: ${target}`);
    links++;
  }
  assert.ok(
    !html.includes("wa.me/50662001772"),
    `WhatsApp antiguo en ${route}`,
  );
}
console.log(
  `OK: ${files.length} páginas HTML, títulos únicos, canonical, contenido previo a JavaScript, JSON-LD, sitemap y ${links} enlaces/recursos internos.`,
);
