import React, { Component } from 'react';
import '../../assets/style/CategoryView/category-view.less';
import ProductList from '../HomePage/ProductList';
import FilterView from './FilterView';
import { list } from 'react-icons-kit/fa/list';
import { th } from 'react-icons-kit/fa/th';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import Loader from 'react-loader-spinner';


class CategoryView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gridView: true,
            imageStatus: "loaded"
        };
        this.listStyles = this.listStyles.bind(this);
        this.gridStyles = this.gridStyles.bind(this);
    }
    listView() {
        this.setState({
            gridView: false
        })
    }
    gridView() {
        this.setState({
            gridView: true
        })
    }
    listStyles() {
        if (this.state.gridView) {
            return ({
                color: '#90a4ae'
            })
        }
    }
    gridStyles() {
        if (!this.state.gridView) {
            return ({
                color: '#90a4ae'
            })
        }
    }
    handleImageErrored() {
        this.setState({ imageStatus: "loading" });
    }
    render() {
        const main = this.props.match.params.main;
        const type = this.props.match.params.type;
        const item = this.props.match.params.item;
        return (
            <div className="category-view">
                {this.state.imageStatus === "loaded" &&
                    <div className="img-view">
                        <img src="http://10.7.50.88:4000/categories/1" alt="fghfg"
                            onError={() => this.handleImageErrored()}
                        />
                        <div className="data">
                            <h1>{main}</h1>
                            <p>White Gold began gaining popularity in the early 1900’s as an alternative to platinum. </p>
                        </div>
                    </div>
                }
                {this.state.imageStatus === "loading" &&
                    <div className="img-view">
                        <div className="flex-center full-min">
                            <Loader
                                type="ThreeDots"
                                color="#00BFFF"
                                height="50"
                                width="50"
                            />
                        </div>
                    </div>
                }
                <div className="topp flex-v-center">
                    <div className="flex-v-center">
                        {type &&
                            <div className="flex-v-center">
                                <h3 className="black">{type}</h3>
                                <Icon icon={ic_keyboard_arrow_right} />
                                <h3>{item}</h3>
                            </div>
                        }{!type &&
                            <h3 className="black">{main}</h3>
                        }
                    </div>
                    <div className="left">

                    </div>
                </div>
                <div className="buttons">
                    <div className="view-buttons flex-v-center">
                        <Icon icon={list} onClick={this.listView.bind(this)} style={this.listStyles()} />
                        <Icon icon={th} onClick={this.gridView.bind(this)} style={this.gridStyles()} />
                    </div>
                    <p>FILTER</p>
                    <p>SORT</p>
                </div>
                <div className="category-view-body">
                    <div className="left">
                        <FilterView main={main} />
                    </div>
                    <div className="right">
                        <ProductList gridView={this.state.gridView} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryView;