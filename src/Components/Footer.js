import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import Form from "./Form";

const Footer = () => {
    return(
        <div>
        <div className="footer-container">
            <div className="center">
            <a href='https://www.facebook.com' target="_blank" rel="noreferrer">
                <FaFacebookF className="footer-icon" />
            </a>
            <a href='https://www.twitter.com' target="_blank" rel="noreferrer">
                <FaTwitter className="footer-icon" />
            </a>
            <a href='https://www.instagram.com' target="_blank" rel="noreferrer">
                <FaInstagram className="footer-icon" />
            </a>
            </div>
            <Form />
            <div className="footer-links">
                <div className="column-links">
                    <p className="link-header">
                        WANDO SUSHI
                    </p>
                    <p className='link-margin link-name'>
                        Delicious rolls and sushi
                    </p>
                    <p className='link-margin link-name'>
                        Only best ingredients
                    </p>
                    <p className='link-margin link-name'>
                        Deliver daily: 9 a.m. - 10 p.m.
                    </p>
                </div>
                <div className="column-links">
                    <p className="link-header">
                        LINKS
                    </p>
                    <p className='link-margin'>
                    <Link to='/' className='link-name'>
                        Home
                    </Link>
                    </p>
                    <p className='link-margin'>
                    <Link to='/promo' className='link-name'>
                        Promo
                    </Link>
                    </p>
                    <p className='link-margin'>
                    <Link to='/delivery' className='link-name'>
                        Delivery
                    </Link>
                    </p>
                </div>
                <div className="column-links">
                    <p className="link-header">
                        CONTACT
                    </p>
                    <p className='link-margin link-name'>
                        <FaLocationDot className='address-icon' />New York, NY 11122, US
                    </p>
                    <p className='link-margin link-name'>
                        <FaEnvelope className='address-icon' />info@wando-sushi.com
                    </p>
                    <p className='link-margin link-name'>
                        <FaPhoneAlt className='address-icon' />+ 01 234 567 88
                    </p>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>© 2018 Copyright: Wando-sushi.com</p>

        </div>
        </div>
    )
}

export default Footer;