<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import { journal } from '$lib/data/journal';
</script>

<Seo
	title="Journal"
	description="Technical notes on Go, TypeScript, backend architecture, and self-hosted infrastructure by Rizky Pratama."
/>

<main class="mx-auto max-w-5xl space-y-12 px-6 py-12 md:py-16">
	<section class="border-b border-border pb-8">
		<h1 class="mb-4 text-3xl md:text-4xl">Journal</h1>
		<p class="max-w-[68ch] text-lg leading-relaxed text-text-muted">
			Working notes on backend engineering, language transitions, and running personal
			infrastructure.
		</p>
	</section>

	<section>
		<ul class="focus-list divide-y divide-border border-b border-border">
			{#each journal as entry (entry.slug)}
				<li class="focus-item py-6">
					<article
						class="flex flex-col justify-between gap-4 md:flex-row md:items-baseline md:gap-8"
					>
						<div class="min-w-0 flex-1">
							<div class="mb-2 flex flex-wrap items-baseline gap-3">
								<h2 class="text-lg text-accent">
									<a
										href={resolve('/journal/[slug]', { slug: entry.slug })}
										class="cta-link text-accent no-underline hover:text-accent-visible"
									>
										<span>{entry.title}</span>
										<span class="cta-arrow text-sm" aria-hidden="true">→</span>
									</a>
								</h2>
								{#if entry.status === 'draft'}
									<span
										class="rounded border border-border bg-surface/70 px-2.5 py-0.5 font-mono text-sm text-text-subtle"
									>
										outline / draft
									</span>
								{/if}
							</div>
							<p class="mb-3 max-w-[65ch] text-base leading-relaxed text-text-muted">
								{entry.excerpt}
							</p>
							<div class="flex flex-wrap gap-3">
								{#each entry.tags as tag (tag)}
									<span class="font-mono text-sm text-text-subtle">#{tag}</span>
								{/each}
							</div>
						</div>
						<time
							datetime={entry.date}
							class="shrink-0 font-mono text-sm text-text-subtle tabular-nums"
						>
							{new Date(entry.date).toLocaleDateString('en-US', {
								day: 'numeric',
								month: 'short',
								year: 'numeric'
							})}
						</time>
					</article>
				</li>
			{/each}
		</ul>
	</section>
</main>
