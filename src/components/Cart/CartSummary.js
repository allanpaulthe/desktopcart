import React, { Component } from 'react';
import '../../assets/style/Cart/cart-summary.less';
import { connect } from 'react-redux';

class CartSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
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
            <div className="cart-summary">
                <div className="total">
                    <div className="inner flex-v-center">
                        <h2>Subtotal</h2>
                        <h1>{'$'+sum}</h1>
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
                        <h1>{'$'+sum}</h1>
                    </div>
                </div>
            </div>
        );
    }
}
export const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products
    };
};


export default connect(mapStateToProps, null)(CartSummary);
