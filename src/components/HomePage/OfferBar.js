import React from 'react';
import '../../assets/style/HomePage/offer-bar.less';

const OfferBar = (props) => {
    const offerText = props.offerText;
    return (
        <div className="offer-bar flex-center">
            <p>{offerText}</p>
        </div>
    )
}

OfferBar.defaultProps = {
    offerText: 'Free shipping for orders above  ₹ 1500'
}

export default OfferBar;