import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImg from '../assets/profile.png';
import { Link } from 'react-router-dom';
import { LinkedInIcon, WhatsAppIcon } from './SocialIcons';
import Hero3D from './Hero3D';

const Hero = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero section-fullscreen" id="home">
            <div
                className="hero__background"
                style={{ transform: `translateY(${offset * 0.4}px)`, opacity: 0.05 }}
            ></div>
            <div className="hero__overlay" style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1 }}></div>
            <Hero3D />

            <div className="hero__content-center">
                <h1 className="hero__title fade-in-up">Saad Sohail</h1>
                <div className="hero__subtitles">
                    <p className="hero__subtitle-main fade-in-up delay-200">I'm a Digital Marketing Manager</p>
                    <p className="hero__subtitle-secondary fade-in-up delay-400">Based in Pakistan</p>
                </div>
            </div>

            <a href="#services" className="scroll-indicator fade-in delay-600">
                <span>SCROLL</span>
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
            </a>
        </section>
    );
};

export default Hero;
