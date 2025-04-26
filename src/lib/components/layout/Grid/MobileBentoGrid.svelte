<script lang="ts">
	import { type Icon as IconType } from '@lucide/svelte';

	import { cubicOut } from 'svelte/easing';
	import { fly, scale } from 'svelte/transition';

	interface GridItem {
		id: string;
		title: string;
		icon: typeof IconType;
		href: string;
		backgroundImage?: string;
		colSpan: number;
		rowSpan: number;
		className?: string;
	}
	let { items }: { items: GridItem[] } = $props();

	const predefinedGridItems = [
		{ colSpan: 5, rowSpan: 3 },
		{ colSpan: 1, rowSpan: 3 },
		{ colSpan: 1, rowSpan: 3 },
		{ colSpan: 1, rowSpan: 3 },
		{ colSpan: 1, rowSpan: 3 },
		{ colSpan: 1, rowSpan: 3 },
		{ colSpan: 5, rowSpan: 4 },
		{ colSpan: 2, rowSpan: 5 },
		{ colSpan: 3, rowSpan: 5 }
	];

	const gridItems: GridItem[] = items.map((item, index) => {
		const gridItem = predefinedGridItems[index] || { colSpan: 1, rowSpan: 1 };
		return {
			...item,
			colSpan: gridItem.colSpan,
			rowSpan: gridItem.rowSpan
		};
	});
</script>

<div class="flex h-full w-full items-center justify-center md:hidden">
	<div class="grid h-full w-full grid-cols-5 grid-rows-5 gap-4 rounded-lg p-2 shadow-md">
		{#each gridItems as item, index (item.id)}
			{@const Icon = item.icon}
			<a
				in:fly|global={{ y: 50, x: 200, duration: index * 350, delay: 100, easing: cubicOut }}
				href={item.href}
				class={`relative col-span-${item.colSpan} row-span-${item.rowSpan} flex flex-col items-center justify-center overflow-hidden rounded-3xl shadow-md ${item.className || ''} transition-transform ease-in-out hover:scale-110 `}
				style={item.backgroundImage
					? `background-image: ${item.backgroundImage}; background-size: cover; background-position: center;`
					: ''}
			>
				{#if item.backgroundImage}
					<div class="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
				{/if}
				<div
					class="relative z-10 flex flex-col items-center justify-center p-4 text-white"
					transition:scale|global={{ duration: index * 250, delay: 400, easing: cubicOut }}
				>
					<Icon class="m-2 h-4 w-4" />

					<span class="text-xs font-semibold">{item.title}</span>
				</div>
			</a>
		{/each}
	</div>
</div>

<!--
<div class="flex h-full w-full items-center justify-center md:hidden">
	<div class="grid h-full w-full grid-cols-5 grid-rows-5 gap-4 rounded-lg p-2 shadow-md">
		<div
			class="col-span-5 row-span-3 flex items-center justify-center rounded-lg bg-gray-200 shadow-md"
		>
			1
		</div>

		<div
			class="col-span-1 row-span-3 flex items-center justify-center rounded-lg bg-gray-200 shadow-md"
		>
			2
		</div>

		<div
			class="col-span-1 row-span-3 flex items-center justify-center rounded-lg bg-gray-200 shadow-md"
		>
			3
		</div>

		<div
			class="col-span-1 row-span-3 flex items-center justify-center rounded-lg bg-gray-200 shadow-md"
		>
			4
		</div>

		<div
			class="col-span-1 row-span-3 flex items-center justify-center rounded-lg bg-gray-200 shadow-md"
		>
			5
		</div>

		<div
			class="col-span-1 row-span-3 flex items-center justify-center rounded-lg bg-gray-200 shadow-md"
		>
			6
		</div>

		<div
			class="col-span-5 row-span-4 flex items-center justify-center rounded-lg bg-gray-200 shadow-md"
		>
			7
		</div>

		<div
			class="col-span-2 row-span-5 flex items-center justify-center rounded-lg bg-gray-200 shadow-md"
		>
			8
		</div>

		<div
			class="col-span-3 row-span-5 flex items-center justify-center rounded-lg bg-gray-200 shadow-md"
		>
			9
		</div>
	</div>
</div>
-->
