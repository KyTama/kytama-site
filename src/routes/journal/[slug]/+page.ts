import { error } from '@sveltejs/kit';
import { journal } from '$lib/data/journal';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const entry = journal.find((item) => item.slug === params.slug);
	if (!entry) {
		error(404, 'Journal entry not found');
	}
	return { entry };
};
