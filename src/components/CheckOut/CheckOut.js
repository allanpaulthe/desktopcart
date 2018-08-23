import React, { Component } from 'react';
import '../../assets/style/CheckOut/check-out.less';
import StatusBar from './StatusBar';
import AdressForm from './AdressForm';

class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                        <div className="hided-component">
                            hide here
                        </div>
                        <div className="login-buttons">
                            <h2>Login with</h2>
                            <div className="buttons">
                                <img src={require('../../assets/img/icons/fb-big.svg')} alt="" />
                                <img src={require('../../assets/img/icons/google-big.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="form">
                            <AdressForm />
                        </div>
                    </div>
                    <div className="second">
                        component
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckOut;