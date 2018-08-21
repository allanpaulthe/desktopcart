import React, { Component } from 'react';
import '../../assets/style/HomePage/home-page.less';
import OfferBar from './OfferBar';
import NavBar from '../NavBar/NavBar';
import Carousel from './Carousal';
import ProductList from './ProductList';
import About from './About';
import Shop from './Shop';
import Footer from '../Footer/Footer';

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
                <Carousel />
                <div className="container">
                    <div className="header">
                        <div className="caption">
                            Authentic World Cup Kits
                        </div>
                        <div className="buttons">
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