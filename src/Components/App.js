import React from 'react';
import './App.css';
import Bingo from './Bingo';
import GitHubIcon from '@material-ui/icons/GitHub';
// import { Helmet } from "react-helmet";

function App() {
  return (
    <div className='App'>
      {/* <Helmet> <title>Bingo</title> </Helmet> */}

      {/* BINGO GAME */}
      <div className='center'>
        <h1 className='titleText'>Play 5x5 Bingo</h1>
        <Bingo />
      </div>

      {/* GITHUB ICON */}
      <a
        style={{
          color: '#000000',
          position: 'absolute',
          right: '0',
          bottom: '0',
        }}
        href='https://github.com/haifanm/Bingo'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GitHubIcon fontSize='large' />
      </a>
    </div>
  );
}

export default App;
