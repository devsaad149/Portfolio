import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Award, Download, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';

const TimelineItem = ({ item, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isCurrent = item.status === "Current Role";

    return (
        <div className={`timeline-item ${isCurrent ? 'current-role' : ''}`}>
            {/* Timeline Marker */}
            <div className={`timeline-marker ${isCurrent ? 'current' : ''}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
            </div>

            {/* Content Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`timeline-card ${isExpanded ? 'expanded' : ''}`}
            >
                <div className="card-header" onClick={() => setIsExpanded(!isExpanded)}>
                    <div className="header-main">
                        <div className="role-group">
                            <h3 className="role-title">{item.role}</h3>
                            {item.subtitle && <span className="role-subtitle">{item.subtitle}</span>}
                        </div>
                        <div className="company-group">
                            <span className="company-name">{item.company}</span>
                            {item.status && <span className="status-badge">{item.status}</span>}
                        </div>
                    </div>

                    <div className="header-meta">
                        <div className="meta-row">
                            <span className="meta-item"><Calendar size={14} /> {item.duration}</span>
                            <span className="meta-item duration-display">({item.durationDisplay})</span>
                        </div>
                        <div className="meta-row">
                            <span className="meta-item"><MapPin size={14} /> {item.location}</span>
                        </div>
                    </div>

                    <button className="expand-btn">
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="card-body"
                        >
                            <div className="body-content">
                                <div className="overview-section">
                                    <h4>Role Overview</h4>
                                    <p>{item.overview}</p>
                                </div>

                                <div className="responsibilities-section">
                                    <h4>Key Responsibilities</h4>
                                    <ul>
                                        {item.responsibilities.map((resp, i) => (
                                            <li key={i}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>

                                {item.portfolio && item.portfolio.length > 0 && (
                                    <div className="portfolio-section">
                                        <h4>Portfolio Managed</h4>
                                        <div className="tags-container">
                                            {item.portfolio.map((p, i) => (
                                                <span key={i} className="portfolio-tag">{p}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="achievement-box">
                                    <Award className="achievement-icon" size={24} />
                                    <div>
                                        <h4>Major Achievement</h4>
                                        <p>{item.achievement}</p>
                                    </div>
                                </div>

                                <div className="skills-section">
                                    {item.skills.map((skill, i) => (
                                        <span key={i} className="skill-pill">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section className="experience-section section-padding" id="experience">
            <div className="container max-w-4xl mx-auto px-4">
                <div className="section-header text-center mb-16">
                    <h2 className="section-title text-gradient text-4xl font-bold mb-4">Professional Experience</h2>
                    <p className="section-subtitle text-xl text-gray-400">4+ years building brands, driving campaigns, and delivering measurable results</p>
                </div>

                <div className="timeline-wrapper">
                    {experience.map((item, index) => (
                        <TimelineItem key={item.id} item={item} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="education-section mt-16 pt-8 border-t border-white/10 text-center"
                >
                    <div className="education-card inline-flex items-center gap-4 bg-white/5 px-8 py-6 rounded-2xl border border-white/10 mb-8 max-w-2xl w-full justify-center">
                        <div className="bg-yellow-500/20 p-3 rounded-full text-yellow-500">
                            <GraduationCap size={32} />
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-white">Bachelor of Business Administration (BBA)</h3>
                            <p className="text-gray-400">Arid University, 2021-2025 <span className="text-sm italic block sm:inline">(Completed while working full-time at Evertise Digital)</span></p>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <a href="/pdfs/Saad_Sohail_CV.pdf" download className="btn btn-primary flex items-center gap-2">
                            <Download size={20} />
                            Download Full CV
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
