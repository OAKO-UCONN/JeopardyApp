import React from "react";
//add class, hide class, style it in a way that cannot be clicked anymore,
// disabled class

function Game() {
  return (
    <div>
      <title>Jeopardy</title>

      <div className="giveup">
        <header>JEOPARDY!</header>
      </div>
      <div className="btn-group">
        <div>
          <button>Cat1</button>
        </div>
        <div>
          <button>Cat2</button>
        </div>
        <div>
          <button>Cat3</button>
        </div>
        <div>
          <button>Cat4</button>
        </div>
      </div>
      <div className="btn-group">
        <button id="demo" onclick="myFunction()">
          1
        </button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <div className="btn-group">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <div className="btn-group">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <div className="btn-group">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>

      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Player</h5>
            <p className="card-text">Score:</p>
            <button className="btn">Give Up</button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Player</h5>
            <p className="card-text">Score:</p>
            <button className="btn">Give Up</button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Player</h5>
            <p className="card-text">Score:</p>
            <button className="btn">Give Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
