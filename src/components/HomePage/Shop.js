import React, { Component } from 'react';
import '../../assets/style/HomePage/shop.less';
import ShopElement from './ShopElement';
import Loader from 'react-loader-spinner';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
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
                {this.state.data.length !== 0 &&
                    <div className="shopList">
                        {[...this.state.data].map((x, i) =>
                            <ShopElement key={i} element={x} />
                        )}
                    </div>
                }
                {this.state.data.length === 0 &&
                    <div className="flex-center full-min">
                        <Loader
                            type="Ball-Triangle"
                            color="#00BFFF"
                            height="50"
                            width="50"
                        />
                    </div>
                }

            </div>
        );
    }
}

export default Shop;