import React, { Component } from 'react';
import '../../assets/style/Cart/cart-item.less';
import CartQuantity from './CartQuantity';
class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="cart-item">
                <div className="cart-image flex-center">
                    <img src={'http://10.7.50.88:4000/img/product/5'} alt="" />
                </div>
                <div className="cart-data">
                    <div className="cart-top flex-v-center">
                        <h1>Argentina Authentic  Jersey 2018</h1>
                        <div>
                            <img src={require('../../assets/img/icons/delete.svg')} alt="" />
                        </div>
                    </div>
                    <h1 className="brand">
                        Nike
                    </h1>
                    <div className="cart-bottom flex-v-center">
                        <CartQuantity />
                        <p>$660</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;