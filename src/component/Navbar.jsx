import "./Navbar.css";
import React from "react";
import { Link } from "react-scroll";


const Nav = () => {

  return (
    <div className="container-nav">
      <div className="nav-bar">
        <h2>
          <Link to="home" smooth={true} duration={500}>Sricharitha</Link>
        </h2>
        <nav className="nav-flex">
          <ul>
            <li>
            <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li>
            <Link to="project" smooth={true} duration={500}>Projects</Link>
            </li>
            <li>
            <Link to="resume" smooth={true} duration={500}>Resume</Link>
            </li>
          </ul>
        </nav>
        
      </div>

      
    </div>
  );
};

export default Nav;
