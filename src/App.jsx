import { Routes, Route, Link } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import BtnCross from "./components/BtnCross/BtnCross";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Home from "./views/Home/Home";
import Favs from "./views/Favs/Favs";
import PokemonPage from "./views/PokemonPage/PokemonPage";
import "./scss/global.scss";
import { PokemonProvider } from "./context/PokemonProvider";

function App() {
  return (
    <>
      <PokemonProvider>
        <main>
          <div className="pokedex">
            <Topbar />
            <div className="pokedex--screen-buttons">
              <div className="pokedex--screen">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Favs" element={<Favs />} />
                  <Route path="/PokemonPage/:name" element={<PokemonPage />} />
                </Routes>
              </div>
              <form className="pokedex--input__mobile">
                <Input />
              </form>

              <div className="pokedex--commands">
                <div className="pokedex--commands--btncross">
                  <BtnCross
                    onLeftClick={console.log}
                    onRightClick={console.log}
                  />
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
      </PokemonProvider>
    </>
  );
}
export default App;
