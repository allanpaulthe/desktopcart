import React, { Component } from 'react';
import '../../assets/style/CheckOut/thanks.less';
import { Link } from 'react-router-dom';

class Thanks extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Thank flex-center">
                <h1>Thank you, your order has been placed</h1>
                <p>Your reference number is #1234abc.
                    An order confirmation email has been sent to </p>
                <p className="email">iscoalarcon22@email.com</p>
                <p className="info">send confirmation to another email</p>
                <Link to="/"><button className="white">Continue Shopping</button></Link>

            </div>
        );
    }
}

export default Thanks;