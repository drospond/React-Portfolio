import React, { Component } from "react";
import Project from "../Components/Project";

class Portfolio extends Component {
  render() {
    return (
      <div class="container white-bg border">
        <div class="row">
          <div class="col">
            <h3 class="border-bottom">Portfolio</h3>
          </div>
        </div>
        <div className="row">
          <Project title="Spring Breakers" />
          <Project title="Weather Dashboard"/>
          <div className="row">
            <Project title="Eat Da Burger" />
            <Project title="Code Quiz"/>
          </div>
          <div className="row">
            <Project title="Note Taker" />
            <Project title="Steam Games Compare"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
