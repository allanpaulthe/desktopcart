import React, { Component } from 'react';
import './App.less';
import HomePage from './components/HomePage/HomePage';
import QuickView from './components/QuickView/QuickView';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.quickView && <div className="popup-screen">
          <QuickView />
        </div>}
        <HomePage />
      </div>
    );
  }
}
export const mapStateToProps = (state) => {
  return {
    quickView: state.quickView
  };
};

export default connect(mapStateToProps)(App);

