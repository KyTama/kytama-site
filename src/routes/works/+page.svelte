<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import { workCategoryLabels, works, type WorkCategory } from '$lib/data/works';

	type Filter = 'all' | WorkCategory;
	const filterOrder: Filter[] = ['all', 'work', 'client', 'self'];

	let activeFilter: Filter = $state('all');

	const visibleGroups = $derived.by(() => {
		const categories: WorkCategory[] =
			activeFilter === 'all' ? ['work', 'client', 'self'] : [activeFilter];
		return categories
			.map((cat) => ({
				category: cat,
				label: workCategoryLabels[cat],
				items: works.filter((w) => w.category === cat)
			}))
			.filter((g) => g.items.length > 0);
	});

	function countFor(filter: Filter): number {
		if (filter === 'all') return works.length;
		return works.filter((w) => w.category === filter).length;
	}

	function categorySubtitle(cat: WorkCategory): string {
		if (cat === 'work') return 'employer systems';
		if (cat === 'client') return 'partner & client sites · live URLs';
		return 'open source & personal builds';
	}
</script>

<Seo
	title="Works"
	description="Selected employment work, collaborations, and personal engineering projects by Rizky Pratama (KyTama)."
/>

<main class="mx-auto max-w-5xl space-y-12 px-6 py-12 md:py-16">
	<section>
		<h1 class="mb-4 text-3xl md:text-4xl">Works</h1>
		<p class="mb-8 max-w-[68ch] text-lg leading-relaxed text-text-muted">
			Split by context: employment track record, external collaborations, and personal builds.
		</p>

		<div class="flex flex-wrap gap-2.5" role="group" aria-label="Filter works by category">
			{#each filterOrder as filter (filter)}
				<button
					type="button"
					onclick={() => (activeFilter = filter)}
					aria-pressed={activeFilter === filter}
					class="inline-flex min-h-11 items-center gap-2 rounded border px-4 py-2 font-mono text-sm transition-colors {activeFilter ===
					filter
						? 'border-accent-visible bg-accent-visible text-background'
						: 'border-border-interactive bg-surface/50 text-text-primary hover:border-accent-visible hover:text-accent-dark'}"
				>
					<span>{workCategoryLabels[filter]}</span>
					<span class="tabular-nums opacity-85">({countFor(filter)})</span>
				</button>
			{/each}
		</div>
	</section>

	{#each visibleGroups as group (group.category)}
		<section class="space-y-5">
			<div
				class="flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-2.5"
			>
				<h2 class="text-base tracking-wider text-accent">
					{group.label.toUpperCase()}
				</h2>
				<span class="font-mono text-sm text-text-subtle">
					{categorySubtitle(group.category)}
				</span>
			</div>

			<div class="focus-list grid grid-cols-1 gap-4">
				{#each group.items as item (item.title)}
					<article class="focus-item rounded-lg border border-border bg-surface/60 p-6">
						<div class="flex flex-col justify-between gap-5 md:flex-row md:items-start">
							<div class="min-w-0 flex-1">
								<div class="mb-2 flex flex-wrap items-baseline gap-3">
									<h3 class="text-lg text-accent">{item.title}</h3>
									{#if item.period}
										<span class="font-mono text-sm text-text-subtle tabular-nums">
											{item.period}
										</span>
									{/if}
									<span
										class="inline-flex items-center gap-1.5 font-mono text-sm {item.status ===
										'active'
											? 'text-accent-visible'
											: 'text-text-subtle'}"
									>
										<span
											class="h-1.5 w-1.5 rounded-full {item.status === 'active'
												? 'bg-accent-visible'
												: 'bg-text-subtle/60'}"
											aria-hidden="true"
										></span>
										<span>{item.status}</span>
									</span>
								</div>

								{#if item.role}
									<p class="mb-2 font-mono text-sm text-accent-visible">{item.role}</p>
								{/if}

								<p class="mb-4 max-w-[68ch] text-base leading-relaxed text-text-muted">
									{item.description}
								</p>

								{#if item.highlights && item.highlights.length > 0}
									<ul
										class="mb-4 max-w-[68ch] space-y-1.5 border-l-2 border-accent-visible/35 pl-4"
									>
										{#each item.highlights as point (point)}
											<li class="flex gap-2 text-sm leading-relaxed text-text-primary">
												<span class="text-accent-visible" aria-hidden="true">→</span>
												<span>{point}</span>
											</li>
										{/each}
									</ul>
								{/if}

								<div class="flex flex-wrap gap-2">
									{#each item.tags as tag (tag)}
										<span
											class="rounded border border-border bg-background px-2.5 py-0.5 font-mono text-sm text-text-primary"
										>
											{tag}
										</span>
									{/each}
								</div>
							</div>

							<div class="flex shrink-0 flex-wrap items-center gap-3">
								{#if item.url}
									<a
										href={item.url}
										target="_blank"
										rel="external noopener noreferrer"
										class="cta-ghost"
									>
										<span>Visit site</span>
										<span aria-hidden="true">↗</span>
									</a>
								{/if}
								{#if item.repo && item.category !== 'client'}
									<a
										href={item.repo}
										target="_blank"
										rel="external noopener noreferrer"
										class="cta-ghost"
									>
										<span>GitHub</span>
										<span aria-hidden="true">↗</span>
									</a>
								{/if}
								{#if item.route}
									<a href={resolve(item.route)} class="cta-ghost">
										<span>Read details</span>
										<span aria-hidden="true">→</span>
									</a>
								{/if}
							</div>
						</div>
					</article>
				{/each}
			</div>
		</section>
	{/each}
</main>
