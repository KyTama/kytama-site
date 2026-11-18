export type JournalSection = {
	heading?: string;
	paragraphs: string[];
	list?: string[];
	code?: {
		lang: string;
		snippet: string;
	};
};

export type JournalEntry = {
	title: string;
	slug: string;
	date: string;
	excerpt: string;
	tags: string[];
	status: 'draft' | 'published';
	outline: string[];
	sections?: JournalSection[];
};

export const journal: JournalEntry[] = [
	{
		title: 'Why I self-host everything',
		slug: 'why-i-self-host-everything',
		date: '2026-11-19',
		excerpt:
			'Running personal tools behind Docker and Caddy instead of renting single-purpose SaaS, and where that trade-off actually breaks.',
		tags: ['infrastructure', 'self-hosting'],
		status: 'published',
		outline: [
			'Moving everyday tools behind Docker and Caddy instead of renting single-purpose SaaS.',
			'Automating repetitive personal workflows with self-hosted n8n.',
			'Trade-offs around backups, TLS, and keeping maintenance boring.'
		],
		sections: [
			{
				paragraphs: [
					'Most of the software I run for myself does not need a multi-tenant cloud account. A personal ledger, small automation jobs, and internal helper services only have one user: me. Hosting them on my own Linux box behind Docker and Caddy gives me predictable behavior and keeps personal data out of random third-party databases.',
					'When I built TamLedger to track debts and payoff schedules, I deliberately skipped managed databases and cloud auth. The API writes to a local SQLite file through bun:sqlite on a mounted Docker volume. If I move servers, copying the app means backing up one file and a Compose file.'
				]
			},
			{
				heading: 'Keeping the stack deliberately boring',
				paragraphs: [
					'Self-hosting gets tiring fast when every weekend turns into fixing broken reverse proxies. Keeping the infrastructure layer small prevents that:',
					'Instead of maintaining separate Nginx vhosts and manual Certbot cron jobs, Caddy handles reverse proxying and TLS certificate renewal out of the box with a few lines per service. Everything else runs inside containers with explicit port bindings and restart policies.'
				],
				list: [
					'Caddy as the single public entry point so TLS renewal and routing stay predictable.',
					'Docker Compose for packaging small services with their storage volumes in one file.',
					'Self-hosted n8n for personal reminders and webhook glue without paying per-task SaaS tiers.'
				]
			},
			{
				heading: 'Where self-hosting stops making sense',
				paragraphs: [
					'Owning the box also means owning every failure mode. Nobody pages you nicely when a disk fills up with container logs or an OS upgrade breaks a systemd unit, and nobody snapshots your mounted SQLite volume unless you wire the backup script yourself.',
					'I still draw hard lines around what I refuse to self-host. Static public sites like this one belong on Cloudflare Pages where edge caching is free and maintenance is zero. Transactional email delivery is another clear boundary: fighting IP reputation and spam filters to send one password reset or notification is rarely worth the hours.'
				]
			}
		]
	},
	{
		title: 'Learning TypeScript as a Go developer',
		slug: 'learning-typescript-as-go-developer',
		date: '2026-11-19',
		excerpt:
			'Mental model shifts after years of writing Go, and why Bun, Elysia, and SvelteKit still earned a permanent spot in my side-project stack.',
		tags: ['typescript', 'go', 'learning'],
		status: 'published',
		outline: [
			'Structural typing vs Go interfaces: what feels familiar and where edge cases differ.',
			'Explicit error values in Go compared to TypeScript union types and runtime validation.',
			'Exploring Bun, Elysia, and SvelteKit for fast side-project shipping.'
		],
		sections: [
			{
				paragraphs: [
					'After writing Go in production across digital banking services for years, switching to TypeScript for personal tools and web projects felt oddly familiar on day one and frustrating on day three. Both languages prefer structural typing over rigid inheritance, yet they make opposite bets once your code hits production I/O.'
				]
			},
			{
				heading: 'Structural types only save you at compile time',
				paragraphs: [
					'In Go, a struct either satisfies an interface or it does not, and encoding/json still forces you to deserialize untrusted bytes into concrete structs before touching fields. In TypeScript, it is dangerously easy to cast parsed JSON (`as MyPayload`) and let an unexpected `undefined` slip deeper into business logic because the type annotations vanish at runtime.',
					'Using Elysia on Bun fixed that habit for me quickly. Declaring request schemas with Elysia validation enforces the runtime boundary and gives the compiler accurate request types from one definition, similar to keeping OpenAPI contracts honest in Go services.'
				],
				code: {
					lang: 'ts',
					snippet: `type PayoffStrategy = 'avalanche' | 'snowball';

function sortDebtsForStrategy(debts: Debt[], strategy: PayoffStrategy) {
  return [...debts].sort((a, b) =>
    strategy === 'avalanche' ? b.interest - a.interest : a.balance - b.balance
  );
}`
				}
			},
			{
				heading: 'Missing explicit (T, error) returns',
				paragraphs: [
					'Go developers complain about typing `if err != nil`, until they debug a TypeScript call stack where an underlying helper threw an untyped exception three layers down. You cannot read a TypeScript function signature and know every failure path it might raise.',
					'My workaround is returning plain discriminated unions (`{ ok: true, data } | { ok: false, reason }`) inside domain helpers while letting framework hooks catch unexpected runtime crashes at the HTTP boundary. It keeps control flow explicit without fighting the ecosystem.'
				]
			},
			{
				heading: 'Why I still reach for both',
				paragraphs: [
					'Go remains my default when concurrency, long-lived microservices, gRPC contracts, and APM observability matter. Nothing in the TypeScript ecosystem beats Go goroutines, predictable memory behavior, and single static binary deploys for banking workloads.',
					'At the same time, Bun, Elysia, and SvelteKit let me ship UI-heavy side projects (`TamLedger`, `Attentive`, and this site) without maintaining separate DTO translations between backend and frontend. Having both in my toolkit means picking the smaller friction surface for the job rather than forcing one language everywhere.'
				]
			}
		]
	}
];
