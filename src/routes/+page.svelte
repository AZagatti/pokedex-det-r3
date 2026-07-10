<script lang="ts">
	import { getPokemonList } from '$lib/data/pokemon';
	import PokemonCard from '$lib/components/PokemonCard.svelte';

	const featuredPokemon = getPokemonList().slice(0, 6);
</script>

<svelte:head>
	<title>Pokédex - Explore the World of Pokémon</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<section class="mb-12">
		<h1 class="mb-4 text-4xl font-bold text-gray-900">Pokédex</h1>
		<p class="max-w-2xl text-lg text-gray-600">
			Welcome to the Pokédex, your ultimate guide to the world of Pokémon. Explore, search, and learn
			about your favorite creatures.
		</p>
		<div class="mt-6 flex gap-4">
			<a
				href="/list"
				class="rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition-colors hover:bg-red-700"
			>
				Explore All Pokémon
			</a>
			<a
				href="/search"
				class="rounded-lg border-2 border-red-600 px-6 py-3 font-medium text-red-600 transition-colors hover:bg-red-50"
			>
				Search Pokémon
			</a>
		</div>
	</section>

	<section class="mb-12">
		<h2 class="mb-6 text-2xl font-bold text-gray-900">Featured Pokémon</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each featuredPokemon as pokemon (pokemon.id)}
				<PokemonCard {pokemon} />
			{/each}
		</div>
	</section>

	<section class="rounded-lg bg-blue-50 p-8">
		<h2 class="mb-4 text-2xl font-bold text-gray-900">About Pokédex</h2>
		<p class="text-gray-700">
			The Pokédex is a digital encyclopedia created to help trainers learn about Pokémon. Browse
			through our comprehensive database to find detailed information about stats, types, abilities,
			and more.
		</p>
	</section>
</div>
