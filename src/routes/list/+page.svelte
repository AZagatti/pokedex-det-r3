<script lang="ts">
	import { getPokemonList } from '$lib/data/pokemon';
	import PokemonCard from '$lib/components/PokemonCard.svelte';

	const pokemon = getPokemonList();
</script>

<svelte:head>
	<title>Pokémon List - Pokédex</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<h1 class="mb-8 text-4xl font-bold text-gray-900">All Pokémon</h1>

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each pokemon as poke (poke.id)}
			<PokemonCard pokemon={poke} />
		{/each}
	</div>
</div>
