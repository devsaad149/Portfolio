import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './Expertise.css';

const Expertise = () => {
    const { coreCompetencies } = portfolioData;

    return (
        <section className="expertise-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-gradient">Core Competencies</h2>
                    <p className="section-subtitle">Marketing expertise across strategy, execution, and team leadership</p>
                </div>

                <div className="expertise-grid">
                    {coreCompetencies.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="competency-card group"
                        >
                            <div className="icon-wrapper">
                                <skill.icon size={36} strokeWidth={1.5} />
                            </div>
                            <h3 className="skill-title">{skill.name}</h3>
                            <p className="skill-description">{skill.description}</p>
                            <div className="card-accent"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
