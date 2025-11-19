export async function loader() {
  const baseUrl = "https://byteserv.de";

  const routes = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
    { url: "/kassensysteme", priority: "0.8", changefreq: "monthly" },
    { url: "/digitale-gastro", priority: "0.8", changefreq: "monthly" },
    { url: "/webentwicklung", priority: "0.8", changefreq: "monthly" },
    { url: "/it-systeme", priority: "0.8", changefreq: "monthly" },
    { url: "/impressum", priority: "0.3", changefreq: "yearly" },
    { url: "/datenschutz", priority: "0.3", changefreq: "yearly" },
    { url: "/agb", priority: "0.3", changefreq: "yearly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
