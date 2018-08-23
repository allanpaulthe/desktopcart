import React, { Component } from 'react';
import '../../assets/style/QuickView/quick-view.less';
import StarRatingComponent from 'react-star-rating-component';
import SizeChart from './SizeChart';
import KitChart from './KitChart';
import Quantity from './Quantity';
import { Icon } from 'react-icons-kit';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { ic_star_border } from 'react-icons-kit/md/ic_star_border';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';


class QuickView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="quick-view">
                <div className="quick-header flex-v-center">
                    <h1>Argentina Authentic...</h1>
                    <Icon icon={ic_close} size={30} />
                </div>
                <div className="quick-body">
                    <div className="quick-first">
                        <div className="pic-list">
                            {Array.apply(null, { length: 5 }).map((x, i) => (
                                <img src={'http://10.7.50.88:4000/img/product/3'} alt="" className="selected" />
                            ))}
                        </div>
                        <div className="pic">
                            <img src={'http://10.7.50.88:4000/img/product/3'} alt="" />
                        </div>
                    </div>
                    <div className="quick-second">
                        <div className="second-top">
                            <h1>Argentina Authentic  Jersey 2018</h1>
                            <Icon icon={ic_star_border} size={25} />
                        </div>
                        <div className="second-top-2 flex-v-center">
                            <p className="price">$ 645</p>
                            <div className="rating">
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={3}
                                    starColor={'#ff6008'}
                                />
                            </div>
                            <p className="rating-value">4.8 of 5</p>
                        </div>
                        <div className="second-description">
                            <h1>Description</h1>
                            <p>Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… </p>
                            <h2>See more</h2>
                        </div>
                        <SizeChart />
                        <KitChart />
                        <Quantity />
                        <div className="custom flex-v-center">
                            <p>Customize Your Jersey</p>
                            <Icon icon={ic_keyboard_arrow_down} size={20} />
                        </div>
                        <div className="button-list">
                            <button>ADD TO CART</button>
                            <div className="right flex-v-center">
                                <p className="q flex-center">?</p>
                                <div  className="wish">
                                    <p>ADD TO WISHLIST</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="quick-bottom flex-center">
                    <button>VIEW FULL PRODUCT DETAIL</button>
                </div>
            </div>
        );
    }
}

export default QuickView;