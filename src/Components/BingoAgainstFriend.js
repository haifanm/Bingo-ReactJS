import React, { Component } from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import ReactModal from 'react-modal';
import BingoChecker from './BingoChecker';
import chooseComputerIndex from './ComputerPlayer';
import GenerateGrid from './GenerateGrid';
import FinalTable from './FinalTable';
import CachedIcon from '@material-ui/icons/Cached';
import Button from '@material-ui/core/Button';
// import PubNub from "pubnub";
// import { PubNubProvider, PubNubConsumer } from "pubnub-react";
import Swal from 'sweetalert2';
// import shortid from "shortid";

// const uuid = PubNub.generateUUID();

class BingoAgainstFriend extends Component {
  constructor() {
    super();
    // this.pubnub = new PubNub({
    //   publishKey: "pub-c-94a56b5e-8dc4-4950-8361-19e7d5a6012d",
    //   subscribeKey: "sub-c-7a43861a-aa83-11ea-8ae7-6609ff7c6054",
    //   uuid: uuid,
    // });
    this.state = {
      computerTurn: false,
      bingo: [
        { letter: 'B', gained: false },
        { letter: 'I', gained: false },
        { letter: 'N', gained: false },
        { letter: 'G', gained: false },
        { letter: 'O', gained: false },
      ],
      items: GenerateGrid(),
      computerBingo: [
        { letter: 'B', gained: false },
        { letter: 'I', gained: false },
        { letter: 'N', gained: false },
        { letter: 'G', gained: false },
        { letter: 'O', gained: false },
      ],
      computerGrid: GenerateGrid(),
      gameEnded: false,
      winner: 2, //winner 0: player    1: computer    2:Tie
      winnerMessage: '',
      winnerMessageColor: '',
      playerScore: 0,
    };
  }

  pick = async (pickedNumber) => {
    let newPlayerList = this.state.items;
    for (let i = 0; i < 25; i++) {
      if (this.state.items[i].number === pickedNumber) {
        newPlayerList[i].picked = true;
        this.setState({
          items: newPlayerList,
        });
      }
    }
    await this.checkForBingoUpdate();

    let newComputerList = this.state.computerGrid;
    for (let j = 0; j < 25; j++) {
      if (this.state.computerGrid[j].number === pickedNumber) {
        newComputerList[j].picked = true;
        this.setState({
          computerGrid: newComputerList,
        });
      }
    }
    await this.computerCheckForBingoUpdate();

    await this.computerTurn();
  };
  checkForBingoUpdate = async () => {
    const currentBingoScore = BingoChecker(this.state.items);

    this.outputBingoState(currentBingoScore);
  };

  outputBingoState = (currentBingoScore) => {
    let newBingoList = this.state.bingo;
    for (let i = 0; i < currentBingoScore && i < 5; i++) {
      newBingoList[i].gained = true;
    }
    this.setState({
      bingo: newBingoList,
    });
    if (currentBingoScore >= 5) {
      this.setState({
        gameEnded: true,
        winner: 0,
        playerScore: this.state.playerScore + 1,
      });
    }
  };

  computerPick = async () => {
    if (!this.state.gameEnded) {
      const computerChosenNumber = chooseComputerIndex(this.state.computerGrid);
      let newPlayerList = this.state.items;
      for (let i = 0; i < 25; i++) {
        if (this.state.items[i].number === computerChosenNumber) {
          newPlayerList[i].picked = true;
          this.setState({
            items: newPlayerList,
          });
        }
      }
      this.checkForBingoUpdate();

      let newComputerList = this.state.computerGrid;
      for (let j = 0; j < 25; j++) {
        if (this.state.computerGrid[j].number === computerChosenNumber) {
          newComputerList[j].picked = true;
          this.setState({
            computerGrid: newComputerList,
          });
        }
      }
      this.computerCheckForBingoUpdate();
    }
  };

  computerCheckForBingoUpdate = async () => {
    const currentBingoScore = BingoChecker(this.state.computerGrid);

    this.computerOutputBingoState(currentBingoScore);
  };

  computerOutputBingoState = (currentBingoScore) => {
    let newComputerBingoList = this.state.computerBingo;
    for (let i = 0; i < currentBingoScore && i < 5; i++) {
      newComputerBingoList[i].gained = true;
    }
    this.setState({
      computerBingo: newComputerBingoList,
    });
    if (currentBingoScore >= 5) {
      if (this.state.winner === 0) {
        this.setState({
          winner: 2,
          winnerMessage: "It's A Tie",
          winnerMessageColor: '#ffff00',
        });
      } else {
        this.setState({
          winner: 1,
          winnerMessage: 'You Lost :( Try Again',
          winnerMessageColor: '#ff0000',
        });
      }
    } else {
      this.setState({
        winner: 0,
        winnerMessage: 'You Won!!',
        winnerMessageColor: 'rgb(6, 6, 138)',
      });
    }
  };

  computerTurn = async () => {
    this.setState({
      computerTurn: true,
    });
    await this.sleep(800);
    await this.computerPick();
    this.setState({
      computerTurn: false,
    });
  };

  sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  gameRestart = () => {
    this.setState({
      items: GenerateGrid(),
      bingo: [
        { letter: 'B', gained: false },
        { letter: 'I', gained: false },
        { letter: 'N', gained: false },
        { letter: 'G', gained: false },
        { letter: 'O', gained: false },
      ],
      computerGrid: GenerateGrid(),
      computerBingo: [
        { letter: 'B', gained: false },
        { letter: 'I', gained: false },
        { letter: 'N', gained: false },
        { letter: 'G', gained: false },
        { letter: 'O', gained: false },
      ],
      winner: 2,
      gameEnded: false,
      winnerMessage: '',
      winnerMessageColor: '',
    });
    console.log('RESTARTING');
  };

  render() {
    return (
      <div className='gridRoot'>
        <p className='score'> Your Score: {this.state.playerScore}</p>
        <Button
          className='resetButton'
          variant='contained'
          color='secondary'
          onClick={() => {
            Swal.fire({
              title: 'Are you sure you wish to restart the game?',
              text: '',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes please',
            }).then((result) => {
              if (result.value) {
                this.gameRestart();
              }
            });

            // if (window.confirm("Are you sure you wish to restart the game?"))
            //   this.gameRestart();
          }}
        >
          <CachedIcon className='resetButtonIcon' fontSize='large' />
        </Button>

        {/*player bingo*/}
        <GridList
          style={{ height: 100, padding: 0, margin: 0 }}
          cellHeight={100}
          spacing={0}
          className='gridList'
          cols={5}
        >
          {this.state.bingo.map((item) => (
            <GridListTile
              className={
                item.gained
                  ? 'gridListTile bingoGridListTileGained'
                  : 'gridListTile'
              }
              key={item.letter}
              cols={1}
              rows={0.5}
            >
              <button
                className={
                  item.gained ? 'bingoLetter bingoLetterGained' : 'bingoLetter'
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
        <GridList cellHeight={100} spacing={0} className='gridList' cols={5}>
          {this.state.items.map((item) => (
            <GridListTile
              className='gridListTile'
              key={item.number}
              cols={1}
              rows={0.5}
            >
              <button
                className={item.picked ? 'btn touched' : 'btn'}
                disabled={item.picked || this.state.computerTurn}
                onMouseDown={this.toggleTouched}
                onMouseUp={this.handleMouseUp}
                onClick={() => this.pick(item.number)}
              >
                {item.number}
              </button>
            </GridListTile>
          ))}
        </GridList>

        {/*space between*/}
        {/* <GridList cellHeight={100} spacing={0} cols={5} style={{ flex: "1" }}>
          {this.state.bingo.map((item) => (
            <GridListTile key={item.letter} rows={0.2}></GridListTile>
          ))}
        </GridList> */}

        <p
          className={
            this.state.computerTurn
              ? 'computerPlayingTextShow'
              : 'computerPlayingTextHide'
          }
        >
          Computer is playing..
        </p>
        {/*computer bingo*/}
        {/* <GridList cellHeight={100} spacing={0} className="gridList" cols={5}>
          {this.state.computerBingo.map((item) => (
            <GridListTile
              className="gridListTile"
              key={item.letter}
              cols={1}
              rows={0.5}
            >
              <button
                className={
                  item.gained ? "bingoLetter bingoLetterGained" : "bingoLetter"
                }
              >
                {item.letter}
              </button>
            </GridListTile>
          ))}
        </GridList> */}
        {/*computer space*/}
        {/* <GridList cellHeight={100} spacing={0} cols={5} style={{ flex: "1" }}>
          {this.state.bingo.map((item) => (
            <GridListTile key={item.letter} rows={0.2}></GridListTile>
          ))}
        </GridList> */}

        {/*computer grid*/}
        {/* <GridList cellHeight={100} spacing={0} className="gridList" cols={5}>
          {this.state.computerGrid.map((item) => (
            <GridListTile
              className="gridListTile"
              key={item.number}
              cols={1}
              rows={0.5}
            >
              <button
                className={item.picked ? "btn touched" : "btn"}
                disabled={true}
                onMouseDown={this.toggleTouched}
                onMouseUp={this.handleMouseUp}
                onClick={() => {}}
              >
                {item.number}
              </button>
            </GridListTile>
          ))}
        </GridList> */}

        <ReactModal
          style={{
            border: '1px solid #ccc',
          }}
          isOpen={this.state.gameEnded}
          contentLabel='Minimal Modal Example'
        >
          <div className='modal'>
            <div className='modalResultDiv'>
              <div
                className='resultsMessage'
                style={{ color: this.state.winnerMessageColor }}
              >
                {this.state.winnerMessage}
              </div>
              <p
                className='score'
                style={{ marginBottom: 0, paddingBottom: 0 }}
              >
                {' '}
                Your Score: {this.state.playerScore}
              </p>
            </div>

            <div className='modalTablesDiv'>
              {FinalTable(0, this.state.bingo, this.state.items)}
              {FinalTable(1, this.state.computerBingo, this.state.computerGrid)}
            </div>

            <div className='modalPlayAgainDiv'>
              <Button
                onClick={this.gameRestart}
                variant='contained'
                color='primary'
              >
                NEW GAME
              </Button>
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}
export default BingoAgainstFriend;
