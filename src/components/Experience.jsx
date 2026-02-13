import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';

const TimelineItem = ({ item, index }) => {
    const isLeft = index % 2 === 0;

    return (
        <div className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="timeline-content glass-panel"
            >
                <div className="timeline-header">
                    <h3 className="role-title">{item.role}</h3>
                    <span className="company-name text-gradient">{item.company}</span>
                </div>

                <div className="timeline-meta">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                </div>

                <ul className="timeline-achievements">
                    {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                    ))}
                </ul>
            </motion.div>

            <div className="timeline-dot">
                <Briefcase size={16} />
            </div>
        </div>
    );
};

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section className="experience-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-gradient">Professional Journey</h2>
                    <p className="section-subtitle">Experience that shapes my perspective.</p>
                </div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    {experience.map((item, index) => (
                        <TimelineItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
