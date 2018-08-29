import React, { Component } from 'react';
import '../../assets/style/QuickView/quantity.less';
import { addCount, removeCount } from '../../actions/userActions';
import { connect } from 'react-redux';

class Quantity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            c: null
        };
    }
    add() {
        this.props.addCount(this.props.selectedQuick)

    }
    remove() {
        this.props.removeCount(this.props.selectedQuick)
    }
    getStyles() {
        var added = false;
        const cart = [...this.props.cart];
        cart.forEach(el => {
            if (parseInt(el.id, 10) === parseInt(this.props.selectedQuick, 10)) {
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
            if (parseInt(el.id, 10) === parseInt(this.props.selectedQuick, 10)) {
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
        cart: state.cart,
        selectedQuick: state.quickSelected,
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

export default connect(mapStateToProps, mapDispatchToProps)(Quantity);
