import React, { Component } from 'react';
import '../../assets/style/NavBar/menu-drop-down.less';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';


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
    getStyles(){
        if(this.state.open){
            return{
                transform:'scale(1)',
                height:'auto'
            }
        }
        else{
            return{
                transform:'scale(0)'
            }
        }
    }
    render() {
        return (
            <div className="menu-drop-down">
                <div className="top">
                    {!this.state.open && <Icon icon={ic_keyboard_arrow_right} />}
                    {this.state.open && <Icon icon={ic_keyboard_arrow_down} />}
                    <p onClick={this.handleClick.bind(this)}>Jumpsuits</p>
                </div>
                <div className="bottom" style={this.getStyles()}>
                    <ul>
                        <li>Stone ISland</li>
                        <li>Peter England</li>
                        <li>Scullers</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MenuDropDown;