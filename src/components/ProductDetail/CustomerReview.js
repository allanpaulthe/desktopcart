import React, { Component } from 'react';
import '../../assets/style/ProductDetail/customer-review.less';
import StarRatingComponent from 'react-star-rating-component';
import { getReviewDetails } from '../../server/server';
import Loader from 'react-loader-spinner';


const Review = (props) => {
    const review = props.review;
    return (
        <div className="one-review">
            <div className="rating flex-v-center">
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={review.value}
                    starColor={'#ff6008'}
                />
                <p>{review.value + ' of 5'}</p>
            </div>
            <p className="name">By <span>{review.by} </span>on February 18, 2017</p>
            <p className="name comment">
                {review.comment}
            </p>
        </div>
    )
}

class CustomerReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        getReviewDetails(this.props.id).then((data) => {
            this.setState({ data: data });
        }).catch(() => {
            this.setState({ data: [] });
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            getReviewDetails(this.props.id).then((data) => {
                this.setState({ data: data });
            }).catch(() => {
                this.setState({ data: [] });
            })
        }
    }
    render() {
        if (this.state.data !== undefined && this.state.data.length !== 0) {
            return (
                <div className="CustomerReview">
                    <h1>Customer Reviews</h1>
                    <div className="rating flex-v-center">
                        <StarRatingComponent
                            name="rate1"
                            starCount={5}
                            value={4}
                            starColor={'#ff6008'}
                        />
                        <p>4.8 of 5</p>
                        <div className="new-review flex-v-center">
                            <p>Share your thoughts with other customers</p>
                            <div className="button flex-center">
                                Write a review
                            </div>
                        </div>
                    </div>
                    <h2 className="top-label">Top Customers Reviews</h2>
                    {[...this.state.data].map((x, i) => (
                        <Review review={x} key={i} />
                    ))}
                    <p className="show-more">Show more reviews</p>
                </div>
            );
        }
        else {
            return (
                <div className="flex-center full-min">
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height="50"
                        width="50"
                    />
                </div>
            );
        }
    }
}

export default CustomerReview;
