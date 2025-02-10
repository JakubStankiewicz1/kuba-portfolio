import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./projectsPage.css";

import choinek1 from "../../assets/choinek1.png";
import choinek2 from "../../assets/choinek2.png";
import choinek3 from "../../assets/choinek3.png";
import choinek4 from "../../assets/choinek4.png";
import choinek5 from "../../assets/choinek5.png";
import choinek6 from "../../assets/choinek6.png";
import choinek7 from "../../assets/choinek7.png";
import choinek8 from "../../assets/choinek8.png";

import pwm1 from "../../assets/pwm1.png";
import pwm2 from "../../assets/pwm2.png";
import pwm3 from "../../assets/pwm3.png";
import pwm4 from "../../assets/pwm4.png";
import pwm5 from "../../assets/pwm5.png";
import pwm6 from "../../assets/pwm6.png";
import pwm7 from "../../assets/pwm7.png";
import pwm8 from "../../assets/pwm8.png";
import pwm9 from "../../assets/pwm9.png";

import Sj1 from "../../assets/Sj1.png";
import Sj2 from "../../assets/Sj2.png";
import Sj3 from "../../assets/Sj3.png";
import Sj4 from "../../assets/Sj4.png";
import Sj5 from "../../assets/Sj5.png";
import Sj6 from "../../assets/Sj6.png";
import Sj7 from "../../assets/Sj7.png";
import Sj8 from "../../assets/Sj8.png";
import Sj9 from "../../assets/Sj9.png";

import clock from "./clock.png";
import user from "./user.png";
import open from "./open.png";

const projects = [
  {
    title: "SmieciarkaJedzie",
    description:
      "A modern application for posting and sharing items to give away, facilitating efficient and secure transactions.",
    technologies: ["React", "Flask", "MySQL", "Docker"],
    status: ["Post-deployment", "Full-stack"],
    images: [Sj1, Sj2, Sj3, Sj4],
    link: "https://github.com/JakubStankiewicz1/SmieciarkaJedzieFinal",
  },
  {
    title: "Choinek",
    description:
      "A modern platform for purchasing and managing Christmas trees, integrating advanced web technologies and user-friendly interfaces.",
    technologies: ["React", "Flask", "MySQL"],
    status: ["On-going", "Full-stack"],
    images: [choinek1, choinek2, choinek3, choinek4],
    link: "https://github.com/JakubStankiewicz1/Choinek",
  },
  {
    title: "ProtectWhatMatters",
    description:
      "A comprehensive platform providing high-quality body armor and ballistic helmets to protect frontline professionals.",
    technologies: ["React"],
    status: ["On-going", "Front-end"],
    images: [pwm1, pwm2, pwm3, pwm4],
    link: "https://github.com/JakubStankiewicz1/ProtectWhatMatters",
  },
];

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

const ProjectsPage = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    projects.map(() => 0)
  );

  useEffect(() => {
    const intervals = projects.map((project, projectIndex) =>
      setInterval(() => {
        setCurrentImageIndexes((prevIndexes) =>
          prevIndexes.map((index, i) =>
            i === projectIndex
              ? (index + 1) % project.images.length
              : index
          )
        );
      }, 3000)
    );

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <motion.div
      className="page projectsPage"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="title">
        Featured <span className="highlight">Projects</span>
      </h1>
      <p className="subtitle">
        Each project is built with precision and dedication.
      </p>

      <div className="projectsContainer">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            <img
              src={project.images[currentImageIndexes[index]]}
              alt=""
              className="projectImage"
            />

            <div className="projectInfo">
              <div className="projectContent">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="techStack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="techBadge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="status">
                  <img src={clock} alt="" className="statusClockImg" />
                  {project.status.map((status, i) => (
                    <React.Fragment key={i}>
                      {i === 1 && (
                        <img src={user} alt="" className="statusUserImg" />
                      )}
                      <span className="statusBadge">{status}</span>
                    </React.Fragment>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="projectLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={open}
                    alt=""
                    className="openProjectLinkIconImg"
                  />{" "}
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;