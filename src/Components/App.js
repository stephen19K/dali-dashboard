import React, { Component } from 'react';
import Dashboard from './Dashboard.js';
import logo from '../../src/logo.svg';
import '../../src/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DALI Dashboard</h1>
        </header>
        <p className="App-intro">
          This is the App. lol
        </p>
        <Dashboard />
      </div>
    );
  }
}

export default App;
