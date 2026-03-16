<script lang="ts">
    import './layout.css';
    import favicon from '$lib/assets/favicon.svg';
    import { page } from '$app/stores';

    let { children } = $props();

    const isHome = $derived($page.url.pathname === '/');

    const navLinks = [
        { href: '/about', label: '/about' },
        { href: '/works', label: '/works' },
        { href: '/journal', label: '/journal' },
        { href: '/now', label: '/now' },
    ];
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

{#if !isHome}
    <header class="border-b border-border">
        <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" class="font-mono text-sm text-accent no-underline">[ KyTama ]</a>
            <div class="flex gap-6">
                {#each navLinks as link (link.href)}
                    <a href={link.href}
                        class="font-mono text-xs no-underline {$page.url.pathname === link.href ? 'text-accent-visible border-b border-accent-visible pb-0.5' : 'text-text-subtle hover:text-accent-visible'}"
                    >{link.label }</a>
                {/each}
            </div>
        </nav>
    </header>
{/if}

{@render children()}