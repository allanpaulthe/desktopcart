import React, { Component } from 'react';
import '../../assets/style/Cart/cart-quantity.less';

class CartQuantity extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="cart-quantity flex-v-center">
                <p className="qty">Qty</p>
                <p className="quantity-button flex-center" > - </p>
                <p className="number">1</p>
                <p className="quantity-button flex-center" > + </p>
            </div>
        );
    }
}

export default CartQuantity;