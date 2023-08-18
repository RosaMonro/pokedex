import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import BtnCross from "./components/BtnCross/BtnCross";
import Home from "./views/Home";
import Button from "./components/Button/Button";
import "./scss/global.scss";

function App() {
  return (
    <>
      <div className="pokedex">
        <Topbar />
        <div className="pokedex-main">
          <div className="pokedex-screen">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <div className="pokedex-commands">
            <div className="cross-btn"></div>
            <BtnCross />
            <div className="btn-options"></div>
            <Button text="HOME" />
            <Button text="hahahahahahhahah" />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
