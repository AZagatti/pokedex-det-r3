<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
  let pokemon = $derived(data.pokemon);

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
            {#each pokemon.type as type}
              <span
                class="rounded-full px-4 py-2 font-medium text-white capitalize"
                style={`background-color: ${typeColors[type.toLowerCase()] || '#999'}`}
              >
                {type}
              </span>
            {/each}
          </div>

          <img
            src={pokemon.image}
            alt={pokemon.name}
            class="w-full rounded-lg bg-gray-100"
          />
        </div>

        <div>
          <div class="mb-6 rounded-lg bg-gray-50 p-4">
            <h2 class="mb-4 text-2xl font-bold text-gray-900">Stats</h2>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span>HP:</span>
                <span class="font-semibold">{pokemon.hp}</span>
              </div>
              <div class="flex justify-between">
                <span>Attack:</span>
                <span class="font-semibold">{pokemon.attack}</span>
              </div>
              <div class="flex justify-between">
                <span>Defense:</span>
                <span class="font-semibold">{pokemon.defense}</span>
              </div>
              <div class="flex justify-between">
                <span>Sp. Atk:</span>
                <span class="font-semibold">{pokemon.spAtk}</span>
              </div>
              <div class="flex justify-between">
                <span>Sp. Def:</span>
                <span class="font-semibold">{pokemon.spDef}</span>
              </div>
              <div class="flex justify-between">
                <span>Speed:</span>
                <span class="font-semibold">{pokemon.speed}</span>
              </div>
            </div>
          </div>

          <div class="rounded-lg bg-blue-50 p-4">
            <h2 class="mb-2 text-xl font-bold text-gray-900">About</h2>
            <p class="text-gray-700">
              {pokemon.name} is a {pokemon.type.join('/')} type Pokémon known for its unique abilities and characteristics.
            </p>
          </div>
        </div>
      </div>
    </div>
  {:else}
    <div class="rounded-lg bg-white p-8 text-center">
      <h1 class="text-4xl font-bold text-gray-900">Pokémon Not Found</h1>
      <p class="mt-4 text-gray-600">We couldn't find the Pokémon you're looking for.</p>
      <a href="/list" class="mt-6 inline-block rounded-lg bg-red-600 px-6 py-3 font-medium text-white hover:bg-red-700">
        Back to List
      </a>
    </div>
  {/if}
</div>
