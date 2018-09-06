import React, { Component } from 'react';
import '../../assets/style/HomePage/product-list.less';
import ProductCard from './ProductCard';
import { getProducts } from '../../server/server';
import { setAllProducts } from '../../actions/productsActions';
import { connect } from 'react-redux';
import ProductCardList from './ProductCardList';
import Loader from 'react-loader-spinner';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        getProducts().then((data) => {
            this.props.setProducts(data);
        }).catch(() => {
            this.setState({ data: [] });
        })
    }
    render() {
        const productList = this.props.products;
        if (productList.length !== 0) {
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
                <div className="flex-center full-min">
                    <Loader
                        type="Ball-Triangle"
                        color="#00BFFF"
                        height="50"
                        width="50"
                    />
                </div>
            );
        }
    }
}
export const mapStateToProps = (state) => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setProducts: (data) => {
            dispatch(setAllProducts(data))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

