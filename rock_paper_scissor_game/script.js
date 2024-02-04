// min version af spillet som stadig mangler en slutning

window.addEventListener("load", startGame);

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const myArray = ["rock", "paper", "scissors"];
const youLose = document.querySelector("#lose");
const youWin = document.querySelector("#win");
const itsATie = document.querySelector("#draw");

// start game

function startGame() {
  rockBtn.addEventListener("click", () => {
    player1.classList.add("shake");
    player2.classList.add("shake");
    player1.addEventListener("animationend", playerChoiceRock);
  });
  paperBtn.addEventListener("click", () => {
    player1.classList.add("shake");
    player2.classList.add("shake");
    player1.addEventListener("animationend", playerChoicePaper);
  });
  scissorsBtn.addEventListener("click", () => {
    player1.classList.add("shake");
    player2.classList.add("shake");
    player1.addEventListener("animationend", playerChoiceScissor);
  });
}

function playerChoiceRock() {
  player1.classList.remove("shake");
  player1.classList.add("rock");
  player1.classList.remove("scissors");
  player1.classList.remove("paper");
  player2.addEventListener("animationend", showResult);
}

function playerChoicePaper() {
  player1.classList.remove("shake");
  player1.classList.add("paper");
  player1.classList.remove("rock");
  player1.classList.remove("scissors");
  player2.addEventListener("animationend", showResult);
}

function playerChoiceScissor() {
  player1.classList.remove("shake");
  player1.classList.add("scissors");
  player1.classList.remove("rock");
  player1.classList.remove("paper");
  player2.addEventListener("animationend", showResult);
}

// result

function showResult() {
  player2.classList.remove("shake");
  let computerChoice = generateRandomChoice();
  if (computerChoice === "rock") {
    player2.classList.add("rock");
    player2.classList.remove("paper");
    player2.classList.remove("scissors");
    endGame();
  } else if (computerChoice === "paper") {
    player2.classList.add("paper");
    player2.classList.remove("rock");
    player2.classList.remove("scissors");
    endGame();
  } else {
    player2.classList.add("scissors");
    player2.classList.remove("rock");
    player2.classList.remove("paper");
    endGame();
  }
}

// player 2

function generateRandomChoice() {
  let randomChoice = myArray[Math.floor(Math.random() * myArray.length)];
  return randomChoice;
}

// end game
function endGame() {
  if (player1 === "rock") {
    if (player2 == "scissors") {
      youWin.classList.remove("hidden");
    } else if (player2 == "rock") {
      itsATie.classList.remove("hidden");
    } else {
      youLose.classList.remove("hidden");
    }
  }
}

// Klaus version fra klassen

// // global variables
// let userChoice;
// let computerChoice;
// let result;

// // making the rock paper and scissors buttons work
// document.querySelector(".rock").addEventListener("click", klikRock);
// document.querySelector(".paper").addEventListener("click", klikPaper);
// document.querySelector(".scissors").addEventListener("click", klikScissors);
// // setting user choice based on which button is clicked

// function klikRock() {
//   userChoice = "rock";
//   makeComputerChoice();
// }

// function klikPaper() {
//   userChoice = "paper";
//   makeComputerChoice();
// }

// function klikScissors() {
//   userChoice = "scissors";
//   makeComputerChoice();
// }

// // Making the random computer choice
// function makeComputerChoice() {
//   const randoNum = Math.floor(Math.random() * 3);
//   if (randoNum === 0) {
//     computerChoice = "rock";
//   } else if (randoNum === 1) {
//     computerChoice = "paper";
//   } else {
//     computerChoice = "scissors";
//   }
//   console.log("compChoice", userChoice);
//   console.log("RANDO", randoNum);
//   console.log("computerChoice", computerChoice);

//   determineWinner();
// }

// // finding out who wins
// function determineWinner() {
//   // removing text from last game
//   resetResultText();
//   if (userChoice === computerChoice) {
//     // if the players played the same hand
//     result = "draw";
//   } else if ((userChoice === "rock" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "rock")) {
//     // all the instances in which the computer wins
//     result = "lose";
//   } else {
//     // all other instances left: the human player wins
//     result = "win";
//   }

//   starHandtAnimations();
// }

// function starHandtAnimations() {
//   // adding animation end eventlistener
//   document.querySelector("#player1").addEventListener("animationend", handAnimationsEnd);
//   // get those hands shaking
//   document.querySelector("#player1").classList.add("shake");
//   document.querySelector("#player2").classList.add("shake");
// }

// function handAnimationsEnd() {
//   // removing all added shake classes so other classes can be added
//   resetHands();

//   console.log("Animation ended!");
//   // showing the correct hand signs
//   if (userChoice === "rock") {
//     document.querySelector("#player1").classList.add("rock");
//   } else if (userChoice === "paper") {
//     document.querySelector("#player1").classList.add("paper");
//   } else {
//     document.querySelector("#player1").classList.add("scissors");
//   }
//   if (computerChoice === "rock") {
//     document.querySelector("#player2").classList.add("rock");
//   } else if (computerChoice === "paper") {
//     document.querySelector("#player2").classList.add("paper");
//   } else {
//     document.querySelector("#player2").classList.add("scissors");
//   }
//   showWinnerScreen();
// }
// function showWinnerScreen() {
//   // show correct winnerscreen
//   if (result === "win") {
//     document.querySelector("#win").classList.remove("hidden");
//   } else if (result === "lose") {
//     document.querySelector("#lose").classList.remove("hidden");
//   } else {
//     document.querySelector("#draw").classList.remove("hidden");
//   }
// }

// function resetHands() {
//   document.querySelector("#player1").classList.remove("shake", "rock", "paper", "scissors");
//   document.querySelector("#player2").classList.remove("shake", "rock", "paper", "scissors");
// }

// function resetResultText() {
//   document.querySelector("#win").classList.add("hidden");
//   document.querySelector("#lose").classList.add("hidden");
//   document.querySelector("#draw").classList.add("hidden");
// }
