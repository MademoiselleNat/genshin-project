import { materials } from "../data/materials";
import { useParams } from "react-router-dom";

export default function MaterialDetails() {
  const { id } = useParams();

  const mat = materials.find((mat) => mat.id === id);

  return (
    <div key={mat.id}>
      <h1>{mat.name}</h1>
      <p>Found in: </p>
      {mat.regions.map((region) => (
        <span>{region} </span>
      ))}
      <p>{mat.category}</p>
    </div>
  );
}
