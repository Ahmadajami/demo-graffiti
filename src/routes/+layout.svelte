<script lang="ts">
	import '../app.css';
	import { Toaster } from 'svelte-french-toast';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import ScrollProgress from '$lib/ScrollProgress.svelte';
	import { fade } from 'svelte/transition';

	let { children, data } = $props();
</script>

<ScrollProgress />
<Toaster />
<Navbar />

{#key data.url}
	<div class="overflow-hidden" transition:fade={{ delay: 500, duration: 1000 }}>
		{@render children()}
	</div>
{/key}
<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
