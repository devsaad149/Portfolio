import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import '../styles/global.css';
import './Hero.css';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
    const { name, title, subtitle, cta } = portfolioData.hero;

    const letterAnim = {
        hidden: { y: 100, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.05,
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        }),
    };

    const nameChars = name.split("");

    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-intro"
                    >
                        <span className="hero-greeting">Hello, I'm</span>
                    </motion.div>

                    <h1 className="hero-name">
                        {nameChars.map((char, index) => (
                            <motion.span
                                key={index}
                                custom={index}
                                variants={letterAnim}
                                initial="hidden"
                                animate="visible"
                                className="hero-char"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="hero-title text-gradient"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="hero-subtitle"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="hero-cta-wrapper"
                    >
                        <a href="#work" className="btn-primary hover-lift">
                            {cta}
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="scroll-indicator"
                >
                    <span>Scroll to Explore</span>
                    <ArrowDown className="animate-bounce" size={20} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
