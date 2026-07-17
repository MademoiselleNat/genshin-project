import { characters } from "../data/characters";
import FilterGroup from "../components/filtering";
import { useState } from "react";

export default function CharacterList() {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  const [selectedElements, setSelectedElements] = useState<string[]>([]);

  const [selectedWeapons, setSelectedWeapons] = useState<string[]>([]);

  const [showFilters, setShowFilters] = useState(false);

  const filteredCharacters = characters.filter((character) => {
    const regionMatch =
      selectedRegions.length === 0 ||
      selectedRegions.includes(character.region);

    const elementMatch =
      selectedElements.length === 0 ||
      selectedElements.includes(character.element);

    const weaponMatch =
      selectedWeapons.length === 0 ||
      selectedWeapons.includes(character.weapon);

    return regionMatch && elementMatch && weaponMatch;
  });

  return (
    <div>
      <button onClick={() => setShowFilters(!showFilters)}>Filters here</button>
      {showFilters && (
        <div className="filter-panel">
          <FilterGroup
            title="Region"
            selected={selectedRegions}
            options={[
              "Mondstadt",
              "Liyue",
              "Inazuma",
              "Sumeru",
              "Fontaine",
              "Nod Krai",
            ]}
            onChange={setSelectedRegions}
          />

          <FilterGroup
            title="Element"
            selected={selectedElements}
            options={[
              "Pyro",
              "Electro",
              "Hydro",
              "Anemo",
              "Dendro",
              "Geo",
              "Cryo",
            ]}
            onChange={setSelectedElements}
          />

          <FilterGroup
            title="Weapon"
            selected={selectedWeapons}
            options={["Polearm", "Catalyst", "Sword", "Claymore", "Bow"]}
            onChange={setSelectedWeapons}
          />
        </div>
      )}

      {filteredCharacters.map((character) => (
        <div key={character.name}>
          <h2>{character.name}</h2>
          <p>{character.region}</p>
          <p>{character.element}</p>
          <p>{character.weapon}</p>
        </div>
      ))}
    </div>
  );
}
