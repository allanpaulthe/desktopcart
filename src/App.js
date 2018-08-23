import React, { Component } from 'react';
import './App.less';
import HomePage from './components/HomePage/HomePage';
import QuickView from './components/QuickView/QuickView';
import { connect } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import OfferBar from './components/HomePage/OfferBar';
import Menu from './components/NavBar/Menu';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OfferBar />
        <NavBar />
        <Menu />
        <CheckOut />
        {/* <Cart />
        {this.props.quickView && <div className="popup-screen">
          <QuickView />
        </div>}
        <HomePage /> */}
        <Footer />
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

