import React, { Component } from 'react';
import '../../assets/style/HomePage/home-page.less';
import OfferBar from './OfferBar';
import NavBar from '../NavBar/NavBar';
import Menu from '../NavBar/Menu';
import Carousel from './Carousal';
import ProductList from './ProductList';
import About from './About';
import Shop from './Shop';
import Footer from '../Footer/Footer';
import { Icon } from 'react-icons-kit';
import { search } from 'react-icons-kit/fa/search';
import {list} from 'react-icons-kit/fa/list';
import {th} from 'react-icons-kit/fa/th';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="home-page">
                <OfferBar />
                <NavBar />
                <Menu />
                <Carousel />
                <div className="container">
                    <div className="header">
                        <div className="caption">
                            Authentic World Cup Kits
                        </div>
                        <div className="search-bar flex-v-center">
                            <Icon icon={search} />
                            <input type="text" placeholder="Search Kits" />
                        </div>
                        <div className="buttons">
                            <div className="view-buttons flex-v-center">
                                <Icon icon={list} />
                                <Icon icon={th} />
                            </div>
                            <p>FILTER</p>
                            <p>SORT</p>
                        </div>
                    </div>
                    <ProductList />
                    <About />
                    <Shop />
                </div>
                <Footer />
            </div>
        );
    }
}

export default HomePage;