import { regions } from "../data/regions";
import { useParams } from "react-router-dom";

export default function regionDetails() {
  const { id } = useParams();

  const region = regions.find((region) => id === region.id);

  if (!region) {
    <h1>No such region in genshin bruh</h1>;
  }

  return (
    <div>
      <h1>{region.name}</h1>
      <h1>Archon</h1>
      <p>{region.archon}</p>
      <h1>Geography</h1>
      <p>{region.geography}</p>
      <h1>Cuisine</h1>
      <p>{region.cuisine}</p>
    </div>
  );
}
