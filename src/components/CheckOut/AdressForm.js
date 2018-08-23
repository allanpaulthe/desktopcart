import React, { Component } from 'react';
import '../../assets/style/CheckOut/adress-form.less';

class AdressForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="adress-form">
                <div className="one-input ">
                    <p>Full Name</p>
                    <div className="input-wrapper flex-v-center">
                        <input type="text" placeholder="FULL NAME" />
                    </div>
                </div>
                <div className="one-input ">
                    <p>Street Address</p>
                    <div className="input-wrapper flex-v-center">
                        <input type="text" placeholder="STREET ADRESS" />
                    </div>
                </div>
                <div className="one-input ">
                    <p>Apt, Suite, Bldg (optional)</p>
                    <div className="input-wrapper flex-v-center">
                        <input type="text" placeholder="Unit 13" />
                    </div>
                </div>
                <div className="zip">
                    <div className="one-input ">
                        <p>Zip Code</p>
                        <div className="input-wrapper flex-v-center">
                            <input type="text" placeholder="60613" />
                        </div>
                    </div>
                    <div className="add-or-remove">
                        <p className="place">Chicago, IL</p>
                        <div className="buttons ">
                            <p className="flex-center">-</p>
                            <p className="flex-center">+</p>
                        </div>
                    </div>
                </div>
                <div className="phone-number">
                    <div className="one-input ">
                        <p>Phone Number</p>
                        <div className="input-wrapper flex-v-center">
                            <input type="text" placeholder="(123) 456 - 7890" />
                        </div>
                    </div>
                </div>
                <p className="add-number">Another number</p>
            </div>
        );
    }
}

export default AdressForm;