import { regions } from "../data/regions";

export default function RegionList() {
  return (
    <div>
      {regions.map((region) => (
        <div key={region.id}>
          <h1>{region.id}</h1>
          <p>{region.info}</p>
          <button>Read more</button>
        </div>
      ))}
    </div>
  );
}
