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
                <img src={require('../../assets/img/dress.jpg')} alt="dress"/>
                <div className="label flex-center">
                    pants
                </div>
                <div className="shopnow flex-center">
                    SHOP NOW
                </div>
            </div>
        );
    }
}

export default ShopElement;