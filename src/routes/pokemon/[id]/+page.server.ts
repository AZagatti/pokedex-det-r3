import { error } from '@sveltejs/kit';
import { getPokemonById } from '$lib/data/pokemon';

export async function load({ params }) {
  const pokemon = getPokemonById(parseInt(params.id));
  if (!pokemon) {
    error(404, 'Pokémon not found');
  }
  return { pokemon };
}
