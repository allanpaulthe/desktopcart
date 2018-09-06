import React, { Component } from 'react';
import '../../assets/style/ProductDetail/suggetions.less';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

class SuggestItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const element = this.props.element;
        return (
            <div className="suggest-item">
                <div className="img-wrap">
                    <Link to={'/product/' + element.id}> <img src={element.image_url[0]} alt="" /></Link>
                </div>
                <div className="data-wrap">
                    <p>{element.name}</p>
                    <h3>{'$' + element.price}</h3>
                </div>
            </div>
        );
    }
}

class suggetions extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        if (this.props.products.length !== 0) {
            return (
                <div className="suggetions">
                    <h2>You May Also Like</h2>
                    <div className="suggest-list">
                        {
                            [...this.props.products].map((x, i) => {
                                if (i <= 2) {
                                    return <SuggestItem key={i} element={x} />
                                }
                                else {
                                    return false
                                }
                            })
                        }
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
        products: state.products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {
            dispatch()
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(suggetions);