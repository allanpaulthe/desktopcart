import React, { Component } from 'react';
import '../../assets/style/HomePage/product-card.less';
import { onQuickView } from '../../actions/productsActions';
import { connect } from 'react-redux';

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    quickView() {
        this.props.onQuickView(this.props.element.id);
    }
    render() {
        let element = this.props.element;
        return (
            <div className="product-card">
                <div className="image flex-center">
                    <img src={element.image_url} alt="shirt" />
                    <img src={require('../../assets/img/icons/quick-open.svg')} alt="quick open" className="hover" onClick={this.quickView.bind(this)} />
                </div>
                <div className="data">
                    <p className="name">{element.name}</p>
                    <p className="brand">{element.brand}</p>
                    <div className="lastRow">
                        <p className="price">{element.price}</p>
                        <p className='add-to-cart'>Add to Cart</p>
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
