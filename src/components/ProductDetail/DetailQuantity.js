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
    render() {
        var added = false;
        var count;
        const cart = [...this.props.cart];
        cart.forEach(el => {
            if (parseInt(el.id, 10) === parseInt(this.props.id, 10)) {
                added = true;
                count = el.count
            }
        });
        if (!added) {
            count = 1
        }
        return (
            <div className="quantity flex-v-center">
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
