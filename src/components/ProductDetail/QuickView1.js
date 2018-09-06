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
import { getProductDetails } from '../../server/server';
import ImageGallery from 'react-image-gallery';
import { withAlert } from 'react-alert';
import Loader from 'react-loader-spinner';



class QuickView1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            selectedImage: 0
        };
        this.getStyles = this.getStyles.bind(this);
    }
    componentWillMount() {
        getProductDetails(this.props.id).then((data) => {
            this.setState({
                product: data
            })
        }).catch(() => {
            this.setState({ product: {} });
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            getProductDetails(nextProps.id).then((data) => {
                this.setState({
                    product: data
                })
            }).catch(() => {
                this.setState({ product: {} });
            })
        }
    }
    addToCart() {
        this.props.addToCart(this.props.id);
        this.props.alert.success('Added to cart')
    }
    changeImage(i) {
        this.setState({
            selectedImage: i
        })
    }
    updateHeading(name) {
        this.props.setHeading(name)
    }
    getStyles(i) {
        if (this.state.selectedImage === i) {
            return ({
                border: "solid 2px #0231b7"
            })
        }
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
        if (products !== undefined && Object.keys(products).length !== 0) {
            this.updateHeading(products.name);
            const imgObj = products.image_url.map(function (entry) {
                var singleObj = {}
                singleObj['original'] = entry;
                return singleObj;
            });
            return (
                <div className="quick-view">
                    <div className="quick-body">
                        <div className="quick-first">
                            <div className="pic-list">
                                {[...products.image_url].map((x, i) => (
                                    <img src={x} alt="" style={this.getStyles(i)} key={i} onClick={() => this.changeImage(i)} />
                                ))}
                            </div>
                            <div className="pic flex-center">
                                <img src={products.image_url[this.state.selectedImage]} alt="" />
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
                            <div className="line"></div>
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
                </div>
            );
        }
        else {
            return (
                <div className="flex-center full-min">
                    <Loader
                        type="Ball-Triangle"
                        color="#00BFFF"
                        height="50"
                        width="50"
                    />
                </div>
            );
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

export default connect(mapStateToProps, mapDispatchToProps)(withAlert(QuickView1));
