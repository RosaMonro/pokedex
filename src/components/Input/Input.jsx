import Icons from "../Icons/Icons";
import "./Input.scss";
import { PokemonContext } from "../../context/PokemonContext";
import { useState, useContext } from "react";

// const { useState } = React;

export default function Input(props) {
  const { searchPokemonsByName } = useContext(PokemonContext);

  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState({});

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemonsByName(search);
    // setPokemon(data);
    console.log(data);
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
        <Icons
          onClick={onClick}
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
