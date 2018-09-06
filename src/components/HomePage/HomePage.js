import React, { Component } from 'react';
import '../../assets/style/HomePage/home-page.less';
import Carousel from './Carousel';
import ProductList from './ProductList';
import About from './About';
import Shop from './Shop';
import { Icon } from 'react-icons-kit';
import { search } from 'react-icons-kit/fa/search';
import { list } from 'react-icons-kit/fa/list';
import { th } from 'react-icons-kit/fa/th';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setSearchString } from '../../actions/userActions';
import SearchList from './SearchList';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchOn: false,
            string: '',
            gridView: true
        };
        this.listStyles = this.listStyles.bind(this);
        this.gridStyles = this.gridStyles.bind(this);
    }
    onSearch(e) {
        if (e.target.value.length > 0) {
            this.setState({
                searchOn: true,
                string: e.target.value
            })
        }
        else {
            this.setState({
                searchOn: false,
                string: e.target.value
            })
        }
        this.props.setSearchString(e.target.value);
    }
    onFocus(e) {
        this.props.setSearchString(e.target.value);
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
        if(this.state.gridView){
            return({
                color:'#90a4ae'
            })
        }
    }
    gridStyles() {
        if(!this.state.gridView){
            return({
                color:'#90a4ae'
            })
        }
    }
    render() {
        return (
            <div className="home-page">
                <Carousel />
                <div className="container" id="shop-body">
                    <div className="header">
                        <div className="caption">
                            Authentic World Cup Kits
                        </div>
                        <div className="search-bar flex-v-center">
                            <Icon icon={search} />
                            <input type="text" placeholder="Search Kits"
                                onChange={this.onSearch.bind(this)}
                                onFocus={this.onFocus.bind(this)}
                                value={this.state.string}
                            />
                        </div>
                        <div className="buttons">
                            <div className="view-buttons flex-v-center">
                                <Icon icon={list} onClick={this.listView.bind(this)} style={this.listStyles()} />
                                <Icon icon={th} onClick={this.gridView.bind(this)} style={this.gridStyles()} />
                            </div>
                            <p>FILTER</p>
                            <p>SORT</p>
                        </div>
                    </div>
                    {this.state.searchOn && <SearchList gridView={this.state.gridView}/>}
                    {!this.state.searchOn && <ProductList gridView={this.state.gridView} />}
                    {!this.state.searchOn && <About />}
                    {!this.state.searchOn && <Shop />}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchString: (data) => {
            dispatch(setSearchString(data))
        }
    };
};
export default withRouter(connect(null, mapDispatchToProps)(HomePage));
