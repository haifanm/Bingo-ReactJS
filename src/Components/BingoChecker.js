function BingoChecker(currentItems) {
  let completedLines = 0;
  if (
    currentItems[0].picked &&
    currentItems[5].picked &&
    currentItems[10].picked &&
    currentItems[15].picked &&
    currentItems[20].picked
  )
    completedLines++;

  if (
    currentItems[1].picked &&
    currentItems[6].picked &&
    currentItems[11].picked &&
    currentItems[16].picked &&
    currentItems[21].picked
  )
    completedLines++;
  if (
    currentItems[2].picked &&
    currentItems[7].picked &&
    currentItems[12].picked &&
    currentItems[17].picked &&
    currentItems[22].picked
  )
    completedLines++;

  if (
    currentItems[3].picked &&
    currentItems[8].picked &&
    currentItems[13].picked &&
    currentItems[18].picked &&
    currentItems[23].picked
  )
    completedLines++;

  if (
    currentItems[4].picked &&
    currentItems[9].picked &&
    currentItems[14].picked &&
    currentItems[19].picked &&
    currentItems[24].picked
  )
    completedLines++;

  if (
    currentItems[0].picked &&
    currentItems[1].picked &&
    currentItems[2].picked &&
    currentItems[3].picked &&
    currentItems[4].picked
  )
    completedLines++;

  if (
    currentItems[5].picked &&
    currentItems[6].picked &&
    currentItems[7].picked &&
    currentItems[8].picked &&
    currentItems[9].picked
  )
    completedLines++;

  if (
    currentItems[10].picked &&
    currentItems[11].picked &&
    currentItems[12].picked &&
    currentItems[13].picked &&
    currentItems[14].picked
  )
    completedLines++;

  if (
    currentItems[15].picked &&
    currentItems[16].picked &&
    currentItems[17].picked &&
    currentItems[18].picked &&
    currentItems[19].picked
  )
    completedLines++;

  if (
    currentItems[20].picked &&
    currentItems[21].picked &&
    currentItems[22].picked &&
    currentItems[23].picked &&
    currentItems[24].picked
  )
    completedLines++;

  if (
    currentItems[0].picked &&
    currentItems[6].picked &&
    currentItems[12].picked &&
    currentItems[18].picked &&
    currentItems[24].picked
  )
    completedLines++;

  if (
    currentItems[4].picked &&
    currentItems[8].picked &&
    currentItems[12].picked &&
    currentItems[16].picked &&
    currentItems[20].picked
  )
    completedLines++;
  return completedLines;
}

export default BingoChecker;
