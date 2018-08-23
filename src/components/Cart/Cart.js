import React, { Component } from 'react';
import '../../assets/style/Cart/cart.less';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

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
                        {Array.apply(null, { length: 4 }).map((x, i) => (
                            <div>
                                <CartItem />
                                <div className="line"> </div>
                            </div>

                        ))}
                    </div>
                    <CartSummary />
                    <div className="cart-end-buttons">
                        <div className="white-button flex-center">
                            Continue Shopping
                        </div>
                        <div className="blue-button flex-center">
                            Checkout
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;