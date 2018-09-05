import React, { Component } from 'react';
import '../../assets/style/ProductDetail/suggetions.less';
import { connect } from 'react-redux';

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
                    <img src={element.image_url[0]} alt="" />
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