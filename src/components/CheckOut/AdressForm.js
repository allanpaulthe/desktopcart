import React, { Component } from 'react';
import '../../assets/style/CheckOut/adress-form.less';
import { connect } from 'react-redux';

class AdressForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            street: '',
            buliding: '',
            zip: '',
            phno: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        this.props.setAdress(this.state);
    }
    validate(e){
        alert(e)
    }
    render() {
        return (
            <div className="adress-form">
                <div className="one-input ">
                    <p>Full Name</p>
                    <div className="input-wrapper flex-v-center">
                        <input type="text" placeholder="FULL NAME" name="name" value={this.state.name} onChange={this.handleChange} onBlur={this.validate}/>
                    </div>
                </div>
                <div className="one-input ">
                    <p>Street Address</p>
                    <div className="input-wrapper flex-v-center">
                        <input type="text" placeholder="STREET ADRESS" name="street" value={this.state.street} onChange={this.handleChange} />
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
                            <input type="text" placeholder="60613" name="zip" value={this.state.zip} onChange={this.handleChange} />
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
                            <input type="text" placeholder="(123) 456 - 7890" name="phno" value={this.state.phno} onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <p className="add-number">Another number</p>
            </div>
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

