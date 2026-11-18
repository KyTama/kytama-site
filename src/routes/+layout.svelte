<script lang="ts">
	import './layout.css';
	import { onNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';
	import CommandPalette from '$lib/components/CommandPalette.svelte';
	import { navLinks, siteConfig } from '$lib/data/site';
	import { setContext } from 'svelte';

	let { children } = $props();
	let palette: CommandPalette | undefined = $state();
	let mobilePopoverEl: HTMLElement | undefined = $state();

	setContext('openPalette', () => palette?.open());

	const isHome = $derived(page.url.pathname === '/');

	function isCurrent(href: string): boolean {
		const path = page.url.pathname;
		return path === href || path.startsWith(`${href}/`);
	}

	onNavigate((navigation) => {
		mobilePopoverEl?.hidePopover?.();

		if (
			!document.startViewTransition ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
		) {
			return;
		}

		return new Promise((resolveTransition) => {
			const transition = document.startViewTransition(async () => {
				resolveTransition();
				await navigation.complete;
			});

			transition.finished.finally(() => {
				const heading = document.querySelector('#main-content h1') as HTMLElement | null;
				if (heading) {
					heading.setAttribute('tabindex', '-1');
					heading.focus({ preventScroll: true });
				}
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a href="#main-content" class="visually-hidden skip-link no-print">Skip to content</a>

<CommandPalette bind:this={palette} />

<div class="flex min-h-dvh flex-col">
	{#if !isHome}
		<header class="no-print border-b border-border bg-background/95">
			<nav
				class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4"
				aria-label="Primary"
			>
				<a
					href={resolve('/')}
					class="inline-flex min-h-11 items-center font-mono text-base text-accent no-underline"
				>
					{siteConfig.brandLabel}
				</a>

				<!-- Desktop nav -->
				<div class="hidden items-center gap-6 md:flex">
					{#each navLinks as link (link.href)}
						<a
							href={resolve(link.href)}
							aria-current={isCurrent(link.href) ? 'page' : undefined}
							class="inline-flex min-h-11 items-center font-mono text-sm no-underline {isCurrent(
								link.href
							)
								? 'border-b-2 border-accent-visible text-accent-visible'
								: 'text-text-subtle hover:text-accent-visible'}"
						>
							{link.label}
						</a>
					{/each}
					<button
						type="button"
						onclick={() => palette?.open()}
						class="inline-flex min-h-11 items-center gap-2 rounded border border-border-interactive bg-surface px-3 py-1.5 font-mono text-meta text-text-primary hover:border-accent-visible hover:text-accent-dark"
						aria-label="Open command palette"
					>
						<span>cmd</span>
						<kbd class="text-text-subtle">⌘K</kbd>
					</button>
				</div>

				<!-- Mobile controls -->
				<div class="flex items-center gap-2 md:hidden">
					<button
						type="button"
						onclick={() => palette?.open()}
						class="inline-flex min-h-11 items-center rounded border border-border-interactive bg-surface px-3 py-1.5 font-mono text-meta text-text-primary"
						aria-label="Open command palette"
					>
						⌘K
					</button>
					<button
						type="button"
						popovertarget="mobile-nav-menu"
						popovertargetaction="toggle"
						aria-controls="mobile-nav-menu"
						class="inline-flex min-h-11 items-center rounded border border-border-interactive bg-surface px-3.5 py-1.5 font-mono text-meta text-text-primary"
					>
						Menu
					</button>
					<ul
						bind:this={mobilePopoverEl}
						id="mobile-nav-menu"
						popover="auto"
						class="mobile-nav-popover fixed inset-x-4 top-18 m-0 w-auto gap-1 rounded-lg border border-border-interactive bg-background p-3 shadow-lg"
					>
						{#each navLinks as link (link.href)}
							<li>
								<a
									href={resolve(link.href)}
									aria-current={isCurrent(link.href) ? 'page' : undefined}
									class="flex min-h-11 items-center rounded px-3 font-mono text-base no-underline {isCurrent(
										link.href
									)
										? 'bg-surface text-accent-visible'
										: 'text-text-primary hover:bg-surface'}"
								>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</nav>
		</header>
	{/if}

	<div id="main-content" class="flex-1">
		{@render children()}
	</div>

	<footer class="no-print border-t border-border bg-surface">
		<div
			class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-7 font-mono text-meta text-text-subtle"
		>
			<div class="flex flex-wrap items-center gap-5">
				<span class="text-text-primary">© 2026 {siteConfig.brandLabel}</span>
				<button
					type="button"
					onclick={() => palette?.open()}
					class="min-h-11 px-1 text-text-subtle underline-offset-4 hover:text-accent-dark hover:underline"
				>
					⌘K command palette
				</button>
			</div>
			<div class="flex flex-wrap items-center gap-6">
				<a
					href={resolve('/resume')}
					class="inline-flex min-h-11 items-center text-text-subtle no-underline hover:text-accent-visible"
				>
					/resume
				</a>
				<a
					href={siteConfig.github}
					target="_blank"
					rel="external noopener noreferrer"
					class="inline-flex min-h-11 items-center text-text-subtle no-underline hover:text-accent-visible"
				>
					GitHub ↗
				</a>
				<a
					href={siteConfig.linkedin}
					target="_blank"
					rel="external noopener noreferrer"
					class="inline-flex min-h-11 items-center text-text-subtle no-underline hover:text-accent-visible"
				>
					LinkedIn ↗
				</a>
			</div>
		</div>
	</footer>
</div>
