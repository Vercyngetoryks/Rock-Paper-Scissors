const figure = ["Rock", "Paper", "Scisors"];
let humanScore = 0;
let computerScore = 0;
let count = 0;

function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);
  const computer = figure[number];
  ////////////////////////////////////
  // First version
  ////////////////////////////////////
  //   if (number === 0) console.log("Rock");
  //   else if (number === 1) console.log("Paper");
  //   else console.log("Scisors");

  ////////////////////////////////////
  // Second version
  ////////////////////////////////////

  console.log(computer);
  return computer;
}

function getHumanChoice() {
  let humanChoice;
  while (true) {
    humanChoice = Number(prompt("Press: 0 - Rock, 1 - Paper, 2 - Scisors"));
    if (humanChoice >= 0 && humanChoice <= 2) {
      const human = figure[humanChoice];
      console.log(human);
      return human;
    } else {
      alert("Invalid choice, please press 0, 1, or 2.");
    }
  }
}

function playRound(human, comp) {
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

function playGame() {
  while (count < 5) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) console.log("You Win!");
  else if (humanScore < computerScore) console.log("You loose!");
  else console.log("The Game is a Draw!");
}

playGame();
