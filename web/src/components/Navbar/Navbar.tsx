import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { NavLinks } from "../../utils/navbarLink";
import Logo from "../../assets/apple.svg";
import Search from "../../assets/search.svg";
import Bag from "../../assets/bag.svg";

export default function Navbar(): JSX.Element {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-mobile">
        <div
          onClick={() => setToggle((prev) => !prev)}
          className={`mobile-menu navbar-link ${toggle ? "active" : ""}`}
        >
          <span className="line line-top"></span>
          <span className="line line-bottom"></span>
        </div>
        <img src={Logo} alt="" className="navbar-link" />
        <img src={Bag} alt="" className="navbar-link" />
      </div>

      <div className="navbar-desktop">
        <img src={Logo} alt="" className="navbar-link" />
        {NavLinks.map((link) => (
          <Link key={link.label} to={link.path} className="navbar-link">
            {link.label}
          </Link>
        ))}
        <img src={Search} alt="" className="navbar-link" />
        <img src={Bag} alt="" className="navbar-link" />
      </div>
    </div>
  );
}
