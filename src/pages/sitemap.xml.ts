import { paginas, url } from "../data/paginas";

const site = "https://oralproface.online";
// The home has no "actualizado" of its own: it changes whenever its most recent subpage content does.
const homeLastmod = paginas.map((p) => p.actualizado).sort().at(-1)!;

export function GET() {
  const urls = [
    { loc: "/", lastmod: homeLastmod, priority: "1.0" },
    ...paginas.map((p) => ({
      loc: url(p.slug),
      lastmod: p.actualizado,
      priority: p.tipo === "sede" ? "0.9" : "0.8",
    })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${site}${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join("\n")}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
