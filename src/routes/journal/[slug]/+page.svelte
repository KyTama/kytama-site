<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const entry = $derived(data.entry);

	type TextSegment = {
		text: string;
		isCode: boolean;
	};

	function splitInlineCode(paragraph: string): TextSegment[] {
		return paragraph
			.split(/(`[^`]+`)/g)
			.filter(Boolean)
			.map((part) =>
				part.startsWith('`') && part.endsWith('`') && part.length > 2
					? { text: part.slice(1, -1), isCode: true }
					: { text: part, isCode: false }
			);
	}
</script>

<Seo title={entry.title} description={entry.excerpt} type="article" />

<main class="mx-auto max-w-5xl px-6 py-12 md:py-16">
	<div class="mb-8">
		<a href={resolve('/journal')} class="cta-link font-mono text-sm text-text-subtle no-underline">
			<span aria-hidden="true">←</span>
			<span>All journal entries</span>
		</a>
	</div>

	<article class="max-w-[70ch] space-y-8">
		<header class="space-y-4 border-b border-border pb-6">
			<div class="flex flex-wrap items-center gap-3 font-mono text-sm text-text-subtle">
				<time datetime={entry.date} class="tabular-nums">
					{new Date(entry.date).toLocaleDateString('en-US', {
						day: 'numeric',
						month: 'short',
						year: 'numeric'
					})}
				</time>
				{#if entry.status === 'draft'}
					<span class="rounded border border-border bg-surface/70 px-2.5 py-0.5 text-text-subtle">
						status: outline / draft in progress
					</span>
				{/if}
			</div>

			<h1 class="text-3xl md:text-4xl">{entry.title}</h1>
			<p class="text-lg leading-relaxed text-text-muted">{entry.excerpt}</p>

			<div class="flex flex-wrap gap-3 pt-1">
				{#each entry.tags as tag (tag)}
					<span class="font-mono text-sm text-text-subtle">#{tag}</span>
				{/each}
			</div>
		</header>

		{#if entry.status === 'published' && entry.sections}
			<div class="space-y-8">
				{#each entry.sections as section, idx (section.heading ?? idx)}
					<section class="space-y-4">
						{#if section.heading}
							<h2 class="text-xl text-accent">{section.heading}</h2>
						{/if}
						{#each section.paragraphs as paragraph (paragraph)}
							<p class="text-base leading-relaxed text-text-primary">
								{#each splitInlineCode(paragraph) as seg, segIdx (segIdx)}
									{#if seg.isCode}
										<code
											class="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-sm text-accent"
											>{seg.text}</code
										>
									{:else}
										{seg.text}
									{/if}
								{/each}
							</p>
						{/each}
						{#if section.list}
							<ul class="space-y-2 border-l-2 border-accent-visible/35 pl-4">
								{#each section.list as item (item)}
									<li class="flex gap-2.5 text-base leading-relaxed text-text-primary">
										<span class="text-accent-visible" aria-hidden="true">→</span>
										<span>{item}</span>
									</li>
								{/each}
							</ul>
						{/if}
						{#if section.code}
							<div
								class="overflow-hidden rounded-lg border border-border-interactive/60 bg-surface"
							>
								<div
									class="border-b border-border bg-background/60 px-4 py-1.5 font-mono text-xs tracking-wider text-text-subtle uppercase"
								>
									{section.code.lang}
								</div>
								<pre
									class="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-text-primary"><code
										>{section.code.snippet}</code
									></pre>
							</div>
						{/if}
					</section>
				{/each}
			</div>
		{:else if entry.status === 'draft'}
			<section class="rounded-lg border border-border bg-surface/70 p-6">
				<h2 class="mb-3 text-sm tracking-wider text-accent">OUTLINE IN PROGRESS</h2>
				<p class="mb-4 text-base leading-relaxed text-text-muted">
					Full write-up is still being drafted. Planned notes for this entry:
				</p>
				<ul class="space-y-2.5">
					{#each entry.outline as point (point)}
						<li class="flex gap-2.5 text-base leading-relaxed text-text-primary">
							<span class="text-accent-visible" aria-hidden="true">→</span>
							<span>{point}</span>
						</li>
					{/each}
				</ul>
			</section>
		{/if}
	</article>
</main>
