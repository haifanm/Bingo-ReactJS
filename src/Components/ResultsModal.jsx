import React from 'react';
import ReactModal from 'react-modal';
import ResultsTable from './ResultsTable';
import Button from '@material-ui/core/Button';

const ResultsModal = (props) => {
  return (
    <>
      <ReactModal
        style={{
          border: '1px solid #ccc',
        }}
        isOpen={props.gameEnded}
        contentLabel='Minimal Modal Example'
      >
        <div className='modal'>
          <div className='modalResultDiv'>
            <div
              className='resultsMessage'
              style={{ color: props.winnerMessageColor }}
            >
              {props.winnerMessage}
            </div>
            <p className='score' style={{ marginBottom: 0, paddingBottom: 0 }}>
              {' '}
              Your Score: {props.playerScore}
            </p>
          </div>

          <div className='modalTablesDiv'>
            {ResultsTable(0, props.bingo, props.items)}
            {ResultsTable(1, props.computerBingo, props.computerGrid)}
          </div>

          <div className='modalPlayAgainDiv'>
            <Button
              onClick={props.gameRestart}
              variant='contained'
              color='primary'
            >
              NEW GAME
            </Button>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default ResultsModal;
