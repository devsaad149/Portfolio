import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Maximize2,
    BarChart2,
    TrendingUp,
    Users,
    MessageCircle,
    DollarSign,
    X,
    ChevronDown,
    CheckCircle
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './SocialCampaigns.css';

const SocialCampaigns = () => {
    const { socialCampaigns } = portfolioData;
    const [expandedId, setExpandedId] = useState(null);
    const [selectedProof, setSelectedProof] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const getCategoryColor = (category) => {
        const colors = {
            'Real Estate': '#3b82f6',
            'Education': '#10b981',
            'Lifestyle': '#8b5cf6',
            'F&B': '#f97316'
        };
        return colors[category] || '#ffffff';
    };

    return (
        <section id="social-campaigns" className="social-campaigns-section section-padding">
            <div className="container">
                <div className="section-header text-center mb-16">
                    <h2 className="section-title text-gradient">Social Media Performance</h2>
                    <p className="section-subtitle">Data-driven campaigns with measurable business impact.</p>
                    <div className="verified-badge-header">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>All metrics verified by platform analytics</span>
                    </div>
                </div>

                <div className="campaigns-grid">
                    {socialCampaigns.map((campaign) => (
                        <motion.div
                            key={campaign.id}
                            className={`campaign-card ${expandedId === campaign.id ? 'expanded' : ''}`}
                            layout
                            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                        >
                            <motion.div className="campaign-preview" layout="position">
                                <div className="campaign-image-wrapper">
                                    <img
                                        src={campaign.image}
                                        alt={campaign.title}
                                        className="campaign-image"
                                    />
                                    <div className="campaign-overlay">
                                        <div className="campaign-badges">
                                            <span
                                                className="category-badge"
                                                style={{ backgroundColor: getCategoryColor(campaign.category) }}
                                            >
                                                {campaign.category}
                                            </span>
                                            <span className="platform-badge">{campaign.platform}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="campaign-content">
                                    <div className="campaign-header">
                                        <div>
                                            <h3 className="campaign-title">{campaign.title}</h3>
                                            <p className="campaign-client">{campaign.client}</p>
                                        </div>
                                        <button
                                            className="expand-btn"
                                            onClick={() => toggleExpand(campaign.id)}
                                        >
                                            {expandedId === campaign.id ? 'Close' : 'View Details'}
                                        </button>
                                    </div>

                                    <div className="campaign-metrics-grid">
                                        <div className="metric-item">
                                            <DollarSign size={16} />
                                            <div>
                                                <span className="metric-label">Spend</span>
                                                <span className="metric-value">{campaign.stats.spend}</span>
                                            </div>
                                        </div>
                                        <div className="metric-item">
                                            <Users size={16} />
                                            <div>
                                                <span className="metric-label">Reach</span>
                                                <span className="metric-value">{campaign.stats.reach}</span>
                                            </div>
                                        </div>
                                        <div className="metric-item">
                                            <TrendingUp size={16} />
                                            <div>
                                                <span className="metric-label">Impressions</span>
                                                <span className="metric-value">{campaign.stats.impressions}</span>
                                            </div>
                                        </div>
                                        <div className="metric-item highlight">
                                            <CheckCircle size={16} />
                                            <div>
                                                <span className="metric-label">Result</span>
                                                <span className="metric-value">{campaign.stats.results}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <AnimatePresence>
                                {expandedId === campaign.id && (
                                    <motion.div
                                        className="campaign-details"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="details-grid">
                                            <div className="detail-column">
                                                <h4>Objective</h4>
                                                <p>{campaign.objective}</p>

                                                <h4>Strategy</h4>
                                                <p>{campaign.strategy}</p>

                                                <h4>My Role</h4>
                                                <p className="role-tag">{campaign.role}</p>
                                            </div>

                                            <div className="detail-column analytics-column">
                                                <h4>Verified Analytics</h4>
                                                <div
                                                    className="analytics-preview-card"
                                                    onClick={() => setSelectedProof(campaign.proof)}
                                                >
                                                    <BarChart2 size={24} className="analytics-icon" />
                                                    <span>View Platform Data</span>
                                                    <Maximize2 size={16} className="maximize-icon" />
                                                </div>
                                                <p className="analytics-note">
                                                    Click to view verified screenshot from Meta/Ad Manager
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProof && (
                    <motion.div
                        className="proof-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProof(null)}
                    >
                        <motion.div
                            className="proof-modal-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal" onClick={() => setSelectedProof(null)}>
                                <X size={24} />
                            </button>
                            <img src={selectedProof} alt="Analytics Proof" className="proof-image" />
                            <div className="proof-caption">
                                <CheckCircle size={16} className="text-green-500" />
                                Verified Platform Data
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default SocialCampaigns;
