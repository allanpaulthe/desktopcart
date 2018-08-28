import React, { Component } from 'react';
import '../../assets/style/ProductDetail/customer-review.less';
import StarRatingComponent from 'react-star-rating-component';
import { getReviewDetails } from '../../server/server';


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
    render() {
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
                </div>
                <h2 className="top-label">Top Customers Reviews</h2>
                {[...this.state.data].map((x) => (
                    <Review review={x} />
                ))}
                <p className="show-more">Show more reviews</p>
            </div>
        );
    }
}

export default CustomerReview;
