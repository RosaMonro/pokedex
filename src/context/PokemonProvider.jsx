import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [totalPokemons, setTotalPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  // LLAMADA A LOS X PRIMEOS POKEMONS

  const getAllPokemons = async (limit = 25) => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const response = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();

    const results = data.results.map((pokemon, index) => {
      return {
        name: pokemon.name,
        id: index + 1,
        url: pokemon.url,
      };
    });

    setAllPokemons([...allPokemons, ...results]); //están tomando los Pokémon previamente almacenados en allPokemons y los recién obtenidos en data.results, y se están combinando en un solo array que los contiene todos.
    setLoading(false);
  };

  //LLAMADA A TODOS LOS POKEMONS.
  //así cuando hagamos un filtrado, se hará sobre todos los pokemons, no sobre los 20 primeros.

  const getTotalPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const response = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
    const data = await response.json();

    const results = data.results.map((pokemon, index) => {
      return {
        name: pokemon.name,
        id: index + 1,
        url: pokemon.url,
      };
    });

    setTotalPokemons(results);
    setLoading(false);
  };

  //LLAMADA A UN POKEMON POR SU ID
  //así cuando seleccione un pokemon, se abrirá

  const getPokemonsByID = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const response = await fetch(`${baseURL}pokemon/${id}`);
    const data = await response.json();
    return data;
  };

  //LLAMADA A UN POKEMON POR SU NOMBRE (para usar en el input)

  const searchPokemonsByName = async (name) => {
    try {
      const response = await fetch(`${baseURL}pokemon/${name}`);
      const data = await response.json();
      return data;
    } catch (err) {}
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  useEffect(() => {
    getTotalPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        totalPokemons,
        getPokemonsByID,
        searchPokemonsByName,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
