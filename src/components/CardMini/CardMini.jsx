import Icons from "../Icons/Icons";
import { Link } from "react-router-dom";

import "./CardMini.scss";

export default function CardMini({ pokemon }) {
  return (
    <>
      <Link to="/Single">
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
            <img
              src={pokemon.sprites.other.home.front_shiny}
              alt={`Imagen de ${pokemon.name}`}
            />
          </div>
          <div className="cardmini--name">
            <p className="h4">{pokemon.name}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
