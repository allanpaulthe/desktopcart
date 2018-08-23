import React, { Component } from 'react';
import '../../assets/style/QuickView/quantity.less';

class Quantity extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="quantity flex-v-center">
                <p>Qty</p>
                <p className="quantity-button flex-center" > - </p>
                <p className="number">1</p>
                <p className="quantity-button flex-center" > + </p>
            </div>
        );
    }
}

export default Quantity;