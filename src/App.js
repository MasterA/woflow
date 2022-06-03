import React from 'react';
import logo from './logo.svg';
import './App.css';
import Assignment from './Assignment';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Assignment />
    </div>
  );
}

export default App;
