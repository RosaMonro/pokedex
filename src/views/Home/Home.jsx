// import { Link } from "react-router-dom";
import CardMini from "../../components/CardMini/CardMini";
import "./Home.scss";
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";

export default function Home() {
  const { allPokemons } = useContext(PokemonContext);

  return (
    <>
      <div className="screen-results">
        {allPokemons.map((pokemon) => (
          <CardMini pokemon={pokemon} key={pokemon.id} />
        ))}
        <p className="load-more font-size-14">Click to load more</p>
      </div>
    </>
  );
}
