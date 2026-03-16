export type SkillGroup = {
    category: string;
    skills: string[];
};

export const skillGroups: SkillGroup[] = [
    {
        category: 'Languages',
        skills: ['Go', 'TypeScript', 'SQL', 'Bash'],
    },
    {
        category: 'Backend',
        skills: ['Bun', 'Elysia', 'PostgreSQL', 'CouchDB', 'Docker'],
    },
    {
        category: 'Frontend',
        skills: ['SvelteKit', 'Tailwind CSS', 'shadcn-svelte'],
    },
    {
        category: 'Tools & Infra',
        skills: ['Git', 'n8n', 'Caddy', 'Obsidian', 'Linux'],
    },
];