import React, { Component } from 'react';
import '../../assets/style/ProductDetail/product-detail.less';
import QuickView1 from './QuickView1';
import CustomerReview from './CustomerReview';
import { withRouter } from 'react-router';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { Icon } from 'react-icons-kit';
import Suggetions from './Suggetions';
import { ic_remove } from 'react-icons-kit/md/ic_remove';
import { ic_add } from 'react-icons-kit/md/ic_add'


class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            heading: '',
            showDetail: false,
            showDesc: true
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
    toggleDesc() {
        this.setState({
            showDesc: !this.state.showDesc
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
                <div className="large-desc big">
                    <div className="descr">
                        <div className="top">
                            <h1>Fabric Care</h1>
                            {this.state.showDesc &&
                                <Icon size={20} icon={ic_remove} onClick={this.toggleDesc.bind(this)} />
                            }
                            {!this.state.showDesc &&
                                <Icon size={20} icon={ic_add} onClick={this.toggleDesc.bind(this)} />
                            }
                        </div>
                        {this.state.showDesc &&
                            <div className="main">
                                <p>Fabric Notes</p>
                                <h3>Hand block printed with azo-free dyes. 90% Cotton 10% linen.</h3>
                                <p>Care Instructions</p>
                                <h3>Keep this garment separate in the first few washes to prevent colour runs. When washed garment runs clear, you can throw it into the machine with other like-coloured clothing. Always use delicate machine wash with cold water, or handwash cold for best results. Do not tumble dry. Line dry inside out. Iron inside out using a low-temperature setting. </h3>
                            </div>
                        }
                    </div>
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
                            <div className="smallDesc">
                                <div className="descr">
                                    <div className="top">
                                        <h1>Fabric Care</h1>
                                        {this.state.showDesc &&
                                            <Icon size={20} icon={ic_remove} onClick={this.toggleDesc.bind(this)} />
                                        }
                                        {!this.state.showDesc &&
                                            <Icon size={20} icon={ic_add} onClick={this.toggleDesc.bind(this)} />
                                        }
                                    </div>
                                    {this.state.showDesc &&
                                        <div className="main">
                                            <p>Fabric Notes</p>
                                            <h3>Hand block printed with azo-free dyes. 90% Cotton 10% linen.</h3>
                                            <p>Care Instructions</p>
                                            <h3>Keep this garment separate in the first few washes to prevent colour runs. When washed garment runs clear, you can throw it into the machine with other like-coloured clothing. Always use delicate machine wash with cold water, or handwash cold for best results. Do not tumble dry. Line dry inside out. Iron inside out using a low-temperature setting. </h3>
                                        </div>
                                    }
                                </div>
                                <CustomerReview id={id} />
                            </div>
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