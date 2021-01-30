"use strict";

let highscore = 0;

// Random number generator
let randomNumber = Math.ceil(Math.random() * 100);
let counter = 1;
let difference;
let score = 20;
let guessList = [];
// initial settings
document.querySelector(".guess-list").style.visibility = "hidden";
document.querySelector(".input").value = "";
document.querySelector(".guess-list").textContent = `Your Guesses are:`;
document.querySelector(".comment").textContent = "Start Guessing...";
document.querySelector(".score").textContent = "?";
document.querySelector("body").style.background =
  "linear-gradient(rgb(85, 85, 85), rgb(24, 24, 24))";
document.querySelector(".score-box").style.width = "98px";
document.querySelector(".your-score").textContent = score;
//functions
const wrongGuess = function () {
  counter++;
  score--;
  document.querySelector(".your-score").textContent = score;
  if (score < 1) {
    document.querySelector(".your-score").textContent = "0";
    document.querySelector(".comment").textContent = "💣You lose the game";
  }
};
const correctGuess = function () {
  document.querySelector("body").style.background =
    "linear-gradient(rgb(0, 240, 12), rgb(0, 119, 6)";
  document.querySelector(".score-box").style.width = "180px";
  document.querySelector(
    ".guess-list"
  ).textContent = `Your Guesses are: ${guessList}`;
  document.querySelector(".guess-list").style.visibility = "visible";
  document.querySelector(".score").textContent = randomNumber;
  document.querySelector(".your-score").textContent = score;
  if (score > highscore) {
    highscore = score;
    document.querySelector(".high-score").textContent = highscore;
  }
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = document.querySelector(".input").value;
  guessList.push(guess);
  console.log(guess);

  if (counter === 1) {
    if (guess === "") {
      document.querySelector(".comment").textContent = "⛔No Number!";
    }
    guess = Number(guess);
    if (guess === randomNumber) {
      document.querySelector(".comment").textContent = "😍That's My Number!";
      correctGuess();
    } else if (Math.abs(guess - randomNumber) <= 10) {
      document.querySelector(".comment").textContent = "👍Warm!";
      wrongGuess();
    } else if (Math.abs(guess - randomNumber) >= 10) {
      document.querySelector(".comment").textContent = "👎Cold!";
      wrongGuess();
    }
  }
  if (counter > 1) {
    if (Number(guess) === randomNumber) {
      document.querySelector(".comment").textContent = "😍That's My Number!";
      correctGuess();
    } else if (Math.abs(guess - randomNumber) < difference) {
      document.querySelector(".comment").textContent = "😇Warmer";
      wrongGuess();
    } else if (Math.abs(guess - randomNumber) >= difference) {
      document.querySelector(".comment").textContent = "😟Colder";
      wrongGuess();
    }
  }
  difference = Math.abs(guess - randomNumber);
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".input").value = "";
  // Random number generator
  randomNumber = Math.ceil(Math.random() * 100);
  counter = 1;
  score = 20;
  guessList = [];
  // initial settings
  document.querySelector(".guess-list").style.visibility = "hidden";
  document.querySelector(".guess-list").textContent = `Your Guesses are:`;
  document.querySelector(".comment").textContent = "Start Guessing...";
  document.querySelector("body").style.background =
    "linear-gradient(rgb(85, 85, 85), rgb(24, 24, 24))";
  document.querySelector(".score-box").style.width = "98px";
  document.querySelector(".your-score").textContent = score;
  document.querySelector(".score").textContent = "?";
});
