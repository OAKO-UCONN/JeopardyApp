import React from "react";
import questions from "./questions.json";

function Game() {
  const [showModal, setShowModal] = React.useState(false);
  let time = 15;
  const Timer = () => {
    setInterval(function countdown() {
      time -= 1;
      if (time === 0) {
        //close out question
        setShowModal(false);
      }
    }, 1000);
  };

  //questions array of objs...attributes wasclicked boolean,false by default, if true disable
  //set diasble t
  return (
    <div className="wrapper">
      {/* {questions.map(({ id, question, score, wasClicked }, index) => (
        <div key={id}>
          <button
            disabled={wasClicked}
            onClick={() => {
              questions[index].wasClicked = true;
            }}
          >
            {score}
          </button>
        </div>
      ))} */}
      <div className="game-wrapper">
        <button className="button">Category</button>
        <button className="button" data-toggle="modal">
          Category
        </button>
        <button className="button" data-toggle="modal">
          Category
        </button>
        <button className="button" data-toggle="modal">
          Category
        </button>

        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          100
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          100
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          100
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          100
        </button>

        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          300
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          300
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          300
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          300
        </button>

        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          600
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          600
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          600
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          600
        </button>

        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          1000
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          1000
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          1000
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          1000
        </button>
      </div>

      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>
            <p class="card-text">Score:</p>
            <button type="button" className="btn btn-danger">
              Give Up
            </button>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>
            <p class="card-text">Score:</p>
            <button type="button" className="btn btn-danger">
              Give Up
            </button>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>
            <p class="card-text">Score:</p>
            <button type="button" className="btn btn-danger">
              Give Up
            </button>
          </div>
        </div>
      </div>

      {showModal ? (
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Question Title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">Question Data.</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Game;
