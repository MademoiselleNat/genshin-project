import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import CharacterList from "./pages/characters";
import RegionList from "./pages/regions";
import RegionDetails from "./pages/regionDetails";
import MaterialList from "./pages/materials";
import Bosses from "./pages/bosses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/regions" element={<RegionList />} />
        <Route path="/regions/:id" element={<RegionDetails />} />
        <Route path="/mats" element={<MaterialList />} />
        <Route path="/bosses" element={<Bosses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
