import React, { Component } from 'react';
import '../../assets/style/NavBar/menu-list.less';
import MenuDropDown from './MenuDropDown';


class Menulist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }
    render() {
        const element = this.props.element;
        const list = this.props.element.list;
        return (
            <div className="menu-list">
                <div className="list-heading">
                    {element.name}
                </div>
                {[...list].map((x, i) => (
                    <MenuDropDown key={i} element={x} />
                ))}
            </div>
        );
    }
}

export default Menulist;