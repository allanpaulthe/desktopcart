import React, { Component } from 'react';
import '../../assets/style/QuickView/kit-chart.less';

const getStyles = (no) => {
    if (no == 0) {
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

const SizeButton = (props) => {
    return (
        <p className="kit-button flex-center" style={getStyles(props.element.available)}>{props.element.size}</p>
    );
}

class KitChart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const sizes = this.props.sizes;
        return (
            <div className="kit-chart flex-v-center">
                <p>Kit</p>
                {[...sizes].map((x, i) => (
                    <SizeButton key={i} element={x} />
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