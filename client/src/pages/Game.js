import React from "react";
import questions from "./questions.json";

// to check answer: if answer is === input then add points else if dock points...same with buttons/ a/b/c

function Game() {
  const [showModal, setShowModal] = React.useState(true);
  const [questiondata, setQuestion] = React.useState("");
  const [questiontitle, setQuestionTitle] = React.useState("");

  const [timer, setTimer] = React.useState(15);

  //a hook to show or hide the modal when it has been clicked by a player or is still available
  let time = 15;
  const Timer = () => {
    setInterval(function countdown() {
      time -= 1;
      setTimer(time);
      if (time === 0) {
        //close out question
        setShowModal(!showModal);
      }
    }, 1000);
  };
  //issue now is once timer is up it doesnt let you to select another card... do something to the modal to allow

  //questions array of objs...attributes wasclicked boolean,false by default, if true disable
  //set diasble t
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

        {questions.map(({ id, question, score, wasClicked, title }, index) => (
          <button
            key={id}
            className="game-button"
            data-toggle="modal"
            data-target="#exampleModal"
            disabled={wasClicked}
            onClick={() => {
              Timer();
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
                  {timer} {questiontitle}
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
      ) : null}
    </div>
  );
}

export default Game;
