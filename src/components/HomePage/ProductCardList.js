import React, { Component } from 'react';
import '../../assets/style/HomePage/product-card-list.less';
import { onQuickView } from '../../actions/productsActions';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/userActions';
import { Link } from 'react-router-dom';
import { withAlert } from 'react-alert';


class ProductCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    quickView() {
        this.props.onQuickView(this.props.element.id);
    }
    addToCart() {
        this.props.alert.success("Added to cart");
        this.props.addToCart(this.props.element.id)
    }
    render() {
        const element = this.props.element;
        return (
            <div className="product-card-list">
                <div className="image flex-center">
                    <Link to={'/product/' + this.props.element.id}> <img src={element.image_url[0]} alt="shirt" /></Link>
                    <img src={require('../../assets/img/icons/quick-open.svg')} alt="quick open" className="hover" onClick={this.quickView.bind(this)} />
                </div>
                <div className="data">
                    <p className="name">{element.name}</p>
                    <p className="brand">{element.brand}</p>
                    <div className="lastRow">
                        <p className="price">{'$' + element.price}</p>
                        <p className='add-to-cart' onClick={this.addToCart.bind(this)}>Add to Cart</p>
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
        onQuickView: (id) => {
            dispatch(onQuickView(id))
        },
        addToCart: (id) => {
            dispatch(addToCart(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withAlert(ProductCardList));