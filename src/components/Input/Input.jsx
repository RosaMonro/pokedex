import Icons from "../Icons/Icons";
import "./Input.scss";
import { PokemonContext } from "../../context/PokemonContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// const { useState } = React;

export default function Input(props) {
  const { searchPokemonByName } = useContext(PokemonContext);
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    searchPokemonByName(e.target.value);
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
          value={search}
        />
      </div>
    </>
  );
}
