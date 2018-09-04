import React, { Component } from 'react';
import FacebookAuth from 'react-facebook-auth';
import { connect } from 'react-redux';

const MyFacebookButton = ({ onClick }) => (
    <img src={require("../../assets/img/icons/group-13.svg")} alt="facebook" onClick={onClick} />
);

class FacebookLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    authenticate = (response) => {
        this.props.login(response);
    };
    render() {
        return (
            <FacebookAuth
                appId="678037169256070"
                callback={this.authenticate}
                component={MyFacebookButton}
            />
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => {
            dispatch({
                type: "FACEBOOK_LOGIN",
                data: data
            })
        }
    };
};

export default connect(null, mapDispatchToProps)(FacebookLogin);
