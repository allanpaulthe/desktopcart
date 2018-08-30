import React, { Component } from 'react';
import '../../assets/style/CheckOut/review.less';
import { Icon } from 'react-icons-kit';
import { ic_edit } from 'react-icons-kit/md/ic_edit';
import { connect } from 'react-redux';


class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const adress = this.props.adress;
        const cart = [...this.props.cart];
        const products = this.props.products;
        var sum = 0;
        cart.forEach(el => {
            const count = el.count;
            const price = products[el.id - 1].price;
            sum += (count * price)
        });
        return (
            <div className="revieww">
                <div className="top flex-v-center">
                    <h1>Shipping to:</h1>
                    <Icon icon={ic_edit} />
                </div>
                <p className="data">
                    {adress.name}
                </p>
                <p className="data">
                    {adress.street}

                </p>
                <p className="data">
                    {adress.building}
                </p>
                <p className="data">
                    {adress.phno}
                </p>
                <div className="top flex-v-center">
                    <h1>Payment Method:</h1>
                    <Icon icon={ic_edit} />
                </div>
                <p className="data">
                    VISA ending in 8765
                </p>
                <div className="top flex-v-center">
                    <h1>Billing Address</h1>
                    <Icon icon={ic_edit} />
                </div>
                <p className="data">
                    Same as shipping address
                </p>
                <div className="line"></div>
                <div className="summary">
                    <div className="one">
                        <h1>Subtotal</h1>
                        <p>{'$' + sum}</p>
                    </div>
                    <div className="one">
                        <h1>Shipping</h1>
                        <p>FREE</p>
                    </div>
                    <div className="one">
                        <h1>Expected Delivery</h1>
                        <p>Apr 20 - 28</p>
                    </div>
                    <div className="one">
                        <h1>Taxes</h1>
                        <p>$11.55</p>
                    </div>
                    <div className="one black">
                        <h1>Total</h1>
                        <p>{'$' + (sum + 11.55)}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        adress: state.userAdress,
        cart: state.cart,
        products: state.products,
        cartCount: state.cartCount
    };
};


export default connect(mapStateToProps, null)(Review);
