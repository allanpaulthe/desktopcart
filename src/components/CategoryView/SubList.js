import React, { Component } from 'react';
import '../../assets/style/NavBar/menu-list.less';
import MenuDropDown from '../NavBar/MenuDropDown';
import { getOneMenuDetails } from '../../server/server';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

class SubList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.main !== this.props.main) {
            getOneMenuDetails(nextProps.main).then((data) => {
                this.props.setSuBMenu(data[0]);
            }).catch(() => {
                this.setState({ data: {} });
            })
        }
    }
    componentWillMount() {
        getOneMenuDetails(this.props.main).then((data) => {
            this.props.setSuBMenu(data[0]);
        }).catch(() => {
            this.setState({ data: {} });
        })
    }
    render() {
        if (this.props.subMenuList.list !== undefined) {
            const element = this.props.subMenuList;
            return (
                <div className="menu-list">
                    <div className="list-heading">
                        {element.name}
                    </div>
                    {[...element.list].map((x, i) => (
                        <MenuDropDown key={i} element={x} main={element.name} />
                    ))}
                </div>
            );
        }
        else {
            return (
                <div className="flex-center full-min">
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height="50"
                        width="50"
                    />
                </div>
            );
        }
    }
}

export const mapStateToProps = (state) => {
    return {
        subMenuList: state.subMenuList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSuBMenu: (data) => {
            dispatch({
                type: "SET_SUB_MENU",
                data: data
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubList);
