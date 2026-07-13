import "../styles/home.css";
import GenshinLogo from "../assets/GenshinLogo.png";

function Home() {
  return (
    <div className="home">
      <h1>welcome to everything genshin</h1>
      <img src={GenshinLogo} alt="logo" />
      <button>Explore</button>
    </div>
  );
}

export default Home;
