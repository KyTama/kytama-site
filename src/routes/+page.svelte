<script lang="ts">
    import { works } from '$lib/data/works';
    import { journal } from '$lib/data/journal';

    const featuredWorks = works.slice(0, 3);
    const recentJournal = journal.slice(0, 2);
</script>

<main class="max-w-6xl mx-auto px-6 py-16 space-y-16">

    <!-- Hero -->
    <section>
        <h1 class="text-5xl mb-2">[ KyTama ]</h1>
        <p class="font-mono text-xs tracking-widest text-accent-visible mb-6">
            Rizky Pratama — Backend Engineer
        </p>
        <p class="text-text-muted leading-relaxed max-w-md mb-10">
            Building reliable systems and learning the craft.
            Based in Jakarta, currently targeting senior SWE roles in Japan.
        </p>
        <nav class="flex gap-6 flex-wrap">
            <a href="/about">/about</a>
            <a href="/works">/works</a>
            <a href="/journal">/journal</a>
            <a href="/now">/now</a>
        </nav>
    </section>

    <hr class="border-border" />

    <!-- About teaser -->
    <section>
        <div class="flex justify-between items-baseline mb-4">
            <span class="font-mono text-xs tracking-widest text-text-subtle">ABOUT</span>
            <a href="/about" class="font-mono text-xs">more →</a>
        </div>
        <p class="text-text-muted leading-relaxed">
            Backend engineer with ~10 years experience across lending, savings,
            and embedded financing. Go is my main language — currently learning
            TypeScript with Bun and Elysia. Obsessed with clean architecture
            and shipping things that actually work.
        </p>
    </section>

    <hr class="border-border" />

    <!-- Works teaser -->
    <section>
        <div class="flex justify-between items-baseline mb-4">
            <span class="font-mono text-xs tracking-widest text-text-subtle">WORKS</span>
            <a href="/works" class="font-mono text-xs">see all →</a>
        </div>
        <div class="flex flex-col gap-3">
            {#each featuredWorks as work (work.title)}
                <div class="border border-border rounded-lg px-4 py-3 flex justify-between items-start gap-4">
                    <div>
                        <p class="font-mono text-sm text-accent mb-1">{work.title}</p>
                        <p class="text-xs text-text-subtle">{work.description}</p>
                    </div>
                    <div class="font-mono text-xs text-text-faint whitespace-nowrap">
                        {work.tags.join(' · ')}
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <hr class="border-border" />

    <!-- Journal teaser -->
    <section>
        <div class="flex justify-between items-baseline mb-4">
            <span class="font-mono text-xs tracking-widest text-text-subtle">JOURNAL</span>
            <a href="/journal" class="font-mono text-xs">read all →</a>
        </div>
        <div class="flex flex-col divide-y divide-border">
            {#each recentJournal as entry (entry.slug)}
                <div class="flex justify-between items-baseline py-3">
                    <a
                        href={`/journal/${entry.slug}`}
                        class="text-sm text-text-primary no-underline hover:text-accent-dark"
                    >{entry.title}</a>
                    <span class="font-mono text-xs text-text-faint whitespace-nowrap ml-4">
                        {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                </div>
            {/each}
        </div>
    </section>

    <hr class="border-border" />

    <!-- Footer -->
    <footer class="flex justify-between items-center">
        <span class="font-mono text-xs text-text-faint">© 2026 KyTama</span>
        <div class="flex gap-4">
            <a href="https://github.com/KyTama" class="font-mono text-xs text-text-subtle no-underline hover:text-accent-visible">GitHub</a>
            <a href="https://linkedin.com/in/prtamaky" class="font-mono text-xs text-text-subtle no-underline hover:text-accent-visible">LinkedIn</a>
        </div>
    </footer>

</main>