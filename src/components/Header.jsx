import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LinkedInIcon, WhatsAppIcon } from './SocialIcons';
import cvFile from '../assets/Saad_Sohail_CV.pdf';
import './Header.css';

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
);

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
    };

    const navLinks = [
        { name: 'About', href: '/#about' },
        { name: 'Services', href: '/#services' },
        { name: 'Work', href: '/#work' },
        { name: 'History', href: '/#experience' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <header className="header">
            <div className="header__container">
                <a href="/" className="header__logo">Saad<span>Sohail</span></a>

                <nav className="header__nav">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="header__link">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="header__cta">Let's Talk</a>
                </nav>

                <button
                    className={`header__toggle ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <div className="header__bar"></div>
                    <div className="header__bar"></div>
                    <div className="header__bar"></div>
                </button>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="header__mobile-menu"
                        >
                            <div className="mobile-menu-links">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="header__mobile-link"
                                        onClick={toggleMenu}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                            <div className="mobile-menu-footer">
                                <a href="/Saad_Sohail_CV.pdf" download className="btn btn--primary">
                                    <DownloadIcon /> Download CV
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
