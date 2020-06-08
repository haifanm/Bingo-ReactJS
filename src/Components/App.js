import React from "react";
import "./App.css";
import BingoTable from "./BingoTable";
import GitHubIcon from "@material-ui/icons/GitHub";
// import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      {/* <Helmet>
        <title>Bingo</title>
      </Helmet> */}
      <div className="leftAndRight" />
      <div className="center">
        {/* <div className="leftAndRight">
          
        </div> */}
        <h1 className="titleText">Play 5x5 Bingo</h1>
        <BingoTable />
        {/* <div className="leftAndRight" /> */}
      </div>
      <div className="leftAndRight">
        <a
          style={{ backgroundColor: "#000000", color: "#000000" }}
          href="https://github.com/haifanm/Bingo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            style={{ position: "absolute", right: "8", bottom: "8" }}
            fontSize="large"
          />
        </a>
      </div>
    </div>
  );
}

export default App;