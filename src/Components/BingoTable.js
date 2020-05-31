import React, { Component } from "react";
import { GridList, GridListTile } from "@material-ui/core";
import ReactModal from "react-modal";
import BingoChecker from "./BingoChecker";
import chooseComputerIndex from "./ComputerPlayer";
import GenerateGrid from "./GenerateGrid";
import FinalTable from "./FinalTable";
import CachedIcon from "@material-ui/icons/Cached";
import Button from "@material-ui/core/Button";

class Bingo extends Component {
  constructor() {
    super();
    this.state = {
      computerTurn: false,
      bingo: [
        { letter: "B", gained: false },
        { letter: "I", gained: false },
        { letter: "N", gained: false },
        { letter: "G", gained: false },
        { letter: "O", gained: false },
      ],
      items: GenerateGrid(),
      computerBingo: [
        { letter: "B", gained: false },
        { letter: "I", gained: false },
        { letter: "N", gained: false },
        { letter: "G", gained: false },
        { letter: "O", gained: false },
      ],
      computerGrid: GenerateGrid(),
      gameEnded: false,
      winner: 2, //winner 0: player    1: computer
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
      this.setState({
        gameEnded: true,
        winner: 1,
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
        { letter: "B", gained: false },
        { letter: "I", gained: false },
        { letter: "N", gained: false },
        { letter: "G", gained: false },
        { letter: "O", gained: false },
      ],
      computerGrid: GenerateGrid(),
      computerBingo: [
        { letter: "B", gained: false },
        { letter: "I", gained: false },
        { letter: "N", gained: false },
        { letter: "G", gained: false },
        { letter: "O", gained: false },
      ],
      gameEnded: false,
    });
    console.log("RESTARTING");
  };

  render() {
    return (
      <div className="gridRoot">
        <Button
          className="resetButton"
          variant="contained"
          color="secondary"
          onClick={() => {
            if (window.confirm("Are you sure you wish to restart the game?"))
              this.gameRestart();
          }}
        >
          <CachedIcon className="resetButtonIcon" fontSize="large" />
        </Button>

        {/*player bingo*/}
        <GridList
          style={{ height: 100, padding: 0, margin: 0 }}
          cellHeight={100}
          spacing={0}
          className="gridList"
          cols={5}
        >
          {this.state.bingo.map((item) => (
            <GridListTile
              className={
                item.gained
                  ? "gridListTile bingoGridListTileGained"
                  : "gridListTile"
              }
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
        </GridList>
        {/*player space*/}
        {/* <GridList cellHeight={100} spacing={0} cols={5} style={{ flex: "1" }}>
          {this.state.bingo.map((item) => (
            <GridListTile key={item.letter} rows={0.2}></GridListTile>
          ))}
        </GridList> */}

        {/*player grid*/}
        <GridList cellHeight={100} spacing={0} className="gridList" cols={5}>
          {this.state.items.map((item) => (
            <GridListTile
              className="gridListTile"
              key={item.number}
              cols={1}
              rows={0.5}
            >
              <button
                className={item.picked ? "btn touched" : "btn"}
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
              ? "computerPlayingTextShow"
              : "computerPlayingTextHide"
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
            border: "1px solid #ccc",
          }}
          isOpen={this.state.gameEnded}
          contentLabel="Minimal Modal Example"
        >
          <div className="modal">
            <div className="modalResultDiv">
              <div className="resultsMessage">
                {this.state.winner ? "You Lost :( Try Again" : "You Won!!"}
              </div>
            </div>

            <div className="modalTablesDiv">
              <div style={{ flex: 1 }}></div>
              {FinalTable(0, this.state.bingo, this.state.items)}
              <div style={{ flex: 1 }}></div>
              {FinalTable(1, this.state.computerBingo, this.state.computerGrid)}
              <div style={{ flex: 1 }}></div>
            </div>

            <div className="modalPlayAgainDiv">
              <Button
                onClick={this.gameRestart}
                variant="contained"
                color="primary"
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
export default Bingo;
