import React, { Component } from 'react';
import '../../assets/style/HomePage/carousal.less';

class Carousal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgURL: ''
        };
    }
    changePicture = () => {
        let initialURL = '%PUBLIC_URL%/homescreencarousal/';
        this.setState({
            imgURL: initialURL + this.props.images[1]
        })
    }
    componentDidMount(){
        this.changePicture();
    }
    render() {
        return (
            <div className="carousal">
                <img src={this.state.imgURL} alt="carousal" />
            </div>
        );
    }
}

Carousal.defaultProps = {
    images: ['bitmap.png', 'bitmap1.png']
}

export default Carousal;