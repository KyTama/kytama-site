export type JournalEntry = {
	title: string;
	slug: string;
	date: string;
	excerpt: string;
	tags: string[];
	status: 'draft' | 'published';
	outline: string[];
};

export const journal: JournalEntry[] = [
	{
		title: 'Why I self-host everything',
		slug: 'why-i-self-host-everything',
		date: '2026-03-01',
		excerpt: 'On the quiet satisfaction of owning your own infrastructure.',
		tags: ['infrastructure', 'self-hosting'],
		status: 'draft',
		outline: [
			'Moving everyday tools behind Docker and Caddy instead of renting single-purpose SaaS.',
			'Automating repetitive personal workflows with self-hosted n8n.',
			'Trade-offs around backups, TLS, and keeping maintenance boring.'
		]
	},
	{
		title: 'Learning TypeScript as a Go developer',
		slug: 'learning-typescript-as-go-developer',
		date: '2026-02-01',
		excerpt: 'The mental model shifts that actually mattered.',
		tags: ['typescript', 'go', 'learning'],
		status: 'draft',
		outline: [
			'Structural typing vs Go interfaces: what feels familiar and where edge cases differ.',
			'Explicit error values in Go compared to TypeScript union types and runtime validation.',
			'Exploring Bun, Elysia, and SvelteKit for fast side-project shipping.'
		]
	}
];
