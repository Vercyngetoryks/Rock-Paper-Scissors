"use strict";

function gameController() {
  const choices = ["Rock", "Paper", "Scissors"];

  let humanScore = 0;
  let computerScore = 0;
  const checkWin = () => humanScore === 5 || computerScore === 5;

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
  }

  const getHumanScore = () => humanScore;
  const getComputerScore = () => computerScore;

  return {
    playRound,
    computerChoice,
    getHumanScore,
    getComputerScore,
    checkWin,
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
    humanChoiceText.textContent = `You choose: ${humanChoice}`;
    computerChoiceText.textContent = `Computer choose: ${computerChoice}`;
    roundResultText.textContent =
      result === "draw"
        ? "It's a draw!"
        : result === "comp"
        ? "You loose!"
        : "You win!!!";
    gameScoreText.textContent = `Score: You: ${game.getHumanScore()} | Computer: ${game.getComputerScore()}`;
  }

  function handleClick(e) {
    if (e.target.classList.contains("btn")) {
      updateScreen(e);
      if (game.checkWin()) {
        gameWindow.removeEventListener("click", handleClick);
        const finalResult = document.createElement("p");
        const newGame = document.createElement("button");
        newGame.classList.add("new-game");
        results.appendChild(finalResult);
        results.appendChild(newGame);
        finalResult.textContent =
          game.getHumanScore() > game.getComputerScore()
            ? "You win!!!"
            : "You loose!";
        newGame.textContent = "New game";
        newGame.addEventListener("click", () => {
          location.reload();
        });
      }
    }
  }

  gameWindow.addEventListener("click", handleClick);
}

screenController();
