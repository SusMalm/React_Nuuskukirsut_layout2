import React from 'react';
//import Button from './Button';
import './style.css';

import Social from "./Social";

import facebook from "./img/facebook.svg";
import instagram from "./img/instagram.svg";
import twitter from "./img/twitter.svg";
import youtube from "./img/youtube.svg";


const Footer = ({children}) => {
    return (
        <div className="">

            <div className="row">
                <div className="column">
                 {children}
                </div>
         
            </div >

            <div className="footer_social">
                <Social icon1="socials-icon" icon2={facebook} icon3="https://fi-fi.facebook.com/riveria"/>
                <Social icon1="socials-icon" icon2={instagram} icon3="_blank" />
                <Social icon1="socials-icon" icon2={twitter} icon3="https://twitter.com/riverialainen"/>
                <Social icon1="socials-icon" icon2={youtube} icon3=" _blank" />
            </div>
        </div>
    )
}

export default Footer;