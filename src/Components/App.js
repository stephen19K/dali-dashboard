import React, { Component } from 'react';
import Dashboard from './Dashboard.js';
import logo from '../../src/logo.svg';
import MainMap from './MainMap.js';
import '../../src/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMap />
      </div>
    );
  }
}

export default App;
