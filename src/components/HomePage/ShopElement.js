import React, { Component } from 'react';
import '../../assets/style/HomePage/shop-element.less';


class ShopElement extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="shop-element">
                <img src={this.props.element.image_URL} alt="dress"/>
                <div className="label flex-center">
                    {this.props.element.id}
                </div>
                <div className="shopnow flex-center">
                    SHOP NOW
                </div>
            </div>
        );
    }
}

export default ShopElement;