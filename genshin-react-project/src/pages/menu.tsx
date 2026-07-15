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
      <Link to="/mats">
        <h1>Materials</h1>
      </Link>
      <Link to="/bosses">
        <h1>Bosses</h1>
      </Link>
    </div>
  );
}

export default Menu;
