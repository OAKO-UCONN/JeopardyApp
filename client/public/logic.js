// Important!! This file intended to give starting point/ideas only. Feel free to delete,change or ignore the code.

// TODO: variables to keep track of quiz state, variables to reference DOM elements
// var  timerEl
// var  feedbackEl

//
//The onclick property is all lower-case, and accepts a function, not a string.
//document.getElementById("test").onclick = foo2;
/*
document.getElementById("q1-b1").onclick = function(){
  alert("Question 1 Button 1")
}
*/

/*
Yes, as the others have said, you can use var at global scope (outside of all functions) to declare a global variable:

<script>
var yourGlobalVariable;
function foo() {
    // ...
}
</script>
Alternately, you can assign to a property on window:

<script>
function foo() {
    window.yourGlobalVariable = ...;
}
</script>

//https://www.youtube.com/watch?v=XmaEYvyKf5o

/** Add More Block */
function addMoreBlock() {

  // SINGLE LINE COMMENT
  // let counter = 100;

  console.log("Hello I am there!!!");
  alert("Hello I am there!!!");

}
/** Delete Block */
function deleteBlock() {

}

/*
*/
//OLD FUNCTIONS
/*
function logicjs() {
  alert("logic.js");
};

//When var q1 is = 0 answer is incorrect.
//When var q1 is = 1 answer is correct.
var q1 = 0;
function q1b1() {
document.getElementById("#q1-b1").onclick = function(){
  alert("Question 1 Button 1");
  var q1 = 1;
  window.q1 = 1;
}
}
document.getElementById("#q1-b2").onclick = function(){
  alert("Question 1 Button 2");
  var q1 = 0;
  window.q1 = 0;
}
document.getElementById("#q1-b3").onclick = function(){
  alert("Question 1 Button 3");
  var q1 = 0;
  window.q1 = 0;
}
document.getElementById("#q1-b4").onclick = function(){
  alert("Question 1 Button 4");
  var q1 = 0;
  window.q1 = 0;
}
if (q1 = 1) {
  alert("Correct!")
}
//1
//2
//Question 2
var q1 = 0;
document.getElementById("q2-b1").onclick = function(){
  alert("Question 2 Button 1");
  var q1 = 0;
  window.q1 = 0;
}
document.getElementById("q2-b2").onclick = function(){
  alert("Question 2 Button 2");
  var q2 = 1;
  window.q2 = 1;
}
document.getElementById("q2-b3").onclick = function(){
  alert("Question 2 Button 3");
  var q2 = 0;
  window.q2 = 0;
}
document.getElementById("q2-b4").onclick = function(){
  alert("Question 2 Button 4");
  var q2 = 0;
  window.q2 = 0;
}
if (q2 = 1) {
  alert("Correct!");
}
//2
//3
//Question 3
var q1 = 0;
document.getElementById("q1-b1").onclick = function(){
  alert("Question 1 Button 1");
  var q1 = 1;
  window.q1 = 1;
}
document.getElementById("q1-b2").onclick = function(){
  alert("Question 1 Button 2");
  var q1 = 0;
  window.q1 = 0;
}
document.getElementById("q1-b3").onclick = function(){
  alert("Question 1 Button 3");
  var q1 = 0;
  window.q1 = 0;
}
document.getElementById("q1-b4").onclick = function(){
  alert("Question 1 Button 4");
  var q1 = 0;
  window.q1 = 0;
}
if (q3 = 1) {
  alert("Correct!");
}
//3
//4
//Question 4
var q1 = 0;
document.getElementById("q1-b1").onclick = function(){
  alert("Question 1 Button 1");
  var q1 = 1;
  window.q1 = 1;
}
document.getElementById("q1-b2").onclick = function(){
  alert("Question 1 Button 2");
  var q1 = 0;
  window.q1 = 0;
}
document.getElementById("q1-b3").onclick = function(){
  alert("Question 1 Button 3");
  var q1 = 0;
  window.q1 = 0;
}
document.getElementById("q1-b4").onclick = function(){
  alert("Question 1 Button 4");
  var q1 = 0;
  window.q1 = 0;
}
if (q4 = 1) {
  alert("Correct!");
}
//4
//--
*/

//https://www.youtube.com/watch?v=XmaEYvyKf5o
//External JavaScript HTML Fucntion Linking

function startQuiz() {
  // start timer ticks every 1 second
  timerId = setInterval(clockTick, 1000);

  // show starting time

  // function that get a question for you
  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // TODO: update title with current question
  // clear out any old question choices
  // display on the page Create/append funciton could be helpful
}

// function that keep track of time
function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    //End the quiz
    endQuiz();
  }
}

function questionClick() {
  // check if user guessed wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    // penalize time
    time -= 5;

    if (time < 0) {
      time = 0;
    }

    feedbackEl.textContent = "Wrong!";
  } else {
    feedbackEl.textContent = "Correct!";
  }

  // display new time on page
  timerEl.textContent = time;

  // move to next question
  currentQuestionIndex++;

  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}

function endQuiz() {
  // stop timer
  clearInterval(timerId);
  // TODO:
  // show end screen
  
  // show final score
  // hide questions section
}

