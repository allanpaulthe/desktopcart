import React, { Component } from 'react';
import '../../assets/style/CategoryView/price-list.less';

class PriceList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="price-list">
                <p>-Price Range</p>
                <div className="price-drop">
                    {[...this.props.data].map((x, i) => (
                        <p key={i}>{x}</p>
                    ))}
                    <div className="range flex-v-center">
                        <input type="text" name="" id="" placeholder="₹"/>
                        <input type="text" name="" id="" placeholder="₹"/>
                        <button className="flex-center">GO</button>
                    </div>
                </div>
            </div>
        );
    }
}

PriceList.defaultProps = {
    data: [
        'Under ₹500',
        '₹500 - ₹750',
        '₹750 - ₹1,000',
        '₹1,000 - ₹1,500',
        'Over ₹1,500'
    ]
}

export default PriceList;