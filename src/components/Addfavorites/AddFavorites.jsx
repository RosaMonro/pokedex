import Icons from "../Icons/Icons";
import "./AddFavorites";

export default function AddFavorites({ isFavorite, onClick }) {
  return (
    <>
      <button className="unstyled-btn" onClick={onClick}>
        <Icons
          name={"IconFav"}
          isAbsolute={false}
          size="fixed"
          color={isFavorite ? "red" : "black-light"}
          alt="favorite icon"
        ></Icons>
      </button>
    </>
  );
}
