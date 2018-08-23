import React, { Component } from 'react';
import '../../assets/style/HomePage/product-card.less';

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let element = this.props.element;
        return (
            <div className="product-card">
                <div className="image flex-center">
                    <img src={element.image_url} alt="shirt" />
                    <img src={require('../../assets/img/icons/quick-open.svg')} alt="quick open" className="hover" />
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

export default ProductCard;