import { journal } from '$lib/data/journal';
import { siteConfig } from '$lib/data/site';

export const prerender = true;

export function GET() {
	const staticRoutes = ['/', '/about', '/works', '/journal', '/now', '/resume'];
	const journalRoutes = journal.map((entry) => `/journal/${entry.slug}`);
	const allRoutes = [...staticRoutes, ...journalRoutes];

	const urls = allRoutes
		.map(
			(route) => `  <url>
    <loc>${siteConfig.url}${route}</loc>
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
