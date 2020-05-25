function GenerateGrid() {
  var min = 1;
  var max = 25;

  //fisrt tile in the grid
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  let randomItem = { number: randomNumber, picked: false };
  let newGrid = [randomItem];

  //
  for (let i = 0; i < 24; i++) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    while (alreadyAdded(newGrid, randomNumber)) {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    randomItem = { number: randomNumber, picked: false };

    //append this new item to the grid
    newGrid.push(randomItem);
  }

  console.log(newGrid);

  return newGrid;
}

function alreadyAdded(grid, number) {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i].number === number) return true;
  }
  return false;
}
export default GenerateGrid;
