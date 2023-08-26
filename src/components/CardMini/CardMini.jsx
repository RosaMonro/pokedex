import Icons from "../Icons/Icons";
import "./CardMini.scss";

export default function CardMini(props) {
  return (
    <>
      <div className="cardmini">
        <div className="cardmini--header">
          <div className="cardmini--header--number">
            <p className="h4">#100</p>
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
          <img src="/pokeball.webp" alt="" />
        </div>
        <div className="cardmini--name">
          <p className="h4">Nombre Largo</p>
        </div>
      </div>
    </>
  );
}
