import React, { Component } from 'react';
import '../../assets/style/CheckOut/cart-small.less';
import CartItem from '../Cart/CartItem';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { connect } from 'react-redux';

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
                    <div className="count flex-center">2</div>
                </div>
                {
                    [...this.props.cart].map((x, i) => (
                        <div key={i} className="wrap">
                            <div className="underline"></div>
                            <CartItem element={x} />
                            <div className="underline"></div>
                        </div>
                    ))
                }
                <div className="underline"></div>
                <div className="voucher flex-v-center">
                    <p>Have a Voucher?</p>
                    <Icon icon={ic_keyboard_arrow_down} size={25} />
                </div>
                <div className="underline"></div>
                <div className="voucher flex-v-center cost">
                    <p>Subtotal</p>
                    <div>
                    {'$' + sum}
                   </div>
                </div>
                <div className="voucher flex-v-center cost">
                    <p>Shipping</p>
                    <div>
                        Free
                    </div>
                </div>
                <div className="underline double"></div>
                <div className="voucher flex-v-center total-cost">
                    <p>Total</p>
                    <div>
                        {'$' + sum}
                    </div>
                </div>
                <h1 className="ship-method">Shipping Method</h1>
                <div className="voucher flex-v-center methods">
                    <h3 className="flex-center">?</h3>
                    <p>Free FedEx Ground shipping.</p>
                    <div>
                        Free
                    </div>
                </div>
                <div className="voucher flex-v-center methods">
                    <h3 className="flex-center">?</h3>
                    <p>FedEx Ground Shipping. 2-3 business days after processing.</p>
                    <div>
                        $5.99
                    </div>
                </div>
                <div className="voucher flex-v-center methods">
                    <h3 className="flex-center">?</h3>
                    <p>FedEx One-Day Shipping</p>
                    <div>
                        $17.50
                    </div>
                </div>
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

export default connect(mapStateToProps)(CartSmall);
