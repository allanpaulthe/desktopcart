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
        this.state = {
            data: {},
        };
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
        const className = this.props.menuOn ? 'menu reveal1' : 'menu'
        return (
            <div className={className}>
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
        const className = this.props.menuOn ? 'menu-small reveal' : 'menu-small'
        return (
            <div className={className}>
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
                <MenuInner menuOn={this.props.menuOn} />
                <MenuInnerSmall menuToggle={this.props.menuToggle} menuOn={this.props.menuOn} />
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
