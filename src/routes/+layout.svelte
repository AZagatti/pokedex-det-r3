<script lang="ts">
	import '$lib/styles/app.css';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<Header />
<main class="min-h-screen bg-gray-50">
	{@render children()}
</main>


