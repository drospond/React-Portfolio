import React from "react";
import "./Project.css"

const Project = ({imageSource, title, description, deployedLink}) => {
  return (
    <div className="card text-center" style={{width: "18rem"}}>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer"><img src={imageSource} className="card-img-top" alt="..."/></a>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>{description}</p>
        </div>
    </div>
  );
};

export default Project;
