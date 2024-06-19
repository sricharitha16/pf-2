import React from "react";
import "./Resume.css";
import skill from "../Assets/icons/skill.png"
import work from "../Assets/icons/exp.png"
import res from "../Assets/icons/resume.png"
import c from "../Assets/logo/c.png"
import cpp from "../Assets/logo/cpp.png"
import css from "../Assets/logo/css.png"
import django from "../Assets/logo/django.png"
import html from "../Assets/logo/html.png"
import java from "../Assets/logo/java.png"
import jira from "../Assets/logo/jira.png"
import jquery from "../Assets/logo/jquery.png"
import js from "../Assets/logo/js.png"
import mysql from "../Assets/logo/mysql.png"
import nodejs from "../Assets/logo/nodejs.png"
import postgres from "../Assets/logo/postgres.png"
import postman from "../Assets/logo/postman.png"
import pycharm from "../Assets/logo/pycharm.png"
import python from "../Assets/logo/python.png"
import react from "../Assets/logo/react.png"
import selenium from "../Assets/logo/selenium.png"
import vscode from "../Assets/logo/vscode.png"

const Resume = () => {
  return (
    <div name="resume" className="resume">
      <div className="skills">
        <div className="skill">
          <div className="exp">
            <img src={skill} height="50px" alt="logo" />
            <h1>SKILLS</h1>
          </div>
          <p>
            <b>Programming Languages:</b> Python, Java, C, C++, PHP, R<br />
            <b>Web Development/ Framework:</b> Django, React, HTML5, CSS3,
            Javascript, JQuery, Laravel
            <br />
            <b>Database Management:</b> MySQL, PostgreSQL, SQLite3
            <br />
            <b>Development Tools/ Frameworks:</b> JIRA, GitHub, Selenium,
            Postman API, ns3 simulator
            <br />
            <b>Data Science/Analysis:</b> scikit-learn, Weka, Matplotlib, NumPy,
            Pandas, TenserFlow
            <br />
            <b>Design Tools:</b> Figma, Adobe Illustrator, Adobe Photoshop
          </p>
        </div>
      </div>

      <div className="logo">
        <div className="logo-slide">
          <img src={c} alt="logo" />
          <img src={cpp} alt="logo" />
          <img src={css} alt="logo" />
          <img src={django} alt="logo" />
          <img src={html} alt="logo" />
          <img src={java} alt="logo" />
          <img src={jira} alt="logo" />
          <img src={jquery} alt="logo" />
          <img src={js} alt="logo" />
          <img src={mysql} alt="logo" />
          <img src={nodejs} alt="logo" />
          <img src={postgres} alt="logo" />
          <img src={postman} alt="logo" />
          <img src={python} alt="logo" />
          <img src={react} alt="logo" />
          <img src={selenium} alt="logo" />
          <img src={vscode} alt="logo" />
          <img src={pycharm} alt="logo" />
        </div>
      </div>

      <div className="skills">
        <div className="skill">
          <div className="exp">
            <img
              src={work}
              className="exp-icon"
              height="50px"
              alt="logo"
            />
            <h1>WORK EXPERIENCE</h1>
          </div>
          <p>
            <b>Role: </b>Associate Software Engineer
          </p>
          <div className="work">
            <p>
              <b>Company:</b> Carpediem Technology Systems Pvt. Ltd., Hyderabad
            </p>
            <span className="duration">Aug’18 – May’22</span>
          </div>
        </div>
      </div>
      <div className="btn-resume">
        <img src={res} height="50px" alt="logo" />
        <button className="button" >
          <a
            href=".sricharitha16.github.io/resume/T_SRICHARITHA.pdf"
            target="_blank"
            className="view-button"
          >
            View Resume
          </a>
        </button>
      </div>

      <div className="btn-resume">
        <img src={res} height="50px" alt="logo" />
        <button className="button">
          <a
            href="./resume/T_SRICHARITHA.pdf"
            download="Sricharitha_Tirukoti_Resume.pdf"
            className="download-button"
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Resume;
