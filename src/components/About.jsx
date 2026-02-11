import React from 'react';
import { motion } from 'framer-motion';
import { useCounter } from '../hooks/useCounter';
import './About.css';
import profileImg from '../assets/profile.png';

const Stat = ({ end, label, suffix = '', prefix = '' }) => {
    // We'll use a simple inView trigger for the counter
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="stat-card"
        >
            <span className="stat-number">
                {prefix}{end}{suffix}
            </span>
            <span className="stat-label">{label}</span>
        </motion.div>
    );
};

const About = () => {
    return (
        <section id="about" className="about section-fullscreen">
            <div className="container about__container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="about__image-column"
                >
                    <div className="about__image-wrapper">
                        <img src={profileImg} alt="Saad Sohail" className="about__image" />
                        <div className="about__image-glow"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="about__content"
                >
                    <h5 className="section-subtitle">Bio</h5>
                    <h2 className="section-title">Who Am I?</h2>

                    <div className="about__text">
                        <p>
                            It started with a curiosity for how brands communicate, but it quickly evolved into an obsession with <strong>measurable growth</strong>.
                        </p>
                        <p>
                            I don’t just run ads; I engineer <strong>revenue ecosystems</strong>. My philosophy is simple: data dictates the strategy, but creativity drives the conversion.
                        </p>
                        <p>
                            Whether it’s scaling a startup’s first campaign or optimizing a global brand’s ROAS, I focus on one thing—turning meaningful engagement into <strong>tangible business results</strong>.
                        </p>
                        <br />
                        <p style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>
                            "I bridge the gap between creative storytelling and hard data."
                        </p>
                    </div>

                    <div className="about__stats">
                        <Stat end={4.5} label="Avg ROAS" suffix="x" prefix="" />
                        <Stat end={30} label="Engagement Lift" suffix="%" prefix="+" />
                        <Stat end={7} label="Figure Revenue" suffix="+" prefix="$" />
                        <Stat end={4} label="Years Exp" suffix="+" />
                    </div>

                    <div className="about__actions">
                        <a href="/Saad_Sohail_CV.pdf" download="Saad_Sohail_CV.pdf" className="btn btn--primary">Download CV</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
