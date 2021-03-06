import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Containers/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./Containers/Contact";
import Portfolio from "./Containers/Portfolio";
// import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <About />
        <Portfolio />
        <Contact />
      </Route>
    </Router>
  );
}
//TODO make 404 page switch and path to *

export default App;
