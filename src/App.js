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
import Thanks from './components/CheckOut/Thanks';
import ProductDetail from './components/ProductDetail/ProductDetail';
import CategoryView from './components/CategoryView/CategoryView';
import worker from './worker';

class App extends Component {
  componentDidMount() {
    getCart().then((data) => {
      this.props.setCart(data);
    }).catch(() => {
      this.setState({ data: [] });
    })
    var myWorker = new Worker(worker);
    myWorker.onmessage = (m) => {
      let cart_data = JSON.parse(m.data)
      this.props.setCart(cart_data);
    };
    setInterval(() => myWorker.postMessage('Update Cart Details'), 10000);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <OfferBar />
          <NavBar />
          <Menu />
          <Route exct path="/cart" component={Cart} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="/category/:main/:type/:item" component={CategoryView} />
          <Route path="/category/:main" component={CategoryView} />
          {this.props.quickView && <div className="popup-screen">
            <QuickView />
          </div>}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/thanks" component={Thanks} />
          <Route exact path="/product/:id" component={ProductDetail} />
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

