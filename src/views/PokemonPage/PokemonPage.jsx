import PokemonDetails from "../../components/PokemonDetails/PokemonDetails";
import { useParams } from "react-router-dom";
import "./PokemonPage.scss";

export default function PokemonPage() {
  const { name } = useParams();

  return (
    <>
      <div className="screen-details">
        <PokemonDetails name={name} />
      </div>
    </>
  );
}
