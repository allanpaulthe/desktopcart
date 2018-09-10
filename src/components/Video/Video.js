import React, { Component } from 'react';
import "../../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import '../../assets/style/Video/video.less';
import { connect } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';
import { withRouter } from "react-router-dom";

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillReceiveProps() {
        this.props.videoOFF();
    }
    render() {
        return (
            <OutsideClickHandler
                onOutsideClick={() => {
                    this.props.videoOFF();
                }}
            >

                <Player
                    playsInline
                    poster="/assets/poster.png"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
            </OutsideClickHandler>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        videoOFF: () => {
            dispatch({
                type: 'OFF_VIDEO_VIEW'
            })
        }
    };
};
export default withRouter(connect(null, mapDispatchToProps)(Video));


