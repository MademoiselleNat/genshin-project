import { Link } from "react-router-dom";
import { characters } from "../data/characters";
import { regions } from "../data/regions";
import { materials } from "../data/materials";
import { bosses } from "../data/bosses";
import { useState } from "react";

function FilterByName<T extends { name: string }>(items: T[], search: string) {
  return items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
}

function Menu() {
  const [search, setSearch] = useState("");

  const characResults = FilterByName(characters, search);
  const regionResults = FilterByName(regions, search);
  const matResults = FilterByName(materials, search);
  const bossResults = FilterByName(bosses, search);

  const searching = search.trim() != "";
  return (
    <div>
      <input
        type="text"
        placeholder="Search the wiki"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {searching && (
        <div className="search-results">
          {characResults.map((character) => (
            <div key={character.id}>
              <Link to={`/characters/${character.id}`} key={character.id}>
                {character.name} in Characters
              </Link>
            </div>
          ))}

          {regionResults.map((region) => (
            <div key={region.id}>
              <Link to={`/regions/${region.id}`} key={region.id}>
                {region.name} in Regions
              </Link>
            </div>
          ))}

          {matResults.map((mat) => (
            <div key={mat.id}>{mat.name} in Materials</div>
          ))}

          {bossResults.map((boss) => (
            <div key={boss.id}>
              <Link to={`/bosses/${boss.id}`} key={boss.id}>
                {boss.name} in Bosses
              </Link>
            </div>
          ))}
        </div>
      )}
      <Link to="/characters">
        <h1>Characters</h1>
      </Link>
      <Link to="/regions">
        <h1>Regions</h1>
      </Link>
      <Link to="/mats">
        <h1>Materials</h1>
      </Link>
      <Link to="/bosses">
        <h1>Bosses</h1>
      </Link>
    </div>
  );
}

export default Menu;
