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
                        >
                            <TiltCard className="featured-card-wrapper">
                                <div className="featured-card">
                                    <div className="featured-image-container">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="featured-image"
                                        />
                                        <div className="featured-overlay">
                                            <div className="featured-metrics">
                                                <span className="metric-value">{project.metrics}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="featured-content">
                                        <div className="featured-info">
                                            <span className="featured-client">{project.client}</span>
                                            <h3 className="featured-title">{project.title}</h3>
                                            <span className="featured-type">{project.type}</span>
                                        </div>
                                        <button className="featured-btn">
                                            <ArrowUpRight size={24} />
                                        </button>
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
