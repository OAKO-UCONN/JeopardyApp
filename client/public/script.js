//Points
var points = 0;

var timer = 10;

var timerID;

function countdown() {
  timer--;
  document.getElementById("timer").innerHTML = timer;
  if(timer === 0) {
    clearInterval(timerID);
    //Manipulate the DOM to tell the user they ran out of time.
    setTimeout(myFunction, 3000);
  }
}

timerID = setInterval(countdown, 1000);

// Button listener for answers
  //When hit reset our timer to 10
  //Check if correct and increase points or wrong and do nothing

/*
var interval = setInterval(function() { 
   if (time <= 3) { 
      alert(time);
      time++
      console.log(points)
      document.getElementById("score").innerHTML = "Score:" + " " + points + " " + "Points"
   }
   else { 
      clearInterval(interval);
      console.log(points)
      document.getElementById("score").innerHTML = "Score:" + " " + points + " " + "Points"
   }
}, 1000);
*/
document.getElementById("score").innerHTML = "Score:" + " " + points + " " + "Points";


//End Score Script



//When var q1-4 is = 0 answer is incorrect.
//When var q1-4 is = 1 answer is correct.
var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
//0   --   /      /      /       /        /       /        /        /
//1
var a1 = 0;
if (a1 === 0) {
  function q1b1(){
    alert("Correct!")
    console.log("HELLO THERE");
    points++;
    document.getElementById("score").innerHTML = "Score:" + " " + points + " " + "Points";
    a1 = 1;
  }
} else if (a1 === 1) {
  alert("Move on to the next question.")
}
  

function q1b2(){
  alert("Incorrect")
}
function q1b3(){
  alert("Incorrect")

}
function q1b4(){

 
}

//1
//2
//Question 2
var q2 = 0;
function q2b1(){
  var q2 =1;
}
function q2b2(){

}
function q2b3(){
  
}
function q2b4(){
 
}

//2
//3
//Question 3
var q3 = 0;
function q3b1(){

}
function q3b2(){
 
}
function q3b3(){
 var q3 = 1;
}
function q3b4(){

}


//3
//4
//Question 4
var q4 = 0;
function q4b4(){

}
function q4b2(){

}
function q4b3(){

}
function q4b4(){
  var q4 = 1;
}

var points = q1 + q2 + q3 + q4

alert("Points")
console.log(points)

