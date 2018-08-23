import React, { Component } from 'react';
import '../../assets/style/NavBar/option-header.less';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_up } from 'react-icons-kit/md/ic_keyboard_arrow_up';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { connect } from 'react-redux';
import { menuToggle } from '../../actions/productsActions';

class OptionHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    menuToggle(){
        this.props.menuToggle(this.props.id);
    }
    render() {
        return (
            <li className="option-header" onClick={this.menuToggle.bind(this)}>
                <p>{this.props.name}</p>
                <Icon icon={ic_keyboard_arrow_down} />
            </li>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuToggle: (id) => {
            dispatch(menuToggle(id))
        }
    };
};

export default connect(null,mapDispatchToProps)(OptionHeader);

