import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
  const [visiblePokemons, setVisiblePokemons] = useState([]);
  const [totalPokemons, setTotalPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  //LLAMADA A TODOS LOS POKEMONS.

  const getTotalPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const response = await fetch(`${baseURL}pokemon?limit=151&offset=0`);
    const data = await response.json();

    const results = data.results.map((pokemon, index) => {
      const id = index + 1;
      return {
        key: pokemon.name,
        name: pokemon.name,
        id,
        url: pokemon.url,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${id}.png`,
      };
    });

    setTotalPokemons(results);
    setVisiblePokemons(results);
    setLoading(false);
  };

  //OBTENER UN POKEMON POR SU NOMBRE
  //así cuando seleccione un pokemon, se abrirá

  const getPokemonByName = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const response = await fetch(`${baseURL}pokemon/${id}`);
    const data = await response.json();
    return data;
  };

  //LLAMADA A UN POKEMON POR SU NOMBRE (para usar en el input)

  const searchPokemon = async (name) => {
    const pokemonsFiltered = totalPokemons.filter((pokemon) => {
      return pokemon.name.startsWith(name);
    });
    setVisiblePokemons(pokemonsFiltered);
  };

  useEffect(() => {
    getTotalPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        visiblePokemons,
        totalPokemons,
        getPokemonByName,
        searchPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
