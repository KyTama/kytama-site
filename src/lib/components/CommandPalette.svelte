<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { journal } from '$lib/data/journal';
	import { navLinks, siteConfig } from '$lib/data/site';
	import { works } from '$lib/data/works';

	type CommandItem = {
		id: string;
		group: 'Pages' | 'Works' | 'Journal' | 'Actions';
		label: string;
		hint: string;
		action: () => void;
	};

	let dialogEl: HTMLDialogElement | undefined = $state();
	let inputEl: HTMLInputElement | undefined = $state();
	let query = $state('');
	let activeIndex = $state(0);

	const commands = $derived.by<CommandItem[]>(() => {
		const pageItems: CommandItem[] = [
			{
				id: 'page-home',
				group: 'Pages',
				label: 'Home',
				hint: '/',
				action: () => navigateTo('/')
			},
			...navLinks.map((link) => ({
				id: `page-${link.href}`,
				group: 'Pages' as const,
				label: link.label.replace('/', ''),
				hint: link.href,
				action: () => navigateTo(link.href)
			}))
		];

		const workItems: CommandItem[] = works
			.filter((w) => w.url || w.repo || w.route)
			.map((w) => ({
				id: `work-${w.title}`,
				group: 'Works' as const,
				label: w.title,
				hint: w.url ? 'live site' : w.repo ? 'github' : 'experience',
				action: () => {
					const target = w.url ?? w.repo;
					if (target) {
						close();
						window.open(target, '_blank', 'noopener,noreferrer');
					} else if (w.route) {
						navigateTo(w.route);
					}
				}
			}));

		const journalItems: CommandItem[] = journal.map((entry) => ({
			id: `journal-${entry.slug}`,
			group: 'Journal' as const,
			label: entry.title,
			hint: entry.status,
			action: () => navigateTo(`/journal/${entry.slug}`)
		}));

		const actionItems: CommandItem[] = [
			{
				id: 'action-print-resume',
				group: 'Actions',
				label: 'Print / Save Resume as PDF',
				hint: 'ATS',
				action: async () => {
					close();
					if (page.url.pathname !== '/resume') {
						await goto(resolve('/resume'));
					}
					requestAnimationFrame(() => window.print());
				}
			},
			{
				id: 'action-github',
				group: 'Actions',
				label: 'Open GitHub Profile',
				hint: 'external',
				action: () => {
					close();
					window.open(siteConfig.github, '_blank', 'noopener,noreferrer');
				}
			},
			{
				id: 'action-linkedin',
				group: 'Actions',
				label: 'Open LinkedIn Profile',
				hint: 'external',
				action: () => {
					close();
					window.open(siteConfig.linkedin, '_blank', 'noopener,noreferrer');
				}
			}
		];

		return [...pageItems, ...actionItems, ...workItems, ...journalItems];
	});

	const filtered = $derived.by(() => {
		const q = query.trim().toLowerCase();
		if (!q) return commands;
		return commands.filter(
			(item) =>
				item.label.toLowerCase().includes(q) ||
				item.group.toLowerCase().includes(q) ||
				item.hint.toLowerCase().includes(q)
		);
	});

	$effect(() => {
		if (activeIndex >= filtered.length) {
			activeIndex = Math.max(0, filtered.length - 1);
		}
	});

	export function open() {
		if (!dialogEl || dialogEl.open) return;
		query = '';
		activeIndex = 0;
		dialogEl.showModal();
		requestAnimationFrame(() => inputEl?.focus());
	}

	export function close() {
		if (!dialogEl?.open) return;
		dialogEl.close();
	}

	async function navigateTo(href: string) {
		close();
		// eslint-disable-next-line svelte/no-navigation-without-resolve -- href comes from typed route items
		await goto(href);
	}

	function handleGlobalKeydown(event: KeyboardEvent) {
		if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
			event.preventDefault();
			if (dialogEl?.open) close();
			else open();
			return;
		}

		if (event.key === '/' && !dialogEl?.open) {
			const target = event.target as HTMLElement | null;
			const isTyping =
				target &&
				(target.tagName === 'INPUT' ||
					target.tagName === 'TEXTAREA' ||
					target.tagName === 'SELECT' ||
					target.isContentEditable);
			if (!isTyping) {
				event.preventDefault();
				open();
			}
		}
	}

	function handleInputKeydown(event: KeyboardEvent) {
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			if (filtered.length > 0) activeIndex = (activeIndex + 1) % filtered.length;
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			if (filtered.length > 0) {
				activeIndex = (activeIndex - 1 + filtered.length) % filtered.length;
			}
		} else if (event.key === 'Enter' && filtered[activeIndex]) {
			event.preventDefault();
			filtered[activeIndex].action();
		}
	}

	onMount(() => {
		if (!dialogEl || 'closedBy' in HTMLDialogElement.prototype) return;

		// Light-dismiss fallback for browsers without <dialog closedby="any">
		const isOutside = (e: PointerEvent) => {
			if (!dialogEl) return false;
			const rect = dialogEl.getBoundingClientRect();
			return (
				e.clientX < rect.left ||
				e.clientX > rect.right ||
				e.clientY < rect.top ||
				e.clientY > rect.bottom
			);
		};

		let pressedOutside = false;
		const onDown = (e: PointerEvent) => {
			pressedOutside = isOutside(e);
		};
		const onUp = (e: PointerEvent) => {
			if (pressedOutside && isOutside(e)) close();
			pressedOutside = false;
		};

		dialogEl.addEventListener('pointerdown', onDown);
		dialogEl.addEventListener('pointerup', onUp);
		return () => {
			dialogEl?.removeEventListener('pointerdown', onDown);
			dialogEl?.removeEventListener('pointerup', onUp);
		};
	});
</script>

<svelte:window onkeydown={handleGlobalKeydown} />

<dialog
	bind:this={dialogEl}
	id="command-palette"
	closedby="any"
	aria-labelledby="cmd-title"
	class="m-auto w-[min(92dvw,34rem)] rounded-lg border border-border-interactive bg-background p-0 text-text-primary shadow-xl"
	onclose={() => {
		if (dialogEl) dialogEl.returnValue = '';
	}}
>
	<div class="flex items-center justify-between border-b border-border px-4 py-3">
		<h2 id="cmd-title" class="font-mono text-xs tracking-wider text-text-subtle">
			COMMAND PALETTE
		</h2>
		<button
			type="button"
			onclick={close}
			class="min-h-11 min-w-11 px-2 font-mono text-xs text-text-subtle hover:text-accent-dark"
			aria-label="Close command palette"
		>
			[esc]
		</button>
	</div>

	<div class="border-b border-border px-4 py-2.5">
		<label for="cmd-search" class="visually-hidden">Filter pages, works, and actions</label>
		<input
			bind:this={inputEl}
			bind:value={query}
			id="cmd-search"
			type="search"
			autocomplete="off"
			placeholder="Jump to /works, /resume, or an action..."
			onkeydown={handleInputKeydown}
			class="w-full rounded bg-transparent px-1 py-1.5 font-mono text-sm text-text-primary placeholder:text-text-faint"
		/>
	</div>

	<div
		class="max-h-[min(55dvh,22rem)] overflow-y-auto p-2"
		role="region"
		aria-label="Command results"
	>
		{#if filtered.length === 0}
			<p class="px-3 py-6 text-center font-mono text-xs text-text-subtle">
				No matching commands for "{query.trim()}".
			</p>
		{:else}
			<ul class="flex flex-col gap-0.5">
				{#each filtered as item, idx (item.id)}
					<li>
						<button
							type="button"
							onclick={item.action}
							onmouseenter={() => (activeIndex = idx)}
							class="flex min-h-11 w-full items-center justify-between rounded px-3 py-2 text-left text-sm transition-colors {idx ===
							activeIndex
								? 'bg-surface text-accent-dark'
								: 'text-text-primary hover:bg-surface'}"
						>
							<span class="flex items-center gap-2.5">
								<span class="font-mono text-xs text-text-faint">{item.group}</span>
								<span>{item.label}</span>
							</span>
							<span class="font-mono text-xs text-text-subtle">{item.hint}</span>
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>

	<div
		class="flex items-center justify-between border-t border-border px-4 py-2 font-mono text-xs text-text-faint"
	>
		<span>↑↓ navigate · ↵ select</span>
		<span>⌘K / /</span>
	</div>
</dialog>
