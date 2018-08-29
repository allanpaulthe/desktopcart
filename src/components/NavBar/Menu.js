import React, { Component } from 'react';
import '../../assets/style/NavBar/menu.less';
import Menulist from './MenuList';
import { connect } from 'react-redux';
import { getMenuDetails } from '../../server/server';

class MenuInner extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {} };
    }
    componentDidMount() {
        getMenuDetails().then((data) => {
            this.setState({
                data: data.data
            })
        })
    }
    render() {
        const data = this.state.data;
        return (
            <div className="menu">
                {[...data].map((x, i) => (
                    <Menulist key={i} element={x} />
                ))}
            </div>
        );
    }
}


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="menu-wrapper">
                {this.props.menuOn && <MenuInner />}
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
