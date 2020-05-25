import React from "react";
import { GridList, GridListTile } from "@material-ui/core";

// function FinalNumbersTable(grid) {
//   return (
//     <GridList
//       cellHeight={110}
//       spacing={0}
//       className="gridList"
//       cols={5}
//       style={{ height: "70%", flex: 2 }}
//     >
//       {grid.map((item) => (
//         <GridListTile
//           className="gridListTile"
//           key={item.number}
//           cols={1}
//           rows={0.5}
//         >
//           <button className={item.picked ? "btn touched" : "btn"}>
//             {item.number}
//           </button>
//         </GridListTile>
//       ))}
//     </GridList>
//   );
// }

// function FinalBingo(bingo) {
//   return (
//     <GridList cellHeight={100} spacing={0} className="gridList" cols={5}>
//       {bingo.map((item) => (
//         <GridListTile
//           className="gridListTile"
//           key={item.letter}
//           cols={1}
//           rows={0.5}
//         >
//           <button
//             className={
//               item.gained ? "bingoLetter bingoLetterGained" : "bingoLetter"
//             }
//           >
//             {item.letter}
//           </button>
//         </GridListTile>
//       ))}
//     </GridList>
//   );
// }

function FinalTable(player, bingo, grid) {
  return (
    <div className="modalTableEach">
      <p className="modalTablePlayerId">{player ? "Computer" : "You"}</p>

      {/*computer bingo*/}
      <GridList
        cellHeight={100}
        spacing={0}
        className="inModalGridList"
        cols={5}
      >
        {bingo.map((item) => (
          <GridListTile
            className={
              item.gained
                ? "inModalGridListTile inModalBingoGridListTileGained"
                : "inModalGridListTile"
            }
            key={item.letter}
            cols={1}
            rows={0.5}
          >
            <button
              className={
                item.gained
                  ? "inModalBingoLetter inModalBingoLetterGained"
                  : "inModalBingoLetter"
              }
            >
              {item.letter}
            </button>
          </GridListTile>
        ))}
      </GridList>
      {/*computer space*/}
      <GridList cellHeight={1} spacing={0} cols={5} style={{ flex: "1" }}>
        {bingo.map((item) => (
          <GridListTile key={item.letter} rows={0.2}></GridListTile>
        ))}
      </GridList>
      {/*computer grid*/}
      <GridList
        cellHeight={100}
        spacing={0}
        className="inModalGridList"
        cols={5}
      >
        {grid.map((item) => (
          <GridListTile
            className="inModalGridListTile"
            key={item.number}
            cols={1}
            rows={0.5}
          >
            <button
              className={
                item.picked ? "inModalBtn inModalTouched" : "inModalBtn"
              }
            >
              {item.number}
            </button>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
export default FinalTable;
