export type ExperienceHighlight = {
	label: string;
	text: string;
};

export type Experience = {
	company: string;
	role: string;
	period: string;
	location: string;
	description: string;
	highlights: ExperienceHighlight[];
	tags: string[];
};

export const experiences: Experience[] = [
	{
		company: 'Amar Bank',
		role: 'Backend Software Engineer',
		period: '2020 — Present',
		location: 'Jakarta, Indonesia',
		description:
			'Working across lending, savings/funding, and embedded financing and banking domains. Started in lending on Tunaiku, transitioned through embedded financing and banking, and now build savings and funding systems on Amarbank Digital, owning Go microservices from design and delivery to observability and cleanup.',
		highlights: [
			{
				label: 'Lending · Tunaiku',
				text: 'Co-built early-stage Go services, delivering core feature flows across retention, repayment, repeat-loan, credit-limit, Early Paid-Back, Early Sign OTP workflows, Keycloak login overhaul, and distributed locking for duplicate email fixes'
			},
			{
				label: 'Embedded Financing & Banking',
				text: 'Acted as backend PIC bridging lending and funding during the embedded financing and banking transition, building partner config services (gRPC/HTTP), shared partner validation libraries, and backend data APIs for product experiments'
			},
			{
				label: 'Savings & Funding · Amarbank Digital',
				text: 'Co-maintained 10+ funding microservices and authored primary TRDs shipped to production: savings eligibility (Redis caching), onboarding active liveness, payroll-account binding, cross-device fraud telemetry, centralized gRPC auth, Google verified-email sign-up, and automated data migration'
			},
			{
				label: 'Observability, Security & Craft',
				text: 'Added Datadog APM tracing with Orchestrion across Go services, executed legacy service consolidation and infra cost cleanup, resolved VAPT/PDP security findings, and applied SOLID principles and DDD alongside OpenAPI specs and automated test suites'
			}
		],
		tags: ['Go', 'PostgreSQL', 'gRPC', 'Pub/Sub', 'Redis', 'Keycloak', 'Datadog', 'Docker']
	},
	{
		company: 'PT. Sentra Inovasi Solusindo',
		role: 'Software Engineer',
		period: '2016 — 2019',
		location: 'Jakarta, Indonesia',
		description:
			'Software engineer at an IT consultancy, delivering internal enterprise systems and client-facing solutions in PHP and Java.',
		highlights: [
			{
				label: 'Logistics Tracking',
				text: 'Owned a logistics delivery tracking system end to end in PHP (CakePHP, CodeIgniter), handling requirements, deployment, and daily support at hundreds to ~2,000 air waybills a day'
			},
			{
				label: 'Java Spring Boot Migration',
				text: 'Co-built a customer-facing shipment tracking service in Java Spring Boot alongside a senior and junior developer, migrating lookup features so end customers could track shipments by air waybill'
			},
			{
				label: 'Internal HRIS',
				text: 'Maintained and extended internal group HRIS modules (employee data, attendance, leave) across MySQL and PostgreSQL backends'
			}
		],
		tags: ['PHP', 'CakePHP', 'CodeIgniter', 'HRIS', 'MySQL', 'PostgreSQL', 'Java', 'Spring Boot']
	}
	// tambah experience lain di sini
];
