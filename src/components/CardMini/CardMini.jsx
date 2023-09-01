import Icons from "../Icons/Icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CardMini.scss";

export default function CardMini({ pokemon }) {
  //ese { pokemon } solo tiene name y url (según la API)
  const [pokemonInfo, setPokemonInfo] = useState();
  //aquí guardaremos la info de cada pokemon que obtendremos con el fetch de cada pokemon

  const fetchPokemonInfo = async () => {
    const response = await fetch(pokemon.url); //la solicitud se hace a la url
    const data = await response.json();

    setPokemonInfo(data); // Actualiza el estado "pokemonInfo" con los datos obtenidos de la API.
  };

  useEffect(() => {
    //llamar a ejecutar la f(x) fetchPokemonInfo cuando el componente CardMini se monte
    fetchPokemonInfo();
  }, []);
  //se va a llamar solo una vez si las dependencias están vacías

  return (
    <>
      <Link
        to="/PokemonPage"
        aria-label={`This link goes to ${pokemon.name}'s page`}
        className="cardmini--link"
      >
        <div className="cardmini">
          <div className="cardmini--header">
            <div className="cardmini--header--number">
              <p className="h4">#{pokemon.id}</p>
            </div>

            <div className="cardmini--header--icon">
              <Icons
                name={"IconFav"}
                isAbsolute={false}
                size="small"
                color="black-light"
                alt="icono de favoritos"
              ></Icons>
            </div>
          </div>
          <div className="cardmini--image">
            {pokemonInfo && (
              <img
                src={pokemonInfo.sprites.other.home.front_shiny}
                alt={`Imagen de ${pokemon.name}`}
              />
            )}
          </div>
          <div className="cardmini--name">
            <p className="h4">{pokemon.name}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
