<script lang="ts">
	import { getPokemonById } from '$lib/data/pokemon';
	import { page } from '$app/stores';

	let pokemon = $derived(getPokemonById(parseInt($page.params.id)));

	const typeColors: Record<string, string> = {
		normal: '#a8a878',
		fire: '#f08030',
		water: '#6890f0',
		grass: '#78c850',
		electric: '#f8d030',
		ice: '#98d8d8',
		fighting: '#c03028',
		poison: '#a040a0',
		ground: '#e0c068',
		flying: '#a890f0',
		psychic: '#f85888',
		bug: '#a8b820',
		rock: '#b8a038',
		ghost: '#705898',
		dragon: '#7038f8',
		dark: '#705848',
		steel: '#b8b8d0',
		fairy: '#ee99ac'
	};
</script>

<svelte:head>
	{#if pokemon}
		<title>{pokemon.name} - Pokédex</title>
	{:else}
		<title>Pokémon Not Found - Pokédex</title>
	{/if}
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
	{#if pokemon}
		<div class="mb-6">
			<a href="/list" class="text-red-600 hover:underline">← Back to List</a>
		</div>

		<div class="rounded-lg bg-white p-8 card-shadow-md">
			<div class="grid gap-8 md:grid-cols-2">
				<div>
					<div class="mb-4 flex items-center justify-between">
						<h1 class="text-4xl font-bold text-gray-900 capitalize">{pokemon.name}</h1>
						<span class="rounded-full bg-gray-200 px-4 py-2 text-lg font-semibold text-gray-700">
							#{pokemon.id.toString().padStart(3, '0')}
						</span>
					</div>

					<div class="mb-6 flex gap-2">
						{#each pokemon.types as type}
							<span
								class="rounded-full px-4 py-2 font-medium text-white capitalize"
								style={`background-color: ${typeColors[type.toLowerCase()] || '#999'}`}
							>
								{type}
							</span>
						{/each}
					</div>

					<div class="space-y-2 text-gray-700">
						<p><strong>Height:</strong> {pokemon.height / 10} m</p>
						<p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
						<p><strong>Base Experience:</strong> {pokemon.baseExperience}</p>
					</div>

					<div class="mt-6">
						<h3 class="mb-2 font-bold text-gray-900">Base Stats</h3>
						<div class="space-y-2 text-sm text-gray-700">
							<div class="flex justify-between">
								<span>HP:</span>
								<span class="font-semibold">{pokemon.stats.hp}</span>
							</div>
							<div class="flex justify-between">
								<span>Attack:</span>
								<span class="font-semibold">{pokemon.stats.attack}</span>
							</div>
							<div class="flex justify-between">
								<span>Defense:</span>
								<span class="font-semibold">{pokemon.stats.defense}</span>
							</div>
							<div class="flex justify-between">
								<span>Sp. Atk:</span>
								<span class="font-semibold">{pokemon.stats.spAtk}</span>
							</div>
							<div class="flex justify-between">
								<span>Sp. Def:</span>
								<span class="font-semibold">{pokemon.stats.spDef}</span>
							</div>
							<div class="flex justify-between">
								<span>Speed:</span>
								<span class="font-semibold">{pokemon.stats.speed}</span>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div class="rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-8 text-center">
						<div class="text-6xl">🎨</div>
						<p class="mt-4 text-gray-600">{pokemon.name} Image</p>
					</div>

					{#if pokemon.abilities && pokemon.abilities.length > 0}
						<div class="mt-6">
							<h3 class="mb-2 font-bold text-gray-900">Abilities</h3>
							<ul class="space-y-1 text-gray-700">
								{#each pokemon.abilities as ability}
									<li class="text-sm">• {ability}</li>
								{/each}
							</ul>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{:else}
		<div class="rounded-lg bg-red-50 p-8 text-center">
			<h1 class="text-3xl font-bold text-red-900">Pokémon Not Found</h1>
			<p class="mt-2 text-red-700">The Pokémon you're looking for doesn't exist in our database.</p>
			<a href="/" class="mt-4 inline-block rounded-lg bg-red-600 px-6 py-2 text-white hover:bg-red-700">
				Return Home
			</a>
		</div>
	{/if}
</div>
