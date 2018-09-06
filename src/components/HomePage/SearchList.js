import React, { Component } from 'react';
import '../../assets/style/HomePage/product-list.less';
import ProductCard from './ProductCard';
import { connect } from 'react-redux';
import ProductCardList from './ProductCardList';


class SearchList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const productList = this.props.searchProducts;
        if (productList.length > 0) {
            return (
                <div>
                    {this.props.gridView &&
                        <div className="product-list">
                            {[...productList].map((x, i) => (
                                <ProductCard key={i} element={x} />
                            ))}
                        </div>
                    }
                    {!this.props.gridView &&
                        <div className="product-list-view">
                            {[...productList].map((x, i) => (
                                <div>
                                    <ProductCardList key={i} element={x} />
                                    <div className="line"></div>
                                </div>
                            ))}
                        </div>
                    }
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

