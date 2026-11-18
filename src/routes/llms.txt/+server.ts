import { experiences } from '$lib/data/experience';
import { journal } from '$lib/data/journal';
import { siteConfig } from '$lib/data/site';
import { works } from '$lib/data/works';

export const prerender = true;

export function GET() {
	const publishedPosts = journal.filter((entry) => entry.status === 'published');

	const lines = [
		`# ${siteConfig.fullName} (${siteConfig.name})`,
		'',
		`> ${siteConfig.description}`,
		'',
		`- Role: ${siteConfig.role} at Amar Bank (${siteConfig.location})`,
		`- Website: ${siteConfig.url}`,
		`- GitHub: ${siteConfig.github}`,
		`- LinkedIn: ${siteConfig.linkedin}`,
		`- Email: ${siteConfig.email}`,
		'',
		'## Primary Pages',
		'',
		`- [Home](${siteConfig.url}/): Overview, focus areas, and quick navigation.`,
		`- [About & Full Experience](${siteConfig.url}/about): ~10-year career timeline across Amar Bank and PT. Sentra Inovasi Solusindo, plus full skills breakdown.`,
		`- [Works](${siteConfig.url}/works): Employer track record, public client collaborations (Attentive, Benttreeschool), and personal open-source builds (ai-toolkit, TamLedger).`,
		`- [ATS Resume](${siteConfig.url}/resume): Printable 2-page full and 1-page compact HTML/PDF resume.`,
		`- [Journal](${siteConfig.url}/journal): Technical notes on self-hosting infrastructure and TypeScript from a Go backend perspective.`,
		`- [Now](${siteConfig.url}/now): Current engineering focus and active builds.`,
		'',
		'## Career Summary',
		'',
		...experiences.map(
			(exp) => `- **${exp.company}** (${exp.period}) — ${exp.role}: ${exp.description}`
		),
		'',
		'## Public Collaborations & Personal Projects',
		'',
		...works
			.filter((w) => w.category !== 'work')
			.map(
				(w) =>
					`- **${w.title}** (${w.tags.join(', ')}): ${w.description} (${w.url ?? w.repo ?? ''})`
			),
		'',
		'## Published Technical Articles',
		'',
		...publishedPosts.map(
			(post) =>
				`- [${post.title}](${siteConfig.url}/journal/${post.slug}) (${post.date}): ${post.excerpt}`
		),
		''
	];

	return new Response(lines.join('\n'), {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
}
