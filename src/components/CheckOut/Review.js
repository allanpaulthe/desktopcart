import React, { Component } from 'react';
import '../../assets/style/CheckOut/review.less';
import { Icon } from 'react-icons-kit';
import { ic_edit } from 'react-icons-kit/md/ic_edit'


class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="revieww">
                <div className="top flex-v-center">
                    <h1>Shipping to:</h1>
                    <Icon icon={ic_edit} />
                </div>
                <p className="data">
                    Francisco Román Alarcón
                </p>
                <p className="data">
                    1060 W Addison St #13

                </p>
                <p className="data">
                    Chicago, IL 60613
                </p>
                <p className="data">
                    (123) 456-7890
                </p>
                <div className="top flex-v-center">
                    <h1>Payment Method:</h1>
                    <Icon icon={ic_edit} />
                </div>
                <p className="data">
                    VISA ending in 8765
                </p>
                <div className="top flex-v-center">
                    <h1>Billing Address</h1>
                    <Icon icon={ic_edit} />
                </div>
                <p className="data">
                    Same as shipping address
                </p>
                <div className="line"></div>
                <div className="summary">
                    <div className="one">
                        <h1>Subtotal</h1>
                        <p>$165</p>
                    </div>
                    <div className="one">
                        <h1>Shipping</h1>
                        <p>FREE</p>
                    </div>
                    <div className="one">
                        <h1>Expected Delivery</h1>
                        <p>Apr 20 - 28</p>
                    </div>
                    <div className="one">
                        <h1>Taxes</h1>
                        <p>$11.55</p>
                    </div>
                    <div className="one black">
                        <h1>Total</h1>
                        <p>$176.55</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Review;