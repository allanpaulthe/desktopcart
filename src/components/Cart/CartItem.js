import React, { Component } from 'react';
import '../../assets/style/Cart/cart-item.less';
import CartQuantity from './CartQuantity';
import { connect } from 'react-redux';
import { deleteItem } from '../../actions/userActions';

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
        this.props.deleteItem(this.props.element.id)
    }
    render() {
        return (
            <div className="cart-item">
                <div className="cont">
                    <div className="cart-image flex-center">
                        <img src={this.props.products[this.props.element.id - 1].image_url} alt="" />
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
                            <p> {'$' + this.props.products[this.props.element.id - 1].price}</p>
                        </div>
                    </div>
                </div>
                <div className="flex-v-center hides">
                            <CartQuantity count={this.props.element.count} id={this.props.element.id} />
                            <p> {'$' + this.props.products[this.props.element.id - 1].price}</p>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        products: state.products
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
