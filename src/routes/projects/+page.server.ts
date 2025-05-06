import type {  ProjectModel} from '$lib/interface/project';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const pb = locals.pb;

	const getProjects = async (): Promise<ProjectModel[]> => {
		return await pb.collection('projects').getFullList();
	};
	const RecentProjects = async (): Promise<ProjectModel> => {
		return await pb.collection('projects').getFirstListItem('', { sort: '-created' });
	};
	return {
		getProjects: getProjects(),
		RecentProjects: RecentProjects()
	};
};
