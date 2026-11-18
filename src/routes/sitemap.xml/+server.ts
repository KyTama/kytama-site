import { journal } from '$lib/data/journal';
import { nowMeta } from '$lib/data/now';
import { siteConfig } from '$lib/data/site';

export const prerender = true;

export function GET() {
	const staticRoutes = [
		{ path: '/', lastmod: nowMeta.lastUpdated },
		{ path: '/about', lastmod: nowMeta.lastUpdated },
		{ path: '/works', lastmod: nowMeta.lastUpdated },
		{ path: '/journal', lastmod: journal[0]?.date ?? nowMeta.lastUpdated },
		{ path: '/now', lastmod: nowMeta.lastUpdated },
		{ path: '/resume', lastmod: nowMeta.lastUpdated }
	];
	const journalRoutes = journal.map((entry) => ({
		path: `/journal/${entry.slug}`,
		lastmod: entry.date
	}));
	const allRoutes = [...staticRoutes, ...journalRoutes];

	const urls = allRoutes
		.map(
			(route) => `  <url>
    <loc>${siteConfig.url}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
  </url>`
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}
