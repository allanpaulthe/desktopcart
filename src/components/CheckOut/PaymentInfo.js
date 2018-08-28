import React, { Component } from 'react';
import '../../assets/style/CheckOut/payment-info.less';

class PaymentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: true,
            second: false
        };
    }
    toggle() {
        this.setState({
            first: !this.state.first,
            second: !this.state.second
        })
    }
    render() {
        return (
            <div className="payment-info">
                <div className="credit">
                    <div className="top flex-v-center">
                        <div className="checkbox " onClick={this.toggle.bind(this)}>
                            {
                                this.state.first && <img src={require('../../assets/img/icons/radio-active.svg')} alt="visa" />
                            }
                            {
                                this.state.second && <img src={require('../../assets/img/icons/oval.svg')} alt="mastercard" />
                            }
                        </div>
                        <h1>Credit Card</h1>
                        <div className="left flex-v-center">
                            <img src={require('../../assets/img/icons/mastercard.svg')} alt="mastercard" />
                            <img src={require('../../assets/img/icons/visa.svg')} alt="visa" />
                            <img src={require('../../assets/img/icons/amex.svg')} alt="amex" />
                        </div>
                    </div>
                    <div className="text">
                        Safe money transfer using your bank account. Visa, Maestro, Discover, American Express.
                    </div>
                    <div className="details flex-v-center">
                        <img src={require('../../assets/img/icons/cc.svg')} alt="card" />
                        <input type="text" placeholder="1234  5678  9012  3456" className="card"/>
                        <input type="text" placeholder="MM/YYYY" className="date"/>
                        <input type="text" placeholder="CVV" className="cvv" />
                    </div>
                    <div className="Help-Text">
                        Enter card number, expiration date & CVV number
                    </div>
                </div>
                <div className="credit">
                    <div className="top flex-v-center">
                        <div className="checkbox " onClick={this.toggle.bind(this)}>
                            {
                                this.state.first && <img src={require('../../assets/img/icons/oval.svg')} alt="mastercard" />
                            }
                            {
                                this.state.second && <img src={require('../../assets/img/icons/radio-active.svg')} alt="visa" />
                            }

                        </div>
                        <h1>PayPal</h1>
                        <div className="left flex-v-center">
                            <img src={require('../../assets/img/icons/bitmap.jpg')} alt="mastercard" />
                        </div>
                    </div>
                    <div className="text">
                        You will be redirected to PayPal website to complete your purchase securely.
                    </div>
                </div>
            </div>
        );
    }
}

export default PaymentInfo;