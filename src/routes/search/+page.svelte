<script lang="ts">
	import { searchPokemon } from '$lib/data/pokemon';
	import PokemonCard from '$lib/components/PokemonCard.svelte';

	let query = $state('');
	let results = $derived(searchPokemon(query));
</script>

<svelte:head>
	<title>Search Pokémon - Pokédex</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<h1 class="mb-8 text-4xl font-bold text-gray-900">Search Pokémon</h1>

	<div class="mb-8">
		<input
			type="text"
			placeholder="Search by name or type..."
			bind:value={query}
			class="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-lg focus:border-red-600 focus:outline-none"
		/>
	</div>

	{#if query.length === 0}
		<p class="text-gray-600">Start typing to search for Pokémon by name or type.</p>
	{:else if results.length === 0}
		<p class="text-gray-600">No Pokémon found matching your search.</p>
	{:else}
		<p class="mb-4 text-gray-600">Found {results.length} Pokémon</p>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each results as pokemon (pokemon.id)}
				<PokemonCard {pokemon} />
			{/each}
		</div>
	{/if}
</div>
