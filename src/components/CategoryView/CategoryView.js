import React, { Component } from 'react';
import '../../assets/style/CategoryView/category-view.less';
import ProductList from '../HomePage/ProductList';
import FilterView from './FilterView';
import { list } from 'react-icons-kit/fa/list';
import { th } from 'react-icons-kit/fa/th';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';


class CategoryView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const main = this.props.match.params.main;
        const type = this.props.match.params.type;
        const item = this.props.match.params.item;
        return (
            <div className="category-view">
                <div className="img-view">
                    <img src="http://10.7.50.88:4000/img/carousal/2" alt="" />
                    <div className="data">
                        <h1>{main}</h1>
                        <p>White Gold began gaining popularity in the early 1900’s as an alternative to platinum. </p>
                    </div>
                </div>
                <div className="topp flex-v-center">
                    <div className="flex-v-center">
                        <h3 className="black">{type}</h3>
                        <Icon icon={ic_keyboard_arrow_right} />
                        <h3>{item}</h3>
                    </div>
                    <div className="left">

                    </div>
                </div>
                <div className="buttons">
                    <div className="view-buttons flex-v-center">
                        <Icon icon={list} />
                        <Icon icon={th} />
                    </div>
                    <p>FILTER</p>
                    <p>SORT</p>
                </div>
                <div className="category-view-body">
                    <div className="left">
                        <FilterView main={main}/>
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