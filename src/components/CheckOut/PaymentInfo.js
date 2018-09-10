import React, { Component } from 'react';
import '../../assets/style/CheckOut/payment-info.less';
import CreditCardInput from 'react-credit-card-input';

class PaymentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: true,
            second: false,
            cardNumber: '',
            expiry: '',
            cvc: ''
        };
    }
    toggle() {
        this.setState({
            first: !this.state.first,
            second: !this.state.second
        })
    }
    handleCardNumberChange(e) {
        this.setState({
            cardNumber: e.target.value
        })
    }
    handleCardExpiryChange(e) {
        this.setState({
            expiry: e.target.value
        })
    }
    handleCardCVCChange(e) {
        this.setState({
            cvc: e.target.value
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
                        <CreditCardInput
                            cardNumberInputProps={{ value: this.state.cardNumber, onChange: this.handleCardNumberChange.bind(this) }}
                            cardExpiryInputProps={{ value: this.state.expiry, onChange: this.handleCardExpiryChange.bind(this) }}
                            cardCVCInputProps={{ value: this.state.cvc, onChange: this.handleCardCVCChange.bind(this) }}
                            fieldClassName="input"
                        />
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
                <div className="credit-small">
                    <h3>Credit or Debit Card</h3>
                    <div className="details flex-v-center">
                        <CreditCardInput
                            cardNumberInputProps={{ value: this.state.cardNumber, onChange: this.handleCardNumberChange.bind(this) }}
                            cardExpiryInputProps={{ value: this.state.expiry, onChange: this.handleCardExpiryChange.bind(this) }}
                            cardCVCInputProps={{ value: this.state.cvc, onChange: this.handleCardCVCChange.bind(this) }}
                            fieldClassName="input"
                        />
                    </div>
                    <h4>Enter card number, expiration date & CVV number</h4>
                </div>
                <div className="paypal flex-center">
                    <img src={require('../../assets/img/icons/paypal.svg')} alt="card" />
                </div>
                <div className="paypal flex-center">
                    <img src={require('../../assets/img/icons/apple-pay.svg')} alt="card" />
                </div>
            </div>
        );
    }
}

export default PaymentInfo;