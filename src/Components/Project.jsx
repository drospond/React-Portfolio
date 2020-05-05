import React from "react";
import CodeQuiz from "../images/CodeQuiz.PNG"

const Project = (props) => {
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
    <div class="card text-center" style={{width: "18rem"}}>
        <img src={CodeQuiz} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <a href="/portfolio">Repository</a>
        </div>
    </div>
  );
};

export default Project;
