import React, { Component } from 'react';
import '../../assets/style/CategoryView/FilterView.less'

class FilterView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="FilterView">
                <div className="tp flex-v-center">
                    <p className="left">Filters</p>
                    <p className="right"> Reset</p>
                </div>
            </div>
        );
    }
}

export default FilterView;