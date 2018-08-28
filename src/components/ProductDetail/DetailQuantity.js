import React, { Component } from 'react';
import '../../assets/style/QuickView/quantity.less';
import { addCount, removeCount } from '../../actions/userActions';
import { connect } from 'react-redux';

class DetailQuantity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            c: null
        };
    }
    add() {
        this.props.addCount(this.props.id)

    }
    remove() {
        this.props.removeCount(this.props.id)
    }
    getStyles() {
        var added = false;
        const cart = [...this.props.cart];
        cart.forEach(el => {
            if (el.id == this.props.id) {
                added = true;
            }
        });
        if (!added) {
            return {
                pointerEvents: 'none'
            }
        }
    }
    render() {
        var added = false;
        var count;
        const cart = [...this.props.cart];
        cart.forEach(el => {
            if (el.id == this.props.id) {
                added = true;
                count = el.count
            }
        });
        if (!added) {
            count = 1
        }
        return (
            <div className="quantity flex-v-center" style={this.getStyles()}>
                <p>Qty</p>
                <p className="quantity-button flex-center" onClick={this.remove.bind(this)}> - </p>
                <p className="number">{count}</p>
                <p className="quantity-button flex-center" onClick={this.add.bind(this)}> + </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCount: (id) => {
            dispatch(addCount(id))
        },
        removeCount: (id) => {
            dispatch(removeCount(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailQuantity);
