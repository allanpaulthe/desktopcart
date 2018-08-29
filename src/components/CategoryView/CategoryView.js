import React, { Component } from 'react';
import '../../assets/style/CategoryView/category-view.less';
import ProductList from '../HomePage/ProductList';
import FilterView from './FilterView';

class CategoryView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="category-view">
                <div className="img-view">
                    <img src="http://10.7.50.88:4000/img/carousal/2" alt="" />
                    <div className="data">
                        <h1>Apparels</h1>
                        <p>White Gold began gaining popularity in the early 1900’s as an alternative to platinum. </p>
                    </div>
                </div>
                <div className="top flex-v-center">
                    <h3>Men</h3>
                    <div className="left">

                    </div>
                </div>
                <div className="category-view-body">
                    <div className="left">
                        <FilterView />
                    </div>
                    <div className="right">
                        <ProductList />
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryView;