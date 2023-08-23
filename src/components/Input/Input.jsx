import Icons from "../Icons/Icons";
import "./Input.scss";

export default function Input(props) {
  return (
    <>
      <div className="input-wrapper">
        <input
          type="text"
          id="searchInput"
          aria-label="Search pokemon by name"
          placeholder="Search by name"
        />
        <Icons
          name={"IconSearch"}
          isAbsolute={true}
          size="small"
          color="grey"
          alt="botón de búsqueda"
        />
      </div>
    </>
  );
}
