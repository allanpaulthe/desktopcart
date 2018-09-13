import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { connect } from 'react-redux';

class CartSmallSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 1,
            showCoupan: false
        };
        this.getStyles = this.getStyles.bind(this);
    }
    setDelivary(i) {
        this.props.setDelivary(i);
    }
    getStyles(i) {
        if (i === this.props.selected) {
            return ({
                color: '#2196f3',
                border: 'solid 2px #2196f3'
            })
        }
    }
    showCoupan() {
        this.setState({
            showCoupan: !this.state.showCoupan
        })
    }
    render() {
        let sum = this.props.sum;
        let shipCost = 'Free';
        if (this.props.selected === 1) {
            sum = sum + 0;
        }
        else if (this.props.selected === 2) {
            sum = sum + 5.99;
            shipCost = '$5.99';
        }
        else if (this.props.selected === 3) {
            sum = sum + 17.50;
            shipCost = '$17.50';
        }
        return (
            <div>
                <div className="voucher flex-v-center hide" onClick={this.showCoupan.bind(this)}>
                    <p>Have a Voucher?</p>
                    <Icon icon={ic_keyboard_arrow_down} size={25} />
                </div>
                {this.state.showCoupan &&
                    <div className="coupan-input1">
                        <h3>Discount Code</h3>
                        <div className="flex-v-center">
                            <input type="text" />
                            <button onClick={this.showCoupan.bind(this)}>Apply</button>
                        </div>
                    </div>
                }
                <div className="coupan-input">
                    <h3>Discount Code</h3>
                    <div className="flex-v-center">
                        <input type="text" />
                        <button>Apply</button>
                    </div>
                </div>
                <div className="underline"></div>
                <div className="voucher flex-v-center cost">
                    <p>Subtotal</p>
                    <div>
                        {'$' + this.props.sum}
                    </div>
                </div>
                <div className="voucher flex-v-center cost">
                    <p>Shipping</p>
                    <div>
                        {shipCost}
                    </div>
                </div>
                <div className="underline double"></div>
                <div className="voucher flex-v-center total-cost">
                    <p>Total</p>
                    <div>
                        {'$' + sum}
                    </div>
                </div>


                < h1 className="ship-method">Shipping Method</h1>
                <div className="voucher flex-v-center methods">
                    <h3 className="flex-center" onClick={() => this.setDelivary(1)} style={this.getStyles(1)}>?</h3>
                    <p onClick={() => this.setDelivary(1)}>Free FedEx Ground shipping.</p>
                    <div>
                        Free
                    </div>
                </div>
                <div className="voucher flex-v-center methods">
                    <h3 className="flex-center" onClick={() => this.setDelivary(2)} style={this.getStyles(2)}>?</h3>
                    <p onClick={() => this.setDelivary(2)}>FedEx Ground Shipping. 2-3 business days after processing.</p>
                    <div>
                        $5.99
                    </div>
                </div>
                <div className="voucher flex-v-center methods">
                    <h3 className="flex-center" onClick={() => this.setDelivary(3)} style={this.getStyles(3)}>?</h3>
                    <p onClick={() => this.setDelivary(3)}>FedEx One-Day Shipping</p>
                    <div>
                        $17.50
                    </div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        selected: state.selectedDelivary
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setDelivary: (i) => {
            dispatch({
                type: 'CHANGE_DELEVARY',
                data: i
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartSmallSummary);
