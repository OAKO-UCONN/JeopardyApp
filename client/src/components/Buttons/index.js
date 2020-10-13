import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Buttons() {
  return (
    <div>
      <Link className="btn" to="/">Home</Link>
       <Link to="/game" className={window.location.pathname === "/game" ? "nav-link active btn" : "nav-link btn"}>Play</Link>
       <Link to="/highscores" className={window.location.pathname === "/highscores" ? "nav-link active btn" : "nav-link btn"}>Highscores</Link>
       <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active btn" : "nav-link btn"}>About</Link>
    </div>
  );
}

export default Buttons;