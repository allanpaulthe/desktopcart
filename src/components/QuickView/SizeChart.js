import React, { Component } from 'react';
import '../../assets/style/QuickView/size-chart.less';

class SizeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
    }
    getStyles = (no) => {
        if (this.props.selected == this.props.index) {
            return {
                backgroundColor: "#263238",
                color: '#ffffff'
            }
        }
        else if (no == 0) {
            return {
                backgroundColor: "rgba(236, 239, 241, 0.4)",
                color: '#455a64',
                pointerEvents: 'none'
            }
        }
        else {
            return {
                border: 'solid 1px #90a4ae',
                color: '#455a64'
            }
        }

    }
    render() {
        return (
            <p className="size-button flex-center" style={this.getStyles(this.props.element.available)} onClick={() => this.props.changeSize(this.props.index)}>{this.props.element.size}</p>
        );
    }
}


class SizeChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 1
        };
        this.changeSize = this.changeSize.bind(this);
    }
    changeSize(index) {
        this.setState({
            selected: index
        })
    }
    render() {
        const sizes = this.props.sizes;
        return (
            <div className="size-chart flex-v-center">
                <p>Size</p>
                {[...sizes].map((x, i) => (
                    <SizeButton key={i} element={x} selected={this.state.selected} index={i} changeSize={this.changeSize} />
                ))}
                <p className="guidline">Size Guidelines</p>
            </div>
        );
    }
}


export default SizeChart;