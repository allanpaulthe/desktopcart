import React, { Component } from 'react';
import '../../assets/style/Cart/cart.less';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goBack() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="cart">
                <div className="heading flex-v-center">
                    <h1>Your Cart</h1>
                </div>
                <div className="cart-body">
                    <div className="cart-collection">
                        {[...this.props.cart].map((x, i) => (
                            <div key={i}>
                                <CartItem element={x} />
                                <div className="line"> </div>
                            </div>

                        ))}
                    </div>
                    <CartSummary />
                    <div className="cart-end-buttons">
                        <Link to="/">
                            <div className="white-button flex-center">
                                Continue Shopping
                            </div>
                        </Link>
                        <button className="right" onClick={this.goBack.bind(this)}>back</button>
                        <Link to="/checkout" className="left">
                            <div className="blue-button flex-center">
                                Checkout
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
};


export default connect(mapStateToProps, null)(Cart);
