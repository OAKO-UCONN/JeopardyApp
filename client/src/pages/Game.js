import React from "react";



function Game() {
  var player1 = undefined;
  var player2 = undefined;
  var player3 = undefined;
  return (
    <div className="wrapper">
      <div className="game-wrapper">
        <button className='game-title' >Category 1</button>
        <button className='game-title' >Category 2</button>
        <button className='game-title' >Category 3</button>
        <button className='game-title' >Category 4</button>


        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >1</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >2</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >3</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >4</button>

        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >1</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >2</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >3</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >4</button>

        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >1</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >2</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >3</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >4</button>

        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >1</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >2</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >3</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >4</button>
     </div>

     <section className='jumbotron'>
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>
            <p class="card-text">Score:</p>
            <button type="button" className="btn btn-danger" >Give Up</button>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>
            <p class="card-text">Score:</p>
            <button type="button" className="btn btn-danger" >Give Up</button>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>
            <p class="card-text">Score:</p>
            <button type="button" className="btn btn-danger" >Give Up</button>
          </div>
        </div>
      </div>
      </section>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Question Title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Question Data.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

{/*======================= Score-Board ======================*/}
      {/*A Buttons can turn green when answer correct.*/}
      {/*A Button can turn red when answer incorrect.*/}
      {/*We Can have 1 row per player. 1 colum per question*/}
      {/*  {player1} Inside it needs to be declared.
      If its not declared it will give a failed to compile error
      so for now its commented out.*/}
    

      {/*--------------------PLAYER 1 Scoreboard---------------*/}
      <div class="playername">
      <header>Player 1: {player1} </header>
      </div>

      {/*Category 1*/}
      <div class="btn-group">
        <button class="catagory">Cat1</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 2*/}
      <div class="btn-group">  
        <button class="catagory">Cat2</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 3*/}
      <div class="btn-group">
        <button class="catagory">Cat3</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 4*/}
      <div class="btn-group">
        <button class="catagory">Cat4</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 5*/}
      <div class="btn-group">
        <button class="catagory">Cat5</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>
    {/*Player1-ScoreBoard-End*/}

{/*--------------------PLAYER 2 Scoreboard---------------*/}
<div class="playername">
      <header>Player 2: {player2} </header>
      </div>

      {/*Category 1*/}
      <div class="btn-group">
        <button class="catagory">Cat1</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 2*/}
      <div class="btn-group">  
        <button class="catagory">Cat2</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 3*/}
      <div class="btn-group">
        <button class="catagory">Cat3</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 4*/}
      <div class="btn-group">
        <button class="catagory">Cat4</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 5*/}
      <div class="btn-group">
        <button class="catagory">Cat5</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>
    {/*Player2-ScoreBoard-End*/}

    {/*--------------------PLAYER 3 Scoreboard---------------*/}
    <div class="playername">
      <header>Player 3: {player3} </header>
      </div>

      {/*Category 1*/}
      <div class="btn-group">
        <button class="catagory">Cat1</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 2*/}
      <div class="btn-group">  
        <button class="catagory">Cat2</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 3*/}
      <div class="btn-group">
        <button class="catagory">Cat3</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 4*/}
      <div class="btn-group">
        <button class="catagory">Cat4</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 5*/}
      <div class="btn-group">
        <button class="catagory">Cat5</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>
    {/*Player3-ScoreBoard-End*/}

{/*<button id="demo" onclick="myFunction()"></button>*/}
{/*======================= Score-Board END ======================*/}

    </div>//Do not delete this div!
  /*Old Player Score Tracker END*/

  );
}

export default Game;
