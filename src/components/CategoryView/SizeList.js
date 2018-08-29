import React, { Component } from 'react';
import '../../assets/style/CategoryView/size-list.less';

const sizes = ['s', 'm', 'l', 'xl']

class SmallBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getStyle() {
        if (this.props.index === this.props.selected) {
            return {
                backgroundColor: '#f3f3f3',
                border: 'solid 1px #dedede'
            }
        }
    }
    render() {
        return (
            <div className="rect flex-center" onClick={() => this.props.onClick(this.props.index)} style={this.getStyle()}>
                {this.props.size}
            </div>
        );
    }
}


class SizeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick(index) {
        this.setState({
            selected: index
        })
    }
    render() {
        return (
            <div className="size-list">
                <p>-SIZES</p>
                <div className="list">
                    {[...sizes].map((x, i) => (
                        <SmallBox size={x} key={i} index={i}
                            onClick={this.onClick}
                            selected={this.state.selected}
                        />
                    ))}
                </div>
                <p className="dark">see our Sizing Guide</p>
            </div>
        );
    }
}

export default SizeList;