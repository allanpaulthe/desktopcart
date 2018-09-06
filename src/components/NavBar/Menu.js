import React, { Component } from 'react';
import '../../assets/style/NavBar/menu.less';
import Menulist from './MenuList';
import { connect } from 'react-redux';
import { getMenuDetails } from '../../server/server';
import { Icon } from 'react-icons-kit';
import { bars } from 'react-icons-kit/fa/bars';
import Loader from 'react-loader-spinner';

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
        }).catch(() => {
            this.setState({ data: {} });
        })
    }

    render() {
        const data = this.state.data;
        const className = this.props.menuOn ? 'menu reveal1' : 'menu'
        if (data.length !== undefined) {
            return (
                <div className={className}>
                    {[...data].map((x, i) => (
                        <Menulist key={i} element={x} />
                    ))}
                </div>
            );
        }
        else {
            return (
                <div className={className}>
                    <div className="flex-center full">
                        <Loader
                            type="Ball-Triangle"
                            color="#00BFFF"
                            height="50"
                            width="50"
                        />
                    </div>
                </div>
            )
        }
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
        }).catch(() => {
            this.setState({ data: {} });
        })
    }
    render() {
        const data = this.state.data;
        const className = this.props.menuOn ? 'menu-small reveal' : 'menu-small'
        if (data.length !== undefined) {
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
        else {
            return (
                <div className={className}>
                    <div className="menu-icon">
                        <Icon icon={bars} onClick={() => { this.props.menuToggle() }} />
                    </div>
                    <div className="flex-center full">
                        <Loader
                            type="Ball-Triangle"
                            color="#00BFFF"
                            height="50"
                            width="50"
                        />
                    </div>
                </div>
            )
        }
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
