import { describe, it, expect } from 'vitest';
import { getPokemonList, searchPokemon, getPokemonById } from './pokemon';

describe('Pokemon Data', () => {
  it('should return list of pokemon', () => {
    const pokemon = getPokemonList();
    expect(pokemon.length).toBeGreaterThan(0);
  });

  it('should have valid pokemon structure', () => {
    const pokemon = getPokemonList()[0];
    expect(pokemon).toHaveProperty('id');
    expect(pokemon).toHaveProperty('name');
    expect(pokemon).toHaveProperty('type');
    expect(pokemon).toHaveProperty('hp');
  });

  it('should search pokemon by name', () => {
    const results = searchPokemon('pikachu');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].name.toLowerCase()).toContain('pikachu');
  });

  it('should search pokemon by type', () => {
    const results = searchPokemon('fire');
    expect(results.length).toBeGreaterThan(0);
  });

  it('should get pokemon by id', () => {
    const pokemon = getPokemonById(25);
    expect(pokemon).toBeDefined();
    expect(pokemon?.name.toLowerCase()).toBe('pikachu');
  });

  it('should return null for invalid id', () => {
    const pokemon = getPokemonById(99999);
    expect(pokemon).toBeNull();
  });
});
