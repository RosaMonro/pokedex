import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import BtnCross from "./components/BtnCross/BtnCross";
import Home from "./views/Home";
import Button from "./components/Button/Button";
import "./scss/global.scss";

function App() {
  return (
    <>
      <main className="main">
        <div className="pokedex">
          <Topbar />
          <div className="pokedex--main">
            <div className="pokedex--screen">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
            <div className="pokedex--commands">
              <div className="pokedex--commands--btncross">
                <BtnCross />
              </div>
              <div className="pokedex--commands--btns">
                <Button text="HOME" />
                <Button text="FAVS" />
              </div>
            </div>
          </div>
          <div className="pokedex--footer">
            <p>Pokedex 2023</p>
          </div>
        </div>
      </main>
    </>
  );
}
export default App;
