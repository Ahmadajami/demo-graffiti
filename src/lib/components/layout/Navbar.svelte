<script lang="ts">
	import { Menu } from '@lucide/svelte';
	import * as Sheet from '$lib/components/ui/sheet/index';
	import Button from '../ui/button/button.svelte';
	import { setLocale, getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';

	let open = $state(false);
	let locle = $state(getLocale());
	let side = $derived<'right' | 'left'>(locle === 'ar' ? 'right' : 'left');
	type NavItem = {
		text: string;
		href: string;
	};
	let nav_list: NavItem[] = [
		{ text: m.nav_about(), href: localizeHref('/about') },
		{
			href: localizeHref('/#contact'),
			text: m.contact()
		},
		{ text: m.nav_blog(), href: localizeHref('/blog') },
		{ text: m.nav_floor(), href: localizeHref('/#top') }
	];

	let contactUs: NavItem = { href: localizeHref('/#contact'), text: m.contact() };
</script>

<div class="w-full" id="top">
	<div id="top" class="border-b bg-black text-white">
		<div class="flex h-16 items-center justify-between px-4">
			<!-- Logo and Project Name -->
			<a class="flex w-1/3 items-center gap-2 md:w-fit" href="#contact">
				<div class="rounded-lg border p-2 2xl:hidden">
					<img src="../Logo.png" alt="Company" class="h-10 w-10 object-cover" />
				</div>
				<div class="hidden 2xl:block">
					<img src="../Logo.png" alt="Company" class="h-14 w-14 object-cover" />
				</div>
			</a>

			<a href="#top">
				<h2 class="text-center text-sm font-semibold lg:hidden">Grresin</h2>
			</a>

			<!-- Desktop Navigation -->
			<div class="mx-4 hidden w-1/3 flex-1 items-start justify-start lg:flex">
				<nav class="flex gap-6">
					{#each nav_list as navItem}
						<Button href={navItem.href} class="hover:bg-[#a71580]" size="sm">{navItem.text}</Button>
					{/each}
				</nav>
			</div>

			<div class="flex w-1/3 items-center justify-end gap-4">
				<Button
					size="sm"
					class="hidden bg-white capitalize text-[#a71580] hover:bg-[#a71580]  hover:text-white lg:flex"
					onclick={() => {
						setLocale('en');
					}}
				>
					<span>🇬🇧</span>
					EN</Button
				>
				<Button
					size="sm"
					class="hidden bg-white capitalize text-[#a71580] hover:bg-[#a71580]  hover:text-white lg:flex"
					onclick={() => {
						setLocale('ar');
					}}
				>
					<span>🇸🇦</span>
					AR</Button
				>
				<!-- Mobile Menu Button -->
				<Button variant="ghost" size="icon" class="lg:hidden" onclick={() => (open = true)}>
					<Menu class="h-5 w-5" />
				</Button>
			</div>
		</div>
	</div>

	<!-- Mobile Sheet/Drawer -->
	<Sheet.Root bind:open>
		<Sheet.Content {side} class="w-64 bg-white text-black">
			<div class="">
				<div class="mb-6 flex items-center justify-start gap-x-3">
					<div class="rounded-lg border p-2">
						<img src="../Logo.png" alt="Company" class="h-10 w-10 object-cover" />
					</div>
					<span class="text-md font-semibold">{m.menu()}</span>
				</div>
				<nav class="flex flex-col space-y-1">
					{#each nav_list as navItem}
						<Button
							href={navItem.href}
							class="justify-start hover:bg-[#a71580]"
							onclick={() => (open = false)}>{navItem.text}</Button
						>
					{/each}
					<Button
						size="sm"
						class=" justify-start bg-white capitalize text-[#a71580] hover:bg-[#a71580]  hover:text-white lg:flex"
						onclick={() => {
							setLocale('en');
						}}
					>
						<span>🇬🇧</span>
						EN</Button
					>
					<Button
						size="sm"
						class="justify-start bg-white capitalize text-[#a71580] hover:bg-[#a71580]  hover:text-white lg:flex"
						onclick={() => {
							setLocale('ar');
						}}
					>
						<span>🇸🇦</span>
						AR</Button
					>
				</nav>
			</div>
		</Sheet.Content>
	</Sheet.Root>
</div>
