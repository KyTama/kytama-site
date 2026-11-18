<script lang="ts">
	import { page } from '$app/state';
	import { siteConfig } from '$lib/data/site';

	type Props = {
		title?: string;
		rawTitle?: string;
		description?: string;
		type?: 'website' | 'article';
	};

	let { title, rawTitle, description = siteConfig.description, type = 'website' }: Props = $props();

	const fullTitle = $derived(
		rawTitle ??
			(title
				? `${title} — ${siteConfig.name}`
				: `${siteConfig.brandLabel} — ${siteConfig.fullName}`)
	);
	const canonicalUrl = $derived(`${siteConfig.url}${page.url.pathname}`);
	const ogImageUrl = `${siteConfig.url}/og-image.png`;
	const personJsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: siteConfig.fullName,
		alternateName: siteConfig.name,
		jobTitle: siteConfig.role,
		url: siteConfig.url,
		email: `mailto:${siteConfig.email}`,
		sameAs: [siteConfig.github, siteConfig.linkedin],
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Jakarta',
			addressCountry: 'ID'
		},
		worksFor: {
			'@type': 'Organization',
			name: 'Amar Bank'
		},
		knowsAbout: [
			'Go',
			'PostgreSQL',
			'gRPC',
			'Redis',
			'Google Cloud Pub/Sub',
			'Datadog',
			'Docker',
			'TypeScript'
		]
	});
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:type" content={type} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content={siteConfig.name} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content={`${siteConfig.fullName} (${siteConfig.name}) — ${siteConfig.role}`}
	/>

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImageUrl} />

	<svelte:element this={'script'} type="application/ld+json">{personJsonLd}</svelte:element>
</svelte:head>
