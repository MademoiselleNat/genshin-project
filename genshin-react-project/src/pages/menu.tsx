import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Link to="/characters">
        <h1>Characters</h1>
      </Link>
      <Link to="/regions">
        <h1>Regions</h1>
      </Link>
      <h1>Materials</h1>
      <h1>Weekly bosses</h1>
    </div>
  );
}

export default Menu;
