import React from "react";
import "../Navbar/Navbar.css";
import logo from "../../images/logo.PNG";

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
            <li>Home</li>
            <li>Immersive Learning</li>
            <li>Rezoversity</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <button className="button">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
