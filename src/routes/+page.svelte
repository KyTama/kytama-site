<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import { experiences } from '$lib/data/experience';
	import { journal } from '$lib/data/journal';
	import { focusAreas, navLinks, siteConfig } from '$lib/data/site';
	import { works } from '$lib/data/works';
	import { getContext } from 'svelte';

	const featuredWorks = works.filter((w) => w.category !== 'work').slice(0, 4);
	const recentJournal = journal.slice(0, 2);
	const openPalette = getContext<(() => void) | undefined>('openPalette');
</script>

<Seo />

<main class="mx-auto max-w-5xl space-y-14 px-6 py-12 md:space-y-18 md:py-16">
	<!-- Hero -->
	<section class="grid grid-cols-1 items-start gap-8 pt-2 lg:grid-cols-[1.35fr_0.9fr] lg:gap-10">
		<div class="min-w-0">
			<p class="mb-3 flex flex-wrap items-center gap-2 font-mono text-sm text-text-subtle">
				<span class="h-2 w-2 shrink-0 rounded-full bg-accent-visible" aria-hidden="true"></span>
				<span>Jakarta, Indonesia</span>
				<span aria-hidden="true">·</span>
				<span>Digital Banking &amp; Backend</span>
			</p>

			<h1 class="mb-3 text-4xl tracking-tight md:text-5xl">{siteConfig.brandLabel}</h1>
			<p class="mb-5 font-mono text-base text-accent-visible">
				{siteConfig.role}
			</p>
			<p class="mb-8 max-w-[60ch] text-lg leading-relaxed text-text-muted">
				I'm Rizky Pratama: I build backend systems in Go for digital banking, keeping them clean,
				observable, and reliable. Off the clock, I build web apps and self-host way more things than
				I probably need to.
			</p>

			<div class="mb-5 flex flex-wrap items-center gap-3">
				<a href={resolve('/about')} class="cta-ghost">
					<span>Full profile (/about)</span>
					<span aria-hidden="true">→</span>
				</a>
				<a href={resolve('/resume')} class="cta-ghost">
					<span>View ATS resume</span>
					<span aria-hidden="true">→</span>
				</a>
			</div>

			<div class="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm">
				<a
					href={`mailto:${siteConfig.email}`}
					rel="external"
					class="cta-link inline-flex min-h-11 items-center text-text-primary no-underline hover:text-accent-visible"
				>
					<span>{siteConfig.email}</span>
					<span class="cta-arrow cta-arrow-ne text-xs" aria-hidden="true">↗</span>
				</a>
				<a
					href={siteConfig.github}
					target="_blank"
					rel="external noopener noreferrer"
					class="cta-link inline-flex min-h-11 items-center text-text-primary no-underline hover:text-accent-visible"
				>
					<span>GitHub</span>
					<span class="cta-arrow cta-arrow-ne text-xs" aria-hidden="true">↗</span>
				</a>
				<a
					href={siteConfig.linkedin}
					target="_blank"
					rel="external noopener noreferrer"
					class="cta-link inline-flex min-h-11 items-center text-text-primary no-underline hover:text-accent-visible"
				>
					<span>LinkedIn</span>
					<span class="cta-arrow cta-arrow-ne text-xs" aria-hidden="true">↗</span>
				</a>
			</div>

			<nav aria-label="Primary" class="flex flex-wrap items-center gap-x-5 gap-y-2">
				{#each navLinks as link (link.href)}
					<a
						href={resolve(link.href)}
						class="inline-flex min-h-11 items-center font-mono text-sm text-text-subtle no-underline hover:text-accent-visible"
					>
						{link.label}
					</a>
				{/each}
				{#if openPalette}
					<button
						type="button"
						onclick={() => openPalette()}
						class="inline-flex min-h-10 items-center gap-2 rounded border border-border-interactive bg-surface/60 px-3 py-1 font-mono text-sm text-text-primary hover:border-accent-visible hover:text-accent-dark"
						aria-label="Open command palette"
					>
						<span>cmd</span>
						<kbd class="text-text-subtle">⌘K</kbd>
					</button>
				{/if}
			</nav>
		</div>

		<!-- Snapshot Ledger Card -->
		<aside class="min-w-0 rounded-lg border border-border bg-surface/75 p-6">
			<h2 class="mb-4 border-b border-border pb-2.5 text-sm tracking-widest text-text-subtle">
				SNAPSHOT
			</h2>
			<dl class="space-y-3.5 text-sm">
				<div class="flex flex-col gap-0.5">
					<dt class="font-mono text-sm text-text-subtle">Current role</dt>
					<dd class="text-base text-text-primary">Amar Bank · Savings &amp; Funding</dd>
				</div>
				<div class="flex flex-col gap-0.5">
					<dt class="font-mono text-sm text-text-subtle">Experience</dt>
					<dd class="text-base text-text-primary">~10 years in Go, PHP, Java, SQL</dd>
				</div>
				<div class="flex flex-col gap-0.5">
					<dt class="font-mono text-sm text-text-subtle">Core stack</dt>
					<dd class="font-mono text-sm text-accent-visible">
						Go · PostgreSQL · gRPC · Pub/Sub · Docker
					</dd>
				</div>
				<div class="flex flex-col gap-0.5">
					<dt class="font-mono text-sm text-text-subtle">Active builds</dt>
					<dd class="text-base text-text-primary">Attentive · TamLedger · Bun/Elysia</dd>
				</div>
			</dl>
			<div
				class="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4"
			>
				<a href={resolve('/about')} class="cta-link font-mono text-sm no-underline">
					<span>Full profile (/about)</span>
					<span class="cta-arrow" aria-hidden="true">→</span>
				</a>
				<a href={resolve('/now')} class="cta-link font-mono text-sm text-text-subtle no-underline">
					<span>/now</span>
					<span class="cta-arrow" aria-hidden="true">→</span>
				</a>
			</div>
		</aside>
	</section>

	<!-- Experience & Profile Snapshot -->
	<section>
		<div class="mb-6 flex flex-wrap items-baseline justify-between gap-4">
			<h2 class="text-base tracking-wider text-accent">EXPERIENCE &amp; PROFILE</h2>
			<a href={resolve('/about')} class="cta-link font-mono text-sm no-underline">
				<span>full timeline &amp; skills (/about)</span>
				<span class="cta-arrow" aria-hidden="true">→</span>
			</a>
		</div>
		<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
			{#each experiences as exp (exp.company)}
				<article
					class="flex flex-col justify-between gap-4 rounded-lg border border-border bg-surface/55 p-6"
				>
					<div>
						<div class="mb-1 flex flex-wrap items-baseline justify-between gap-2">
							<h3 class="text-lg text-accent">{exp.company}</h3>
							<span class="font-mono text-sm text-accent-visible tabular-nums">{exp.period}</span>
						</div>
						<p class="mb-3 font-mono text-sm text-text-subtle">{exp.role}</p>
						<p class="mb-4 text-base leading-relaxed text-text-muted">{exp.description}</p>
						<ul
							class="space-y-1.5 border-l-2 border-accent-visible/35 pl-3.5 text-sm leading-relaxed text-text-primary"
						>
							{#each exp.highlights.slice(0, 2) as item (item.label)}
								<li>
									<span class="font-mono text-xs text-accent-visible">{item.label}:</span>
									<span> {item.text}</span>
								</li>
							{/each}
						</ul>
					</div>
					<div class="flex items-center justify-between gap-3 border-t border-border pt-3">
						<span class="font-mono text-xs text-text-subtle">
							{exp.tags.slice(0, 5).join(' · ')}
						</span>
						<a href={resolve('/about')} class="cta-link shrink-0 font-mono text-xs no-underline">
							<span>read more</span>
							<span class="cta-arrow" aria-hidden="true">→</span>
						</a>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- Focus Areas -->
	<section>
		<div class="mb-6 flex items-baseline justify-between gap-4">
			<h2 class="text-base tracking-wider text-accent">CORE FOCUS</h2>
			<a href={resolve('/about')} class="cta-link font-mono text-sm no-underline">
				<span>full experience</span>
				<span class="cta-arrow" aria-hidden="true">→</span>
			</a>
		</div>
		<div class="grid grid-cols-1 gap-5 md:grid-cols-3">
			{#each focusAreas as area (area.title)}
				<div class="rounded-lg border border-border bg-surface/65 p-5">
					<h3 class="mb-2.5 text-base text-accent">{area.title}</h3>
					<p class="text-base leading-relaxed text-text-muted">{area.detail}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Selected Works -->
	<section>
		<div class="mb-6 flex items-baseline justify-between gap-4">
			<h2 class="text-base tracking-wider text-accent">SELECTED WORKS</h2>
			<a href={resolve('/works')} class="cta-link font-mono text-sm no-underline">
				<span>see all works</span>
				<span class="cta-arrow" aria-hidden="true">→</span>
			</a>
		</div>
		<div class="focus-list grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each featuredWorks as work (work.title)}
				<article
					class="focus-item flex flex-col justify-between gap-4 rounded-lg border border-border bg-surface/60 p-5 transition-colors hover:border-accent-visible"
				>
					<div>
						<div class="mb-2 flex items-baseline justify-between gap-3">
							{#if work.url || work.repo}
								<a
									href={work.url ?? work.repo}
									target="_blank"
									rel="external noopener noreferrer"
									class="cta-link font-mono text-base text-accent no-underline hover:text-accent-visible"
								>
									<span>{work.title}</span>
									<span class="cta-arrow cta-arrow-ne text-sm" aria-hidden="true">↗</span>
								</a>
							{:else}
								<h3 class="text-base text-accent">{work.title}</h3>
							{/if}
							<span
								class="rounded border border-border px-2 py-0.5 font-mono text-sm text-text-subtle"
							>
								{work.category === 'client' ? 'collaboration' : 'self project'}
							</span>
						</div>
						<p class="text-base leading-relaxed text-text-muted">
							{work.description}
						</p>
					</div>
					<div class="font-mono text-sm text-text-subtle">
						{work.tags.join(' · ')}
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- Journal teaser -->
	<section>
		<div class="mb-5 flex items-baseline justify-between gap-4">
			<h2 class="text-base tracking-wider text-accent">JOURNAL</h2>
			<a href={resolve('/journal')} class="cta-link font-mono text-sm no-underline">
				<span>read all</span>
				<span class="cta-arrow" aria-hidden="true">→</span>
			</a>
		</div>
		<ul class="focus-list divide-y divide-border border-y border-border">
			{#each recentJournal as entry (entry.slug)}
				<li class="focus-item py-4">
					<div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline sm:gap-6">
						<div class="min-w-0">
							<a
								href={resolve('/journal/[slug]', { slug: entry.slug })}
								class="cta-link text-base font-medium text-text-primary no-underline hover:text-accent-dark"
							>
								<span>{entry.title}</span>
								<span class="cta-arrow text-sm text-text-subtle" aria-hidden="true">→</span>
							</a>
							<p class="mt-1 text-base text-text-muted">{entry.excerpt}</p>
						</div>
						<span class="shrink-0 font-mono text-sm text-text-subtle tabular-nums">
							{new Date(entry.date).toLocaleDateString('en-US', {
								month: 'short',
								year: 'numeric'
							})}
						</span>
					</div>
				</li>
			{/each}
		</ul>
	</section>

	<!-- Closing CTA -->
	<section
		class="flex flex-col justify-between gap-5 rounded-lg border border-border bg-surface/75 p-6 sm:flex-row sm:items-center"
	>
		<div>
			<h2 class="mb-1 text-base text-accent">Get in touch or grab the ATS resume</h2>
			<p class="text-base text-text-muted">
				Reach out via
				<a href={`mailto:${siteConfig.email}`} rel="external" class="hover:underline">
					{siteConfig.email}
				</a>, check
				<a
					href={siteConfig.github}
					target="_blank"
					rel="external noopener noreferrer"
					class="hover:underline">GitHub</a
				>
				/
				<a
					href={siteConfig.linkedin}
					target="_blank"
					rel="external noopener noreferrer"
					class="hover:underline">LinkedIn</a
				>, or export the PDF resume.
			</p>
		</div>
		<div class="flex shrink-0 flex-wrap gap-3">
			<a href={resolve('/resume')} class="cta-ghost">
				<span>Open /resume</span>
				<span aria-hidden="true">→</span>
			</a>
		</div>
	</section>
</main>
