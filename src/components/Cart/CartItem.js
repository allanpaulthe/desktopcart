import React, { Component } from 'react';
import '../../assets/style/Cart/cart-item.less';
import CartQuantity from './CartQuantity';
import { connect } from 'react-redux';
import { getProductDetails } from '../../server/server';
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
    componentDidMount() {
        getProductDetails(this.props.product.id).then((data) => {
            this.setState({ product: data });
        }).catch((error) => {
            this.setState({ product: {} });
        })
    }
    deleteItem() {
        this.props.deleteItem(this.props.product.id)
    }
    render() {
        return (
            <div className="cart-item">
                <div className="cart-image flex-center">
                    <img src={this.state.product.image_url} alt="" />
                </div>
                <div className="cart-data">
                    <div className="cart-top flex-v-center">
                        <h1>{this.state.product.name}</h1>
                        <div onClick={this.deleteItem.bind(this)}>
                            <img src={require('../../assets/img/icons/delete.svg')} alt="" />
                        </div>
                    </div>
                    <h1 className="brand">
                        {this.state.product.brand}
                    </h1>
                    <div className="cart-bottom flex-v-center">
                        <CartQuantity count={this.props.product.count} id={this.props.product.id} />
                        <p> {'$' + this.state.product.price}</p>
                    </div>
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
