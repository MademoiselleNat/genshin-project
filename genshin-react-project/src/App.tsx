import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import CharacterList from "./pages/characters";
import RegionList from "./pages/regions";
import MaterialList from "./pages/materials";
import Bosses from "./pages/bosses";
import CharacterDetails from "./pages/characterDetails";
import BossDetails from "./pages/bossDetails";
import RegionDetails from "./pages/regionDetails";
import MaterialDetails from "./pages/materialDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/regions" element={<RegionList />} />
        <Route path="/regions/:id" element={<RegionDetails />} />
        <Route path="/mats" element={<MaterialList />} />
        <Route path="/bosses" element={<Bosses />} />
        <Route path="/bosses/:id" element={<BossDetails />} />
        <Route path="/mats/:id" element={<MaterialDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
