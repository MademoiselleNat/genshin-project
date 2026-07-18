import { bosses } from "../data/bosses";
import { materials } from "../data/materials";
import { useState } from "react";
import FilterGroup from "../components/filtering";

export default function Bosses() {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredBosses = bosses.filter((boss) => {
    const regionMatch =
      selectedRegions.length === 0 ||
      boss.locations.some((loc) => selectedRegions.includes(loc));
    return regionMatch;
  });
  return (
    <div>
      <button onClick={() => setShowFilters(!showFilters)}>Filters here</button>
      {showFilters && (
        <div className="filter-panel">
          <FilterGroup
            title="Regions"
            selected={selectedRegions}
            options={["Mondstadt", "Liyue", "Inazuma"]}
            onChange={setSelectedRegions}
          />
        </div>
      )}
      {filteredBosses.map((boss) => (
        <div key={boss.id}>
          <h1>{boss.name}</h1>

          <p>
            {boss.locations.map((loc) => (
              <span key={loc}>{loc} </span>
            ))}
          </p>

          <p>{boss.specialty}</p>

          <p>
            {boss.drops.map((dropId) => {
              const material = materials.find((mat) => mat.id === dropId);

              return <span key={dropId}> {material?.name}</span>;
            })}
          </p>
        </div>
      ))}
    </div>
  );
}
