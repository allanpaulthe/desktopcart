import React from 'react';
import '../../assets/style/HomePage/carousal.less';


const imgUrls = [
    "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
    "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
    "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
    "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
    "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
];

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        const rightArrow = require('../../assets/img/icons/arrow-right.svg');
        const leftArrow = require('../../assets/img/icons/arrow-left.svg');
        return (
            <div className="carousel">
                <Arrow direction="left" clickFunction={this.previousSlide} src={leftArrow} />
                <ImageSlide url={imgUrls[this.state.currentImageIndex]} />
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