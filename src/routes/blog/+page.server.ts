import type { PostModel } from '$lib/interface/post';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const pb = locals.pb;

	const getPosts = async (): Promise<PostModel[]> => {
		return await pb.collection('posts').getFullList();
	};
	const RecentPosts = async (): Promise<PostModel> => {
		return await pb.collection('posts').getFirstListItem('', { sort: '-created' });
	};
	return {
		getPosts: getPosts(),
		RecentPosts: RecentPosts()
	};
};
