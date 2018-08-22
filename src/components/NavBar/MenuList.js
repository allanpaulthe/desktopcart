import React, { Component } from 'react';
import '../../assets/style/NavBar/menu-list.less';
import MenuDropDown from './MenuDropDown';

class Menulist extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="menu-list">
                <div className="list-heading">
                    Apparels
                </div>
                {Array.apply(null, { length: 5 }).map((x, i) => (
                    <MenuDropDown />
                ))}
            </div>
        );
    }
}

export default Menulist;