import React, { useState } from "react";
import questions from "./questions.json";

function Game() {
  const [player, setPlayer] = useState();
  const [questiondata, setQuestion] = useState("");
  const [questiontitle, setQuestionTitle] = useState("");
  // const [showModal, setShowModal] = useState(false);
  // const [timer, setTimer] = useState(5);
  // let time = 5;
  // const Timer = () => {
  //   setInterval(function countdown() {
  //     time -= 1;
  //     setTimer(time);
  //     if (time === 0) {
  //       //close out question
  //       clearInterval(Timer);
  //       setShowModal(!showModal);
  //     }
  //   }, 1000);
  //   return clearInterval(Timer);
  // };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds((seconds) => seconds - 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="wrapper">
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

        {questions.map(({ id, question, score, title }, index) => (
          <button
            key={id}
            className="game-button"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => {
              // Timer();
              setQuestionTitle(title);
              setQuestion(question);
            }}
          >
            {score}
          </button>
        ))}
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
                {/* {timer}  */}
                {questiontitle}
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
            <div class="modal-body">{questiondata}</div>
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
    </div>
  );
}

export default Game;
