import React, { Component } from 'react';
import '../../assets/style/NavBar/menu.less';
import Menulist from './MenuList';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="menu-wrapper">
                <div className="menu">
                    {Array.apply(null, { length: 6 }).map((x, i) => (
                        <Menulist />
                    ))}
                </div>
            </div>
        );
    }
}

export default Menu;