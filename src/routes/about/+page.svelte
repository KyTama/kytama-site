<script lang="ts">
    import { experiences } from '$lib/data/experience';
    import { skillGroups } from '$lib/data/skills';
</script>

<main class="max-w-6xl mx-auto px-6 py-16 space-y-16">

    <!-- Header -->
    <section>
        <h1 class="text-4xl mb-4">About</h1>
        <p class="text-text-muted leading-relaxed max-w-prose">
            Backend engineer with ~10 years experience across lending, savings,
            and embedded financing. Go is my main language — currently learning
            TypeScript with Bun and Elysia. Obsessed with clean architecture
            and shipping things that actually work.
        </p>
    </section>

    <hr class="border-border" />

    <!-- Experience -->
    <section>
        <span class="font-mono text-xs tracking-widest text-text-subtle">EXPERIENCE</span>
        <div class="flex flex-col gap-10 mt-6">
            {#each experiences as exp (exp.company)}
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div class="md:col-span-1">
                        <p class="font-mono text-xs text-text-subtle">{exp.period}</p>
                        <p class="font-mono text-xs text-text-faint">{exp.location}</p>
                    </div>
                    <div class="md:col-span-3">
                        <p class="font-mono text-sm text-accent mb-1">{exp.company}</p>
                        <p class="text-sm text-text-muted mb-3">{exp.role}</p>
                        <p class="text-sm text-text-muted leading-relaxed mb-4">{exp.description}</p>
                        <ul class="flex flex-col gap-1 mb-4">
                            {#each exp.highlights as highlight (highlight)}
                                <li class="text-sm text-text-muted flex gap-2">
                                    <span class="text-accent-visible mt-0.5">→</span>
                                    {highlight}
                                </li>
                            {/each}
                        </ul>
                        <div class="flex gap-2 flex-wrap">
                            {#each exp.tags as tag (tag)}
                                <span class="font-mono text-xs text-accent-visible border border-accent-visible px-2 py-0.5 rounded">{tag}</span>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <hr class="border-border" />

    <!-- Skills -->
    <section>
        <span class="font-mono text-xs tracking-widest text-text-subtle">SKILLS</span>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {#each skillGroups as group (group.category)}
                <div>
                    <p class="font-mono text-xs text-text-subtle mb-3">{group.category}</p>
                    <div class="flex flex-wrap gap-2">
                        {#each group.skills as skill (skill)} 
                            <span class="font-mono text-xs text-text-muted border border-border px-2 py-0.5 rounded">{skill}</span>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <hr class="border-border" />

    <!-- Footer note -->
    <section>
        <p class="font-mono text-xs text-text-faint">
            Looking for the full resume? <a href="/resume">View resume →</a>
        </p>
    </section>

</main>