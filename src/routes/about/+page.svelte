<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import { experiences } from '$lib/data/experience';
	import { skillGroups } from '$lib/data/skills';
</script>

<Seo
	title="About"
	description="Experience and technical background of Rizky Pratama — Backend Software Engineer working with Go, PostgreSQL, and distributed systems."
/>

<main class="mx-auto max-w-5xl space-y-14 px-6 py-12 md:space-y-16 md:py-16">
	<!-- Header -->
	<section class="border-b border-border pb-8">
		<h1 class="mb-4 text-3xl md:text-4xl">About</h1>
		<p class="max-w-[70ch] text-lg leading-relaxed text-text-muted">
			Backend engineer with ~10 years experience across lending, savings, and embedded financing. Go
			is my main language — currently learning TypeScript with Bun and Elysia. Obsessed with clean
			architecture and shipping things that actually work.
		</p>
	</section>

	<!-- Experience -->
	<section>
		<h2 class="mb-6 text-base tracking-wider text-accent">EXPERIENCE</h2>
		<div class="flex flex-col gap-8">
			{#each experiences as exp (exp.company)}
				<article
					class="grid grid-cols-1 gap-5 rounded-lg border border-border bg-surface/55 p-6 md:grid-cols-4"
				>
					<div class="md:col-span-1">
						<p class="font-mono text-sm text-accent-visible tabular-nums">{exp.period}</p>
						<p class="mt-1 font-mono text-sm text-text-subtle">{exp.location}</p>
					</div>
					<div class="md:col-span-3 md:border-l md:border-border md:pl-6">
						<h3 class="mb-1 text-lg text-accent">{exp.company}</h3>
						<p class="mb-3 font-mono text-sm text-text-subtle">{exp.role}</p>
						<p class="mb-4 max-w-[70ch] text-base leading-relaxed text-text-muted">
							{exp.description}
						</p>
						<ul class="mb-5 flex flex-col gap-3.5">
							{#each exp.highlights as highlight (highlight.label)}
								<li class="flex gap-2.5 text-base leading-relaxed text-text-primary">
									<span class="mt-1 text-accent-visible" aria-hidden="true">→</span>
									<div class="space-y-0.5">
										<p class="font-mono text-xs tracking-wide text-accent-visible">
											{highlight.label}
										</p>
										<p>{highlight.text}</p>
									</div>
								</li>
							{/each}
						</ul>
						<div class="flex flex-wrap gap-2">
							{#each exp.tags as tag (tag)}
								<span
									class="rounded border border-accent-visible px-2.5 py-0.5 font-mono text-sm text-accent-visible"
								>
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- Skills -->
	<section>
		<h2 class="mb-6 text-base tracking-wider text-accent">SKILLS</h2>
		<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
			{#each skillGroups as group (group.category)}
				<div class="rounded-lg border border-border bg-surface/55 p-5">
					<h3 class="mb-3 text-sm text-text-subtle">{group.category}</h3>
					<div class="flex flex-wrap gap-2">
						{#each group.skills as skill (skill)}
							<span
								class="rounded border border-border bg-background px-2.5 py-1 font-mono text-sm text-text-primary"
							>
								{skill}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Resume link -->
	<section
		class="flex flex-col justify-between gap-4 rounded-lg border border-border bg-surface/75 p-6 sm:flex-row sm:items-center"
	>
		<p class="text-base text-text-muted">Looking for the full ATS-ready resume?</p>
		<a href={resolve('/resume')} class="cta-ghost">
			<span>View /resume</span>
			<span aria-hidden="true">→</span>
		</a>
	</section>
</main>
