import React, { Component } from 'react';
import '../../assets/style/QuickView/kit-chart.less';


class SizeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getStyles = (no) => {
        if (this.props.selected == this.props.index) {
            return {
                backgroundColor: "#263238",
                color: '#ffffff'
            }
        }
        else if (no === 0) {
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
            <p className="kit-button flex-center" style={this.getStyles(this.props.element.available)} onClick={() => this.props.onChange(this.props.index)}>{this.props.element.size}</p>
        );
    }
}


class KitChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
        this.changeKit = this.changeKit.bind(this);
    }
    changeKit(index) {
        this.setState({
            selected: index
        })
    }
    render() {
        const sizes = this.props.sizes;
        return (
            <div className="kit-chart flex-v-center">
                <p>Kit</p>
                {[...sizes].map((x, i) => (
                    <SizeButton key={i} element={x} selected={this.state.selected} onChange={this.changeKit} index={i} />
                ))}
            </div>
        );
    }
}

KitChart.defaultProps = {
    sizes: [
        {
            size: 'AWAY',
            available: '2'
        },
        {
            size: 'HOME',
            available: '1'
        },
        {
            size: 'THIRD',
            available: '0'
        }
    ]
}

export default KitChart;