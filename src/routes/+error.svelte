<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo title={`${page.status} — Not Found`} description="The requested page could not be found." />

<main class="mx-auto max-w-5xl px-6 py-16 md:py-24">
	<h1 class="mb-4 text-3xl md:text-4xl">{page.status} — Page not found</h1>
	<p class="mb-8 max-w-prose text-text-muted">
		{page.error?.message || 'This route does not exist or has moved.'}
	</p>
	<div class="flex flex-wrap gap-4">
		<a href={resolve('/')} class="cta-ghost">Return home →</a>
		<a
			href={resolve('/works')}
			class="cta-link inline-flex min-h-11 items-center font-mono text-xs"
		>
			Browse /works <span class="cta-arrow" aria-hidden="true">→</span>
		</a>
	</div>
</main>
