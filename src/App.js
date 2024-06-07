import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

import Nav from './component/Navbar';
import AboutMe from './component/About';
import Project from './component/Project';
import Resume from './component/Resume';
import Home from './component/Home';
import Foot from './component/Foot';


function App() {
  return (
    <>
    <Nav />
    <Home />
    <AboutMe />
    <Project />
    <Resume />
    <Foot />
    {/* <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />}/> 
          <Route path="/about" element={<AboutMe />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
         {/* <Route path="/" exact component={() => <h1>Home Page</h1>} /> 
        </Routes>
      </div>
    </Router> */}
    </>
  );
}

export default App;