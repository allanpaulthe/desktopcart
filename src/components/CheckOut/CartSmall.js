import React, { Component } from 'react';
import '../../assets/style/CheckOut/cart-small.less';
import CartItem from '../Cart/CartItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Loader from 'react-loader-spinner';
import CartSmallSummary from './CartSmallSummary';

class CartSmall extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const cart = [...this.props.cart];
        const products = this.props.products;
        var sum = 0;
        cart.forEach(el => {
            const count = el.count;
            const price = products[el.id - 1].price;
            sum += (count * price)
        });
        return (
            <div className="cart-small">
                <div className="header">
                    <h1>Shopping Cart</h1>
                    <div className="count flex-center">{this.props.cartCount}</div>
                </div>
                {this.props.cart.length !== 0 &&
                    <div className="minimized-list">
                        {
                            [...this.props.cart].map((x, i) => (
                                <div key={i} className="wrap">
                                    <div className="underline"></div>
                                    <CartItem element={x} />
                                </div>
                            ))
                        }
                    </div>
                }
                {this.props.cart.length === 0 &&
                    <div className="minimized-list">
                        <div className="flex-center full-min">
                            <Loader
                                type="Ball-Triangle"
                                color="#00BFFF"
                                height="50"
                                width="50"
                            />
                        </div>
                    </div>
                }
                <div className="underline"></div>
                {this.props.history.location.pathname !== "/checkout/review" &&
                    <CartSmallSummary sum={sum} />
                }
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products,
        cartCount: state.cartCount
    };
};

export default connect(mapStateToProps)(withRouter(CartSmall));
