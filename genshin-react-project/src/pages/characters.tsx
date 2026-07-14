import { characters } from "../data/characters";

export default function CharacterList() {
  return (
    <div>
      {characters.map((character) => (
        <div key={character.name}>
          <h2>{character.name}</h2>
          <p>{character.region}</p>
          <p>{character.weapon}</p>
        </div>
      ))}
    </div>
  );
}
