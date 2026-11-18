<script lang="ts">
	import { page } from '$app/state';
	import { siteConfig } from '$lib/data/site';

	type SchemaPageType = 'WebPage' | 'ProfilePage' | 'CollectionPage' | 'TechArticle';

	type Props = {
		title?: string;
		rawTitle?: string;
		description?: string;
		type?: 'website' | 'article';
		pageType?: SchemaPageType;
		publishedTime?: string;
		keywords?: readonly string[];
	};

	let {
		title,
		rawTitle,
		description = siteConfig.description,
		type = 'website',
		pageType = 'WebPage',
		publishedTime,
		keywords
	}: Props = $props();

	const fullTitle = $derived(
		rawTitle ??
			(title
				? `${title} — ${siteConfig.name}`
				: `${siteConfig.fullName} (${siteConfig.name}) — Go Backend Software Engineer`)
	);
	const canonicalUrl = $derived(`${siteConfig.url}${page.url.pathname}`);
	const ogImageUrl = `${siteConfig.url}/og-image.png`;
	const personId = `${siteConfig.url}/#person`;
	const websiteId = `${siteConfig.url}/#website`;

	const schemaGraph = $derived.by(() => {
		const personNode = {
			'@type': 'Person',
			'@id': personId,
			name: siteConfig.fullName,
			alternateName: siteConfig.name,
			jobTitle: siteConfig.role,
			description: siteConfig.description,
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
			alumniOf: {
				'@type': 'CollegeOrUniversity',
				name: 'Universitas Mercu Buana'
			},
			knowsAbout: [
				'Go',
				'PostgreSQL',
				'gRPC',
				'Redis',
				'Google Cloud Pub/Sub',
				'Datadog',
				'OpenAPI',
				'SOLID Design Principles',
				'Domain-Driven Design',
				'Docker',
				'TypeScript',
				'Bun',
				'Elysia'
			]
		};

		const websiteNode = {
			'@type': 'WebSite',
			'@id': websiteId,
			url: siteConfig.url,
			name: `${siteConfig.fullName} (${siteConfig.name})`,
			description: siteConfig.description,
			author: { '@id': personId },
			publisher: { '@id': personId }
		};

		const resolvedPageType = type === 'article' ? 'TechArticle' : pageType;
		const pageNode =
			resolvedPageType === 'TechArticle'
				? {
						'@type': 'TechArticle',
						'@id': canonicalUrl,
						url: canonicalUrl,
						mainEntityOfPage: canonicalUrl,
						headline: title ?? fullTitle,
						description,
						...(publishedTime ? { datePublished: publishedTime, dateModified: publishedTime } : {}),
						...(keywords && keywords.length > 0 ? { keywords: keywords.join(', ') } : {}),
						author: { '@id': personId },
						publisher: { '@id': personId },
						isPartOf: { '@id': websiteId }
					}
				: {
						'@type': resolvedPageType,
						'@id': canonicalUrl,
						url: canonicalUrl,
						name: fullTitle,
						description,
						about: { '@id': personId },
						...(resolvedPageType === 'ProfilePage' ? { mainEntity: { '@id': personId } } : {}),
						isPartOf: { '@id': websiteId }
					};

		return JSON.stringify({
			'@context': 'https://schema.org',
			'@graph': [personNode, websiteNode, pageNode]
		});
	});
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />
	<link rel="alternate" type="text/plain" title="LLM Context" href={`${siteConfig.url}/llms.txt`} />

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

	<svelte:element this={'script'} type="application/ld+json">{schemaGraph}</svelte:element>
</svelte:head>
