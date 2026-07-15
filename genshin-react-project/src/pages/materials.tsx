import { materials } from "../data/materials";

export default function MaterialList() {
  return (
    <div>
      {materials.map((mat) => (
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
