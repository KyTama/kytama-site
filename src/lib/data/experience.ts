export type Experience = {
	company: string;
	role: string;
	period: string;
	location: string;
	description: string;
	highlights: string[];
	tags: string[];
};

export const experiences: Experience[] = [
	{
		company: 'Amar Bank',
		role: 'Backend Software Engineer',
		period: '2020 — Present',
		location: 'Jakarta, Indonesia',
		description:
			'Working across lending, savings/funding, and embedded financing and banking domains. Started in lending on Tunaiku, transitioned through embedded financing and banking, and now build savings and funding systems on Amarbank Digital — owning Go microservices from design and delivery to observability and cleanup.',
		highlights: [
			'Built and maintained core lending systems',
			'Worked on savings and funding domain',
			'Developed embedded financing features',
			'Co-built early-stage Go services—delivering core feature flows on top of initial scaffolding across Tunaiku retention, repayment, and loan workflows—while co-maintaining 10+ existing microservices across lending, embedded financing and banking, and savings/funding',
			'Authored technical design docs and shipped production features across savings eligibility (Redis caching), onboarding active liveness, payroll-account binding, fraud-detection signals, and centralized gRPC authentication',
			'Added Datadog APM tracing with Orchestrion across Go services, executed service and data migrations, and maintained OpenAPI specs alongside unit and integration test suites'
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
			'Built and maintained HRIS system for internal HR operations',
			'Developed a post tracking system for an external client, handling end-to-end delivery monitoring',
			'Worked with PHP, CakePHP and CodeIgniter as primary tech stack',
			'Owned the tracking system end to end, from client requirements to deployment and support, at hundreds to ~2,000 air waybills a day',
			'Co-built a customer-facing tracking service in Java Spring Boot so end customers could check shipment status by air waybill number'
		],
		tags: ['PHP', 'CakePHP', 'CodeIgniter', 'HRIS', 'MySQL', 'PostgreSQL', 'Java', 'Spring Boot']
	}
	// tambah experience lain di sini
];
