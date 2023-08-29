import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [totalPokemons, setTotalPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  // LLAMADA A LOS 20 PRIMEOS POKEMONS

  const getAllPokemons = async (limit = 50) => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const response = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();

    //para recorrer el arreglo results de la data
    //ya que de momento solo muestra la url y el name
    //Hacemos un fetch de cada pokemon para que nos de la info detallada
    const promises = data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    });

    //Promise.all() es una función que toma un array de promesas y devuelve una nueva promesa.
    //Esta promesa se resuelve cuando todas las promesas en el arreglo original se han resuelto
    //o cuando una de ellas se rechaza.
    const results = await Promise.all(promises);

    setAllPokemons([...allPokemons, ...results]); //están tomando los Pokémon previamente almacenados en allPokemons y los recién obtenidos en results, y se están combinando en un solo arreglo que los contiene todos.
    setLoading(false);
  };

  //LLAMADA A TODOS LOS POKEMONS.
  //así cuando hagamos un filtrado, se hará sobre todos los pokemons, no sobre los 20 primeros.

  const getTotalPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const response = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
    const data = await response.json();

    const promises = data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    });

    const results = await Promise.all(promises);

    setTotalPokemons(results);
    setLoading(false);
  };

  //LLAMAR A UN POKEMON POR SU ID
  //así cuando seleccione un pokemon, se abrirá

  const getPokemonsByID = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const response = await fetch(`${baseURL}pokemon/${id}`);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  useEffect(() => {
    getTotalPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{ allPokemons, totalPokemons, getPokemonsByID }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
