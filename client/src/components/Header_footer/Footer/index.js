import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompass} from '@fortawesome/free-solid-svg-icons/faCompass';
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';

const Footer= ()=>{
    return(
        <footer className= "bck_b_dark">
            <div className= "container">
                <div className= "logo">
                    Waves
                </div>
                <div className= "wrapper">
                    <div className= "left">
                        <h2>Contact Information</h2>
                            <div className= "business_nfo">
                                <div className= "tag">
                                    <FontAwesomeIcon
                                        icon={faCompass}
                                        className="icon"
                                        />
                                    <div className="nfo">
                                        <div>Address</div>
                                        <div>1234 Garden Lane</div>
                                    </div>
                                </div>
                                <div className= "tag">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className="icon"
                                        />
                                    <div className="nfo">
                                        <div>Phone</div>
                                        <div>650.888.8888</div>
                                    </div>
                                </div>
                                <div className= "tag">
                                    <FontAwesomeIcon
                                        icon={faClock}
                                        className="icon"
                                        />
                                    <div className="nfo">
                                        <div>Working Hours</div>
                                        <div>10am-5pm Mon-Fri</div>
                                    </div>
                                </div>
                                <div className= "tag">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="icon"
                                        />
                                    <div className="nfo">
                                        <div>email address</div>
                                        <div>guitars@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className= "left">
                        <h2>Be the first to know...</h2>
                            <div>
                                <div>
                                Get all the latest info on events, sales, and offers. Don't miss out!
                                </div>
                            </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};


export default Footer;