import { regions } from "../data/regions";
import { Link } from "react-router-dom";

export default function RegionList() {
  return (
    <div>
      {regions.map((region) => (
        <div key={region.id}>
          <h1>{region.name}</h1>
          <p>{region.info}</p>
          <Link to={`/regions/${region.id}`}>
            <button>Read more</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
