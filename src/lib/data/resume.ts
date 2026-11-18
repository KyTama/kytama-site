export type ResumeRole = {
	company: string;
	role: string;
	period: string;
	location: string;
	summary: string;
	groups: {
		title?: string;
		bullets: string[];
	}[];
	tags: string[];
};

export const resumeProfile = {
	name: 'Rizky Pratama',
	handle: 'KyTama',
	title: 'Backend Software Engineer',
	location: 'Jakarta, Indonesia',
	summary:
		'Backend software engineer with ~10 years of experience across digital banking (lending, embedded financing and banking, savings/funding) and IT consultancy delivery. Primary stack in Go and PostgreSQL, with hands-on production work across distributed messaging, observability, security compliance, and cross-service feature ownership.',
	links: [
		{ label: 'kytama.pages.dev', href: 'https://kytama.pages.dev' },
		{ label: 'github.com/KyTama', href: 'https://github.com/KyTama' },
		{ label: 'linkedin.com/in/prtamaky', href: 'https://linkedin.com/in/prtamaky' }
	]
} as const;

export const resumeExperience: ResumeRole[] = [
	{
		company: 'Amar Bank',
		role: 'Backend Software Engineer',
		period: '2020 — Present',
		location: 'Jakarta, Indonesia',
		summary:
			'Working across lending, savings/funding, and embedded financing and banking domains. Started in lending on Tunaiku, transitioned through embedded financing and banking, and now build savings and funding systems on Amarbank Digital.',
		groups: [
			{
				title: 'Savings & Funding (Amarbank Digital) & Embedded Financing and Banking',
				bullets: [
					'Co-maintained 10+ Go microservices with the team using feature-based ownership across the funding domain.',
					'Acted as backend PIC on cross-team projects, including during the embedded financing and banking transition between lending and funding.'
				]
			},
			{
				title: 'Lending (Tunaiku)',
				bullets: [
					'Engineered Repeat & Retention features in Tunaiku lending while supporting two squads concurrently, and contributed to a product-driven loan application form improvement initiative in Growth.',
					'Designed and built new backend services aligned with lead and architecture-team standards, alongside small internal utility tools.',
					'Applied Domain-Driven Design (DDD) and dependency injection, and refactored legacy services to maintainable patterns.',
					'Authored OpenAPI/Swagger documentation with flow diagrams and helped standardize backend API response formats.'
				]
			},
			{
				title: 'Engineering Practices, Reliability, & Leadership',
				bullets: [
					'Drove infrastructure cost-reduction work by migrating legacy APIs and consolidating data from scattered database utilization configs.',
					'Resolved VAPT security findings and contributed to Private Data Protection (PDP) implementation.',
					'Handled P0/urgent projects, investigated production incidents with postmortems, and initiated squad standards for error handling, APM tracing, testing, and tech-debt audits.',
					'Built mock-based unit tests and backend API integration/E2E test suites.',
					'Reviewed pull requests, authored design docs, RFCs, and analysis docs, mentored junior engineers and new joiners, and adopted Trunk-Based Development (TBD).'
				]
			}
		],
		tags: [
			'Go',
			'PostgreSQL',
			'MongoDB',
			'Redis',
			'gRPC',
			'REST API',
			'OpenAPI/Swagger',
			'Pub/Sub',
			'Keycloak',
			'Docker',
			'GCP',
			'Datadog',
			'New Relic',
			'CI/CD',
			'Linux',
			'Unit Testing',
			'Integration Testing'
		]
	},
	{
		company: 'PT. Sentra Inovasi Solusindo',
		role: 'Software Engineer',
		period: '2016 — 2019',
		location: 'Jakarta, Indonesia',
		summary:
			'Software engineer at an IT consultancy, delivering internal enterprise systems and client-facing solutions in PHP and Java.',
		groups: [
			{
				bullets: [
					'Owned the delivery tracking system end to end, from gathering client requirements to development, deployment, and support, handling hundreds to ~2,000 air waybills a day.',
					'Co-built close to half of a new customer-facing tracking service in Java Spring Boot alongside a senior and another junior developer, migrating existing features into it so end customers could look up shipment status by air waybill number.',
					'Tracked parcels, cargo, and shipping documents (delivery orders, air waybills, manifests, delivery sheets) through barcode scanning and manual input across separate per-client deployments.',
					'Maintained and extended employee data, attendance, and leave modules of an internal HRIS used across the company group, and resolved production issues on legacy PHP codebases.'
				]
			}
		],
		tags: [
			'PHP',
			'CakePHP',
			'CodeIgniter',
			'Java',
			'Spring Boot',
			'MySQL',
			'PostgreSQL',
			'jQuery',
			'REST API',
			'HRIS'
		]
	}
];

export const resumeSkillGroups = [
	{
		category: 'Languages',
		items: ['Go', 'TypeScript', 'PHP', 'Java', 'SQL', 'Bash']
	},
	{
		category: 'Backend & APIs',
		items: [
			'gRPC',
			'REST API',
			'OpenAPI/Swagger',
			'Bun',
			'Elysia',
			'Spring Boot',
			'CakePHP',
			'CodeIgniter'
		]
	},
	{
		category: 'Data & Messaging',
		items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'CouchDB', 'Pub/Sub']
	},
	{
		category: 'Infra & Observability',
		items: ['Docker', 'GCP', 'Datadog', 'New Relic', 'Keycloak', 'CI/CD', 'Caddy', 'Linux']
	},
	{
		category: 'Practices',
		items: [
			'Domain-Driven Design (DDD)',
			'Unit Testing',
			'Integration Testing',
			'Trunk-Based Development',
			'VAPT / PDP'
		]
	}
] as const;
