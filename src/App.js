import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const MyButton = styled.button`
  border: 2px solid #61dbfb;
  padding: 48px;
  border-radius: 8px;
`;

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <MyButton>Click this!</MyButton>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        alt="maciej"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
