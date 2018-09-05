import React, { Component } from 'react';
import '../../assets/style/ProductDetail/product-detail.less';
import QuickView1 from './QuickView1';
import CustomerReview from './CustomerReview';
import { withRouter } from 'react-router';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { Icon } from 'react-icons-kit';
import Suggetions from './Suggetions';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            heading: '',
            showDetail: false
        };
        this.setHeading = this.setHeading.bind(this);
    }
    setHeading(data) {
        this.setState({
            heading: data
        })
    }
    showdetail() {
        this.setState({
            showDetail: !this.state.showDetail
        })
    }
    render() {
        const id = this.props.match.params.id;
        return (
            <div className="product-detail">
                <div className="heading flex-v-center">
                    {this.state.heading}
                </div>
                <div className="product-detail-body">
                    <QuickView1 id={id} setHeading={this.setHeading} />
                </div>
                <div className="hide-600">
                    <CustomerReview id={id} />
                </div>
                <div className="reveal-600">
                    <div className="wrap">
                        <div className="line"></div>
                        <div className="flex-v-center item" onClick={this.showdetail.bind(this)}>
                            <p>Product Details</p>
                            <Icon icon={ic_keyboard_arrow_down} />
                        </div>
                        {this.state.showDetail &&
                            <CustomerReview id={id} />
                        }
                        <div className="flex-v-center item">
                            <p>Shipping & Returns</p>
                            <Icon icon={ic_keyboard_arrow_down} />
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="sugg-wrap">
                    <Suggetions />
                </div>
            </div>
        );
    }
}

export default withRouter(ProductDetail);