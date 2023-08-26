import CardSingle from "../../components/CardSingle/CardSingle";
import { useParams } from "react-router-dom";
import "./Single.scss";

export default function Single(props) {
  const { name } = useParams();
  // console.log(name);

  return (
    <>
      <div className="screen-single">
        <CardSingle name={name} />
      </div>
    </>
  );
}
