import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { NavLinks } from "../../utils/navbarLink";
import Logo from "../../assets/apple.svg";
import Bag from "../../assets/bag.svg";

export default function Navbar(): JSX.Element {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1080) setToggle(false);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className={`navbar ${toggle ? "active" : ""}`}>
      <div className="navbar-desktop">
        <img src={Logo} alt="" className="navbar-link" />
        {NavLinks.map((link) => (
          <Link key={link.label} to={link.path} className="navbar-link">
            {link.label}
          </Link>
        ))}
        <img src={Bag} alt="" className="navbar-link" />
      </div>

      <div className="navbar-mobile">
        <div
          onClick={() => setToggle((prev) => !prev)}
          className={`mobile-menu navbar-link ${toggle ? "active" : ""}`}
        >
          <span className="line line-top"></span>
          <span className="line line-bottom"></span>
        </div>
        <img src={Logo} alt="" className="navbar-link" />
        <img src={Bag} alt="" className="navbar-link navbar-bag" />
      </div>

      <div style={{ display: toggle ? "block" : "none" }}>
        <div className={`navbar-collapse ${toggle ? "active" : ""}`}>
          {NavLinks.map((link) => (
            <Link key={link.label} to={link.path} className="navbar-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
