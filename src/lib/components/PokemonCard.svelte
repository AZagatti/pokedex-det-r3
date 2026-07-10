<script lang="ts">
	import type { Pokemon } from '$lib/data/pokemon';
	import { getTypeColor } from '$lib/data/pokemon';

	interface Props {
		pokemon: Pokemon;
	}

	let { pokemon }: Props = $props();
</script>

<a
	href={`/pokemon/${pokemon.id}`}
	class="block h-full rounded-lg border border-gray-200 bg-white p-4 transition-all hover:shadow-lg"
>
	<div class="mb-4 flex items-center justify-between">
		<span class="text-xs font-medium text-gray-500">#{pokemon.id.toString().padStart(3, '0')}</span>
		<div class="flex gap-2">
			{#each pokemon.type as type}
				<span
					class="{getTypeColor(type)} rounded-full px-2 py-1 text-xs font-medium text-white"
				>
					{type}
				</span>
			{/each}
		</div>
	</div>

	<div class="mb-4">
		<img
			src={pokemon.image}
			alt={pokemon.name}
			class="h-48 w-full object-contain"
		/>
	</div>

	<h3 class="text-lg font-bold text-gray-900">{pokemon.name}</h3>

	<div class="mt-4 grid grid-cols-3 gap-2 text-xs">
		<div>
			<p class="text-gray-600">HP</p>
			<p class="font-bold text-gray-900">{pokemon.hp}</p>
		</div>
		<div>
			<p class="text-gray-600">ATK</p>
			<p class="font-bold text-gray-900">{pokemon.attack}</p>
		</div>
		<div>
			<p class="text-gray-600">DEF</p>
			<p class="font-bold text-gray-900">{pokemon.defense}</p>
		</div>
	</div>
</a>
