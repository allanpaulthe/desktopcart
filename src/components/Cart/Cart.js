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
                                <CartItem product={x} />
                                <div className="line"> </div>
                            </div>

                        ))}
                    </div>
                    <CartSummary />
                    <div className="cart-end-buttons">
                        <div className="white-button flex-center">
                            <Link to="/">Continue Shopping</Link>
                        </div>
                        <div className="blue-button flex-center">
                            <Link to="/checkout">Checkout</Link>
                        </div>
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


export default connect(mapStateToProps,null)(Cart);
