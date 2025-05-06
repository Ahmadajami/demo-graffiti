import type { ProjectModel } from '$lib/interface/project';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	const pb = locals.pb;

	const getProject = async (): Promise<ProjectModel> => {
		return await pb.collection('projects').getFirstListItem(`slug="${params.id}"`);
	};
	return { getProject: getProject() };
};
