import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
import { getCart } from './server/server';
import { setCart } from './actions/userActions';

class App extends Component {
  componentDidMount() {
    getCart().then((data) => {
      this.props.setCart(data);
    }).catch((error) => {
      this.setState({ data: [] });
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <OfferBar />
          <NavBar />
          <Menu />
          <Route exct path="/cart" component={Cart} />
          <Route exact path="/checkout" component={CheckOut} />
          {this.props.quickView && <div className="popup-screen">
            <QuickView />
          </div>}
          <Route exact path="/" component={HomePage} />
          <Footer />
        </div>
      </Router>
    );
  }
}
export const mapStateToProps = (state) => {
  return {
    quickView: state.quickView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCart: (data) => {
      dispatch(setCart(data))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

