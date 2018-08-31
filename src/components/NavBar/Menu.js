import React, { Component } from 'react';
import '../../assets/style/NavBar/menu.less';
import Menulist from './MenuList';
import { connect } from 'react-redux';
import { getMenuDetails } from '../../server/server';
import { Icon } from 'react-icons-kit';
import { bars } from 'react-icons-kit/fa/bars';

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

class MenuInnerSmall extends Component {
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
            <div className="menu-small">
                <div className="menu-icon">
                    <Icon icon={bars} onClick={() => { this.props.menuToggle() }} />
                </div>
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
                {this.props.menuOn && <MenuInnerSmall menuToggle={this.props.menuToggle} />}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        menuOn: state.menuOn
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        menuToggle: () => {
            dispatch({
                type: 'MENU_ON_OFF'
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
