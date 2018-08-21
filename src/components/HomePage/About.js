import React, { Component } from 'react';
import '../../assets/style/HomePage/about.less';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="about">
                <div className="heading">About Yell India</div>
                <div className="content">
                    <div className="img">
                        <img src={require('../../assets/img/image.png')} alt="" />
                    </div>
                    <div className="desc">
                        <p className="mission">Our mission is threefold - to foster designer-artisan collaborations, inspire consumers to value provenance and process, and pioneer industry change and sustainability for rural textile communities. </p>
                        <p className="subheads">Artisan Employment Days Created</p>
                        <p className="subdata">123456</p>
                        <p className="subheads">Countries Involved To Date</p>
                        <p className="subdata">india</p>
                        <p className="subdata">china</p>
                        <p className="subdata">sri lanka</p>
                        <p className="subheads">#MatterTribe </p>
                        <p className="subdata">12 designers</p>
                        <p className="subdata">12 factories</p>

                    </div>
                </div>
            </div>
        );
    }
}

export default About;