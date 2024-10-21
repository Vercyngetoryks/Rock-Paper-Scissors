const figure = ["Rock", "Paper", "Scisors"];
const buttons = document.querySelectorAll(".btn");
const gameWindow = document.querySelector(".game");
let human = "";
let comp = "";
let humanScore = 0;
let computerScore = 0;
let count = 0;

function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);
  comp = figure[number];
  console.log(`Computer choose: ${comp}`);
}

function playRound() {
  human = this.textContent;
  console.log(`You choose: ${human}`);
  getComputerChoice();
  humanChoice.textContent = `You choose: ${human}`;
  computerChoice.textContent = `Computer choose: ${comp}`;
  if (human === comp) console.log("Draw");
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
}

function updateChoices() {
  humanChoice.textContent = `You choose: ${human}`;
  computerChoice.textContent = `Computer choose: ${comp}`;
}

buttons.forEach((button) => button.addEventListener("click", playRound));

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

// function playGame() {
//   while (count < 5) {
//     playRound(getHumanChoice(), getComputerChoice());
//   }
//   if (humanScore > computerScore) console.log("You Win!");
//   else if (humanScore < computerScore) console.log("You loose!");
//   else console.log("The Game is a Draw!");
// }

// playGame();
