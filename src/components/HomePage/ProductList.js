import React, { Component } from 'react';
import '../../assets/style/HomePage/product-list.less';
import ProductCard from './ProductCard';
import QuickView from '../QuickView/QuickView';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        fetch('http://10.7.50.88:4000/homepage/products', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'POST, GET'
            }
        }).then(response => response.json())
            .then(data => this.setState({ data: data.data.products }))
    }
    render() {
        const productList = this.state.data;
        return (
            <div className="product-list">
                <QuickView />
                {[...productList].map((x, i) => (
                    <ProductCard key={i} element={x} />
                ))}
            </div>
        );
    }
}

export default ProductList;
