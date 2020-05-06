import React from "react";
import "./Project.css"

const Project = ({imageSource, title, repoLink,deployedLink}) => {
  return (
    // <div class="col-md-6 card">
    //   <a
    //     href="https://d3viii.github.io/springBreakers/"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     <img
    //       class="mx-auto d-block portfolio-img"
    //       src="assets/SpringBreakers.PNG"
    //       alt="SpringBreakers Screen Shot"
    //     />
    //     <h4 class="text-overlay">Travel App</h4>
    //   </a>
    //   <a href="https://github.com/D3viii/springBreakers" target="_blank" rel="noopener noreferrer">
    //     <p>Repository Link</p>
    //   </a>
    // </div>
    <div className="card text-center" style={{width: "18rem"}}>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer"><img src={imageSource} className="card-img-top" alt="..."/></a>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">Repository</a>
        </div>
    </div>
  );
};

export default Project;
