import React, { Component } from 'react';
import '../../assets/style/NavBar/navbar.less';
import OptionHeader from './OptionHeader';
import { Icon } from 'react-icons-kit';
import { bars } from 'react-icons-kit/fa/bars';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from '../../server/server';
import { setAllProducts } from '../../actions/productsActions';
import GoogleLog from '../GoogleLogin/GoogleLogin';

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
    componentDidMount() {
        getProducts().then((data) => {
            this.props.setProducts(data);
        }).catch(() => {
            this.setState({ data: [] });
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
                    <Link to="/cart" className="flex-center">
                        <div className="cart">
                            <img src={require("../../assets/img/icons/cart.png")} alt="cart" />
                            {
                                this.props.cartCount > 0 &&
                                <div className="count flex-center">{this.props.cartCount}</div>
                            }
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="logo flex-center">
                            <img src={require("../../assets/img/logo/group-2@2x.png")} alt="logo" />
                        </div>
                    </Link>
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
                    {this.props.loggedIn &&
                        <div className="userDetails flex-v-center">
                            <p>Welcome, {' ' + this.props.userdata.username}</p>
                            <img src={this.props.userdata.pic} alt="" />
                        </div>
                    }
                    {!this.state.loginOn && !this.props.loggedIn && <p onClick={this.handleLoginClick.bind(this)}>LOGIN</p>}
                    {this.state.loginOn && !this.props.loggedIn &&
                        <div className="flex-center expand">
                            <p>Login with</p>
                            <GoogleLog />
                            <img src={require("../../assets/img/icons/group-13.svg")} alt="seach" />
                        </div>
                    }
                    <img src={require("../../assets/img/icons/shape_2.png")} alt="seach" />
                    <img src={require("../../assets/img/icons/shape.png")} alt="wish list" />
                    <Link to="/cart" className="flex-center">
                        <div className="cart">
                            <img src={require("../../assets/img/icons/cart.png")} alt="cart" />
                            {
                                this.props.cartCount &&
                                <div className="count flex-center">{this.props.cartCount}</div>
                            }
                        </div>
                    </Link>
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

export const mapStateToProps = (state) => {
    return {
        cartCount: state.cartCount,
        loggedIn: state.loggedIn,
        userdata: state.userDetails
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setProducts: (data) => {
            dispatch(setAllProducts(data))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
