import React, { Component } from 'react';
import '../../assets/style/HomePage/shop.less';
import ShopElement from './ShopElement';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }
    componentDidMount(){
        fetch('http://10.7.50.88:4000/homepage/shop', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'POST, GET'
            }
        }).then(response => response.json())
            .then(data => this.setState({ data: data.data }))
    }
    render() {
        return (
            <div className="shop">
                <div className="shopHeading flex-center">Shop</div>
                <div className="shopList">
                    {[...this.state.data].map((x, i) =>
                        <ShopElement key={i} element={x}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Shop;