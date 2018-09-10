import React, { Component } from 'react';
import '../../assets/style/NavBar/menu-drop-down.less';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class MenuDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    handleClick() {
        this.setState({
            open: !this.state.open
        })
    }
    getStyles() {
        if (this.state.open) {
            return {
                transform: 'scale(1)',
                height: 'auto'
            }
        }
        else {
            return {
                transform: 'scale(0)'
            }
        }
    }
    render() {
        const element = this.props.element;
        const list = this.props.element.sublist;
        return (
            <div className="menu-drop-down">
                <div className="top" onClick={this.handleClick.bind(this)}>
                    {!this.state.open && <Icon icon={ic_keyboard_arrow_right} />}
                    {this.state.open && <Icon icon={ic_keyboard_arrow_down} />}
                    <p>{element.type}</p>
                </div>
                <div className="bottom" style={this.getStyles()}>
                    <ul>
                        {
                            [...list].map((x, i) => (
                                <Link to={"/category/" + this.props.main + "/" + element.type + "/" + x} onClick={() => { this.props.menuOff() }} key={i}><li>{x}</li></Link>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuOff: () => {
            dispatch({
                type: 'MENU_OFF'
            })
        }
    };
};

export default connect(null, mapDispatchToProps)(MenuDropDown);
