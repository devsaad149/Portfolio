import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImg from '../assets/profile.png';
import { Link } from 'react-router-dom';
import { LinkedInIcon, WhatsAppIcon } from './SocialIcons';
import Hero3D from './Hero3D';
import { Canvas } from '@react-three/fiber';
import Profile3D from './3D/Profile3D';

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
            <div className="hero__overlay" style={{ background: 'transparent', zIndex: 1 }}></div>

            <div className="container hero__container">
                <div className="hero__grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center', width: '100%' }}>
                    <div className="hero__content-center" style={{ textAlign: 'left', background: 'none', border: 'none', boxShadow: 'none' }}>
                        <h1 className="hero__title fade-in-up">Saad Sohail</h1>
                        <div className="hero__subtitles">
                            <p className="hero__subtitle-main fade-in-up delay-200">Digital Marketing Manager</p>
                            <p className="hero__subtitle-secondary fade-in-up delay-400">Transforming Data into Growth</p>
                        </div>
                        <div className="hero__cta fade-in-up delay-600">
                            <a href="#work" className="btn btn--primary">View My Work</a>
                            <a href="#contact" className="btn btn--outline">Get In Touch</a>
                        </div>
                    </div>

                    <div className="hero__3d-avatar" style={{ height: '500px', cursor: 'pointer' }}>
                        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                            <ambientLight intensity={1} />
                            <pointLight position={[10, 10, 10]} />
                            <Profile3D />
                        </Canvas>
                    </div>
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
