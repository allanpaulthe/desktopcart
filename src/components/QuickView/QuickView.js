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
import ImageGallery from 'react-image-gallery';
import { withAlert } from 'react-alert';

class QuickView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: 0
        };
        this.getStyles = this.getStyles.bind(this);
    }
    closeQuickView() {
        this.props.closeQuickView()
    }
    addToCart() {
        this.props.addToCart(this.props.id);
        this.props.closeQuickView();
        this.props.alert.success('Added to cart')
    }
    changeImage(i) {
        this.setState({
            selectedImage: i
        })
    }
    getStyles(i) {
        if (this.state.selectedImage === i) {
            return ({
                border: "solid 2px #0231b7"
            })
        }
    }
    componentDidMount() {
        document.body.style.overflow = "hidden";
    }
    componentWillUnmount() {
        document.body.style.overflow = "auto";
    }
    render() {
        const id = this.props.id;
        const products = this.props.products;
        const imgObj = products[id - 1].image_url.map(function (entry) {
            var singleObj = {}
            singleObj['original'] = entry;
            return singleObj;
        });
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
                                <img src={x} alt="" style={this.getStyles(i)} key={i} onClick={() => this.changeImage(i)} />
                            ))}
                        </div>
                        <div className="pic flex-center">
                            <img src={products[id - 1].image_url[this.state.selectedImage]} alt="" />
                        </div>
                        <div className="pic reveal flex-center">
                            <ImageGallery
                                items={imgObj}
                                showThumbnails={false}
                                showBullets={true}
                                showPlayButton={false}
                                showNav={false}
                            />
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
                        <div className="line"></div>
                        <div className="second-description">
                            <h1>Description</h1>
                            <p>{products[id - 1].desc} </p>
                            <h2>See more</h2>
                        </div>
                        <SizeChart sizes={products[id - 1].size} />
                        <KitChart />
                        <Quantity/>
                        <div className="custom flex-v-center">
                            <p>Customize Your Jersey</p>
                            <Icon icon={ic_keyboard_arrow_down} size={20} />
                        </div>
                        <div className="button-list">
                            <button onClick={this.addToCart.bind(this)}>ADD TO CART</button>
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
                    <Link to={'/product/' + id} onClick={() => { this.props.closeQuickView() }}> <button>VIEW FULL PRODUCT DETAIL</button></Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(withAlert(QuickView));
