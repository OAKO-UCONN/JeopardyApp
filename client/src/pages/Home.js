import React from "react";
import Button from "../components/Button";
import { BrowserRouter as Router } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container">
        <header>
          <h1 className="text-uppercase">Are you ready to play Jeopardy?</h1>
        </header>
        <Router>
          <Button />
        </Router>
      </div>
    </div>
  );
}

export default Home;
