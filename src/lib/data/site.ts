export const siteConfig = {
	name: 'KyTama',
	brandLabel: '[ KyTama ]',
	fullName: 'Rizky Pratama',
	role: 'Backend Software Engineer',
	location: 'Jakarta, Indonesia',
	url: 'https://kytama.pages.dev',
	description:
		'Rizky Pratama — Backend software engineer building clean, observable, and reliable Go services for digital banking, plus web apps and self-hosted tools.',
	github: 'https://github.com/KyTama',
	linkedin: 'https://linkedin.com/in/prtamaky'
} as const;

export const navLinks = [
	{ href: '/about', label: '/about' },
	{ href: '/works', label: '/works' },
	{ href: '/journal', label: '/journal' },
	{ href: '/now', label: '/now' },
	{ href: '/resume', label: '/resume' }
] as const;

export const focusAreas = [
	{
		title: 'Go Microservices & Digital Banking',
		detail:
			'Building and maintaining backend services across lending (Tunaiku), embedded financing and banking, and savings/funding (Amarbank Digital).'
	},
	{
		title: 'Reliability & Observability',
		detail:
			'Tracing production traffic with Datadog and New Relic, resolving VAPT findings, and leading incident investigations and postmortems.'
	},
	{
		title: 'Clean Architecture & Shipping',
		detail:
			'Applying Domain-Driven Design, OpenAPI contracts, automated unit/integration testing, and Trunk-Based Development.'
	}
] as const;
