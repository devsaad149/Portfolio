import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './Expertise.css';

const Expertise = () => {
    const { expertise } = portfolioData;

    return (
        <section className="expertise-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-gradient">Core Competencies</h2>
                    <p className="section-subtitle">A blend of creative vision and technical precision.</p>
                </div>

                <div className="expertise-grid grid grid-cols-2 md:grid-cols-4">
                    {expertise.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="skill-card glass-panel"
                        >
                            <div className="skill-icon-wrapper">
                                <skill.icon size={32} className="skill-icon" />
                            </div>
                            <h3 className="skill-name">{skill.name}</h3>
                            <div className="skill-bar-bg">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="skill-bar-fill"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
