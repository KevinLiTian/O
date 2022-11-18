import { Link } from "react-router-dom";
import "./HomePageHero.css";

import iPad from "../../assets/iPad.jpg";

export default function HomePageHero(): JSX.Element {
  return (
    <div className="home-page-hero">
      <div className="home-page-hero-img">
        {/* <img src={iPad} alt="" /> */}
      </div>
      <div className="home-page-hero-text">
        {/* <h1>iPad</h1>
        <h2>Lovable. Drawable. Magical</h2>
        <Link to="/">Learn more {">"}</Link>
        <Link to="/">Buy {">"}</Link> */}
      </div>
    </div>
  );
}
