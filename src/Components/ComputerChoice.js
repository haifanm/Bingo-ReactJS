function ComputerChoice(computerGrid) {
  //vertical #1
  let x = fourOne(computerGrid, 0, 5, 10, 15, 20);
  if (x >= 0) return x;

  //vertical #2
  x = fourOne(computerGrid, 1, 6, 11, 16, 21);
  if (x >= 0) return x;

  //vertical #3
  x = fourOne(computerGrid, 2, 7, 12, 17, 22);
  if (x >= 0) return x;

  //vertical #4
  x = fourOne(computerGrid, 3, 8, 13, 18, 23);
  if (x >= 0) return x;

  //vertical #5
  x = fourOne(computerGrid, 4, 9, 14, 19, 24);
  if (x >= 0) return x;

  //horizontal #1
  x = fourOne(computerGrid, 0, 1, 2, 3, 4);
  if (x >= 0) return x;

  //horizontal #2
  x = fourOne(computerGrid, 5, 6, 7, 8, 9);
  if (x >= 0) return x;

  //horizontal #3
  x = fourOne(computerGrid, 10, 11, 12, 13, 14);
  if (x >= 0) return x;

  //horizontal #4
  x = fourOne(computerGrid, 15, 16, 17, 18, 19);
  if (x >= 0) return x;

  //horizontal #5
  x = fourOne(computerGrid, 20, 21, 22, 23, 24);
  if (x >= 0) return x;

  //vertical #1
  x = threeTwo(computerGrid, 0, 5, 10, 15, 20);
  if (x >= 0) return x;

  //vertical #2
  x = threeTwo(computerGrid, 1, 6, 11, 16, 21);
  if (x >= 0) return x;

  //vertical #3
  x = threeTwo(computerGrid, 2, 7, 12, 17, 22);
  if (x >= 0) return x;

  //vertical #4
  x = threeTwo(computerGrid, 3, 8, 13, 18, 23);
  if (x >= 0) return x;

  //vertical #5
  x = threeTwo(computerGrid, 4, 9, 14, 19, 24);
  if (x >= 0) return x;

  //horizontal #1
  x = threeTwo(computerGrid, 0, 1, 2, 3, 4);
  if (x >= 0) return x;

  //horizontal #2
  x = threeTwo(computerGrid, 5, 6, 7, 8, 9);
  if (x >= 0) return x;

  //horizontal #3
  x = threeTwo(computerGrid, 10, 11, 12, 13, 14);
  if (x >= 0) return x;

  //horizontal #4
  x = threeTwo(computerGrid, 15, 16, 17, 18, 19);
  if (x >= 0) return x;

  //horizontal #5
  x = threeTwo(computerGrid, 20, 21, 22, 23, 24);
  if (x >= 0) return x;

  return -1;
}

function fourOne(computerGrid, a, b, c, d, e) {
  if (
    computerGrid[a].picked &&
    computerGrid[b].picked &&
    computerGrid[c].picked &&
    computerGrid[d].picked &&
    !computerGrid[e].picked
  )
    return computerGrid[e].number;
  if (
    computerGrid[a].picked &&
    computerGrid[b].picked &&
    computerGrid[c].picked &&
    computerGrid[e].picked &&
    !computerGrid[d].picked
  )
    return computerGrid[d].number;
  if (
    computerGrid[a].picked &&
    computerGrid[b].picked &&
    computerGrid[d].picked &&
    computerGrid[e].picked &&
    !computerGrid[c].picked
  )
    return computerGrid[c].number;
  if (
    computerGrid[a].picked &&
    computerGrid[c].picked &&
    computerGrid[d].picked &&
    computerGrid[e].picked &&
    !computerGrid[b].picked
  )
    return computerGrid[b].number;
  if (
    computerGrid[b].picked &&
    computerGrid[c].picked &&
    computerGrid[d].picked &&
    computerGrid[e].picked &&
    !computerGrid[a].picked
  )
    return computerGrid[a].number;
}

function threeTwo(computerGrid, a, b, c, d, e) {
  if (
    computerGrid[a].picked &&
    computerGrid[b].picked &&
    computerGrid[c].picked &&
    !computerGrid[d].picked &&
    !computerGrid[e].picked
  )
    return computerGrid[d].number;
  if (
    computerGrid[a].picked &&
    computerGrid[b].picked &&
    computerGrid[d].picked &&
    !computerGrid[c].picked &&
    !computerGrid[e].picked
  )
    return computerGrid[c].number;
  if (
    computerGrid[a].picked &&
    computerGrid[b].picked &&
    computerGrid[e].picked &&
    !computerGrid[c].picked &&
    !computerGrid[d].picked
  )
    return computerGrid[c].number;
  if (
    computerGrid[a].picked &&
    computerGrid[c].picked &&
    computerGrid[d].picked &&
    !computerGrid[b].picked &&
    !computerGrid[e].picked
  )
    return computerGrid[b].number;
  if (
    computerGrid[a].picked &&
    computerGrid[c].picked &&
    computerGrid[e].picked &&
    !computerGrid[b].picked &&
    !computerGrid[d].picked
  )
    return computerGrid[b].number;
  if (
    computerGrid[a].picked &&
    computerGrid[d].picked &&
    computerGrid[e].picked &&
    !computerGrid[b].picked &&
    !computerGrid[c].picked
  )
    return computerGrid[b].number;

  if (
    computerGrid[b].picked &&
    computerGrid[c].picked &&
    computerGrid[d].picked &&
    !computerGrid[a].picked &&
    !computerGrid[e].picked
  )
    return computerGrid[a].number;

  if (
    computerGrid[b].picked &&
    computerGrid[c].picked &&
    computerGrid[e].picked &&
    !computerGrid[a].picked &&
    !computerGrid[d].picked
  )
    return computerGrid[a].number;

  if (
    computerGrid[c].picked &&
    computerGrid[d].picked &&
    computerGrid[e].picked &&
    !computerGrid[a].picked &&
    !computerGrid[b].picked
  )
    return computerGrid[a].number;

  return -1;
}
export default ComputerChoice;
