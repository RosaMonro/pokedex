import Icons from "../Icons/Icons";
import "./CardMini.scss";

export default function CardMini(props) {
  return (
    <>
      <div className="cardmini">
        <div className="cardmini--header">
          <div className="cardmini--header--number">
            <p className="h2">#100</p>
          </div>
          <div className="cardmini--header--name">
            <p className="h2">Nombre</p>
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
          <img src="/public/pokeball.webp" alt="" />
        </div>
        <div className="cardmini--description">
          <p>
            Bonita y molona descripción del monstruito este de las naricesBonita
            y molona descripción del monstruito este de las naricesBonita y
            molona descripción del monstruito este de las naricesBonita y molona
            descripción del monstruito este de las naricesBonita y molona
            descripción del monstruito este de las naricesBonita y molona
            descripción del monstruito este de las naricesBonita y molona
            descripción del monstruito este de las naricesBonita y molona
            descripción del monstruito este de las naricesBonita y molona
            descripción del monstruito este de las naricesBonita y molona
            descripción del monstruito este de las naricesBonita y molona
            descripción del monstruito este de las narices
          </p>
        </div>
        {/* Faltará dividir la sección de la descripción */}{" "}
      </div>
    </>
  );
}
