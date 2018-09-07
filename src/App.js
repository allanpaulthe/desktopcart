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
import ScrollToTop from './components/ScrollToTop';
import SearchResults from './components/HomePage/SearchResults';
import OutsideClickHandler from 'react-outside-click-handler';

class App extends Component {
  componentDidMount() {
    getCart().then((data) => {
      this.props.setCart(data);
    }).catch(() => {
      this.setState({ data: [] });
    })
    var myWorker = new Worker(worker);
    myWorker.onmessage = (m) => {
      const cart_data = JSON.parse(m.data)
      this.props.setCart(cart_data);
    };
    setInterval(() => myWorker.postMessage('Update Cart Details'), 600000);
  }
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App" id="App">
            <OutsideClickHandler
              onOutsideClick={() => {
                if (this.props.menuOn) {
                  this.props.menuOFF();
                }
              }}
            >
              <OfferBar />
              <NavBar />
              <Menu />
            </OutsideClickHandler>
            <Route exct path="/search" component={SearchResults} />
            <Route exct path="/cart" component={Cart} />
            <Route path="/checkout" component={CheckOut} />
            <Route path="/category/:main/:type/:item" component={CategoryView} />
            <Route path="/category-small/:main" component={CategoryView} />
            {this.props.quickView && <div className="popup-screen">
              <QuickView />
            </div>}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/thanks" component={Thanks} />
            <Route exact path="/product/:id" component={ProductDetail} />
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}
export const mapStateToProps = (state) => {
  return {
    quickView: state.quickView,
    menuOn: state.menuOn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCart: (data) => {
      dispatch(setCart(data))
    },
    menuOFF: () => {
      dispatch({
        type: 'MENU_OFF'
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

