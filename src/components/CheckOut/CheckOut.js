import React, { Component } from 'react';
import '../../assets/style/CheckOut/check-out.less';
import StatusBar from './StatusBar';
import AdressForm from './AdressForm';
import CartSmall from './CartSmall';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PaymentInfo from './PaymentInfo';
import Review from './Review';
import { connect } from 'react-redux';
import GoogleLog from '../GoogleLogin/GoogleLogin';


const ButtonCheckOutLarge = () => {
    return (
        <div className="bottom-buttons-1 flex-v-center">
            <Link to="/"><button className="right">Continue Shopping</button></Link>
            <Link to="/checkout/payment" className="left"><button className="left"> Continue to payment</button></Link>
        </div>
    );
}
class ButtonCheckOutSmall extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goBack() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="bottom-buttons-2 flex-v-center">
                <button className="right" onClick={this.goBack.bind(this)}>back</button>
                <Link to="/checkout/payment" className="left"><button className="left"> Continue to payment</button></Link>
            </div>
        );
    }
}
const ButtonPaymentLarge = () => {
    return (
        <div className="bottom-buttons-1 flex-v-center">
            <Link to="/"><button className="right">Continue Shopping</button></Link>
            <Link to="/checkout/review" className="left"><button className="left"> Continue to Review</button></Link>
        </div>
    );
}
class ButtonPaymentSmall extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goBack() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="bottom-buttons-2 flex-v-center">
                <button className="right" onClick={this.goBack.bind(this)}>back</button>
                <Link to="/checkout/review" className="left"><button className="left"> Continue to Review</button></Link>
            </div>
        );
    }
}

class ButtonReviewLarge extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getStyles() {
        if (!this.props.isLogged) {
            return {
                pointerEvents: 'none'
            }
        }
    }
    render() {
        return (
            <div className="bottom-buttons-1 flex-v-center">
                <Link to="/"><button className="right">Continue Shopping</button></Link>
                <Link to="/thanks" className="left" style={this.getStyles()}><button className="left"> Complete Order</button></Link>
            </div>
        );
    }
}


class ButtonReviewSmall extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goBack() {
        this.props.history.goBack();
    }
    getStyles() {
        if (!this.props.isLogged) {
            return {
                pointerEvents: 'none'
            }
        }
    }
    render() {
        return (
            <div className="bottom-buttons-2 flex-v-center">
                <button className="right" onClick={this.goBack.bind(this)}>back</button>
                <Link to="/thanks  " className="left" style={this.getStyles()}><button className="left" > Complete Order</button></Link>
            </div>
        );
    }
}
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
    render() {
        const cart = [...this.props.cart];
        const products = this.props.products;
        var sum = 0;
        cart.forEach(el => {
            const count = el.count;
            const price = products[el.id - 1].price;
            sum += (count * price)
        });
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
                                    <h1>{'$'+sum}</h1>
                                    <Icon icon={ic_keyboard_arrow_down} />
                                </div>
                            </div>
                            {
                                this.state.showDetail && <CartSmall />
                            }
                        </div>
                        {!this.props.loggedIn &&
                            <div className="login-buttons">
                                <h2>Login with</h2>
                                <div className="buttons">
                                    <img src={require('../../assets/img/icons/fb-big.svg')} alt="" />
                                    <GoogleLog big={true} />
                                </div>
                                <div className="buttons-small">
                                    <img src={require('../../assets/img/icons/group-13.svg')} alt="" />
                                    <GoogleLog big={false} />
                                </div>
                            </div>
                        }
                        <div className="form">
                            <Route exact path="/checkout" component={AdressForm} />
                            <Route exact path="/checkout/payment" component={PaymentInfo} />
                            <div className="interchange1">
                                <Route exact path="/checkout/review" component={CartSmall} />
                            </div>
                            <div className="interchange2">
                                <Route exact path="/checkout/review" component={Review} />
                            </div>
                        </div>
                    </div>
                    <div className="second">
                        <Route exact path="/checkout" component={CartSmall} />
                        <Route exact path="/checkout/payment" component={CartSmall} />
                        <Route exact path="/checkout/review" component={Review} />
                    </div>
                </div>
                <Route exact path="/checkout" component={ButtonCheckOutLarge} />
                <Route exact path="/checkout" component={ButtonCheckOutSmall} />
                <Route exact path="/checkout/payment" component={ButtonPaymentLarge} />
                <Route exact path="/checkout/payment" component={ButtonPaymentSmall} />
                <Route exact path="/checkout/review" render={() => <ButtonReviewLarge isLogged={this.props.loggedIn} />} />
                <Route exact path="/checkout/review" render={() => <ButtonReviewSmall isLogged={this.props.loggedIn} />} />

            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        cart: state.cart,
        products: state.products,
        cartCount: state.cartCount
    };
};



export default connect(mapStateToProps, null)(CheckOut);

