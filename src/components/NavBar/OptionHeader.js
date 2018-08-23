import React, { Component } from 'react';
import '../../assets/style/NavBar/option-header.less';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_up } from 'react-icons-kit/md/ic_keyboard_arrow_up';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';

class OptionHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <li className="option-header">
                <p>{this.props.name}</p>
                <Icon icon={ic_keyboard_arrow_down} />
            </li>
        );
    }
}

export default OptionHeader;