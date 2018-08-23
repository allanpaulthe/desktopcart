import React, { Component } from 'react';
import '../../assets/style/Footer/footer.less';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="footer">
                <div className="footer-top">
                    <div className="listgroup">
                        <div className="categories">
                            <h3>Categories</h3>
                            <p>About us</p>
                            <p>Testimonials</p>
                            <p>Contact</p>
                            <p>Journal</p>
                            <p>Privacy Policy</p>
                        </div>
                        <div className="partners">
                            <h3>Partners </h3>
                            <p>Support</p>
                            <p>Shipping&Returns</p>
                            <p>Size Guide</p>
                            <p>Product Care</p>
                        </div>
                        <div className="contact">
                            <h3>Contact us</h3>
                            <p>26A, Netaji Aparel Park, <br />
                                Tirupur, India, 641601 <br /> <br />+91 421 220 1550</p>
                        </div>
                    </div>
                    <div className="subscribe">
                        <h3>Subscribe to newsletter</h3>
                        <div className="footer-input">
                            <input type="text" placeholder="ENTER YOUR EMAIL" />
                            <button>SUBSCRIBE</button>
                        </div>
                        <div className="footer-icons">
                            <img src={require('../../assets/img/icons/facebook-icon.svg')} alt="" />
                            <img src={require('../../assets/img/icons/twitter-icon.svg')} alt="" />
                        </div>
                    </div>
                </div>
                <div className="footer-copyright flex-center">
                    © Copyright YELL INDIA  2018
                </div>
            </div>
        );
    }
}

export default Footer;