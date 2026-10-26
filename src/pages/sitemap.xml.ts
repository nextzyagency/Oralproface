import { paginas, url } from "../data/paginas";

const site = "https://oralproface.online";
const lastmod = new Date().toISOString().slice(0, 10);

export function GET() {
  const urls = ["/", ...paginas.map((p) => url(p.slug))];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${site}${u}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`).join("\n")}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
