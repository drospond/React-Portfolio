import React from "react";
import "./ProjectPage.css";

const ProjectPage = ({project}) => {
  return (
    <div className="container project-page">
      <div className="row">
        <div className="col-sm">
          <img src={project.img} alt="project" className="img-thumbnail" />
        </div>
        <div className="col-sm text-center">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <h4>Technologies:</h4>
          <ul className="tech-list">
            {project.tech.map((tech) => {
              return <li className="tech">{tech}</li>;
            })}
          </ul>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">Github</button>
          </a>
          <a href={project.deployed} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">Deployed App</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
