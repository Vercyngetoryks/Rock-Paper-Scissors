const figure = ["Rock", "Paper", "Scisors"];
const buttons = document.querySelectorAll(".btn");
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
  if (human === comp) console.log("Draw");
  else if (
    (human === "Rock" && comp === "Paper") ||
    (human === "Paper" && comp === "Scisors") ||
    (human === "Scisors" && comp === "Rock")
  ) {
    console.log(`You lose! ${comp} beats ${human}`);
    computerScore++;
  } else {
    console.log(`You win! ${human} beats ${comp}`);
    humanScore++;
  }
  console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
  count++;
}

buttons.forEach((button) => button.addEventListener("click", playRound));
// function playGame() {
//   while (count < 5) {
//     playRound(getHumanChoice(), getComputerChoice());
//   }
//   if (humanScore > computerScore) console.log("You Win!");
//   else if (humanScore < computerScore) console.log("You loose!");
//   else console.log("The Game is a Draw!");
// }

// playGame();
