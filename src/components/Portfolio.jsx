import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ChevronRight } from 'lucide-react';
import './Portfolio.css';

// Import images
import backInStockImg from '../assets/portfolio/back_in_stock.png';
import abandonedCartImg from '../assets/portfolio/abandoned_cart.png';
import metaAdsImg from '../assets/portfolio/meta_ads.png';
import campaignOverviewImg from '../assets/portfolio/campaign_overview_v2.jpg';

const portfolioItems = [
    {
        id: 1,
        image: backInStockImg,
        title: "Back-in-Stock Automation",
        category: "Email Marketing",
        year: "2024",
        challenge: "High intent traffic was bouncing due to inventory stockouts, leading to lost revenue opportunities.",
        strategy: "Implemented a dynamic 'Notify Me' workflow with personalized restock alerts and urgency triggers.",
        results: ["25% Recovery Rate", "$12k Additional Monthly Rev", "45% Open Rate"],
        insight: "Timing is everything—alerts sent within 1 hour of restock converted 2x higher."
    },
    {
        id: 2,
        image: abandonedCartImg,
        title: "Abandoned Cart Recovery",
        category: "Retention",
        year: "2024",
        challenge: "Cart abandonment rate was at 75%, significantly higher than industry average.",
        strategy: "Designed a 3-part SMS & Email sequence focusing on objection handling and social proof.",
        results: ["18% Recovery Rate", "8% Lift in Total Revenue", "12x ROI on SMS Spend"],
        insight: "Adding a simple text-based SMS 'Is there anything I can help with?' outperformed discount codes."
    },
    {
        id: 3,
        image: metaAdsImg,
        title: "Meta Acquisition Scale",
        category: "Paid Social",
        year: "2023",
        challenge: "Client needed to scale spend from $5k to $25k/mo while maintaining a 3.0 ROAS.",
        strategy: "Rebuilt account structure with CBO, broad targeting, and high-velocity creative testing.",
        results: ["3.8 ROAS at Scale", "$150k+ Revenue Generated", "50% Decrease in CPA"],
        insight: "UGC-style creative outperformed high-production studio assets by 40%."
    },
    {
        id: 4,
        image: campaignOverviewImg,
        title: "Lead Gen Ecosystem",
        category: "Growth Strategy",
        year: "2023",
        challenge: "Lead quality was low, resulting in a wasted sales team effort.",
        strategy: "Implemented a pre-qualifying quiz funnel and lead scoring system before handoff.",
        results: ["300% Increase in SQO", "40% Higher Close Rate", "Zero Increase in CPL"],
        insight: "Adding friction (more questions) actually increased lead quality without dropping conversion volume."
    }
];

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="project-modal"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="project-modal-header">
                    <span className="project-modal-cat">{project.category}</span>
                    <button className="project-modal-close" onClick={onClose}><X size={24} /></button>
                </div>

                <h2 className="project-modal-title">{project.title}</h2>

                <div className="project-modal-grid">
                    <div className="project-modal-content">
                        <div className="modal-section">
                            <h3>Challenge</h3>
                            <p>{project.challenge}</p>
                        </div>
                        <div className="modal-section">
                            <h3>Strategy</h3>
                            <p>{project.strategy}</p>
                        </div>
                        <div className="modal-section">
                            <h3>Key Insight</h3>
                            <p className="insight-text">{project.insight}</p>
                        </div>
                    </div>

                    <div className="project-modal-sidebar">
                        <div className="results-box">
                            <h3>Results</h3>
                            <ul>
                                {project.results.map((res, i) => (
                                    <li key={i}>
                                        <ChevronRight size={16} className="bullet-icon" /> {res}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <img src={project.image} alt={project.title} className="modal-image" />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const PortfolioItem = ({ item, index, setHoveredImg, onClick }) => {
    return (
        <motion.div
            className="portfolio_item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredImg(item.image)}
            onMouseLeave={() => setHoveredImg(null)}
            onClick={() => onClick(item)}
        >
            <div className="portfolio_item_header">
                <span className="portfolio_index">0{index + 1}</span>
                <h2 className="portfolio_title">{item.title}</h2>
            </div>

            <div className="portfolio_item_meta">
                <span className="portfolio_cat">{item.category}</span>
                <span className="portfolio_year hidden-mobile">{item.year}</span>
                <span className="view-case-study">View Case Study</span>
            </div>
        </motion.div>
    );
};

const Portfolio = () => {
    const [hoveredImg, setHoveredImg] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="work" className="portfolio_section">
            <div className="container">
                <div className="portfolio_header_wrap">
                    <h5 className="section-subtitle">Selected Works</h5>
                </div>

                <div className="portfolio_list">
                    {portfolioItems.map((item, index) => (
                        <PortfolioItem
                            key={item.id}
                            item={item}
                            index={index}
                            setHoveredImg={setHoveredImg}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>
            </div>

            {/* Hover Image Reveal */}
            <div className="portfolio_reveal_container">
                <AnimatePresence>
                    {hoveredImg && !selectedProject && (
                        <motion.img
                            key={hoveredImg}
                            src={hoveredImg}
                            alt="Project Preview"
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="portfolio_reveal_img"
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;
