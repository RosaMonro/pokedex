import { Routes, Route, Link } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import BtnCross from "./components/BtnCross/BtnCross";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Home from "./views/Home/Home";
import Favs from "./views/Favs/Favs";
import Single from "./views/Single/Single";
import "./scss/global.scss";

function App() {
  return (
    <>
      <main>
        <div className="pokedex">
          <Topbar />
          <div className="pokedex--screen-buttons">
            <div className="pokedex--screen">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Favs" element={<Favs />} />
                <Route path="/Single" element={<Single />} />
              </Routes>
            </div>
            <form className="pokedex--input__mobile">
              <Input />
            </form>

            <div className="pokedex--commands">
              <div className="pokedex--commands--btncross">
                <BtnCross />
              </div>
              <div className="pokedex--commands--btns">
                <Link to="/">
                  <Button text="HOME" />
                </Link>
                <Link to="/Favs">
                  <Button text="FAVS" />
                </Link>
              </div>
            </div>
          </div>
          <form className="pokedex--input__desktop">
            <Input />
          </form>
          <div className="pokedex--footer">
            <p>Pokedex 2023</p>
          </div>
        </div>
      </main>
    </>
  );
}
export default App;
