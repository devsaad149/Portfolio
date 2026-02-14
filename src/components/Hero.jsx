import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import '../styles/global.css';
import './Hero.css';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
    const { name, title, subtitle, cta } = portfolioData.hero;

    // PLACEHOLDER IMAGE - Replace this URL with your local image path like "/images/saad_image.png"
    // when you have the file in your public folder.
    const bgImage = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2400&auto=format&fit=crop";

    return (
        <section className="hero-section" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero-overlay"></div>

            <div className="container hero-container">
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
