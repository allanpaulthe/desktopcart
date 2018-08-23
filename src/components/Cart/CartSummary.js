import React, { Component } from 'react';
import '../../assets/style/Cart/cart-summary.less';

class CartSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="cart-summary">
                <div className="total">
                    <div className="inner flex-v-center">
                        <h2>Subtotal</h2>
                        <h1>$1320</h1>
                    </div>
                </div>
                <div className="total">
                    <div className="inner flex-v-center">
                        <h2>$Shipping</h2>
                        <h1>-</h1>
                    </div>
                </div>
                <div className="total">
                    <div className="inner flex-v-center">
                        <h2>Taxes</h2>
                        <h1>-</h1>
                    </div>
                </div>
                <div className="total last ">
                    <div className="inner flex-v-center">
                        <h2>Total</h2>
                        <h1>$685</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartSummary;