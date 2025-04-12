<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import BlureFade from '$lib/BlureFade.svelte';
	import Hr from '$lib/components/HR.svelte';
	import BentoGrid from '$lib/components/layout/Grid/BentoGrid.svelte';
	import { m } from '$lib/paraglide/messages';

	import Cards from '$lib/Cards.svelte';
	import GridCard from '$lib/GridCard.svelte';
	import CountUp from '$lib/components/CountUp.svelte';
	import { inview } from 'svelte-inview';
	let statview = $state(false);
</script>

<section class="relative overflow-hidden px-4 py-3 sm:px-6 lg:px-8">
	<div class="container mx-auto">
		<div class="grid items-center gap-12 md:grid-cols-2 md:gap-16">
			<div class="order-2 flex h-full flex-col items-start text-start md:order-1">
				<div class="flex h-full w-full flex-col">
					<div class="flex w-full justify-center md:justify-start">
						<img class="mb-0 max-h-[350px] max-w-full" src="Logo.png" alt="Graffiti Resin Logo" />
					</div>

					<div class=" p-2">
						<BlureFade>
							<h1 class="myshadow text-4xl font-bold tracking-tight lg:text-6xl">
								{m.welcome()}<br />
								{m.welcomeHeader()}
							</h1>
						</BlureFade>
					</div>
				</div>
			</div>

			<div class="order-1">
				<div class="relative z-10 max-w-full">
					<Carousel />
				</div>
			</div>
		</div>
	</div>

	<p
		style="white-space: pre-line"
		class="ltr:ml-18 container mx-auto mt-6 hyphens-auto text-wrap text-justify text-xl sm:mr-0 md:text-2xl ltr:w-full rtl:mr-0 rtl:w-full md:rtl:mr-11"
	>
		{m.welcomeDesc()}
	</p>
</section>
<section class="mt-12 flex flex-col px-4 py-20 lg:px-8">
	<BlureFade delay={0.2}>
		<h1 class="  myshadow ml-11 w-fit text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
			{m.department()}<br />
		</h1>
	</BlureFade>

	<article class=" mt-8 h-96">
		<BentoGrid />
	</article>
</section>

<!--Gemenit veRSOIN IS dOWN-->
<section id="intro" class=" bg-[#a71580] py-20 text-white">
	<div class="container mx-auto px-4">
		<h1 class="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
			{m.service_header()}
		</h1>
		<br />
		<h2
			class=" w-fit text-ellipsis break-words text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
		>
			{m.service_body()}
			<Hr
				id="small"
				borderColor="border-slate-600 "
				options={{
					rootMargin: '-10px',
					unobserveOnEnter: true
				}}
			/>
		</h2>
		<BlureFade>
			<p class="text-bold my-8 mr-0 text-pretty text-justify text-3xl tracking-tighter">
				{m.service_desc()}
			</p>
		</BlureFade>
	</div>
</section>

<section id="art" class="my-24 p-10">
	<div class="flex flex-col gap-8 md:flex-row-reverse">
		<div class="h-48 md:h-full md:basis-3/5">
			<img
				class="h-full w-full rounded-l-md object-cover drop-shadow-2xl"
				src="art/art.jpg"
				alt="resin Project"
			/>
		</div>
		<div class=" mx-2 self-center md:basis-2/5">
			<BlureFade>
				<h1 class="px-2 text-3xl font-semibold md:text-4xl">
					{m.art_header()}
				</h1>
				<h2
					class=" w-fit text-2xl font-semibold tracking-wide sm:text-3xl md:tracking-tight lg:text-4xl"
				>
					{m.art_body()}

					<hr class="mx-2 h-2 w-full rounded-sm border-0 bg-blue-400 md:my-10" />
				</h2>
				<p class="text-bold my-6 text-pretty text-xl md:my-8 md:text-2xl">
					{m.art_desc()}
				</p>
			</BlureFade>
		</div>
	</div>
</section>
<section class="hide-scroller my-8 overflow-x-auto pb-4">
	<div class="flex flex-nowrap gap-4 px-4 sm:px-8">
		{#each Array(20) as _, i}
			<Cards />
		{/each}
	</div>
</section>
<section class="my-20">
	<div class="flex flex-col gap-8 md:h-64 md:flex-row-reverse">
		<!-- Removed fixed height on mobile -->
		<div class="h-48 md:h-full md:basis-3/5">
			<!-- Added responsive height -->
			<img
				class="h-full w-full rounded-l-md object-cover drop-shadow-2xl"
				src="/art/art_second.png"
				alt="resin Project"
			/>
		</div>
		<div class="self-center md:basis-2/5">
			<!-- Removed self-center on mobile -->
			<p class="px-2 text-3xl font-semibold md:text-4xl">
				<!-- Responsive text size -->
				{m.project_header()}<br />
				{m.project_body()}
			</p>

			<hr class="mx-4 my-4 h-2 w-48 rounded-sm border-0 bg-blue-400 md:my-10" />
		</div>
	</div>
</section>

<article class=" my-9 px-4">
	<!-- Added horizontal padding -->
	<p
		class=" text-bold my-8 mr-0 whitespace-pre-line text-pretty text-xl leading-loose tracking-tighter md:text-3xl"
	>
		{m.project_section()}
	</p>
</article>
<section class="my-10">
	<div class="grid grid-cols-1 gap-4 text-center md:grid-cols-2">
		{#each Array(10) as _, i}
			<GridCard />
		{/each}
	</div>
</section>
<section>
	<BlureFade delay={0.2}>
		<h1 class="  myshadow w-fit px-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
			{m.partner()}<br />
			<span class=" ms-9 text-left">
				Graffiti Resin
				<hr class="mr-14 h-2 w-full rounded-sm border-0 bg-blue-400 md:my-10" />
			</span>
		</h1>

		<figure class="container mx-auto my-6">
			<img src="partners.png" alt="our Parnters" loading="lazy" />
		</figure>
	</BlureFade>
</section>

<section
	id="statics"
	use:inview={{ rootMargin: '-50px', unobserveOnEnter: false }}
	oninview_change={(event) => {
		const { inView } = event.detail;
		statview = inView;
	}}
>
	<div class=" mx-auto w-full max-w-7xl p-4 py-16 md:py-24">
		<h1
			class=" font-heading myshadow my-5 px-3 text-center text-5xl font-bold tracking-tight drop-shadow-md md:text-6xl lg:text-7xl"
		>
			Graffiti<span>Goals</span> .
		</h1>

		<CountUp reloade={statview} />
	</div>
</section>
<section id="contact"></section>

<style>
	.myshadow {
		text-shadow: 2px 2px #a715805b;
	}
	.hide-scroller {
		scrollbar-width: none;
	}
</style>
