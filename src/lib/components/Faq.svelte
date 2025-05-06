<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
</script>

<!-- FAQ -->

<div
	class="mx-auto max-w-[85rem] rounded-3xl bg-[#e2e2e274] px-4 py-10 drop-shadow-2xl sm:px-6 lg:px-8 lg:py-14"
>
	<!-- Grid -->
	<div class="grid gap-10 md:grid-cols-5">
		<div class="md:col-span-2">
			<div class="max-w-xs">
				<h2
					class=" font-heading myshadow text-5xl font-bold tracking-tight drop-shadow-md dark:text-white md:text-6xl md:leading-tight lg:text-7xl"
				>
					Frequently<br />asked questions

					<hr class="ml-auto mt-2 block h-1 w-full bg-blue-400" />
				</h2>
				<p class="mt-1 hidden text-gray-600 dark:text-neutral-400 md:block">
					Answers to the most frequently asked questions.
				</p>
			</div>
		</div>
		<!-- End Col -->

		<div class="md:col-span-3">
			<!-- Accordion -->
			<Accordion.Root type="single" class=" divide-gray-200  dark:divide-neutral-700">
				<Accordion.Item value="item-1">
					<Accordion.Trigger
						class="focus:outline-hidden group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500  dark:text-neutral-200   md:text-3xl"
						>Is it accessible?</Accordion.Trigger
					>
					<Accordion.Content class="w-full overflow-hidden"
						><p class="text-xl">
							Yes, you can cancel anytime no questions are asked while you cancel but we would
							highly appreciate if you will give us some feedback.
						</p></Accordion.Content
					>
				</Accordion.Item>
				<Accordion.Item value="item-2">
					<Accordion.Trigger
						class="focus:outline-hidden group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500  dark:text-neutral-200   md:text-3xl"
						>Is it accessible?</Accordion.Trigger
					>
					<Accordion.Content class="t w-full overflow-hidden "
						><p class="text-xl">
							Yes, you can cancel anytime no questions are asked while you cancel but we would
							highly appreciate if you will give us some feedback.
						</p></Accordion.Content
					>
				</Accordion.Item>
				<Accordion.Item value="item-3">
					<Accordion.Trigger
						class="focus:outline-hidden group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start  font-semibold text-gray-800 transition hover:text-gray-500  dark:text-neutral-200   md:text-3xl"
						>Is it accessible?</Accordion.Trigger
					>
					<Accordion.Content class="w-full overflow-hidden "
						><p class="text-xl">
							Yes, you can cancel anytime no questions are asked while you cancel but we would
							highly appreciate if you will give us some feedback.
						</p></Accordion.Content
					>
				</Accordion.Item>
			</Accordion.Root>

			<!-- End Accordion -->
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>

<!-- End FAQ -->

<style>
	.myshadow {
		text-shadow: 2px 2px #a715805b;
	}
</style>
