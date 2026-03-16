export type Work = {
    title: string;
    description: string;
    tags: string[];
    url?: string;
    repo?: string;
    status: 'active' | 'hiatus' | 'done';
};

export const works: Work[] = [
    {
        title: 'Attentive',
        description: 'Psychological bureau landing page + reservation system with three roles: User, Admin, Psychologist.',
        tags: ['Bun', 'Elysia', 'TypeScript'],
        status: 'active',
    },
    {
        title: 'Benttreeschool',
        description: 'School landing page.',
        tags: ['WordPress'],
        status: 'active',
    },
    {
        title: 'ai-toolkit',
        description: 'Unified AI dev environment with shared GEMINI.md + CLAUDE.md context management system.',
        tags: ['Bash', 'Shell'],
        repo: 'https://github.com/KyTama/ai-toolkit',
        status: 'active',
    },
];