import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Lightbulb, Zap, Award, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './CaseStudies.css';

const CaseStudyCard = ({ study }) => {
    const [activeTab, setActiveTab] = useState('Overview');

    const tabs = [
        { id: 'Overview', icon: Target },
        { id: 'Strategy', icon: Lightbulb },
        { id: 'Results', icon: Award }
    ];

    const content = {
        Overview: (
            <div className="tab-content">
                <h4>The Challenge</h4>
                <p>{study.challenge}</p>
                <div className="impact-stat">
                    <span className="stat-number">High</span>
                    <span className="stat-label">Impact Priority</span>
                </div>
            </div>
        ),
        Strategy: (
            <div className="tab-content">
                <h4>Strategic Approach</h4>
                <p>{study.strategy}</p>
                <ul className="strategy-list">
                    <li><ChevronRight size={14} /> Market Analysis</li>
                    <li><ChevronRight size={14} /> User Persona Definition</li>
                    <li><ChevronRight size={14} /> Omni-channel Activation</li>
                </ul>
            </div>
        ),
        Results: (
            <div className="tab-content">
                <h4>Key Outcomes</h4>
                <p>{study.results}</p>
                <div className="results-grid">
                    <div className="result-item">
                        <span className="result-val">300%</span>
                        <span className="result-lbl">ROI</span>
                    </div>
                    <div className="result-item">
                        <span className="result-val">50k+</span>
                        <span className="result-lbl">Leads</span>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="case-study-card glass-panel"
        >
            <div className="case-header">
                <span className="case-client">{study.client}</span>
                <h3 className="case-title">{study.title}</h3>
            </div>

            <div className="case-tabs">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`case-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    >
                        <tab.icon size={16} />
                        {tab.id}
                    </button>
                ))}
            </div>

            <div className="case-body">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {content[activeTab]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const CaseStudies = () => {
    const { caseStudies } = portfolioData;

    return (
        <section className="case-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-gradient">Deep Dives</h2>
                    <p className="section-subtitle">Solving complex problems with creative solutions.</p>
                </div>

                <div className="case-grid">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard key={study.id} study={study} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
