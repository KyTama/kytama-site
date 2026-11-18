export type NowSection = {
	heading: string;
	items: {
		label: string;
		detail: string;
		href?: string;
	}[];
};

export const nowMeta = {
	lastUpdated: '2026-11-18',
	location: 'Jakarta, Indonesia',
	intro: 'A working ledger of what I am building, learning, and focusing on right now.'
} as const;

export const nowSections: NowSection[] = [
	{
		heading: 'Career & Engineering Focus',
		items: [
			{
				label: 'Day job',
				detail:
					'Backend Software Engineer at Amar Bank, working on savings and funding systems on Amarbank Digital in Go.'
			},
			{
				label: 'Engineering craft',
				detail:
					'Sharpening backend architecture, reliability practices, and ATS-clear engineering records.'
			}
		]
	},
	{
		heading: 'Currently Building',
		items: [
			{
				label: 'Attentive',
				detail:
					'Psychological bureau landing page and multi-role reservation system with Bun and Elysia.',
				href: 'https://attentiveid.com/'
			},
			{
				label: 'TamLedger',
				detail:
					'Personal financial ledger and debt payoff tracker built with Bun, Elysia, SQLite, and React.',
				href: 'https://github.com/KyTama/tam-ledger'
			},
			{
				label: 'kytama-site',
				detail:
					'Completing `/works`, `/journal`, `/now`, and a print-ready ATS `/resume` in SvelteKit.',
				href: '/works'
			}
		]
	},
	{
		heading: 'Learning & Craft',
		items: [
			{
				label: 'TypeScript ecosystem',
				detail:
					'Going deeper with TypeScript, Bun, Elysia, and SvelteKit 5 runes alongside daily Go work.'
			},
			{
				label: 'System hygiene',
				detail: 'Writing sharper design docs, RFCs, and ATS-clear engineering records.'
			}
		]
	},
	{
		heading: 'Self-Hosting & Setup',
		items: [
			{
				label: 'Infrastructure',
				detail: 'Running self-hosted Docker services behind Caddy with n8n automation workflows.'
			},
			{
				label: 'Knowledge workflow',
				detail: 'Organizing personal and engineering notes in a PARA hybrid setup with Obsidian.'
			}
		]
	}
];
