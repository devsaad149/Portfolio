import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import '../styles/global.css';
import './Hero.css';
import { portfolioData } from '../data/portfolioData';

const getAssetPath = (path) => {
    if (!path) return path;
    const isProduction = import.meta.env.PROD;
    const base = isProduction ? '/Portfolio' : '';
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${base}${normalizedPath}`;
};

const Hero = () => {
    const { name, title, subtitle, cta } = portfolioData.hero;

    const bgImage = getAssetPath("/images/saad_image.jpg");

    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-layout">
                    <div className="hero-content">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="hero-greeting">HELLO, I'M</span>
                        </motion.div>

                        <motion.h1
                            className="hero-name"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            {name}
                        </motion.h1>

                        <motion.h2
                            className="hero-role text-gradient"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            {title}
                        </motion.h2>

                        <motion.p
                            className="hero-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            {subtitle}
                        </motion.p>

                        <motion.div
                            className="hero-cta-wrapper"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <a href="#featured-work" className="btn-primary-hero">
                                {cta} <span className="arrow-icon">→</span>
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        className="hero-image-container"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <div className="hero-image-wrapper">
                            <img src={bgImage} alt={name} className="hero-img" />
                            <div className="hero-img-overlay"></div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="scroll-indicator"
                >
                    <span className="scroll-text">SCROLL TO EXPLORE</span>
                    <ArrowDown className="animate-bounce" size={24} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
