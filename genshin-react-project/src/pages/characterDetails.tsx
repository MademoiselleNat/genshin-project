import { characters } from "../data/characters";
import { useParams } from "react-router-dom";

export default function characterDetails() {
  const { id } = useParams();

  const character = characters.find((character) => character.id === id);

  if (!character) {
    return <h1>no such character, fake genshin fan</h1>;
  }
  return (
    <div>
      <h1>{character.name}</h1>
      <p>{character.region}</p>
      <p>{character.element}</p>
    </div>
  );
}
