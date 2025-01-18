"use strict";

function gameController() {
  const choices = ["Rock", "Paper", "Scissors"];
  let humanScore = 0;
  let computerScore = 0;
  let count = 0;

  const computerChoice = () =>
    choices[Math.floor(Math.random() * choices.length)];

  function playRound(human, comp) {
    if (human === comp) return "draw";
    else if (
      (human === "Rock" && comp === "Paper") ||
      (human === "Paper" && comp === "Scissors") ||
      (human === "Scissors" && comp === "Rock")
    ) {
      computerScore++;
      return "comp";
    } else {
      humanScore++;
      return "human";
    }

    // gameScore.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
    // count++;

    // if (humanScore === 5 || computerScore === 5) {
    //   endGame();
    // }
  }

  const getHumanScore = () => humanScore;
  const getComputerScore = () => computerScore;

  return {
    playRound,
    computerChoice,
    getHumanScore,
    getComputerScore,
  };
}

function screenController() {
  const game = gameController();
  const gameWindow = document.querySelector(".game");
  const results = document.createElement("div");
  results.classList.add("results");
  results.innerHTML = `
    <p class="human-choice"></p>
    <p class="computer-choice"></p>
    <p class="round-result"></p>
    <p class="game-score"></p>`;
  gameWindow.appendChild(results);
  const humanChoiceText = results.querySelector(".human-choice");
  const computerChoiceText = results.querySelector(".computer-choice");
  const roundResultText = results.querySelector(".round-result");
  const gameScoreText = results.querySelector(".game-score");
  function updateScreen(e) {
    const humanChoice = e.target.textContent;
    const computerChoice = game.computerChoice();
    const result = game.playRound(humanChoice, computerChoice);
    humanChoiceText.textContent = `You choose ${humanChoice}`;
    computerChoiceText.textContent = `Computer choose ${computerChoice}`;
    roundResultText.textContent =
      result === "draw"
        ? "It's a draw!"
        : result === "comp"
        ? "You loose!"
        : "You win!!!";
    gameScoreText.textContent = `You: ${game.getHumanScore()} | Computer: ${game.getComputerScore()}`;
  }

  gameWindow.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
      updateScreen(e);
    }
  });
}

screenController();

// function clickEventHandler() {
//   const buttons = document.querySelectorAll(".btn");
//   buttons.forEach((button) => button.addEventListener("click", playRound));

//   function endGame() {
//     buttons.forEach((button) => button.removeEventListener("click", playRound));
//     const finalResult = document.createElement("p");
//     results.appendChild(finalResult);
//     if (humanScore > computerScore) finalResult.textContent = "You Win!";
//     else finalResult.textContent = "You loose!";
//   }
// }
