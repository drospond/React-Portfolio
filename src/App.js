import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import SigninContainer from "./Containers/SigninContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <SigninContainer />
      </div>
    </Router>
  );
}

export default App;
