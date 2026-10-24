import { build, createServer, loadEnv } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const env = { ...loadEnv("production", root, ""), ...process.env };
await build();
const template = await readFile(path.join(dist, "index.html"), "utf8");
const server = await createServer({
  mode: "production",
  server: { middlewareMode: true, hmr: false, watch: null },
  appType: "custom",
});
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
try {
  const { pages, render, structuredData } = await server.ssrLoadModule(
    "/src/entry-server.tsx",
  );
  const base = "https://nuvroenginer.site";
  for (const page of pages) {
    const url = `${base}${page.path}`;
    const head = [
      `<title>${escape(page.title)}</title>`,
      `<meta name="description" content="${escape(page.description)}" />`,
      `<meta name="robots" content="${page.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />`,
      `<link rel="canonical" href="${url}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:site_name" content="NUVRO ENGINEER" />`,
      `<meta property="og:locale" content="es_CR" />`,
      `<meta property="og:title" content="${escape(page.title)}" />`,
      `<meta property="og:description" content="${escape(page.description)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${base}/assets/brand/nuvro-editorial-social-v1.jpg" />`,
      `<meta property="og:image:alt" content="Portada de NUVRO ENGINEER en blanco y negro con una muestra interactiva de diseño web" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      env.GOOGLE_SITE_VERIFICATION
        ? `<meta name="google-site-verification" content="${escape(env.GOOGLE_SITE_VERIFICATION)}" />`
        : "",
      !page.noindex
        ? `<script type="application/ld+json">${JSON.stringify(structuredData(page.path, page.title, page.description)).replace(/</g, "\\u003c")}</script>`
        : "",
    ]
      .filter(Boolean)
      .join("\n    ");
    const markup = page.path === "/propuesta" ? "" : render(page.path);
    const html = template
      .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, head)
      .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
    const filename =
      page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`;
    const target = path.join(dist, filename);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, html);
    console.log(`HTML: ${page.path}`);
  }
  const urls = pages
    .filter((page) => !page.noindex)
    .map((page) => `  <url><loc>${base}${page.path}</loc></url>`)
    .join("\n");
  await writeFile(
    path.join(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
} finally {
  await server.close();
}
