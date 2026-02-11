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
                            I am a results-oriented <strong>Digital Marketing Manager</strong> with over 4 years of experience,
                            specializing in Meta advertising and email marketing automation.
                        </p>
                        <p>
                            My expertise lies in developing data-driven strategies that optimize ROAS and drive
                            sustainable growth. From leading cross-functional teams to managing international
                            campaigns, I focus on turning complex data into actionable insights effectively.
                        </p>
                    </div>

                    <div className="about__stats">
                        <Stat end={4.5} label="Avg ROAS" suffix="x" />
                        <Stat end={30} label="Engagement" suffix="%" />
                        <Stat end={15} label="Growth" suffix="%" />
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
