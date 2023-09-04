import Icons from "../Icons/Icons";
import "./PokemonDetails.scss";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";
import { useContext, useEffect, useState } from "react";

export default function PokemonDetails() {
  const { getPokemonByName } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState({}); //almacena los detalles de pokemon
  const { name } = useParams();

  const fetchPokemon = async (name) => {
    const data = await getPokemonByName(name);
    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemon(name);
  }, [name]);

  const pokemonId = pokemon.id || "";
  //para asegurarnos de que "pokemon" tenga un valor definido antes de acceder a "id".
  //Si "pokemon" no tiene un valor definido, se mostrará una cadena vacía en su lugar.
  //Esto evitará que se produzca el error "id is not defined" en la primera renderización
  //antes de que los datos se carguen desde la API.

  return (
    <>
      <div className="pokemondetails">
        <div className="pokemondetails--header">
          <div className="h3 pokemondetails--header--number">#{pokemon.id}</div>
          <div className="h1 pokemondetails--header--name">{name}</div>
          <div className="pokemondetails--header--icon">
            <Icons
              name={"IconFav"}
              isAbsolute={false}
              size="medium"
              color="black-light"
              alt="icono de favoritos"
            ></Icons>
          </div>
        </div>

        <div className="pokemondetails--image">
          <img src="/pokeball.webp" alt="" />
        </div>

        <div className="pokemondetails--info">
          <div className="pokemondetails--info--data">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit tempor,
              suspendisse
            </p>
          </div>
          <div className="pokemondetails--info--description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit tempor,
              suspendisse pulvinar penatibus taciti ornare integer sodales
              vestibulum, lectus lacinia metus pellentesque eros hac nec.
              Porttitor potenti velit dignissim scelerisque venenatis nibh,
              sapien ullamcorper taciti pharetra nisi commodo convallis, lacinia
              blandit eleifend tincidunt sem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
