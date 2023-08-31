import Icons from "../Icons/Icons";
import "./CardSingle.scss";

export default function CardSingle(props) {
  return (
    <>
      <div className="cardsingle">
        <div className="cardsingle--header">
          <div className="h2 cardsingle--header--number">#{props.number}</div>
          <div className="h1 cardsingle--header--name">{props.name}</div>
          <div className="cardsingle--header--icon">
            <Icons
              name={"IconFav"}
              isAbsolute={false}
              size="medium"
              color="black-light"
              alt="icono de favoritos"
            ></Icons>
          </div>
        </div>

        <div className="cardsingle--image">
          <img src="/pokeball.webp" alt="" />
        </div>

        <div className="cardsingle--info">
          <div className="cardsingle--info--data">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit tempor,
              suspendisse
            </p>
          </div>
          <div className="cardsingle--info--description">
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
