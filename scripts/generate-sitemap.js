import { writeFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const baseUrl = "https://byteserv.de";
const today = new Date().toISOString().split('T')[0];

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
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap generated successfully at public/sitemap.xml');
