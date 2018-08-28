import React, { Component } from 'react';
import '../../assets/style/Cart/cart-quantity.less';
import { connect } from 'react-redux';
import { addCount, removeCount } from '../../actions/userActions'

class CartQuantity extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    add() {
        this.props.addCount(this.props.id)

    }
    remove() {
        if (this.props.count > 1) {
            this.props.removeCount(this.props.id)
        }
    }
    render() {
        return (
            <div className="cart-quantity flex-v-center">
                <p className="qty">Qty</p>
                <p className="quantity-button flex-center" onClick={this.remove.bind(this)}> - </p>
                <p className="number">{this.props.count}</p>
                <p className="quantity-button flex-center" onClick={this.add.bind(this)}> + </p>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        count1: state.count
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

export default connect(mapStateToProps, mapDispatchToProps)(CartQuantity);
