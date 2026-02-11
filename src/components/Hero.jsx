import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const letterAnim = {
        hidden: { y: 100, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        }),
    };

    const title1 = "REVENUE".split("");
    const title2 = "DRIVEN".split("");

    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-text-wrapper">
                    <div className="hero-line">
                        {title1.map((char, index) => (
                            <motion.span
                                key={index}
                                custom={index}
                                variants={letterAnim}
                                initial="hidden"
                                animate="visible"
                                className="hero-char"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>
                    <div className="hero-line indent">
                        {title2.map((char, index) => (
                            <motion.span
                                key={index}
                                custom={index + title1.length}
                                variants={letterAnim}
                                initial="hidden"
                                animate="visible"
                                className="hero-char"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="hero-sub"
                >
                    <h1 className="hero-headline">I Transform Brands Into Revenue Machines<br />Through Data-Driven Strategies.</h1>
                    <a href="#contact" className="btn btn--primary hero-cta">Start a Project</a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
