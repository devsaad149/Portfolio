import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import TiltCard from './3D/TiltCard';
import { portfolioData } from '../data/portfolioData';
import './FeaturedWork.css';

const FeaturedWork = () => {
    const { featuredWork } = portfolioData;

    return (
        <section id="work" className="featured-section section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title text-gradient">Featured Projects</h2>
                    <p className="section-subtitle">Selected works that define brands.</p>
                </motion.div>

                <div className="featured-grid grid grid-cols-1 md:grid-cols-2">
                    {featuredWork.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={`featured-item ${index === 2 ? 'full-width' : ''}`}
                        >
                            <TiltCard className="featured-card-wrapper">
                                <div className="featured-card">
                                    <div className="featured-image-container">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="featured-image"
                                            style={project.isLogo ? {
                                                objectFit: 'contain',
                                                padding: '4rem',
                                                backgroundColor: '#050505',
                                                transform: 'scale(1)' // Reset scale to avoid zoom issues
                                            } : {}}
                                        />
                                        <div className="featured-overlay">
                                            <div className="featured-badges">
                                                {project.metrics.map((metric, i) => (
                                                    <span key={i} className="metric-badge">{metric}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="featured-content">
                                        <div className="featured-header">
                                            <div className="featured-meta">
                                                <span className="featured-role">{project.role}</span>
                                                <span className="featured-dot">•</span>
                                                <span className="featured-duration">{project.duration}</span>
                                            </div>
                                            <h3 className="featured-title">{project.title}</h3>
                                            <span className="featured-subtitle">{project.subtitle}</span>
                                        </div>

                                        <div className="featured-body">
                                            <p className="featured-brief">{project.brief}</p>
                                            <div className="featured-tags">
                                                {project.tags && project.tags.map((tag, i) => (
                                                    <span key={i} className="skill-tag">#{tag}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="featured-footer">
                                            <button className="view-case-study-btn">
                                                View Details
                                                <ArrowUpRight size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
