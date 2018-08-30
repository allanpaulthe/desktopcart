import React, { Component } from 'react';
import '../../assets/style/ProductDetail/product-detail.less';
import QuickView1 from './QuickView1';
import CustomerReview from './CustomerReview';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            heading: ''
        };
        this.setHeading = this.setHeading.bind(this);
    }
    setHeading(data) {
        this.setState({
            heading: data
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
                <CustomerReview id={id} />
            </div>
        );
    }
}

export default ProductDetail;