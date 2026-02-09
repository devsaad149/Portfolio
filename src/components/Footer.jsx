import React from 'react';
import { motion } from 'framer-motion';
import { LinkedInIcon, WhatsAppIcon } from './SocialIcons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <h2>Saad<span>Sohail</span></h2>
                        <p>Digital Marketing Manager</p>
                    </div>

                    <div className="footer__socials">
                        <a href="https://linkedin.com/in/saad-sohail-2b40a5250" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                            <LinkedInIcon size={20} />
                        </a>
                        <a href="https://wa.me/923180820643" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                            <WhatsAppIcon size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; {new Date().getFullYear()} Saad Sohail. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
