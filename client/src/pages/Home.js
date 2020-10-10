import React from "react";
import Button from "../components/Button";
import { BrowserRouter } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container">
        <h1 className="text-uppercase">Are you ready to play Jeopardy?</h1>
        <BrowserRouter>
          <Button />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Home;
