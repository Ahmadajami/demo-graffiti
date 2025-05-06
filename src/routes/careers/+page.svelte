<script lang="ts">
	import CareerCard from '$lib/components/CareerCard.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section class="">
	<div class="relative z-10 max-w-full">
		<Carousel />
	</div>
</section>

<p
	class="container mx-auto text-center text-3xl font-bold tracking-wide text-[#a71580] drop-shadow-2xl md:text-5xl"
>
	Why Work With Us ?
</p>
<section class=" container my-10 grid grid-cols-1 gap-x-8 gap-y-16 p-10 md:grid-cols-3">
	<CareerCard />
	<CareerCard />
	<CareerCard />
	<!--Row-->
	<CareerCard />
	<CareerCard />
	<CareerCard />
</section>

<h1
	class="container mx-auto text-center text-3xl font-bold tracking-wide text-[#a71580] drop-shadow-2xl md:text-5xl"
>
	What Our Client Say ?
</h1>

<section class="container mx-auto my-5 h-svh font-bold">
	<div class="parent h-full">
		<div
			class="div1 rounded-2xl bg-[url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2x2bmRmeDU3aHo2eGFoazNpNjYxZ3QzNTNjbnNxa3lzaXhxYTQyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3Vhz5rmu6eDAN4PZtz/giphy.gif)] bg-cover bg-no-repeat py-8"
		>
			1
		</div>
		<div class="div2 flex items-center justify-center">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo possimus sapiente beatae
				fuga expedita accusamus illum iusto repellendus eveniet quas commodi a reiciendis,
				temporibus repudiandae ad numquam quia! Recusandae, distinctio?
			</p>
		</div>
		<div class="div3 flex items-center justify-center">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo possimus sapiente beatae
				fuga expedita accusamus illum iusto repellendus eveniet quas commodi a reiciendis,
				temporibus repudiandae ad numquam quia! Recusandae, distinctio?
			</p>
		</div>
		<div class="div4 flex items-center justify-center">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo possimus sapiente beatae
				fuga expedita accusamus illum iusto repellendus eveniet quas commodi a reiciendis,
				temporibus repudiandae ad numquam quia! Recusandae, distinctio?
			</p>
		</div>
		<div class="div5 flex items-center justify-center">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo possimus sapiente beatae
				fuga expedita accusamus illum iusto repellendus eveniet quas commodi a reiciendis,
				temporibus repudiandae ad numquam quia! Recusandae, distinctio?
			</p>
		</div>
		<div class="div6 flex items-center justify-center">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo possimus sapiente beatae
				fuga expedita accusamus illum iusto repellendus eveniet quas commodi a reiciendis,
				temporibus repudiandae ad numquam quia! Recusandae, distinctio?
			</p>
		</div>
	</div>
</section>

<style>
	.parent {
		display: grid;
		grid-template-columns: 0.25fr 1fr;
		grid-template-rows: repeat(5, 1fr);
		grid-column-gap: 20px;
		grid-row-gap: 2px;
	}

	.div1 {
		grid-area: 1 / 1 / 6 / 2;
	}
	.div2 {
		grid-area: 1 / 2 / 2 / 3;
	}
	.div3 {
		grid-area: 2 / 2 / 3 / 3;
	}
	.div4 {
		grid-area: 3 / 2 / 4 / 3;
	}
	.div5 {
		grid-area: 4 / 2 / 5 / 3;
	}
	.div6 {
		grid-area: 5 / 2 / 6 / 3;
	}
</style>
