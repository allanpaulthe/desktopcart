import React, { Component } from 'react';
import '../../assets/style/CategoryView/FilterView.less';
import SubList from './SubList';
import MenuList from '../NavBar/MenuList'
import SizeList from '../CategoryView/SizeList';
import PriceList from '../CategoryView/PriceList';


const data1 = {
    name: "Apparals",
    list: [{
        type: 'jumpsuits',
        sublist: [
            'Stone ISland',
            'Peter England',
            'Nike'
        ]
    }, {
        type: 'Shorts',
        sublist: [
            'Stone ISland',
            'Peter England',
            'Scullers'
        ]
    }, {
        type: 'Necklaces',
        sublist: [
            'Stone ISland',
            'Peter England',
            'Scullers'
        ]
    }]
}

const data = {
    name: "Styles",
    list: [{
        type: 'Round Neck',
        sublist: [
            'Ikat',
            'Jamdani',
            'Handloom'
        ]
    }, {
        type: 'Color Neck',
        sublist: [
            'Ikat',
            'Jamdani',
            'Handloom'
        ]
    }, {
        type: 'Polo',
        sublist: [
            'Ikat',
            'Jamdani',
            'Handloom'
        ]
    }]
}



class FilterView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    render() {
        return (
            <div className="FilterView">
                <div className="tp flex-v-center">
                    <p className="lefttext">Filters</p>
                    <p className="righttext"> Reset</p>
                </div>
                <div className="line">
                </div>
                <div>
                    <SubList element={data1} main={this.props.main}/>
                </div>
                <div>
                    <MenuList element={data} />
                </div>
                <div className="line">
                </div>
                <SizeList />
                <div className="line">
                </div>
                <PriceList />
            </div>
        );
    }
}

export default FilterView;