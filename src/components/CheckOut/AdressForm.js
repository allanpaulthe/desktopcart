import React, { Component } from 'react';
import '../../assets/style/CheckOut/adress-form.less';
import { connect } from 'react-redux';

class AdressForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            street: '',
            building: '',
            zip: '',
            phno: '',
            validatedAll: false,
            nameError: false,
            streetError: false,
            zipError: false,
            phnoError: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value.length === 0) {
            this.setState({
                [e.target.name + 'Error']: 'This field should be filled',
                [e.target.name + 'Ok']: false
            })
        }
        else {
            this.setState({
                [e.target.name + 'Error']: false,
                [e.target.name + 'Ok']: true
            })
        }
    }
    validate = async(e) =>{
        await this.handleChange(e);
        this.props.setAdress(this.state);
        const state = this.state;
        if (state.nameOk && state.streetOk && state.zipOk && state.phnoOk) {
            this.setState({
                validatedAll: true
            })
            this.props.makeAddressValid(true);
        }
        else {
            this.props.makeAddressValid(false);
        }
    }
    render() {
        return (
            <form action="/checkout/payment">
                <div className="adress-form">
                    <div className="one-input ">
                        <p>Full Name</p>
                        <div className="input-wrapper flex-v-center">
                            <p className="error">{this.state.nameError}</p>
                            <input type="text" placeholder="FULL NAME" name="name" value={this.state.name} onChange={this.validate} onBlur={this.validate} />
                        </div>
                    </div>
                    <div className="one-input ">
                        <p>Street Address</p>
                        <div className="input-wrapper flex-v-center">
                            <p className="error">{this.state.streetError}</p>
                            <input type="text" placeholder="STREET ADRESS" name="street" value={this.state.street} onChange={this.validate} onBlur={this.validate} />
                        </div>
                    </div>
                    <div className="one-input ">
                        <p>Apt, Suite, Bldg (optional)</p>
                        <div className="input-wrapper flex-v-center">
                            <input type="text" placeholder="Unit 13" name="building" value={this.state.building} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="zip">
                        <div className="one-input ">
                            <p>Zip Code</p>
                            <div className="input-wrapper flex-v-center">
                                <p className="error">{this.state.zipError}</p>
                                <input type="number" placeholder="60613" name="zip" value={this.state.zip} onChange={this.validate} onBlur={this.validate} />
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
                                <p className="error">{this.state.phnoError}</p>
                                <input type="number" placeholder="(123) 456 - 7890" name="phno" value={this.state.phno} onChange={this.validate} onBlur={this.validate} />
                            </div>
                        </div>
                    </div>
                    <p className="add-number">Another number</p>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAdress: (adress) => {
            dispatch({
                type: "SET_ADRESS",
                adress: adress
            })
        }
    };
};

export default connect(null, mapDispatchToProps)(AdressForm);

