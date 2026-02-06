import React, { useState } from 'react';
import './Header.css';
import { LinkedInIcon, WhatsAppIcon } from './SocialIcons';
import cvFile from '../assets/Saad_Sohail_CV.pdf';

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
        // Prevent scrolling when menu is open
        document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
    };

    const navLinks = [
        { name: 'About', href: '/#about' },
        { name: 'Services', href: '/#services' },
        { name: 'Experience', href: '/#experience' },
        { name: 'Achievements', href: '/#achievements' },
        { name: 'Contact', href: '/#contact' },
    ];

    const socialLinks = {
        linkedin: "https://www.linkedin.com/in/saad-sohail-2b40a5250",
        whatsapp: "https://wa.me/923180820643"
    };

    return (
        <header className="header">
            <div className="header__container">
                <a href="#" className="header__logo">saad<span>.</span></a>

                {/* Desktop Nav */}
                <nav className="header__nav">
                    <div className="header__socials">
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="header__social-icon" aria-label="LinkedIn">
                            <LinkedInIcon size={20} />
                        </a>
                        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="header__social-icon" aria-label="WhatsApp">
                            <WhatsAppIcon size={20} />
                        </a>
                    </div>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="header__link">
                            {link.name}
                        </a>
                    ))}
                    <a href="/work" className="header__cta">View My Work</a>

                    <a
                        href={cvFile}
                        download="Saad_Sohail_Digital_Marketing_CV.pdf"
                        className="header__link btn--download"
                        aria-label="Download Saad Sohail's CV"
                    >
                        <DownloadIcon />
                        Download CV
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={`header__toggle ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <span className="header__bar"></span>
                    <span className="header__bar"></span>
                    <span className="header__bar"></span>
                </button>

                {/* Mobile Menu */}
                <div className={`header__mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
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
                    <a href="/work" className="header__cta" onClick={toggleMenu}>View My Work</a>
                    <a
                        href={cvFile}
                        download="Saad_Sohail_Digital_Marketing_CV.pdf"
                        className="header__cta btn--download"
                        onClick={toggleMenu}
                        style={{ marginTop: '1rem', background: '#10B981', border: 'none' }}
                    >
                        <DownloadIcon />
                        Download CV
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
