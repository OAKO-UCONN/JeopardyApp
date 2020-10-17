import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Buttons() {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container buttons-container">
      <Link className="btn btn-outline-primary" to="/">
        Home
      </Link>
      <Link
        to="/game"
        className="btn btn-outline-info"
      >
       Play!
      </Link>
      <Link
        to="/highscores"
        className="btn btn-outline-success"
      >
        Scores
      </Link>
      <Link
        to="/about"
        className="btn btn-outline-danger"
      >
        About
      </Link>
    </div>
    </div>
  );
}

export default Buttons;
