import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Home from "./views/Home";

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
