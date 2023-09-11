import CardMini from "../../components/CardMini/CardMini";
import "./Home.scss";
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import Loader from "../../components/Loader/Loader";

export default function Home() {
  const { visiblePokemons, loading } = useContext(PokemonContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="screen-results">
          {visiblePokemons.map((pokemon) => (
            <CardMini pokemon={pokemon} key={pokemon.id} />
          ))}
          {/* <p className="load-more font-size-14">Click to load more</p> */}
        </div>
      )}
    </>
  );
}
