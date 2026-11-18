<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import { resumeExperience, resumeProfile, resumeSkillGroups } from '$lib/data/resume';

	function printResume() {
		window.print();
	}
</script>

<Seo
	rawTitle="Rizky Pratama — Backend Software Engineer (Resume)"
	description="ATS-friendly engineering resume for Rizky Pratama — Backend Software Engineer (Go, PostgreSQL, distributed systems)."
/>

<main class="print-container mx-auto max-w-4xl space-y-10 px-6 py-12 md:py-16">
	<!-- Action bar -->
	<div
		class="no-print flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4"
	>
		<a href={resolve('/about')} class="cta-link font-mono text-sm text-text-subtle no-underline">
			<span aria-hidden="true">←</span>
			<span>Back to /about</span>
		</a>
		<button type="button" onclick={printResume} class="cta-ghost">
			<span>Print / Save as PDF</span>
			<span aria-hidden="true">↓</span>
		</button>
	</div>

	<!-- Resume Header -->
	<header class="space-y-3 border-b border-border pb-6">
		<div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
			<h1 class="text-3xl md:text-4xl">{resumeProfile.name}</h1>
			<span class="font-mono text-sm text-text-subtle">{resumeProfile.location}</span>
		</div>
		<p class="font-mono text-base text-accent-visible">{resumeProfile.title}</p>
		<p class="max-w-[75ch] text-base leading-relaxed text-text-muted">{resumeProfile.summary}</p>
		<ul class="flex flex-wrap gap-x-6 gap-y-1.5 pt-1 font-mono text-sm text-text-subtle">
			{#each resumeProfile.links as link (link.href)}
				<li>
					<a
						href={link.href}
						target="_blank"
						rel="external noopener noreferrer"
						class="no-underline hover:underline"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</header>

	<!-- Experience -->
	<section class="space-y-8">
		<h2 class="text-base tracking-wider text-accent">EXPERIENCE</h2>

		{#each resumeExperience as role (role.company)}
			<article class="space-y-4 border-b border-border pb-8 last:border-b-0 last:pb-0">
				<div class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
					<div>
						<h3 class="text-lg text-accent">{role.company} — {role.role}</h3>
						<p class="font-mono text-sm text-text-subtle">{role.location}</p>
					</div>
					<p class="font-mono text-sm text-text-subtle tabular-nums">{role.period}</p>
				</div>

				<p class="max-w-[75ch] text-base leading-relaxed text-text-muted">{role.summary}</p>

				<div class="space-y-5">
					{#each role.groups as group (group.title ?? group.bullets[0])}
						<div class="print-avoid-break space-y-2">
							{#if group.title}
								<h4 class="text-sm text-accent-visible">{group.title}</h4>
							{/if}
							<ul class="space-y-2">
								{#each group.bullets as bullet (bullet)}
									<li class="flex gap-2.5 text-base leading-relaxed text-text-primary">
										<span class="mt-0.5 text-accent-visible print:hidden" aria-hidden="true">→</span
										>
										<span class="hidden print:inline" aria-hidden="true">•</span>
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
			</article>
		{/each}
	</section>

	<!-- Technical Skills -->
	<section class="print-avoid-break space-y-4 border-t border-border pt-6">
		<h2 class="text-base tracking-wider text-accent">TECHNICAL SKILLS</h2>
		<dl class="grid grid-cols-1 gap-3 sm:grid-cols-[13rem_1fr]">
			{#each resumeSkillGroups as group (group.category)}
				<dt class="font-mono text-sm text-accent">{group.category}</dt>
				<dd class="text-base text-text-muted">{group.items.join(', ')}</dd>
			{/each}
		</dl>
	</section>
</main>
