export type Experience = {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string;
    highlights: string[];
    tags: string[];
};

export const experiences: Experience[] = [
    {
        company: 'Amar Bank',
        role: 'Backend Software Engineer',
        period: '2020 — Present',
        location: 'Jakarta, Indonesia',
        description: 'Working across lending, savings/funding, and embedded financing domains.',
        highlights: [
            'Built and maintained core lending systems',
            'Worked on savings and funding domain',
            'Developed embedded financing features',
        ],
        tags: ['Go', 'PostgreSQL'],
    },
    {
        company: 'PT. Sentra Inovasi Solusindo',
        role: 'Software Engineer',
        period: '2016 — 2019',
        location: 'Jakarta, Indonesia',
        description: 'Worked as a software engineer at an IT consultancy, delivering internal enterprise systems and client-facing solutions.',
        highlights: [
            'Built and maintained HRIS system for internal HR operations',
            'Developed a post tracking system for an external client, handling end-to-end delivery monitoring',
            'Worked with PHP, CakePHP and CodeIgniter as primary tech stack',
        ],
        tags: ['PHP', 'CakePHP', 'CodeIgniter', 'HRIS'],
    },
    // tambah experience lain di sini
];