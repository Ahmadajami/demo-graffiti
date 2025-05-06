<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex h-screen items-center justify-center pb-10">
	<div class="container">
		<h1 class="text-center text-6xl">About Us Page</h1>
	</div>
</div>

<div class="w-full max-w-3xl rounded-xl bg-white p-6 shadow-lg md:p-8">
	<div class="flex flex-col items-start gap-6 md:flex-row md:gap-8">
		<div class="flex-1 bg-yellow-500 md:order-last">
			<h1 class=" mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
				استشارات ودعم فني - لأن مشروعك يستحق الأفضل
			</h1>

			<div class="mb-6 h-1 w-24 bg-purple-600"></div>

			<ul class=" space-y-3 text-sm text-gray-600 md:text-base">
				<li class="flex items-start">
					<span class="mr-2 text-xl font-bold text-purple-600 rtl:ml-2 rtl:mr-0">&#8226;</span>
					<span>
						نساعدك في اختيار المواد المناسبة، تخطيط المشروع والتوجيه الفني لكل مرحلة من التنفيذ.
					</span>
				</li>
				<li class="flex items-start">
					<span class="mr-2 text-xl font-bold text-purple-600 rtl:ml-2 rtl:mr-0">&#8226;</span>
					<span>
						فريق من الخبراء والمختصين في مجال الايبوكسي والريزن لمساعدتك في تحقيق أفضل النتائج
						الممكنة.
					</span>
				</li>
			</ul>
		</div>

		<div
			class="mt-6 flex h-16 w-full items-center justify-center rounded-lg bg-gray-200 md:order-first md:mt-0 md:h-20 md:w-1/3"
		>
			<span class="text-lg text-gray-400">Image Placeholder</span>
		</div>
	</div>
</div>

<section class="container mx-auto my-9 flex h-screen items-center justify-center bg-red-500">
	<div class="flex w-full max-w-3xl flex-col space-y-10 rounded-xl bg-white p-6 shadow-lg md:p-8">
		<div class="flex flex-row space-x-8">
			<!--Image-->
			<div
				class="mt-6 flex h-16 w-full items-center justify-center rounded-lg bg-gray-200 md:order-first md:mt-0 md:h-20 md:w-1/3"
			>
				<span class="h-full rounded-3xl text-lg text-gray-400">Image Placeholder</span>
			</div>
			<!--Image End-->
			<!--Title-->
			<div class="mb-2 line-clamp-2 flex-1 text-2xl font-bold text-gray-800 md:text-3xl">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate neque labore eaque
				possimus natus deleniti vero omnis repellendus culpa, nihil quo eius sapiente explicabo
				fuga, voluptates ex modi unde nostrum.
				<hr class="mb-6 h-1 w-full bg-purple-600" />
			</div>
			<!--Title End-->
		</div>
		<div>
			<div class="flex-1 bg-yellow-500 md:order-last">
				<ul class=" space-y-3 text-sm text-gray-600 md:text-base">
					<li class="flex items-start">
						<span class="mr-2 text-xl font-bold text-purple-600 rtl:ml-2 rtl:mr-0">&#8226;</span>
						<span>
							نساعدك في اختيار المواد المناسبة، تخطيط المشروع والتوجيه الفني لكل مرحلة من التنفيذ.
						</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2 text-xl font-bold text-purple-600 rtl:ml-2 rtl:mr-0">&#8226;</span>
						<span>
							فريق من الخبراء والمختصين في مجال الايبوكسي والريزن لمساعدتك في تحقيق أفضل النتائج
							الممكنة.
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<section class="my-10 h-screen">
	<div class="flex w-full max-w-3xl flex-col space-y-10 rounded-xl bg-white p-4 shadow-lg md:p-8">
		<div class="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
			<!-- Image -->
			<div
				class="flex h-16 w-full items-center justify-center rounded-lg bg-gray-200 md:h-20 md:w-1/3"
			>
				<span class="h-full rounded-3xl text-lg text-gray-400">Image Placeholder</span>
			</div>
			<!-- Title -->
			<div class="flex-1">
				<h2 class="mb-2 line-clamp-2 text-2xl font-bold text-gray-800 md:text-3xl">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate neque labore eaque
					possimus natus deleniti vero omnis repellendus culpa, nihil quo eius sapiente explicabo
					fuga, voluptates ex modi unde nostrum.
				</h2>
				<hr class="mb-6 h-1 w-full bg-purple-600" />
			</div>
		</div>

		<!-- List -->
		<div class="flex-1">
			<ul class="space-y-3 text-sm text-gray-600 md:text-base">
				<li class="flex items-start">
					<span class="mr-2 text-xl font-bold text-purple-600 rtl:ml-2 rtl:mr-0">&#8226;</span>
					<span>
						نساعدك في اختيار المواد المناسبة، تخطيط المشروع والتوجيه الفني لكل مرحلة من التنفيذ.
					</span>
				</li>
				<li class="flex items-start">
					<span class="mr-2 text-xl font-bold text-purple-600 rtl:ml-2 rtl:mr-0">&#8226;</span>
					<span>
						فريق من الخبراء والمختصين في مجال الايبوكسي والريزن لمساعدتك في تحقيق أفضل النتائج
						الممكنة.
					</span>
				</li>
			</ul>
		</div>
	</div>
</section>
