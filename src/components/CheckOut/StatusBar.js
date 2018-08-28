import React, { Component } from 'react';
import '../../assets/style/CheckOut/status-bar.less';

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="status-bar flex-v-center">
                <div className="round shipping flex-center completed">
                    1
                </div>
                <div className="line  completed"></div>
                <div className="round payment flex-center completed">
                    2
                </div>
                <div className="line"></div>
                <div className="round review flex-center">
                    3
                </div>
            </div>
        );
    }
}

export default StatusBar;