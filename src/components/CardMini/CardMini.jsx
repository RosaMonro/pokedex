import { Link } from "react-router-dom";
import "./CardMini.scss";
import AddFavorites from "../Addfavorites/AddFavorites";

export default function CardMini({ pokemon }) {
  return (
    <>
      <Link
        to={`/pokemonPage/${pokemon.name}`}
        aria-label={`Esta tarjeta te lleva a la página de detalles de ${pokemon.name}`}
        className="cardmini--link"
      >
        <div className="cardmini">
          <div className="cardmini--header">
            <div className="cardmini--header--number">
              <p className="h4">#{pokemon.id}</p>
            </div>
            <div className="cardmini--header--icon">
              <AddFavorites />
            </div>
          </div>
          <div className="cardmini--image">
            <img src={pokemon.imageUrl} alt={`Imagen de ${pokemon.name}`} />
          </div>
          <div className="cardmini--name">
            <p className="h4">{pokemon.name}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
