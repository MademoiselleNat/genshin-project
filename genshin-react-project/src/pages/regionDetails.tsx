import { regions } from "../data/regions";
import { materials } from "../data/materials";
import { useParams } from "react-router-dom";
import { bosses } from "../data/bosses";

export default function regionDetails() {
  const { id } = useParams();

  const region = regions.find((region) => id === region.id);

  if (!region) {
    <h1>No such region in genshin bruh</h1>;
  }

  const regionMaterials = materials.filter((mat) =>
    mat.regions.includes(region.name),
  );

  const regionBosses = bosses.filter((boss) =>
    boss.locations.includes(region.name),
  );

  return (
    <div>
      <h1>{region.name}</h1>
      <h1>Archon</h1>
      <p>{region.archon}</p>
      <h1>Geography</h1>
      <p>{region.geography}</p>
      <h1>Cuisine</h1>
      <p>{region.cuisine}</p>
      <h1>Materials</h1>
      <p>
        {regionMaterials.map((mat) => (
          <span key={mat.id}>{mat.name} </span>
        ))}
      </p>
      <h1>Bosses</h1>
      <p>
        {regionBosses.map((boss) => (
          <span key={boss.id}>{boss.name} </span>
        ))}
      </p>
    </div>
  );
}
