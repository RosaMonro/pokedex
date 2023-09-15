import "./Favs.scss";
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import CardMini from "../../components/CardMini/CardMini";

export default function Favs() {
  const { favoritePokemons } = useContext(PokemonContext);

  return (
    <>
      <div className="screen-results">
        {/* <div className="nofavs">
          <img
            className="nofavs--img"
            src="./public/pokeball.webp"
            alt="rolling pokeball"
          />
          <p className="h3">
            You haven't selected any Pokémon as a favorite yet.
            <br /> Give them some love! ❤
          </p>
        </div> */}
        {favoritePokemons.map((pokemon) => (
          <CardMini pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  );
}
