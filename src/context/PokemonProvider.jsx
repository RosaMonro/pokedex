import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
  const [visiblePokemons, setVisiblePokemons] = useState([]);
  const [totalPokemons, setTotalPokemons] = useState([]);
  // const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  // const [active, setActive] = useState(false);
  const [favoritePokemons, setFavoritePokemons] = useState([]);

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
  //así cuando seleccione un pokemon, se abrirá en details

  const getPokemonByName = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const response = await fetch(`${baseURL}pokemon/${id}`);
    const data = await response.json();
    return data;
  };

  //LLAMADA A UN POKEMON POR SU NOMBRE (para usar en el input)

  const searchPokemon = async (name) => {
    const pokemonsFiltered = totalPokemons.filter((pokemon) => {
      return pokemon.name.startsWith(name.toLowerCase());
    });
    setVisiblePokemons(pokemonsFiltered);
  };

  useEffect(() => {
    getTotalPokemons();
  }, []);

  //GESTIÓN DE FAVORITOS

  const addFavoritePokemon = (pokemon) => {
    if (!isPokemonInFavorites(pokemon)) {
      // verifica si el Pokémon que se intenta agregar no está ya en la lista de favoritos
      setFavoritePokemons([...favoritePokemons, pokemon]);
    }
  };

  const removeFavoritePokemon = (pokemon) => {
    const updatedFavorites = favoritePokemons.filter(
      (favPokemon) => favPokemon.id !== pokemon.id //favPokemon representa cada elemento de favoritePokemons mientras se ejecuta la f(x) filter,
    );
    setFavoritePokemons(updatedFavorites);
  };

  const isPokemonInFavorites = (pokemon) => {
    //para verificar si un Pokémon ya está en la lista de favoritos
    return favoritePokemons.some((favPokemon) => favPokemon.id === pokemon.id);
    //El método .some se utiliza para verificar si al menos un elemento del array cumple con una cierta condición.
    //compara el id de favPokemon con el id del pokemon pasado como argumento. Si coinciden (===), la función devuelve true; sino false.
  };

  return (
    <PokemonContext.Provider
      value={{
        visiblePokemons,
        totalPokemons,
        getPokemonByName,
        searchPokemon,
        loading,
        setLoading,
        favoritePokemons,
        addFavoritePokemon,
        removeFavoritePokemon,
        isPokemonInFavorites,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
