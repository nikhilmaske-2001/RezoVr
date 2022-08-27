import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.PNG";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          <img className="n-logo" src={logo} alt={logo}></img>
        </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link spy={true} smooth={true} to="Home" activeClass="activeClass">
              <li>Home</li>
            </Link>
            <Link spy={true} smooth={true} to="Explore">
              <li>Immersive Learning</li>
            </Link>
            <Link spy={true} smooth={true} to="Rezoversity">
              <li>Rezoversity</li>
            </Link>
            <Link spy={true} smooth={true} to="Home">
              <li>Blog</li>
            </Link>
          </ul>
        </div>
        <div>
          <Link spy={true} smooth={true} to="Contact">
            <button className="button">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
