import React, { Component } from 'react';
import '../../assets/style/QuickView/quick-view.less';
import StarRatingComponent from 'react-star-rating-component';
import SizeChart from '../QuickView/SizeChart';
import KitChart from '../QuickView/KitChart';
import DetailQuantity from './DetailQuantity';
import { Icon } from 'react-icons-kit';
import { ic_star_border } from 'react-icons-kit/md/ic_star_border';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/userActions';
import { Link } from 'react-router-dom';
import { getProductDetails } from '../../server/server';


class QuickView1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            selectedImage: 0
        };
    }
    componentWillMount() {
        getProductDetails(this.props.id).then((data) => {
            this.setState({
                product: data
            })
        }).catch(() => {
            this.setState({ product: 6 });
        })
    }
    addToCart() {
        this.props.addToCart(this.props.id);
    }
    changeImage(i) {
        this.setState({
            selectedImage: i
        })
    }
    updateHeading(name) {
        this.props.setHeading(name)
    }
    render() {
        var added = false;
        const cart = [...this.props.cart];
        cart.forEach(el => {
            if (parseInt(el.id, 10) === parseInt(this.props.id, 10)) {
                added = true;
            }
        });
        const products = this.state.product;
        if (products.image_url != null) {
            this.updateHeading(products.name);
            return (
                <div className="quick-view">
                    <div className="quick-body">
                        <div className="quick-first">
                            <div className="pic-list">
                                {[...products.image_url].map((x, i) => (
                                    <img src={x} alt="" className="selected" key={i} onClick={() => this.changeImage(i)} />
                                ))}
                            </div>
                            <div className="pic flex-center">
                                <img src={products.image_url[this.state.selectedImage]} alt="" />
                            </div>
                        </div>
                        <div className="quick-second">
                            <div className="second-top">
                                <h1>{products.name}</h1>
                                <Icon icon={ic_star_border} size={25} />
                            </div>
                            <div className="second-top-2 flex-v-center">
                                <p className="price">{'$' + products.price}</p>
                                <div className="rating">
                                    <StarRatingComponent
                                        name="rate1"
                                        starCount={5}
                                        value={products.rating}
                                        starColor={'#ff6008'}
                                    />
                                </div>
                                <p className="rating-value">{products.rating + ' of 5'}</p>
                            </div>
                            <div className="second-description">
                                <h1>Description</h1>
                                <p>{products.desc} </p>
                                <h2>See more</h2>
                            </div>
                            <SizeChart />
                            <KitChart />
                            <DetailQuantity id={this.props.id} />
                            <div className="custom flex-v-center">
                                <p>Customize Your Jersey</p>
                                <Icon icon={ic_keyboard_arrow_down} size={20} />
                            </div>
                            <div className="button-list">
                                {!added && <Link to="/cart"><button onClick={this.addToCart.bind(this)}>ADD TO CART</button></Link>}
                                {added && <Link to="/cart"><button >ADDED TO CART</button></Link>}
                                <div className="right flex-v-center">
                                    <p className="q flex-center">?</p>
                                    <div className="wish">
                                        <p>ADD TO WISHLIST</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return false
        }
    }
}

export const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {
            dispatch(addToCart(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuickView1);
