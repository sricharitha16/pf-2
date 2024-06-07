import React from "react";
import "./Home.css";
import { Link } from "react-scroll";
import Type from "./Type";
import homeLogo from "../Assets/home-main.svg"
import bG from "../Assets/img/bg.png"



const Home = () => {
  return (
    <div name="home" className="homepage">
      <article class="wrapper">
        <div className="backg">
        <img src={bG} alt="background"/>
        </div>
        <div className="backg-body">
        {/* <h3 class="hp1">Hi, I am Sricharitha Tirukoti</h3>
        <div className="home-content" style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
        <button class="button">
            <Link to="about" smooth={true} duration={800}>About Me</Link>
        </button>
        <div className="image-content">
              <img
                src={homeLogo}
                alt="home pic"
                className="imgfluid"
                style={{ maxHeight: "450px" }}
              />
            </div> */}
             <div className="content-container">
            <div className="text-content">
              <h3 className="hp1">Hi, I am Sricharitha Tirukoti</h3>
              <div className="home-content" style={{ padding: 0, textAlign: "left" }}>
                <Type />
              </div>
              <button className="button">
                <Link to="about" smooth={true} duration={800}>About Me</Link>
              </button>
            </div>
            <div className="image-content">
              <img
                src={homeLogo}
                alt="home pic"
                className="imgfluid"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div> 
      </article>
    </div>
  );
};

export default Home;
