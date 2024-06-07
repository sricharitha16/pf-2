import React from "react";
import "./About.css";
import myPic from "../Assets/icons/photo.jpg"
import likedIn from "../Assets/icons/linkedin.webp"
import gitHub from "../Assets/icons/github.png"
import instaG from "../Assets/icons/instagram.webp"

const AboutMe = () => {
  return (
    <div name="about" className="about">
      
      <div className="about-img">
        <img
          src={myPic}
          height="200px"
          className="rounded"
          alt="Profile"
        />
      </div>
      <div className="about-head">
        <h1 className="about-h1">SRICHARITHA TIRUKOTI</h1>
        <br />
        <p>
          Master's in Computer Science - The University of Texas at Arlington
        </p>
        <br />
        <h2 className="about-h2">Full Stack Developer</h2>
      </div>
      <div className="about-para">
        <p>
        I have four years of experience as a Full-Stack Developer, during which time I have developed and optimized web applications from 
         from design to Quality Assurance (QA). My expertise encompasses API usage and management, automation scripting, automation testing, 
         manual testing, and agile methodologies. Being comfortable with code allows me to rapidly prototype and validate experiences.
          <br /> <br />
          I am also an artist with a deep passion for design. My artistic practice is not just a hobby, but a profound means of expressing my creativity and design concepts. Engaging in artistic endeavors allows me to explore and articulate innovative ideas, continually pushing the boundaries of my imagination and skill.
        </p>
      </div>
      <div className="about-logo">
        <a
          href="https://www.linkedin.com/in/sricharitha-t"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={likedIn}height="40px" alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/sricharitha16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="git"
            src={gitHub}
            height="40px"
            alt="github"
          />
        </a>
        <a
          href="https://www.instagram.com/artbysricharitha/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instaG} height="40px" alt="instagram" />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
