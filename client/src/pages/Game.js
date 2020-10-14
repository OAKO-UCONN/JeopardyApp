import React from "react";

function Game() {
  return (
    <div>
      <title>Jeopardy</title>

      <div class="giveup">
        <header>JEOPARDY!</header>
      </div>
      <div class="btn-group">
        <button>Cat1</button>
        <button>Cat2</button>
        <button>Cat3</button>
        <button>Cat4</button>
      </div>

      <div class="btn-group">
        <button id="demo" onclick="myFunction()"></button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <div class="btn-group">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <div class="btn-group">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <div class="btn-group">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>
            <p class="card-text">Score:</p>
            <button class="btn">Give Up</button>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>
            <p class="card-text">Score:</p>
            <button class="btn">Give Up</button>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>
            <p class="card-text">Score:</p>
            <button class="btn">Give Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
