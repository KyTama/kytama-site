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
	compactBullets: string[];
	tags: string[];
};

export type ResumeProject = {
	name: string;
	type: string;
	description: string;
	stack: string;
	urlLabel: string;
	href: string;
};

export const resumeProfile = {
	name: 'Rizky Pratama',
	handle: 'KyTama',
	title: 'Backend Software Engineer',
	location: 'Jakarta, Indonesia',
	email: 'prtamaky95@gmail.com',
	summary:
		'Backend software engineer with ~10 years of experience across digital banking (lending, embedded financing and banking, savings/funding) and IT consultancy delivery. Primary stack in Go and PostgreSQL, with hands-on production work across distributed messaging, observability, security compliance, and cross-service feature ownership.',
	links: [
		{ label: 'prtamaky95@gmail.com', href: 'mailto:prtamaky95@gmail.com', isEmail: true },
		{ label: 'kytama.pages.dev', href: 'https://kytama.pages.dev', isEmail: false },
		{ label: 'github.com/KyTama', href: 'https://github.com/KyTama', isEmail: false },
		{ label: 'linkedin.com/in/prtamaky', href: 'https://linkedin.com/in/prtamaky', isEmail: false }
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
					'Co-maintained 10+ Go microservices with the team using feature-based ownership across the funding domain, acted as backend PIC on cross-team projects during the embedded financing and banking transition, and supported client experiments with backend data-providing APIs for frontend and product stakeholders.',
					'Authored primary technical design docs (TRDs) and shipped production features for savings product eligibility checks (Redis configurable-TTL caching), onboarding active liveness (DB migrations and feature flags), payroll-account binding (idempotent migrations and callback concurrency tests), idempotent cross-device ID registration, and async feature-flagged fraud telemetry.',
					'Migrated services off direct Keycloak access to centralized gRPC authentication, shipped Google verified-email sign-up, email-login, and SMS OTP forgot-password / account reactivation flows, and cached BigQuery dashboard and upstream device data in Redis.',
					'Built partner configuration services (gRPC & HTTP for credentials and QRIS settings), extracted partner-request validation into a shared client library, built an automated data-migration service, and co-built/tested a Bank Indonesia SNAP B2B2C access-token service (in testing).'
				]
			},
			{
				title: 'Lending (Tunaiku)',
				bullets: [
					'Co-built early-stage Go services—delivering core feature flows on top of initial team scaffolding, including a customer-retention service developed over ~3 years—and co-maintained repeat-loan, credit-limit (limit offer, express loan), and customer re-engagement backends across two concurrent squads.',
					'Shipped end-to-end repayment and loan-signing features: Early Paid-Back (Pub/Sub status updates, feature config, regex VA validation, and removing a slow CRM lookup causing timeouts), Early Sign OTP flows (save-after-OTP submit, scheduled Pub/Sub background auto-submit, disbursement patching, and contract-email rework), plus provision-fee and CSAT feedback support.',
					'Developed customer auth and account flows for a Keycloak-based login overhaul and customer migration (create-password, reset-password, phone lookup, phone-number change), added Keycloak JWKS verification on customer VA endpoints, and shipped courier-visit rescheduling endpoints alongside a product-led loan application improvement in Growth.',
					'Engineered loan-submission background batch processing with retry handling, fixed duplicate "payment received" emails with a distributed lock, migrated loan-status and unpaid-reminder callbacks, added Redis caching (3-minute TTL) on a hot profile endpoint to cut upstream calls, and fixed a concurrent-read production panic.',
					'Consolidated a legacy loan service into the main loan-applications service and planned its shutdown after a two-week zero-traffic window, cut noisy logging to reduce monitoring cost, and applied SOLID design principles, DDD, Wire DI, and OpenAPI/Swagger specs with flow diagrams.'
				]
			},
			{
				title: 'Engineering Practices, Reliability, & Leadership',
				bullets: [
					'Instrumented Go services with Datadog APM tracing (Orchestrion) and distributed HTTP tracing to debug production traffic.',
					'Drove infrastructure cost-reduction and tech-debt cleanup—migrating legacy APIs, consolidating scattered database utilization configs, and scoping CouchDB removal and 5xx-to-4xx error remapping.',
					'Resolved VAPT security findings, contributed to Private Data Protection (PDP), handled P0/urgent projects, investigated production incidents with postmortems, and built mock-based unit tests and API integration/E2E suites.',
					'Reviewed pull requests, authored design docs and RFCs, mentored junior engineers and new joiners with onboarding guidelines, adopted Trunk-Based Development (TBD), and led squad knowledge sharing.'
				]
			}
		],
		compactBullets: [
			'Co-built early-stage Go services (core feature flows for a ~3-year customer-retention service and repayment/loan-signing workflows) and co-maintained repeat-loan, credit-limit, Keycloak login/account flows, and batch loan-submission backends in Tunaiku alongside 10+ funding microservices (Amarbank Digital).',
			'Authored primary TRDs and shipped production features for savings eligibility (Redis configurable TTL), onboarding active liveness, payroll-account binding (idempotent migrations), fraud-detection signals, and centralized gRPC authentication.',
			'Added Datadog APM tracing with Orchestrion across Go services, executed service and database migrations, and drove infra cost reduction by consolidating scattered DB utilization configs.',
			'Resolved VAPT security findings, contributed to Private Data Protection (PDP), and applied SOLID design principles, DDD, Wire DI, and ~100 OpenAPI/Swagger spec updates across teams.',
			'Handled P0/urgent projects, investigated production incidents with postmortems, and built mock-based unit tests and backend API integration/E2E test suites.',
			'Reviewed pull requests, authored RFCs, mentored junior engineers and new joiners, and adopted Trunk-Based Development (TBD).'
		],
		tags: [
			'Go',
			'PostgreSQL',
			'MongoDB',
			'CouchDB',
			'BigQuery',
			'Redis',
			'gRPC',
			'REST API',
			'OpenAPI/Swagger',
			'Pub/Sub',
			'Keycloak',
			'Wire DI',
			'Bank Indonesia SNAP',
			'Docker',
			'GCP',
			'Datadog',
			'Orchestrion',
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
		compactBullets: [
			'Owned the logistics delivery tracking system end to end (requirements, development, deployment, support), handling hundreds to ~2,000 air waybills/day across per-client deployments.',
			'Co-built ~50% of a customer-facing shipment tracking service in Java Spring Boot alongside a senior and junior engineer, migrating core lookup features from PHP.',
			'Maintained internal group HRIS modules (employee data, attendance, leave) and resolved production issues in PHP (CakePHP, CodeIgniter), MySQL, and PostgreSQL.'
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

export const resumeProjects: ResumeProject[] = [
	{
		name: 'Attentive',
		type: 'Collaboration',
		description:
			'Psychological bureau landing page and reservation system supporting User, Admin, and Psychologist roles.',
		stack: 'Bun, Elysia, TypeScript',
		urlLabel: 'attentiveid.com',
		href: 'https://attentiveid.com/'
	},
	{
		name: 'TamLedger',
		type: 'Self Project',
		description: 'Personal financial ledger and debt payoff tracker.',
		stack: 'Bun, Elysia, SQLite, React, TypeScript',
		urlLabel: 'github.com/KyTama/tam-ledger',
		href: 'https://github.com/KyTama/tam-ledger'
	},
	{
		name: 'Benttreeschool',
		type: 'Collaboration',
		description: 'School landing page and institutional web presence.',
		stack: 'WordPress',
		urlLabel: 'benttreeschool.com',
		href: 'https://benttreeschool.com/'
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
			'Bank Indonesia SNAP',
			'Wire DI',
			'Bun',
			'Elysia',
			'Spring Boot',
			'CakePHP',
			'CodeIgniter'
		]
	},
	{
		category: 'Data & Messaging',
		items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'CouchDB', 'BigQuery', 'Pub/Sub']
	},
	{
		category: 'Infra & Observability',
		items: [
			'Docker',
			'GCP',
			'Datadog',
			'Orchestrion',
			'New Relic',
			'Keycloak',
			'CI/CD',
			'Caddy',
			'Linux'
		]
	},
	{
		category: 'Practices',
		items: [
			'SOLID Design Principles',
			'Domain-Driven Design (DDD)',
			'Unit Testing',
			'Integration Testing',
			'Trunk-Based Development',
			'VAPT / PDP'
		]
	}
] as const;

export const resumeEducation = [
	{
		institution: 'Universitas Mercu Buana',
		degree: "Bachelor's Degree in Informatics Engineering (S.Kom)",
		period: '2017 — 2022',
		location: 'Jakarta, Indonesia'
	}
] as const;

export const resumeLanguages = [
	{ language: 'Indonesian', proficiency: 'Native' },
	{ language: 'English', proficiency: 'Professional Working Proficiency' }
] as const;
