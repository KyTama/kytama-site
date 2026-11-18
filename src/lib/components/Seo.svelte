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

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
</svelte:head>
