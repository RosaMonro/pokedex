import "./Input.scss";
import { PokemonContext } from "../../context/PokemonContext";
import { useState, useContext } from "react";

export default function Input(props) {
  const { searchPokemon } = useContext(PokemonContext);
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value); //actualiza el estado de search con el valor que contiene e.target.value, que en este caso es el valor del input. Así cuando se escribe algo en el input, el estado de search se actualiza, lo que desencadena una búsqueda en tiempo real llamando a searchPokemon
    searchPokemon(e.target.value); //llama a la f(x) searchPokemon (a tarvés de contexto) con el valor del campo del input como argumento
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
