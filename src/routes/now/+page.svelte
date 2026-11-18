<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import { nowMeta, nowSections } from '$lib/data/now';
</script>

<Seo
	title="Now"
	description="What Rizky Pratama is currently building, learning, and focusing on."
/>

<main class="mx-auto max-w-5xl space-y-16 px-6 py-12 md:space-y-20 md:py-16">
	<section class="border-b border-border pb-8">
		<h1 class="mb-4 text-display">Now</h1>
		<p class="mb-5 max-w-[68ch] text-lg leading-relaxed text-text-muted">{nowMeta.intro}</p>
		<div class="flex flex-wrap gap-x-6 gap-y-2 font-mono text-meta text-text-subtle">
			<span class="tabular-nums">Last updated: {nowMeta.lastUpdated}</span>
			<span>Location: {nowMeta.location}</span>
		</div>
	</section>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		{#each nowSections as section (section.heading)}
			<section class="card space-y-4">
				<h2 class="border-b border-border pb-2.5 text-section tracking-widest text-text-subtle">
					{section.heading.toUpperCase()}
				</h2>
				<ul class="space-y-4">
					{#each section.items as item (item.label)}
						<li class="space-y-1">
							<div class="flex flex-wrap items-baseline gap-2.5">
								<h3 class="text-card text-accent">{item.label}</h3>
								{#if item.href}
									{@const isExternal = item.href.startsWith('http')}
									{#if isExternal}
										<a
											href={item.href}
											target="_blank"
											rel="external noopener noreferrer"
											class="cta-link font-mono text-meta no-underline"
										>
											<span>link</span>
											<span class="cta-arrow cta-arrow-ne" aria-hidden="true">↗</span>
										</a>
									{:else}
										<a href={resolve('/works')} class="cta-link font-mono text-meta no-underline">
											<span>view</span>
											<span class="cta-arrow" aria-hidden="true">→</span>
										</a>
									{/if}
								{/if}
							</div>
							<p class="text-base leading-relaxed text-text-muted">{item.detail}</p>
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>
</main>
