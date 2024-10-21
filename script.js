const figure = ["Rock", "Paper", "Scisors"];
const buttons = document.querySelectorAll(".btn");
const gameWindow = document.querySelector(".game");
const results = document.createElement("div");
results.classList.add("results");
const humanChoice = document.createElement("p");
const computerChoice = document.createElement("p");
const roundResult = document.createElement("p");
const gameScore = document.createElement("p");
results.appendChild(humanChoice);
results.appendChild(computerChoice);
results.appendChild(roundResult);
results.appendChild(gameScore);
gameWindow.appendChild(results);
let human = "";
let comp = "";
let humanScore = 0;
let computerScore = 0;
let count = 0;

function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);
  comp = figure[number];
}

function endGame() {
  buttons.forEach((button) => button.removeEventListener("click", playRound));
  const finalResult = document.createElement("p");
  results.appendChild(finalResult);
  if (humanScore > computerScore) finalResult.textContent = "You Win!";
  else finalResult.textContent = "You loose!";
}

function playRound() {
  human = this.textContent;
  getComputerChoice();
  humanChoice.textContent = `You choose: ${human}`;
  computerChoice.textContent = `Computer choose: ${comp}`;

  if (human === comp) roundResult.textContent = "Draw";
  else if (
    (human === "Rock" && comp === "Paper") ||
    (human === "Paper" && comp === "Scisors") ||
    (human === "Scisors" && comp === "Rock")
  ) {
    roundResult.textContent = `You lose! ${comp} beats ${human}`;
    computerScore++;
  } else {
    roundResult.textContent = `You win! ${human} beats ${comp}`;
    humanScore++;
  }
  gameScore.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
  count++;

  if (humanScore === 5 || computerScore === 5) {
    endGame();
  }
}

buttons.forEach((button) => button.addEventListener("click", playRound));
