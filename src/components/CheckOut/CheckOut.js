import React, { Component } from 'react';
import '../../assets/style/CheckOut/check-out.less';
import StatusBar from './StatusBar';
import AdressForm from './AdressForm';
import CartSmall from './CartSmall';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { Link } from 'react-router-dom';


class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false
        };
    }
    toggleDetail() {
        this.setState({
            showDetail: !this.state.showDetail
        })
    }
    goBack() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="check-out">
                <div className="heading flex-v-center">
                    <h1>Checkout</h1>
                </div>
                <div className="check-out-body">
                    <div className="first">
                        <div className="wrapper flex-center">
                            <StatusBar />
                        </div>
                        <div className="hided-component" >
                            <div className="box flex-v-center" onClick={this.toggleDetail.bind(this)}   >
                                {
                                    this.state.showDetail && <div className="right">Hide cart details</div>
                                }
                                {
                                    !this.state.showDetail && <div className="right">Show cart details</div>
                                }

                                <div className="left flex-v-center">
                                    <h1>$165</h1>
                                    <Icon icon={ic_keyboard_arrow_down} />
                                </div>
                            </div>
                            {
                                this.state.showDetail && <CartSmall />
                            }
                        </div>
                        <div className="login-buttons">
                            <h2>Login with</h2>
                            <div className="buttons">
                                <img src={require('../../assets/img/icons/fb-big.svg')} alt="" />
                                <img src={require('../../assets/img/icons/google-big.jpg')} alt="" />
                            </div>
                            <div className="buttons-small">
                                <img src={require('../../assets/img/icons/group-13.svg')} alt="" />
                                <img src={require('../../assets/img/icons/group-14.png')} alt="" />
                            </div>
                        </div>
                        <div className="form">
                            <AdressForm />
                        </div>
                    </div>
                    <div className="second">
                        <CartSmall />
                    </div>
                </div>
                <div className="bottom-buttons-1 flex-v-center">
                    <Link to="/"><button className="right">Continue Shopping</button></Link>
                    <Link to="cartpage/payment" className="left"><button className="left"> Continue to payment</button></Link>
                </div>
                <div className="bottom-buttons-2 flex-v-center">
                    <button className="right" onClick={this.goBack.bind(this)}>back</button>
                    <Link to="cartpage/payment" className="left"><button className="left"> Continue to payment</button></Link>
                </div>
            </div>
        );
    }
}

export default CheckOut;