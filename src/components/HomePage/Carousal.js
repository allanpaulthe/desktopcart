import React from 'react';
import '../../assets/style/HomePage/carousal.less';


class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0,
            imgUrls: [{
                "id": 1,
                "image_URL": "http://10.7.50.88:4000/img/carousal/1"
            }]
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = this.state.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const lastIndex = this.state.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;
        console.log(this.state.imgUrls)
        this.setState({
            currentImageIndex: index
        });
    }
    componentDidMount() {
        fetch('http://10.7.50.88:4000/homepage/carousal', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'POST, GET'
            }
        }).then(response => response.json())
            .then(data => this.setState({ imgUrls: data.data }))
    }

    render() {
        const rightArrow = require('../../assets/img/icons/arrow-right.svg');
        const leftArrow = require('../../assets/img/icons/arrow-left.svg');
        return (
            <div className="carousel">
                <Arrow direction="left" clickFunction={this.previousSlide} src={leftArrow} />
                <ImageSlide url={this.state.imgUrls[this.state.currentImageIndex].image_URL} />
                <Arrow direction="right" clickFunction={this.nextSlide} src={rightArrow} />
                <div className="info">
                    <p className='text'>Perfect <br />
                        Style, Fit, Comfort</p>
                    <button className='button flex-center'><img src={require('../../assets/img/icons/m.svg')} alt="" /></button>
                </div>
            </div>
        );
    }
}

const Arrow = ({ direction, clickFunction, src }) => (
    <div
        className={`slide-arrow ${direction} flex-v-center`}
        onClick={clickFunction}>
        <img src={src} alt="" />
    </div>
);

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className="image-slide" style={styles}></div>
    );
}



export default Carousel;