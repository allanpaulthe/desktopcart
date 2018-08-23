import React, { Component } from 'react';
import '../../assets/style/HomePage/product-list.less';
import ProductCard from './ProductCard';
import { getProducts } from '../../server/server';
import { setAllProducts } from '../../actions/productsActions';
import { connect } from 'react-redux';



class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        getProducts().then((data) => {
            this.props.setProducts(data);
        }).catch((error) => {
            this.setState({ data: [] });
        })
    }
    render() {
        const productList = this.props.products;
        return (
            <div className="product-list">
                {[...productList].map((x, i) => (
                    <ProductCard key={i} element={x}/>
                ))}
            </div>
        );
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

