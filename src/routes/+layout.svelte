<script lang="ts">
	import '../app.css';

	import { Toaster } from 'svelte-french-toast';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<Toaster />
<Navbar />
<main>
	{@render children()}
</main>

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
