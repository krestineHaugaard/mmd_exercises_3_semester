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
