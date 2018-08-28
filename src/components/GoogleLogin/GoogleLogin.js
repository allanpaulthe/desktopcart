import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { loginDetailsGoogle } from '../../actions/userActions';
import { connect } from 'react-redux';

class GoogleLog extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    responseGoogle = (response) => {
        console.log(response);
    }
    responseGoogleSuccess = (response) => {
        this.props.login(response);
    }
    render() {
        return (
            <GoogleLogin
                clientId="538667803627-m7k0cfhpan7pcjok5fa4i3ik335s46l0.apps.googleusercontent.com"
                buttonText=""
                onSuccess={this.responseGoogleSuccess}
                onFailure={this.responseGoogle}
                style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none'
                }}
                className="flex-v-center"
            >
                {
                    this.props.big && <img src={require('../../assets/img/icons/google-big.jpg')} alt="" />
                }
                {
                    !this.props.big && <img src={require("../../assets/img/icons/group-14.png")} alt="google" />

                }
            </GoogleLogin>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => {
            dispatch(loginDetailsGoogle(data))
        }
    };
};

export default connect(null, mapDispatchToProps)(GoogleLog);
