import React, { Component } from 'react';
import './App.less';
import HomePage from './components/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
