import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

//Buttons This are the Buttons that show up on all pages.
function Buttons() {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container buttons-container">

        {/*Home Button*/}
        <Link className="btn btn-outline-primary" to="/">Home</Link>

        {/*Play Button*/}
        <Link to="/game" className="btn btn-outline-info">Play!</Link>
      
        {/*Scores Button*/}
        <Link to="/highscores" className="btn btn-outline-success">Scores</Link>
      
        {/*About Button*/}
        <Link to="/about"className="btn btn-outline-danger">About</Link>

      </div>{/*BootStrap Container ENDS*/}
    </div>//BootStrap jumbotron div ENDS
  );
}

export default Buttons;
