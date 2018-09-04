import React, { Component } from 'react';
import '../../assets/style/HomePage/shop-element.less';
import { Link } from 'react-router-dom';


class ShopElement extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="shop-element">
                <img src={this.props.element.image_URL} alt="dress" />
                <div className="label flex-center">
                    {this.props.element.id}
                </div>
                <Link to={"/category-small/" + this.props.element.id} >
                    <div className="shopnow flex-center">
                        SHOP NOW
                    </div>
                </Link>
            </div>
        );
    }
}

export default ShopElement;