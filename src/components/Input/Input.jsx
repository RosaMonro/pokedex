import Icons from "../Icons/Icons";
import "./Input.scss";
import { PokemonContext } from "../../context/PokemonContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// const { useState } = React;

export default function Input(props) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    e.preventDefault();
    navigate(`/PokemonPage/${search}`);
  };

  return (
    <>
      <div className="input-wrapper">
        <input
          type="text"
          id="searchInput"
          aria-label="Search pokemon by name"
          placeholder="Search by name"
          onChange={onChange}
        />
        <button onClick={onClick}>
          <Icons
            name={"IconSearch"}
            isAbsolute={true}
            size="small"
            color="grey"
            alt="botón de búsqueda"
          />
        </button>
      </div>
    </>
  );
}
