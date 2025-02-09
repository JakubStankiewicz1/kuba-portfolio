import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './mainPage.css';
import { TypeAnimation } from 'react-type-animation';
import locationImage from "./location-dot-solid.svg";
import { useEffect, useState } from 'react';

import typescript from "./typescript.png";
import javaScript from "./js.png";
import react from "./physics.png";
import python from "./python.png";
import tailwindCss from "./Tailwind.png";
import html from "./HTML5.png";
import css from "./CSS3.png";
import figma from "./Figma.png";
import mySql from "./MySQL.png";
import flask from "./Flask.png";
import bash from "./Bash.png";
import postman from "./Postman.png";
import vs from "./Visual Studio Code (VS Code).png";
import git from "./Git.png";
import github from "./GitHub.png";
import vite from "./Vite.js.png";

const pageVariants = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '100%', opacity: 0 },
};

const technologies = [
  { img: typescript, text: "TypeScript" },
  { img: javaScript, text: "JavaScript" },
  { img: react, text: "React" },
  { img: python, text: "Python" },
  { img: tailwindCss, text: "Tailwind CSS" },
  { img: html, text: "HTML5" },
  { img: css, text: "CSS3" },
  { img: figma, text: "Figma" },
  { img: mySql, text: "MySQL" },
  { img: flask, text: "Flask" },
  { img: bash, text: "Bash" },
  { img: postman, text: "Postman" },
  { img: vs, text: "Visual Studio Code" },
  { img: git, text: "Git" },
  { img: github, text: "GitHub" },
  { img: vite, text: "Vite" },
];

const MainPage = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [location, setLocation] = useState('Fetching location...');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
        },
        () => setLocation('Location unavailable')
      );
    }
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="page mainPage"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="topRightCorner">
        <p>Time: {time}</p>
        {/* <p>{location}</p> */}
      </div>
      <h1 className="mainPageHText">
        Hello, I am <span className="blinkingCursor">|</span>
      </h1>
      <p className="rainbowText">Jakub Stankiewicz</p>
      <TypeAnimation
        sequence={['Web Developer', 2000, 'Cybersecurity Student', 2000]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
      <div className="mainPageLocationContainer">
        <img src={locationImage} alt="Location" className="mainPageLocationContainerImage" />
        <p className="mainPageLocationContainerText">Wrocław</p>
      </div>
      <div className="mainPageButtonsContainer">
        <button className="mainPageButtonsContainerBtn">
          <NavLink to="/projects">Projects</NavLink>
        </button>
        <button className="mainPageButtonsContainerBtn">
          <NavLink to="/contact">Contact</NavLink>
        </button>
      </div>
      <div className="mainPageTechnologiesAndTools">
        <div className="mainPageTechnologiesAndToolsHeader">
          <p className="mainPageTechnologiesAndToolsHeaderText">Technologies and Tools I use</p>
        </div>
        <div className="mainPageTechnologiesAndTools">
          {technologies.map((tech, index) => (
            <div key={index} className="mainPageTechnologiesAndToolsContainer">
              <img src={tech.img} alt={tech.text} className="mainPageTechnologiesAndToolsContainerImage" />
              <p className="mainPageTechnologiesAndToolsContainerText">{tech.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;
