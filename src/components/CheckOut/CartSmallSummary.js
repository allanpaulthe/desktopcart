import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';

class CartSmallSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="voucher flex-v-center hide">
                    <p>Have a Voucher?</p>
                    <Icon icon={ic_keyboard_arrow_down} size={25} />
                </div>
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
                        Free
                        </div>
                </div>
                <div className="underline double"></div>
                <div className="voucher flex-v-center total-cost">
                    <p>Total</p>
                    <div>
                        {'$' + this.props.sum}
                    </div>
                </div>


                < h1 className="ship-method">Shipping Method</h1>
                <div className="voucher flex-v-center methods">
                    <h3 className="flex-center">?</h3>
                    <p>Free FedEx Ground shipping.</p>
                    <div>
                        Free
                        </div>
                </div>
                <div className="voucher flex-v-center methods">
                    <h3 className="flex-center">?</h3>
                    <p>FedEx Ground Shipping. 2-3 business days after processing.</p>
                    <div>
                        $5.99
                        </div>
                </div>
                <div className="voucher flex-v-center methods">
                    <h3 className="flex-center">?</h3>
                    <p>FedEx One-Day Shipping</p>
                    <div>
                        $17.50
                        </div>
                </div>
            </div>
        );
    }
}

export default CartSmallSummary;