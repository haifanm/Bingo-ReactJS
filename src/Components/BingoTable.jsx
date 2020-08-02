import React, { useState, useEffect } from 'react';
import { GridList, GridListTile } from '@material-ui/core';

const Table = (props) => {
  const [pre, setPre] = useState('');

  useEffect(() => {
    if (props.gameEnded) setPre('in-modal-');
  }, [props.gameEnded]);
  return (
    <>
      {/*player bingo*/}
      <GridList
        style={{ height: 90, padding: 0, margin: 0 }}
        cellHeight={100}
        spacing={0}
        className={pre + 'gridList'}
        cols={5}
      >
        {props.bingo.map((item) => (
          <GridListTile
            className={
              item.gained
                ? pre + 'gridListTile ' + pre + 'bingoGridListTileGained'
                : pre + 'gridListTile'
            }
            key={item.letter}
            cols={1}
            rows={0.5}
          >
            <button
              className={
                item.gained
                  ? pre + 'bingoLetter ' + pre + 'bingoLetterGained'
                  : pre + 'bingoLetter'
              }
            >
              {item.letter}
            </button>
          </GridListTile>
        ))}
      </GridList>

      {/*player space*/}
      {/* <GridList cellHeight={100} spacing={0} cols={5} style={{ flex: "1" }}>
                {this.state.bingo.map((item) => (
                <GridListTile key={item.letter} rows={0.2}></GridListTile>
            ))}
        </GridList> */}

      {/*player grid*/}
      <GridList
        cellHeight={100}
        spacing={0}
        className={pre + 'gridList'}
        cols={5}
      >
        {props.items.map((item) => (
          <GridListTile
            className={pre + 'gridListTile'}
            key={item.number}
            cols={1}
            rows={0.56}
          >
            <button
              className={
                item.picked ? pre + 'btn ' + pre + 'touched' : pre + 'btn'
              }
              disabled={item.picked || props.computerTurn}
              onMouseDown={props.toggleTouched}
              onMouseUp={props.handleMouseUp}
              onClick={() => props.pick(item.number)}
            >
              {item.number}
            </button>
          </GridListTile>
        ))}
      </GridList>
    </>
  );
};

export default Table;
