import Icons from "../Icons/Icons";
import "./AddFavorites";

export default function AddFavorites() {
  return (
    <>
      <button className="unstyled-btn">
        <Icons
          name={"IconFav"}
          isAbsolute={false}
          size="fixed"
          color="black-light"
          alt="icono de favoritos"
        ></Icons>
      </button>
    </>
  );
}
