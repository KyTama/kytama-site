export type WorkCategory = 'work' | 'client' | 'self';

export type Work = {
	title: string;
	category: WorkCategory;
	period?: string;
	role?: string;
	description: string;
	highlights?: string[];
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
		highlights: [
			'Authored primary TRDs shipped to production for savings eligibility caching, onboarding active liveness, payroll-account binding, and fraud-detection signals.',
			'Co-built early-stage lending and repayment Go services and co-maintained 10+ microservices across savings and funding.',
			'Added Datadog Orchestrion APM tracing, executed legacy service consolidation, and maintained OpenAPI specs and automated tests.'
		],
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
		highlights: [
			'Owned per-client logistics tracking deployments covering delivery orders, air waybills, and manifests at hundreds to ~2,000 AWBs per day.',
			'Co-built a customer-facing shipment lookup service in Java Spring Boot, migrating lookup logic out of legacy PHP.'
		],
		tags: ['PHP', 'CakePHP', 'CodeIgniter', 'Java', 'Spring Boot', 'MySQL', 'PostgreSQL'],
		route: '/about',
		status: 'done'
	},
	{
		title: 'Attentive',
		category: 'client',
		description:
			'Psychological bureau landing page and reservation system with three roles: User, Admin, and Psychologist.',
		highlights: [
			'Built the public landing page and booking flow backed by a Bun + Elysia + TypeScript API.',
			'Separated permissions and schedules across User, Admin, and Psychologist workflows.'
		],
		tags: ['Bun', 'Elysia', 'TypeScript'],
		url: 'https://attentiveid.com/',
		status: 'active'
	},
	{
		title: 'Benttreeschool',
		category: 'client',
		description: 'School landing page and institutional web presence.',
		highlights: [
			'Configured and maintained the public school WordPress site for parent and admissions info.'
		],
		tags: ['WordPress'],
		url: 'https://benttreeschool.com/',
		status: 'active'
	},
	{
		title: 'ai-toolkit',
		category: 'self',
		description:
			'Unified AI dev environment with shared GEMINI.md, CLAUDE.md, and CODEX.md context management.',
		highlights: [
			'Includes bootstrap scripts that keep local AI rule files synced across coding tools without breaking existing project templates.',
			'Provides a --private mode that registers AI config files into .git/info/exclude so company repositories keep a clean git tree.'
		],
		tags: ['Bash', 'Shell', 'Python'],
		repo: 'https://github.com/KyTama/ai-toolkit',
		status: 'active'
	},
	{
		title: 'TamLedger',
		category: 'self',
		description:
			'Personal financial ledger and debt payoff tracker with local storage and zero cloud dependency.',
		highlights: [
			'Backed by Bun, Elysia, and SQLite (bun:sqlite) with SQL schema migrations mounted locally on a Docker volume.',
			'Implements both Avalanche (highest interest first) and Snowball (lowest balance first) monthly debt payoff projection endpoints.'
		],
		tags: ['Bun', 'Elysia', 'SQLite', 'React', 'TypeScript'],
		repo: 'https://github.com/KyTama/tam-ledger',
		status: 'active'
	}
];
