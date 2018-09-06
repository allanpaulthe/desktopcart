import React, { Component } from 'react';
import '../../assets/style/Cart/cart-item.less';
import CartQuantity from './CartQuantity';
import { connect } from 'react-redux';
import { deleteItem } from '../../actions/userActions';
import { Link } from 'react-router-dom';
import { withAlert } from 'react-alert';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                image_url: '',
                name: ''
            }
        };
    }
    deleteItem() {
        this.props.alert.error('Item deleted')
        this.props.deleteItem(this.props.element.id)
    }
    render() {
        const cart = this.props.cart;
        let count = 0;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == this.props.element.id) {
                count = cart[i].count;
            }
        }
        return (
            <div className="cart-item">
                <div className="cont">
                    <div className="cart-image flex-center">
                        <Link to={'/product/' + this.props.element.id}><img src={this.props.products[this.props.element.id - 1].image_url[0]} alt="" /></Link>
                    </div>
                    <div className="cart-data">
                        <div className="cart-top flex-v-center">
                            <h1>{this.props.products[this.props.element.id - 1].name}</h1>
                            <div onClick={this.deleteItem.bind(this)}>
                                <img src={require('../../assets/img/icons/delete.svg')} alt="" />
                            </div>
                        </div>
                        <h1 className="brand">
                            {this.props.products[this.props.element.id - 1].brand}
                        </h1>
                        <div className="cart-bottom flex-v-center">
                            <CartQuantity count={this.props.element.count} id={this.props.element.id} />
                            <p> {'$' + (this.props.products[this.props.element.id - 1].price * count)}</p>
                        </div>
                    </div>
                </div>
                <div className="flex-v-center hides">
                    <CartQuantity count={this.props.element.count} id={this.props.element.id} />
                    <p> {'$' + (this.props.products[this.props.element.id - 1].price * count)}</p>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        products: state.products,
        cart: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => {
            dispatch(deleteItem(id))
        },
    };
};


CartItem.defaultProps = {
    productId: 1
}

export default connect(mapStateToProps, mapDispatchToProps)(withAlert(CartItem));
