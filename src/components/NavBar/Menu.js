import React, { Component } from 'react';
import '../../assets/style/NavBar/menu.less';
import Menulist from './MenuList';
import { connect } from 'react-redux';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="menu-wrapper">
                {this.props.menuOn && <div className="menu">
                    {Array.apply(null, { length: 6 }).map((x, i) => (
                        <Menulist key={i} />
                    ))}
                </div>}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        menuOn: state.menuOn
    };
};

export default connect(mapStateToProps, null)(Menu);
