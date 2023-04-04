

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* <a href="/">
            Logo
             <i className="fas fa-code"></i> 
          </a> */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/header">HOME</a>
            </li>
            <li className="nav-item">
              <a href="/about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a href="/portfolio">PORTFOLIO</a>
            </li>
            <li className="nav-item">
              <a href="/resume">RESUME</a>
            </li>
            <li className="nav-item">
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <FontAwesomeIcon icon={faX} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
