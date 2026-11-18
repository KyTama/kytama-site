<script lang="ts">
	import { browser } from '$app/environment';
	import { asset, resolve } from '$app/paths';
	import { page } from '$app/state';
	import Seo from '$lib/components/Seo.svelte';
	import {
		resumeEducation,
		resumeExperience,
		resumeLanguages,
		resumeProfile,
		resumeProjects,
		resumeSkillGroups
	} from '$lib/data/resume';

	type ResumeDensity = 'full' | 'compact';
	let densityOverride: ResumeDensity | null = $state(null);
	const density: ResumeDensity = $derived(
		densityOverride ??
			(browser && page.url.searchParams.get('density') === 'compact' ? 'compact' : 'full')
	);
	const pdfHref = $derived(
		density === 'compact'
			? asset('/Rizky-Pratama-Resume-Compact.pdf')
			: asset('/Rizky-Pratama-Resume-Full.pdf')
	);

	function printResume() {
		window.print();
	}
</script>

<Seo
	rawTitle="Rizky Pratama — Backend Software Engineer (Resume)"
	description="ATS-friendly engineering resume for Rizky Pratama — Backend Software Engineer (Go, PostgreSQL, distributed systems)."
/>

<main
	class="print-container mx-auto max-w-4xl px-6 py-12 md:py-16 {density === 'compact'
		? 'print-compact space-y-6 print:space-y-3'
		: 'space-y-10 print:space-y-5'}"
>
	<!-- Action bar -->
	<div
		class="no-print flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4"
	>
		<a href={resolve('/about')} class="cta-link font-mono text-sm text-text-subtle no-underline">
			<span aria-hidden="true">←</span>
			<span>Back to /about</span>
		</a>

		<div class="flex flex-wrap items-center gap-3">
			<span class="hidden font-mono text-xs text-text-subtle sm:inline">ATS · A4</span>
			<div
				class="inline-flex rounded border border-border-interactive bg-surface/60 p-0.5"
				role="group"
				aria-label="Resume layout density"
			>
				<button
					type="button"
					onclick={() => (densityOverride = 'full')}
					aria-pressed={density === 'full'}
					class="min-h-10 rounded-xs px-3 font-mono text-sm transition-colors {density === 'full'
						? 'bg-accent-visible text-background'
						: 'text-text-primary hover:text-accent-dark'}"
				>
					2-Page (Full)
				</button>
				<button
					type="button"
					onclick={() => (densityOverride = 'compact')}
					aria-pressed={density === 'compact'}
					class="min-h-10 rounded-xs px-3 font-mono text-sm transition-colors {density === 'compact'
						? 'bg-accent-visible text-background'
						: 'text-text-primary hover:text-accent-dark'}"
				>
					1-Page (Compact)
				</button>
			</div>

			<a href={pdfHref} download rel="external" class="cta-ghost">
				<span>Download PDF</span>
				<span aria-hidden="true">↓</span>
			</a>

			<button type="button" onclick={printResume} class="cta-ghost">
				<span>Print</span>
				<span aria-hidden="true">↗</span>
			</button>
		</div>
	</div>

	<!-- Resume Header -->
	<header
		class="border-b border-border pb-5 print:pb-3 {density === 'compact'
			? 'space-y-1.5'
			: 'space-y-3'}"
	>
		<div class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
			<h1 class="text-3xl md:text-4xl">{resumeProfile.name}</h1>
			<span class="font-mono text-sm text-text-subtle">{resumeProfile.location}</span>
		</div>
		<p class="font-mono text-base text-accent-visible">{resumeProfile.title}</p>
		<p class="max-w-[75ch] text-base leading-relaxed text-text-muted">{resumeProfile.summary}</p>
		<ul class="flex flex-wrap gap-x-5 gap-y-1 pt-0.5 font-mono text-sm text-text-subtle">
			{#each resumeProfile.links as link (link.href)}
				<li>
					{#if link.isEmail}
						<a
							href={`mailto:${resumeProfile.email}`}
							rel="external"
							class="no-underline hover:underline"
						>
							{link.label}
						</a>
					{:else}
						<a
							href={link.href}
							target="_blank"
							rel="external noopener noreferrer"
							class="no-underline hover:underline"
						>
							{link.label}
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</header>

	<!-- Experience -->
	<section
		class={density === 'compact' ? 'space-y-4 print:space-y-3' : 'space-y-7 print:space-y-4'}
	>
		<h2 class="text-base tracking-wider text-accent">EXPERIENCE</h2>

		{#each resumeExperience as role (role.company)}
			<article
				class="border-b border-border pb-6 last:border-b-0 last:pb-0 print:pb-3 {density ===
				'compact'
					? 'space-y-2'
					: 'space-y-4'}"
			>
				<div class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
					<div>
						<h3 class="text-lg text-accent">{role.company} — {role.role}</h3>
						{#if density === 'full'}
							<p class="font-mono text-sm text-text-subtle">{role.location}</p>
						{/if}
					</div>
					<p class="font-mono text-sm text-text-subtle tabular-nums">{role.period}</p>
				</div>

				{#if density === 'full'}
					<p class="max-w-[75ch] text-base leading-relaxed text-text-muted">{role.summary}</p>
					<div class="space-y-4 print:space-y-2">
						{#each role.groups as group (group.title ?? group.bullets[0])}
							<div class="space-y-1.5 print:space-y-1">
								{#if group.title}
									<h4 class="text-sm text-accent-visible">{group.title}</h4>
								{/if}
								<ul class="space-y-1.5 print:list-disc print:space-y-0.5 print:pl-5">
									{#each group.bullets as bullet (bullet)}
										<li
											class="flex gap-2.5 text-base leading-relaxed text-text-primary print:list-item"
										>
											<span class="mt-0.5 text-accent-visible print:hidden" aria-hidden="true">
												→
											</span>
											<span>{bullet}</span>
										</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
					<p class="font-mono text-sm leading-relaxed text-text-subtle">
						Stack: {role.tags.join(', ')}
					</p>
				{:else}
					<ul class="space-y-1.5 print:list-disc print:space-y-0.5 print:pl-5">
						{#each role.compactBullets as bullet (bullet)}
							<li class="flex gap-2.5 text-base leading-relaxed text-text-primary print:list-item">
								<span class="mt-0.5 text-accent-visible print:hidden" aria-hidden="true">→</span>
								<span>{bullet}</span>
							</li>
						{/each}
					</ul>
				{/if}
			</article>
		{/each}
	</section>

	<!-- Selected Projects -->
	<section
		class="print-avoid-break border-t border-border pt-5 print:pt-3 {density === 'compact'
			? 'space-y-2'
			: 'space-y-3'}"
	>
		<h2 class="text-base tracking-wider text-accent">SELECTED PROJECTS</h2>
		<ul class="space-y-2 print:list-disc print:space-y-1 print:pl-5">
			{#each resumeProjects as project (project.name)}
				<li class="flex gap-2.5 text-base leading-relaxed text-text-primary print:list-item">
					<span class="mt-0.5 text-accent-visible print:hidden" aria-hidden="true">→</span>
					<span>
						<strong class="font-semibold text-accent">{project.name}</strong>
						<span class="text-text-muted"> ({project.stack})</span> — {project.description}
						<a
							href={project.href}
							target="_blank"
							rel="external noopener noreferrer"
							class="ml-1 font-mono text-sm text-accent-visible underline-offset-2 hover:underline"
						>
							{project.urlLabel}
						</a>
					</span>
				</li>
			{/each}
		</ul>
	</section>

	<!-- Technical Skills (linear DOM for reliable ATS PDF extraction) -->
	<section
		class="print-avoid-break border-t border-border pt-5 print:pt-3 {density === 'compact'
			? 'space-y-2'
			: 'space-y-3'}"
	>
		<h2 class="text-base tracking-wider text-accent">TECHNICAL SKILLS</h2>
		<div class="space-y-1.5 print:space-y-1">
			{#each resumeSkillGroups as group (group.category)}
				<p class="text-base leading-relaxed text-text-muted">
					<strong class="font-mono text-sm font-semibold text-accent">{group.category}:</strong>
					<span> {group.items.join(', ')}</span>
				</p>
			{/each}
		</div>
	</section>

	<!-- Education & Languages -->
	<section
		class="print-avoid-break border-t border-border pt-5 print:pt-3 {density === 'compact'
			? 'space-y-2'
			: 'space-y-4'}"
	>
		<h2 class="text-base tracking-wider text-accent">EDUCATION & LANGUAGES</h2>
		{#each resumeEducation as edu (edu.institution)}
			<div class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
				<p class="text-base text-text-primary">
					<strong class="font-semibold text-accent">{edu.institution}</strong> — {edu.degree}
				</p>
				<span class="font-mono text-sm text-text-subtle tabular-nums">{edu.period}</span>
			</div>
		{/each}
		<p class="text-base text-text-muted">
			<strong class="font-mono text-sm font-semibold text-accent">Languages:</strong>
			<span>
				{resumeLanguages.map((l) => `${l.language} (${l.proficiency})`).join(', ')}
			</span>
		</p>
	</section>
</main>
