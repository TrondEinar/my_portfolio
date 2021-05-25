import React from 'react';
import about from '../img/about.png';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Trond Einar Eriksen</span></h4>
                <p className="about-text">
                    Loren ipsum dolor sitt amet concenet aididigff elite.
                    VOlftj jfjfksklkfk pfkfkrgf jdkfkjf kdlfdfj kdfjdk fkdfjkd.
                    Desire per lo la ta dooso vi slone ve?
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Trond Einar Eriksen</p>
                        <p>: 22</p>
                        <p>: Norwegian</p>
                        <p>: Norwegian, English, German</p>
                        <p>: Brannvålsveien 1009, 2560 Alvdal, Norway</p>
                        <p>: Lorem Ipsum</p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
}

export default ImageSection;