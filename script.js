function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);
  ////////////////////////////////////
  // First version
  ////////////////////////////////////
  //   if (number === 0) console.log("Rock");
  //   else if (number === 1) console.log("Paper");
  //   else console.log("Scisors");

  ////////////////////////////////////
  // Second version
  ////////////////////////////////////
  const figure = ["Rock", "Paper", "Scisors"];
  console.log(figure[number]);
}

getComputerChoice();
