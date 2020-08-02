import React from 'react';
// import { GridList, GridListTile } from '@material-ui/core';
import BingoTable from './BingoTable';

function FinalTable(player, bingo, grid) {
  return (
    <div className='modalTableEach'>
      <p className='modalTablePlayerId'>{player ? 'Computer' : 'You'}</p>

      <BingoTable
        bingo={bingo}
        items={grid}
        computerTurn={true}
        gameEnded={true}
      />
    </div>
  );
}
export default FinalTable;
