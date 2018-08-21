import React, { Component } from 'react';
import '../../assets/style/HomePage/shop.less';
import ShopElement from './ShopElement';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="shop">
                <div className="shopHeading flex-center">Shop</div>
                <div className="shopList">
                    {Array.apply(null, { length: 4 }).map((x, i) =>
                        <ShopElement key={i}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Shop;