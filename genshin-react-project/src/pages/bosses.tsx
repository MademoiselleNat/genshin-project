import { bosses } from "../data/bosses";
import { materials } from "../data/materials";

export default function Bosses() {
  return (
    <div>
      {bosses.map((boss) => (
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
