<script lang="ts">
	import { Facebook, Instagram } from '@lucide/svelte';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime.js';
	import type { PageProps } from './$types';
	import { m } from '$lib/paraglide/messages';
	import { fly } from 'svelte/transition';
	import logo from '$lib/assets/images/Logo.png';
	import art from '$lib/assets/images/art.jpg';

	let { data }: PageProps = $props();
</script>

<div class="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-3">
	<aside class="order-1 space-y-8 md:order-2">
		<div class="text-center">
			<img src={logo} alt="Graffiti Resin Logo" class="mx-auto mb-4 h-auto w-40" />
			<div class="mx-auto my-4 h-32 w-32 rounded-full bg-black"></div>
			<p class="text-sm text-gray-600">
				{m.welcomeDesc()}
			</p>
		</div>

		<div>
			<h3 class="mb-2 font-semibold">Follow Us</h3>
			<ul class="space-y-2">
				<li>
					<a
						href="https://www.facebook.com/GraffitiResin/"
						class="flex items-center space-x-2 text-sm text-gray-700 hover:underline"
						><span><Facebook /></span> <span>Facebook</span></a
					>
				</li>
				<li>
					<a
						href="https://www.facebook.com/GraffitiResin/"
						class="flex items-center space-x-2 text-sm text-gray-700 hover:underline"
					>
						<span class="mx-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-twitter-x"
								viewBox="0 0 16 16"
							>
								<path
									d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
								/>
							</svg>
						</span>
						<span class="mx-1">X</span></a
					>
				</li>
				<li>
					<a
						href="https://www.instagram.com/graffitiresin/"
						class="flex items-center space-x-2 text-sm text-gray-700 hover:underline"
						><span><Instagram /></span> <span>Instagram</span></a
					>
				</li>
			</ul>
		</div>

		<div>
			<h3 class="mb-2 font-semibold">Recent Project</h3>
			<div class="z-0 h-24 w-full bg-gray-300 transition-all hover:z-10 hover:scale-110">
				{#await data.RecentProjects}
					Sekeleton Loading
				{:then project}
					<a
						href={localizeHref(`/projects/${project.slug}`)}
						class=" no-underline hover:no-underline"
					>
						<article class=" flex flex-row space-x-4 space-y-0" in:fly|global={{ y: -200 }}>
							<div class="h-24 flex-shrink-0 sm:w-32">
								<img
									class="h-full w-full"
									src="http://127.0.0.1:8090/api/files/{project.collectionId}/{project.id}/{project.images.at(
										0
									)}"
									alt="post"
								/>
							</div>
							<div>
								<h4 class="font-semibold rtl:mx-2">
									{getLocale() === 'ar' ? project.title_ar : project.title}
								</h4>
								<p class="mb-2 line-clamp-2 text-lg text-gray-500 rtl:mx-2">
									{@html getLocale() === 'ar' ? project.desc_ar : project.desc}
								</p>
							</div>
						</article>
					</a>
				{:catch err}
					<p>{@html err}</p>
				{/await}
			</div>
		</div>

		<div>
			<h3 class="mb-2 font-semibold">Facebook</h3>
			<div class="h-24 w-full bg-gray-300"></div>
		</div>

		<div>
			<h3 class="mb-2 font-semibold">Popular</h3>
			<div class="h-24 w-full bg-gray-300"></div>
		</div>
	</aside>

	<div class="order-2 md:order-1 md:col-span-2">
		<h2 class="mb-4 text-sm text-gray-600">HOME / BLOG</h2>

		<div class="mb-8 w-full overflow-hidden rounded-md">
			<img src={art} alt="art gallery" class="h-auto w-full object-cover" />
		</div>

		<h3 class="mb-6 text-2xl font-bold">Posts</h3>

		<div class="space-y-8">
			{#await data.getProjects}
				Sekeleton Loading
			{:then project}
				{#each project as project, i (project.id)}
					<article
						class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
						in:fly|global={{ x: -200 }}
					>
						<div class="h-24 w-full flex-shrink-0 sm:w-32">
							<img
								class="h-full w-full"
								src="http://127.0.0.1:8090/api/files/{project.collectionId}/{project.id}/{project.images.at(
									0
								)}"
								alt="post"
							/>
						</div>
						<div>
							<h4 class="font-semibold rtl:mx-2">
								{i + 1} &nbsp; {getLocale() === 'ar' ? project.title_ar : project.title}
							</h4>
							<p class="mb-2 line-clamp-3 text-lg text-gray-500 rtl:mx-2">
								{@html getLocale() === 'ar' ? project.desc_ar : project.desc}
							</p>
							<a href={localizeHref(`/projects/${project.slug}`)} class="text-sm text-blue-500"
								>{m.awful_fair_ibex_pause()}</a
							>
						</div>
					</article>
				{/each}
			{:catch err}
				<p>{@html err}</p>
			{/await}
		</div>
	</div>
</div>
