import { materials } from "../data/materials";
import { useState } from "react";
import FilterGroup from "../components/filtering";

export default function MaterialList() {
  const [showFilters, setShowFilters] = useState(false);

  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  const [selectedCats, setSelectedCats] = useState<string[]>([]);

  const filteredMats = materials.filter((mat) => {
    const regionMatch =
      selectedRegions.length === 0 ||
      mat.regions.some((region) => selectedRegions.includes(region));

    const catMatch =
      selectedCats.length === 0 || selectedCats.includes(mat.category);
    return regionMatch && catMatch;
  });
  return (
    <div>
      <button onClick={() => setShowFilters(!showFilters)}>Filters here</button>
      {showFilters && (
        <div className="filter-panel">
          <FilterGroup
            title="Regions"
            selected={selectedRegions}
            options={["Mondstadt", "Liyue", "Inazuma", "Sumeru", "Fontaine"]}
            onChange={setSelectedRegions}
          />

          <FilterGroup
            title="Category"
            selected={selectedCats}
            options={["Common", "Local specialty", "Boss drop"]}
            onChange={setSelectedCats}
          />
        </div>
      )}
      {filteredMats.map((mat) => (
        <div key={mat.id}>
          <h1>{mat.name}</h1>
          <p>
            {mat.regions.map((region) => (
              <span key={region}>{region} </span>
            ))}
          </p>
          <p>{mat.category}</p>
          <p>
            {mat.source?.map((src) => (
              <span key={src}>{src} </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
