import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import CharacterList from "./pages/characters";
import RegionList from "./pages/regions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/regions" element={<RegionList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
