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
import { connect } from 'react-redux';
import { closeQuickView } from '../../actions/productsActions';
import { addToCart } from '../../actions/userActions';
import { Link } from 'react-router-dom';


class QuickView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: 0
        };
    }
    closeQuickView() {
        this.props.closeQuickView()
    }
    addToCart() {
        this.props.addToCart(this.props.id);
        this.props.closeQuickView()
    }
    changeImage(i) {
        this.setState({
            selectedImage: i
        })
    }
    render() {
        var added = false;
        const cart = [...this.props.cart];
        cart.forEach(el => {
            if (parseInt(el.id, 10) === parseInt(this.props.id, 10)) {
                added = true;
            }
        });
        const id = this.props.id;
        const products = this.props.products;
        return (
            <div className="quick-view">
                <div className="quick-header flex-v-center">
                    <h1>Argentina Authentic...</h1>
                    <Icon icon={ic_close} size={30} onClick={this.closeQuickView.bind(this)} />
                </div>
                <div className="quick-body">
                    <div className="quick-first">
                        <div className="pic-list">
                            {[...products[id - 1].image_url].map((x, i) => (
                                <img src={x} alt="" className="selected" key={i} onClick={() => this.changeImage(i)} />
                            ))}
                        </div>
                        <div className="pic flex-center">
                            <img src={products[id - 1].image_url[this.state.selectedImage]} alt="" />
                        </div>
                    </div>
                    <div className="quick-second">
                        <div className="second-top">
                            <h1>{products[id - 1].name}</h1>
                            <Icon icon={ic_star_border} size={25} />
                        </div>
                        <div className="second-top-2 flex-v-center">
                            <p className="price">{'$' + products[id - 1].price}</p>
                            <div className="rating">
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={products[id - 1].rating}
                                    starColor={'#ff6008'}
                                />
                            </div>
                            <p className="rating-value">{products[id - 1].rating + ' of 5'}</p>
                        </div>
                        <div className="second-description">
                            <h1>Description</h1>
                            <p>{products[id - 1].desc} </p>
                            <h2>See more</h2>
                        </div>
                        <SizeChart sizes={products[id - 1].size} />
                        <KitChart />
                        <Quantity />
                        <div className="custom flex-v-center">
                            <p>Customize Your Jersey</p>
                            <Icon icon={ic_keyboard_arrow_down} size={20} />
                        </div>
                        <div className="button-list">
                            {!added && <Link to="/cart"><button onClick={this.addToCart.bind(this)}>ADD TO CART</button></Link>}
                            {added && <Link to="/cart"><button onClick={this.closeQuickView.bind(this)}>ADDED TO CART</button></Link>}
                            <div className="right flex-v-center">
                                <p className="q flex-center">?</p>
                                <div className="wish">
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

export const mapStateToProps = (state) => {
    return {
        products: state.products,
        id: state.quickSelected,
        cart: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeQuickView: (id) => {
            dispatch(closeQuickView(id))
        },
        addToCart: (id) => {
            dispatch(addToCart(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuickView);
