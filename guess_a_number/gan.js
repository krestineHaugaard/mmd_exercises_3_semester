"use strict";

const computerGuess = Math.floor(Math.random() * 99) + 1;
const result = document.querySelector("#result");

document.querySelector("button").addEventListener("click", button_click);

function button_click() {
  const userGuess = parseInt(document.querySelector("#user_guess").value);
  if (userGuess === computerGuess) {
    result.textContent = "You guessed it!";
  } else if (userGuess < computerGuess) {
    result.textContent = "Too low!";
  } else {
    result.textContent = "Too high!";
  }
}
