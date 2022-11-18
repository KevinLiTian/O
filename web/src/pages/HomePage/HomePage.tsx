import "./HomePage.css";

import Navbar from "../../components/Navbar/Navbar";
import HomePageHero from "../../components/HomePageHero/HomePageHero";

export default function HomePage(): JSX.Element {
  return (
    <div className="home-page">
      <Navbar />
      <HomePageHero />
    </div>
  );
}
