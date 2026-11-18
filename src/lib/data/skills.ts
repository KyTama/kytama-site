export type SkillGroup = {
	category: string;
	skills: string[];
};

export const skillGroups: SkillGroup[] = [
	{
		category: 'Languages',
		skills: ['Go', 'TypeScript', 'PHP', 'Java', 'SQL', 'Bash']
	},
	{
		category: 'Backend & Data',
		skills: [
			'gRPC',
			'REST API',
			'OpenAPI/Swagger',
			'Pub/Sub',
			'Bun',
			'Elysia',
			'Spring Boot',
			'PostgreSQL',
			'MySQL',
			'MongoDB',
			'Redis',
			'CouchDB',
			'BigQuery'
		]
	},
	{
		category: 'Frontend',
		skills: ['SvelteKit', 'React', 'Tailwind CSS', 'shadcn-svelte']
	},
	{
		category: 'Observability & Infra',
		skills: [
			'Docker',
			'Datadog',
			'Orchestrion',
			'New Relic',
			'Keycloak',
			'GCP',
			'Git',
			'CI/CD',
			'Caddy',
			'n8n',
			'Linux'
		]
	}
];
