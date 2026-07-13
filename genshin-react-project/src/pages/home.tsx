import "../styles/home.css";
import { Link } from "react-router-dom";
import GenshinLogo from "../assets/GenshinLogo.png";

export default function Home() {
  return (
    <div className="home">
      <h1>welcome to everything genshin</h1>
      <img src={GenshinLogo} alt="logo" />
      <Link to="/menu">
        <button>Explore</button>
      </Link>
    </div>
  );
}
