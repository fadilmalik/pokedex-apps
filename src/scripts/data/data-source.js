/*
    Coded By @fadilmalik_
    https://github.com/fadilmalik
*/

/* eslint-disable no-plusplus */
import axios from 'axios';

const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

class DataSource {
  static async fetchPokemon(from = 1, to = 12) {
    const pokemonPromises = [];
    for (let i = from; i <= to; i++) {
      pokemonPromises.push(
        axios.get(getPokemonUrl(i)).then((response) => response.data),
      );
    }

    const result = Promise.all(pokemonPromises).then((pokemons) => {
      const listPokemon = pokemons.map((pokemon) => {
        const types = pokemon.types.map((typeInfo) => typeInfo.type.name);

        return {
          id: pokemon.id,
          types,
          name: pokemon.name,
          imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
        };
      });

      return listPokemon;
    });

    return result;
  }
}

export default DataSource;
