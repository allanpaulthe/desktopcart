import React, { Component } from 'react';
import '../../assets/style/HomePage/product-list.less';
import ProductCard from './ProductCard';
import { connect } from 'react-redux';

class SearchList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const productList = this.props.searchProducts;
        if (productList.length > 0) {
            return (
                <div className="product-list">
                    {[...productList].map((x, i) => (
                        <ProductCard key={i} element={x} />
                    ))}
                </div>
            );
        }
        else {
            return (
                <div className="empty-data flex-center">
                    no matching results!....
                </div>
            );
        }
    }
}
export const mapStateToProps = (state) => {
    return {
        searchProducts: state.searchProducts
    };
};


export default connect(mapStateToProps, null)(SearchList);

