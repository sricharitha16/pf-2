import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import "./Project.css";
import artWeb from "../Assets/img/artweb.png"
import cafeWeb from "../Assets/img/cafeweb.png"
import wdM from "../Assets/img/wdm.png"
import dB from "../Assets/img/db.png"
import gitHub from "../Assets/icons/github.png"

const Project = () => {
  return (
    <div name="project" className="project">
     <div className="h1-proj"> 
     <h1>PROJECTS</h1>
     </div>
      <div className="gridproj">
        <div className="d1">
          <div className="h2-proj">
            <h2>Art Selling Website</h2>
          </div>
          <div className="pic">
            <img alt="ss" src={artWeb} />
          </div>
          <div className="matter">
            <p>
              Designed an Art Selling website where a customer can shop for a
              wide variety of items and place the order.
            </p>
            <p><b>Tech Stack:</b> HTML, CSS, JavaScript, PHP, MySQL</p> 
            <b>Testing:</b>
            <li>Manual</li>
            <li>Automation: Python with Selenium</li>
          </div>
          <br />
          <div className="accord">
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Read More</Accordion.Header>
        <Accordion.Body>
        As part of this project, I am responsible for  developing a comprehensive plan, including a Gantt chart, work breakdown structure, ER diagram, and database schema. I have designed the website's user interface using HTML, CSS, and JavaScript. This website features user signup, login/logout functionality, a homepage, and a category filter to enhance the shopping experience by making it easier for customers to find items.
<br/> <br/>
A unique addition to our website is the Artists page. This page highlights all the artists who sell their work on our platform, providing a brief introduction and their social media details, allowing customers to connect with or support the artists.
Furthermore, I am responsible for automation testing. I performed automation testing using Selenium and wrote 15 test scripts to verify key functionalities, ensuring the website operates smoothly and efficiently.
<br/> <br/>As a passionate artist myself, I have showcased my work on the website. You can check out my projects on GitHub.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion></div>
          <div className="logo">
            <a
              href="https://github.com/sricharitha16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="log"
                src={gitHub}
                height="40px"
                alt="github"
              />
            </a>
          </div>
        </div>

        <div className="d1">
          <div className="h2-proj">
            <h2>Cafe Management Website</h2>
          </div>
          <div className="pic">
            <img alt="ss" src={cafeWeb} />
          </div>
          <div className="matter">
            <p>
              Developed a cafe management website where customers can book an
              event and view cafe’s menu.
            </p>
            
            <p>
              <b>Tech Stack:</b> Django, Python, HTML, CSS, JavaScript, SQLLite 3{" "}
            </p>
           
            <b>Testing:</b>
            <li>Manual</li>
            <li>Automation: Python with Selenium</li>
          </div>
          <br />
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Read More</Accordion.Header>
        <Accordion.Body>
        My role in this project encompasses comprehensive project development, including the creation of a Gantt chart, work breakdown structure, ER diagram, and database schema. Utilizing Python and Django, I have significantly enhanced the website's functionalities. Key features I implemented include an opt-in/opt-out system for events and robust feedback functionality.
        <br/> <br/>
In addition to these features, I managed the Django admin interface, where I created and oversaw various types of events. This involved meticulous event management and ensuring seamless integration and functionality throughout the platform.
Furthermore, I am responsible for automation testing. I performed automation testing using Selenium and wrote 10 test scripts to verify key functionalities, ensuring the website operates smoothly and efficiently.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          <div className="logo">
            <a
              href="https://github.com/sricharitha16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="log"
                src={gitHub}
                height="40px"
                alt="github"
              />
            </a>
          </div>
        </div>

        <div className="d1">
          <div className="h2-proj">
            <h2>URM Application</h2>
          </div>
          <div className="pic">
            <img alt="ss" src={wdM}/>
          </div>
          <div className="matter">
            <p>
              Developed an educational institution application with 5 different
              dashboards and implemented CRUD operations. My primary responsibility was building the academic institution dashboard. The other dashboards include those for candidates, recruiters, DEI officers, and the admin panel.
            </p>
            
            <p>
             <b>Tech Stack:</b>  HTML, CSS, JavaScript, React, Node.js, Laravel{" "}
            </p>
          </div>
         
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Read More</Accordion.Header>
        <Accordion.Body>
        This project involves the development of five distinct dashboards. I am specifically responsible for creating an academic institution website that includes CRUD operations for job postings. I developed this project in multiple stages, which provided significant exposure to Laravel.

One of the most challenging aspects of this project was the integration of various interlinked features across different dashboards. However, through effective teamwork, we successfully navigated these complexities and achieved seamless integration.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          <div className="logo">
            <a
              href="https://github.com/sricharitha16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="log"
                src={gitHub}
                height="40px"
                alt="github"
              />
            </a>
          </div>
        </div>

        <div className="d1">
          <div className="h2-proj">
            <h2>React App</h2>
          </div>
          <div className="pic">
            <img alt="ss" src={dB} />
          </div>
          <div className="matter">
            <p>
              Developed a web application with integrated database
              functionality. Developed robust code to add, update, and delete
              database entries, ensuring efficient and seamless CRUD operations.
            </p>
           
            <p>
              <b>Tech Stack:</b> HTML, Python, JavaScript, React, PostgreSQL,
              Postman API
            </p>
          </div>
          <br /> 
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Read More</Accordion.Header>
        <Accordion.Body>
        This project incorporates a range of features implemented using HTML and React.js. I handled the API functionality with Postman and managed the database using PostgreSQL. Through this project, I gained substantial knowledge of Axios, a popular JavaScript library that simplifies working with REST APIs.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          <div className="logo">
            <a
              href="https://github.com/sricharitha16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="log"
                src={gitHub}
                height="40px"
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
