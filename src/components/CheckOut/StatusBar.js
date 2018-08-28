import React, { Component } from 'react';
import '../../assets/style/CheckOut/status-bar.less';
import { Icon } from 'react-icons-kit';
import { ic_check } from 'react-icons-kit/md/ic_check';
import { Route } from 'react-router-dom';

const StatusShippingNot = () => {
    return (
        <div className="round shipping flex-center">
            <p>1</p>
        </div>
    );
}
const StatusShippingYes = () => {
    return (
        <div className="round shipping flex-center completed">
            <Icon icon={ic_check} />
        </div>
    );
}

const StatuspaymentNot = () => {
    return (
        <div className="round payment flex-center">
            <p>2</p>
        </div>
    );
}

const StatuspaymentYes = () => {
    return (
        <div className="round payment flex-center completed">
            <Icon icon={ic_check} />
        </div>
    );
}

const StatusReviewNot = () => {
    return (
        <div className="round review flex-center">
             <p>3</p>
        </div>
    );
}

const StatusReviewYes = () => {
    return (
        <div className="round review flex-center completed">
            <Icon icon={ic_check} />
        </div>
    );
}


class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="status-bar flex-v-center">
                <Route exact path="/checkout" component={StatusShippingNot} />
                <Route exact path="/checkout/payment" component={StatusShippingYes} />
                <Route exact path="/checkout/review" component={StatusShippingYes} />
                <div className="line"></div>
                <Route exact path="/checkout" component={StatuspaymentNot} />
                <Route exact path="/checkout/payment" component={StatuspaymentNot} />
                <Route exact path="/checkout/review" component={StatuspaymentYes} />
                <div className="line"></div>
                <Route exact path="/checkout" component={StatusReviewNot} />
                <Route exact path="/checkout/payment" component={StatusReviewNot} />
                <Route exact path="/checkout/review" component={StatusReviewNot} />
            </div>
        );
    }
}

export default StatusBar;