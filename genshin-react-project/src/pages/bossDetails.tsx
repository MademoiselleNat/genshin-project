import { bosses } from "../data/bosses";
import { useParams } from "react-router-dom";

export default function BossDetails() {
  const { id } = useParams();

  const boss = bosses.find((boss) => boss.id === id);

  if (!boss) {
    return <h1>who u fighting bruh</h1>;
  }

  return (
    <div>
      <h1>{boss.name}</h1>
      <p>Found here: {boss.location}</p>
      <p>Drops these: {boss.drops}</p>
    </div>
  );
}
