import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Layers, BarChart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './SocialMedia.css';

const SocialMedia = () => {
    const { socialMedia } = portfolioData;
    const [filter, setFilter] = useState('All');
    const [selectedCampaign, setSelectedCampaign] = useState(null);

    const categories = ['All', 'Real Estate', 'F&B', 'NGO', 'Lifestyle'];

    const filteredItems = filter === 'All'
        ? socialMedia
        : socialMedia.filter(item => item.category === filter);

    return (
        <section className="social-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-gradient">Campaign Strategy</h2>
                    <p className="section-subtitle">Driving engagement through data-backed creative.</p>
                </div>

                <div className="filter-container">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className="social-grid">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="social-card"
                                onClick={() => setSelectedCampaign(item)}
                            >
                                <div className="social-img-wrap">
                                    <img src={item.image} alt={item.title} className="social-img" />
                                    <div className="social-overlay">
                                        <span className="view-btn">View Campaign</span>
                                    </div>
                                </div>
                                <div className="social-info">
                                    <span className="social-cat">{item.category}</span>
                                    <h3 className="social-title">{item.title}</h3>
                                    <div className="social-metrics-preview">
                                        <span>{item.metrics.reach} Reach</span>
                                        <span>•</span>
                                        <span>{item.metrics.engagement} Eng.</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedCampaign && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-backdrop"
                        onClick={() => setSelectedCampaign(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            className="modal-content glass-panel"
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="close-btn" onClick={() => setSelectedCampaign(null)}>
                                <X size={24} />
                            </button>

                            <div className="modal-grid">
                                <div className="modal-image-col">
                                    <img src={selectedCampaign.image} alt={selectedCampaign.title} className="modal-main-img" />
                                </div>

                                <div className="modal-info-col">
                                    <span className="modal-cat">{selectedCampaign.category}</span>
                                    <h2 className="modal-title">{selectedCampaign.title}</h2>
                                    <p className="modal-client">Client: {selectedCampaign.client}</p>

                                    <div className="modal-stats">
                                        <div className="stat-item">
                                            <BarChart size={20} className="text-accent" />
                                            <div>
                                                <span className="stat-val">{selectedCampaign.metrics.reach}</span>
                                                <span className="stat-label">Reach</span>
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <Layers size={20} className="text-accent" />
                                            <div>
                                                <span className="stat-val">{selectedCampaign.metrics.engagement}</span>
                                                <span className="stat-label">Engagement</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-desc">
                                        <h3>Objective</h3>
                                        <p>{selectedCampaign.objective}</p>

                                        <h3>Strategy</h3>
                                        <p>Leveraged high-impact visuals combined with targeted audience segmentation to maximize ROI.</p>
                                    </div>

                                    <button className="btn-primary" style={{ marginTop: '2rem', width: '100%' }}>
                                        View Live Campaign <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default SocialMedia;
