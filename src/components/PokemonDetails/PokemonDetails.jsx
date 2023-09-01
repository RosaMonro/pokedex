import Icons from "../Icons/Icons";
import "./PokemonDetails.scss";

export default function PokemonDetails(props) {
  return (
    <>
      <div className="pokemondetails">
        <div className="pokemondetails--header">
          <div className="h2 pokemondetails--header--number">
            #{props.number}
          </div>
          <div className="h1 pokemondetails--header--name">{props.name}</div>
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
