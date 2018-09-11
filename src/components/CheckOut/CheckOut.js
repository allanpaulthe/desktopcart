import React, { Component } from 'react';
import '../../assets/style/CheckOut/check-out.less';
import StatusBar from './StatusBar';
import AdressForm from './AdressForm';
import CartSmall from './CartSmall';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PaymentInfo from './PaymentInfo';
import Review from './Review';
import { connect } from 'react-redux';
import GoogleLog from '../GoogleLogin/GoogleLogin';
import FacebookLogin from '../FacebookLogin/FacebookLogin';
import FacebookLoginBig from '../FacebookLogin/FacebookLoginBig';
import { withAlert } from 'react-alert';

class ButtonCheckOutLarge extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    checkValid() {
        if (this.props.adressValid) {
            this.props.history.push('/checkout/payment')
        }
        else {
            this.props.alert.error('please fill the neccessary fields to continue')
        }
    }
    render() {
        return (
            <div className="bottom-buttons-1 flex-v-center">
                <Link to="/"><button className="right">Continue Shopping</button></Link>
                {this.props.adressValid &&

                    <button className="left" onClick={this.checkValid.bind(this)}>Continue to payment</button>
                }
                {!this.props.adressValid &&

                    <button className="left not-valid" onClick={this.checkValid.bind(this)}>Continue to payment</button>
                }
            </div>
        );
    }
}


class ButtonCheckOutSmall extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goBack() {
        this.props.history.goBack();
    }
    checkValid() {
        if (this.props.adressValid) {
            this.props.history.push('/checkout/payment')
        }
        else {
            this.props.alert.error('please fill the neccessary fields to continue')
        }
    }
    render() {
        return (
            <div className="bottom-buttons-2 flex-v-center">
                <button className="right" onClick={this.goBack.bind(this)}>back</button>
                {this.props.adressValid &&

                    <button className="left" onClick={this.checkValid.bind(this)}>Continue to payment</button>
                }
                {!this.props.adressValid &&

                    <button className="left not-valid" onClick={this.checkValid.bind(this)}>Continue to payment</button>
                }
            </div>
        );
    }
}
const ButtonPaymentLarge = () => {
    return (
        <div className="bottom-buttons-1 flex-v-center">
            <Link to="/"><button className="right">Continue Shopping</button></Link>
            <Link to="/checkout/review"><button className="left"> Continue to Review</button></Link>
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
                <Link to="/checkout/review" ><button className="left"> Continue to Review</button></Link>
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
                opacity: '.35'
            }
        }
    }
    navigate() {
        if (!this.props.isLogged) {
            this.props.alert.error('Please Login to complete your order')
        }
        else {
            this.props.history.push("/thanks");
        }
    }
    render() {
        return (
            <div className="bottom-buttons-1 flex-v-center">
                <Link to="/"><button className="right">Continue Shopping</button></Link>
                <button className="left" style={this.getStyles()} onClick={this.navigate.bind(this)}> Complete Order</button>
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
                opacity: '.35'
            }
        }
    }
    navigate() {
        if (!this.props.isLogged) {
            this.props.alert.error('Please Login to complete your order');
        }
        else {
            this.props.history.push("/thanks");
        }
    }
    render() {
        return (
            <div className="bottom-buttons-2 flex-v-center">
                <button className="right" onClick={this.goBack.bind(this)}>back</button>
                <button className="left" style={this.getStyles()} onClick={this.navigate.bind(this)}> Complete Order</button>
            </div>
        );
    }
}
class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false,
            addressValid: false
        };
        this.makeAddressValid = this.makeAddressValid.bind(this);
    }
    toggleDetail() {
        this.setState({
            showDetail: !this.state.showDetail
        })
    }
    makeAddressValid(bool) {
        this.setState({
            adressValid: bool
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
                <div className="flex-center status-out">
                    <Route exact path="/checkout/review" component={StatusBar} />
                </div>
                <div className="check-out-body">
                    <div className="first">
                        <div className="wrapper flex-center">
                            <Route exact path="/checkout" component={StatusBar} />
                            <Route exact path="/checkout/payment" component={StatusBar} />
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
                                    <h1>{'$' + sum}</h1>
                                    <Icon icon={ic_keyboard_arrow_down} />
                                </div>
                            </div>
                            {
                                this.state.showDetail &&
                                <div className="abs-container">
                                    <CartSmall />
                                </div>
                            }
                        </div>
                        {!this.props.loggedIn &&
                            <div className="login-buttons">
                                <h2>Login with</h2>
                                <div className="buttons">
                                    <FacebookLoginBig />
                                    <GoogleLog big={true} />
                                </div>
                                <div className="buttons-small">
                                    <FacebookLogin />
                                    <GoogleLog big={false} />
                                </div>
                            </div>
                        }
                        <div className="form">
                            <Route exact path="/checkout" render={() => <AdressForm makeAddressValid={this.makeAddressValid} />} />
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
                <Route exact path="/checkout" render={() => <ButtonCheckOutLarge adressValid={this.state.adressValid} history={this.props.history} alert={this.props.alert}/>} />
                <Route exact path="/checkout" render={() => <ButtonCheckOutSmall adressValid={this.state.adressValid} history={this.props.history} alert={this.props.alert}/>} />
                <Route exact path="/checkout/payment" component={ButtonPaymentLarge} />
                <Route exact path="/checkout/payment" component={ButtonPaymentSmall} />
                <Route exact path="/checkout/review" render={() => <ButtonReviewLarge isLogged={this.props.loggedIn} history={this.props.history} alert={this.props.alert} />} />
                <Route exact path="/checkout/review" render={() => <ButtonReviewSmall isLogged={this.props.loggedIn} history={this.props.history} alert={this.props.alert} />} />

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



export default connect(mapStateToProps, null)(withAlert(CheckOut));

