import PokemonDetails from "../../components/PokemonDetails/PokemonDetails";
import { useParams } from "react-router-dom";
import "./PokemonPage.scss";

export default function PokemonPage(props) {
  const { name } = useParams();
  // console.log(name);

  return (
    <>
      <div className="screen-details">
        <PokemonDetails name={name} />
      </div>
    </>
  );
}