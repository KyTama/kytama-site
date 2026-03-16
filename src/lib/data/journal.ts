export type JournalEntry = {
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    tags: string[];
};

export const journal: JournalEntry[] = [
    {
        title: 'Why I self-host everything',
        slug: 'why-i-self-host-everything',
        date: '2026-03-01',
        excerpt: 'On the quiet satisfaction of owning your own infrastructure.',
        tags: ['infrastructure', 'self-hosting'],
    },
    {
        title: 'Learning TypeScript as a Go developer',
        slug: 'learning-typescript-as-go-developer',
        date: '2026-02-01',
        excerpt: 'The mental model shifts that actually mattered.',
        tags: ['typescript', 'go', 'learning'],
    },
];