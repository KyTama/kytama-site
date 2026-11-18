export type WorkCategory = 'work' | 'client' | 'self';

export type Work = {
	title: string;
	category: WorkCategory;
	period?: string;
	role?: string;
	description: string;
	tags: string[];
	url?: string;
	repo?: string;
	route?: '/about';
	status: 'active' | 'hiatus' | 'done';
};

export const workCategoryLabels: Record<WorkCategory | 'all', string> = {
	all: 'All',
	work: 'Work',
	client: 'Collaborations',
	self: 'Self Projects'
};

export const works: Work[] = [
	{
		title: 'Amar Bank',
		category: 'work',
		period: '2020 — Present',
		role: 'Backend Software Engineer',
		description:
			'Digital banking backend across lending (Tunaiku), embedded financing and banking, and savings/funding (Amarbank Digital).',
		tags: ['Go', 'PostgreSQL', 'gRPC', 'Pub/Sub', 'Redis', 'Docker'],
		route: '/about',
		status: 'active'
	},
	{
		title: 'PT. Sentra Inovasi Solusindo',
		category: 'work',
		period: '2016 — 2019',
		role: 'Software Engineer',
		description:
			'Delivered internal HRIS modules and owned logistics delivery tracking systems end to end across PHP and Java Spring Boot.',
		tags: ['PHP', 'CakePHP', 'CodeIgniter', 'Java', 'Spring Boot', 'MySQL', 'PostgreSQL'],
		route: '/about',
		status: 'done'
	},
	{
		title: 'Attentive',
		category: 'client',
		description:
			'Psychological bureau landing page and reservation system with three roles: User, Admin, and Psychologist.',
		tags: ['Bun', 'Elysia', 'TypeScript'],
		url: 'https://attentiveid.com/',
		status: 'active'
	},
	{
		title: 'Benttreeschool',
		category: 'client',
		description: 'School landing page.',
		tags: ['WordPress'],
		url: 'https://benttreeschool.com/',
		status: 'active'
	},
	{
		title: 'ai-toolkit',
		category: 'self',
		description:
			'Unified AI dev environment with shared GEMINI.md + CLAUDE.md context management system.',
		tags: ['Bash', 'Shell', 'Python'],
		repo: 'https://github.com/KyTama/ai-toolkit',
		status: 'active'
	},
	{
		title: 'TamLedger',
		category: 'self',
		description: 'Personal financial ledger and debt payoff tracker.',
		tags: ['Bun', 'Elysia', 'SQLite', 'React', 'TypeScript'],
		repo: 'https://github.com/KyTama/tam-ledger',
		status: 'active'
	}
];
