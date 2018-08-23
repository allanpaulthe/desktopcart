import React, { Component } from 'react';
import '../../assets/style/NavBar/navbar.less';
import OptionHeader from './OptionHeader';
import { Icon } from 'react-icons-kit';
import { bars } from 'react-icons-kit/fa/bars';



class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginOn: false
        };
    }
    handleLoginClick() {
        this.setState({
            loginOn: true
        })
    }
    render() {
        const options = this.props.options;
        return (
            <div className="navbar flex-v-center">
                <div className="first flex-center">
                    <div className="menu-icon">
                        <Icon icon={bars} />
                    </div>
                    <div className="cart">
                        <img src={require("../../assets/img/icons/cart.png")} alt="cart" />
                        <div className="count flex-center">1</div>
                    </div>
                    <div className="logo flex-center">
                        <img src={require("../../assets/img/logo/group-2@2x.png")} alt="logo" />
                    </div>
                    <div className="options">
                        <ul>
                            {
                                [...options].map((x, i) => (
                                    <OptionHeader name={x} key={i} id={i} />
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="second flex-center">
                    {!this.state.loginOn && <p onClick={this.handleLoginClick.bind(this)}>LOGIN</p>}
                    {this.state.loginOn &&
                        <div className="flex-center expand">
                            <p>Login with</p>
                            <img src={require("../../assets/img/icons/group-13.svg")} alt="seach" />
                            <img src={require("../../assets/img/icons/group-14.png")} alt="wish list" />
                        </div>
                    }
                    <img src={require("../../assets/img/icons/shape_2.png")} alt="seach" />
                    <img src={require("../../assets/img/icons/shape.png")} alt="wish list" />
                    <div className="cart">
                        <img src={require("../../assets/img/icons/cart.png")} alt="cart" />
                        <div className="count flex-center">1</div>
                    </div>
                </div>
            </div>
        );
    }
}

NavBar.defaultProps = {
    options: [
        'SHOP', 'OUTLET', 'STORES'
    ]
}

export default NavBar;