import React, { Component } from 'react';
import '../../assets/style/NavBar/navbar.less';
import OptionHeader from './OptionHeader';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const options = this.props.options;
        return (
            <div className="navbar flex-v-center">
                <div className="first flex-center">
                    <div className="logo flex-center">
                        <img src={require("../../assets/img/logo/group-2@2x.png")} alt="logo" />
                    </div>
                    <div className="options">
                        <ul>
                            {
                                [...options].map((x, i) => (
                                    <OptionHeader name={x} key={i} />
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="second flex-center">
                    <p>LOGIN</p>
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