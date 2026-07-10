export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  spAtk: number;
  spDef: number;
  speed: number;
  image: string;
}

export interface PokemonDetail extends Pokemon {
  description: string;
  height: number;
  weight: number;
  abilities: string[];
  evolution: string | null;
}

const POKEMON_DATA: Pokemon[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: ['Grass', 'Poison'],
    hp: 45,
    attack: 49,
    defense: 49,
    spAtk: 65,
    spDef: 65,
    speed: 45,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    id: 4,
    name: 'Charmander',
    type: ['Fire'],
    hp: 39,
    attack: 52,
    defense: 43,
    spAtk: 60,
    spDef: 50,
    speed: 65,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
  },
  {
    id: 7,
    name: 'Squirtle',
    type: ['Water'],
    hp: 44,
    attack: 48,
    defense: 65,
    spAtk: 50,
    spDef: 64,
    speed: 43,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
  },
  {
    id: 25,
    name: 'Pikachu',
    type: ['Electric'],
    hp: 35,
    attack: 55,
    defense: 40,
    spAtk: 50,
    spDef: 50,
    speed: 90,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  },
  {
    id: 39,
    name: 'Jigglypuff',
    type: ['Normal', 'Fairy'],
    hp: 115,
    attack: 40,
    defense: 20,
    spAtk: 45,
    spDef: 25,
    speed: 20,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png',
  },
  {
    id: 54,
    name: 'Psyduck',
    type: ['Water'],
    hp: 50,
    attack: 52,
    defense: 48,
    spAtk: 65,
    spDef: 50,
    speed: 55,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png',
  },
];

export function getPokemonList(): Pokemon[] {
  return POKEMON_DATA;
}

export function getPokemonById(id: number): PokemonDetail | null {
  const pokemon = POKEMON_DATA.find(p => p.id === id);
  if (!pokemon) return null;

  return {
    ...pokemon,
    description: `${pokemon.name} is a ${pokemon.type.join('/')} type Pokémon known for its unique abilities.`,
    height: 0.7 + (pokemon.id % 10) * 0.1,
    weight: 6.9 + (pokemon.id % 20) * 0.5,
    abilities: ['Ability 1', 'Ability 2'],
    evolution: pokemon.id === 1 ? 'Ivysaur' : pokemon.id === 4 ? 'Charmeleon' : null,
  };
}

export function searchPokemon(query: string): Pokemon[] {
  const q = query.toLowerCase();
  return POKEMON_DATA.filter(
    p => p.name.toLowerCase().includes(q) || p.type.some(t => t.toLowerCase().includes(q))
  );
}

export function getTypeColor(type: string): string {
  const colors: Record<string, string> = {
    Grass: 'bg-green-500',
    Poison: 'bg-purple-500',
    Fire: 'bg-orange-500',
    Water: 'bg-blue-500',
    Electric: 'bg-yellow-400',
    Normal: 'bg-gray-400',
    Fairy: 'bg-pink-400',
  };
  return colors[type] || 'bg-gray-500';
}
