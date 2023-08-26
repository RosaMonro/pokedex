import { Link } from "react-router-dom";
import CardMini from "../../components/CardMini/CardMini";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <div className="screen-results">
        <Link to="/Single">
          <CardMini />
        </Link>
        <Link to="/Single">
          <CardMini />
        </Link>
        <Link to="/Single">
          <CardMini />
        </Link>
        <Link to="/Single">
          <CardMini />
        </Link>
        <Link to="/Single">
          <CardMini />
        </Link>
        <Link to="/Single">
          <CardMini />
        </Link>
        <Link to="/Single">
          <CardMini />
        </Link>
      </div>
    </>
  );
}
