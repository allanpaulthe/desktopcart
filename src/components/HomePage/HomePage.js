import React, { Component } from 'react';
import '../../assets/style/HomePage/home-page.less';
import OfferBar from './OfferBar';
import NavBar from '../NavBar/NavBar';
import Carousal from './Carousal';

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
                <Carousal />
            </div>
        );
    }
}

export default HomePage;