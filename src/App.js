import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Containers/About";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Contact from "./Containers/Contact";
import Portfolio from "./Containers/Portfolio";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
    </Router>
  );
}

export default App;
