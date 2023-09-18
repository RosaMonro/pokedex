import "./PokemonDetails.scss";
import AddFavorites from "../Addfavorites/AddFavorites";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";
import { useContext, useEffect, useState } from "react";

export default function PokemonDetails() {
  const {
    getPokemonByName,
    isPokemonInFavorites,
    addFavoritePokemon,
    removeFavoritePokemon,
  } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({}); //almacena los detalles de pokemon
  const { name } = useParams();

  const fetchPokemon = async (name) => {
    const data = await getPokemonByName(name);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(name);
  }, [name]);

  const pokemonId = pokemon.id || "";
  //para asegurarnos de que "pokemon" tenga un valor definido antes de acceder a "id".
  //Si "pokemon" no tiene un valor definido, se mostrará una cadena vacía en su lugar.
  //Esto evitará que se produzca el error "id is not defined" en la primera renderización
  //antes de que los datos se carguen desde la API.

  const handleFavoriteClick = (event, id) => {
    event.preventDefault(); // Evitar que se active el link

    const pokemonData = {
      key: pokemon.name,
      name: pokemon.name,
      id: pokemon.id,
      url: pokemon.url,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemon.id}.png`,
    };

    if (isPokemonInFavorites(pokemonData)) {
      removeFavoritePokemon(pokemonData);
    } else {
      addFavoritePokemon(pokemonData);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="pokemondetails">
          <div className="pokemondetails--header">
            <div className="h2 pokemondetails--header--number">
              #{pokemon.id}
            </div>
            <div className="h1 pokemondetails--header--name">{name}</div>
            <div className="pokemondetails--header--icon">
              <AddFavorites
                isFavorite={isPokemonInFavorites(pokemon)}
                onClick={handleFavoriteClick}
              />
            </div>
          </div>

          <div className="pokemondetails--info">
            <div className="pokemondetails--info--imageanddata">
              <section className="pokemondetails--info--image">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemon.id}.png`}
                  alt={`${pokemon.name} image`}
                />
              </section>

              <section className="pokemondetails--info--data">
                <p>
                  <strong>Type: </strong>
                  {pokemon.types.map((type) => type.type.name).join(", ")}
                </p>
                <p>
                  <strong>Base experience: </strong>
                  {pokemon.base_experience} pts
                </p>
                <p>
                  <strong>Abilities: </strong>
                  {pokemon.abilities
                    .map((item) => item.ability.name)
                    .join(", ")}
                </p>
                <p>
                  <strong>Weight: </strong>
                  {pokemon.weight} lbs
                </p>
                <p>
                  <strong>Height: </strong>
                  {pokemon.height} in.
                </p>
              </section>
            </div>
            <section className="pokemondetails--info--statistics">
              {pokemon.stats.map((item) => {
                return (
                  <div
                    className="pokemondetails--info--statistics__card"
                    key={item.stat.name}
                  >
                    <h6>{item.stat.name}:</h6>
                    <p>{item.base_stat}</p>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      )}
    </>
  );
}
