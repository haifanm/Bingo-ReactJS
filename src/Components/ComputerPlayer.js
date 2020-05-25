// import React from "react";
import ComputerChoice from "./ComputerChoice";

/*  this function:
1- takes the current status of the computer grid, 
2- chooses a number to play, 
3- updates its grid and returns it    */

function chooseComputerIndex(computerGrid) {
  //chooses the number in the grid (not the index) to be played by the computer and returns it

  let specificNumber = ComputerChoice(computerGrid);
  console.log(specificNumber);
  if (specificNumber > 0) {
    return specificNumber;
  }
  var min = 0;
  var max = 24;
  var randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(
    "randomIndex" +
      randomIndex +
      " randomNumber " +
      computerGrid[randomIndex].number +
      " picked " +
      computerGrid[randomIndex].picked
  );
  while (computerGrid[randomIndex].picked) {
    console.log(
      "randomIndex" +
        randomIndex +
        " randomNumber " +
        computerGrid[randomIndex].number +
        " picked " +
        computerGrid[randomIndex].picked
    );
    randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return computerGrid[randomIndex].number;
}

export default chooseComputerIndex;
