import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hey! My name is
                    <span> Trond Einar Eriksen.</span>
                </h1>
                <p className="h-sub-text">
                    I´m taking a bachelor´s degree at Høyskolen Kristiania called "Frontend- og Mobilutvikling". I like to create cool and visual websites and apps. 
                </p>
                <div className="icons">
                    <a className="icon-holder" href="https://www.facebook.com/trondeinar.eriksen" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a className="icon-holder" href="https://github.com/TrondEinar" target="_blank" >
                    <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </a>
                    <a className="icon-holder" href="https://www.linkedin.com/in/trond-einar-eriksen-970a021a0/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="icon li"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;