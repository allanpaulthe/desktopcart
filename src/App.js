import React, { Component } from 'react';
import './App.less';
import HomePage from './components/HomePage/HomePage';
import QuickView from './components/QuickView/QuickView';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="popup-screen">
          <QuickView />
        </div> */}
        <HomePage />
      </div>
    );
  }
}

export default App;
