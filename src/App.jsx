import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import BtnCross from "./components/BtnCross/BtnCross";
import Input from "./components/Input/Input";
import Screen from "./components/Screen/Screen";
import Home from "./views/Home";
import Button from "./components/Button/Button";
import "./scss/global.scss";

function App() {
  return (
    <>
      <main>
        <div className="pokedex">
          <Topbar />
          <div className="pokedex--screen-buttons">
            <div className="pokedex--screen">
              <Screen>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </Screen>
            </div>
            <form className="pokedex--input__mobile">
              <Input />
            </form>

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
