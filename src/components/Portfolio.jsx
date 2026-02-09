import React, { useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { motion } from 'framer-motion';
import TiltCard from './3D/TiltCard';
import './Portfolio.css';

// Import images
import backInStockImg from '../assets/portfolio/back_in_stock.png';
import abandonedCartImg from '../assets/portfolio/abandoned_cart.png';
import metaAdsImg from '../assets/portfolio/meta_ads.png';
import campaignOverviewImg from '../assets/portfolio/campaign_overview_v2.jpg';

const PortfolioCard = ({ image, title, category, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <TiltCard className="portfolio-card">
                <div className="portfolio-image-wrapper">
                    <Zoom>
                        <img
                            src={image}
                            alt={title}
                            className="portfolio-image"
                            loading="lazy"
                        />
                    </Zoom>
                    <div className="portfolio-overlay">
                        <div className="portfolio-content">
                            <span className="portfolio-category">{category}</span>
                            <h3 className="portfolio-title-card">{title}</h3>
                        </div>
                    </div>
                </div>
            </TiltCard>
        </motion.div>
    );
};

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const portfolioItems = [
        {
            image: backInStockImg,
            title: "Back-in-Stock Automation",
            category: "Email Marketing",
            caption: "Email automation workflow using conditional logic."
        },
        {
            image: abandonedCartImg,
            title: "Abandoned Cart Recovery",
            category: "Email & SMS",
            caption: "Strategic cart recovery sequence."
        },
        {
            image: metaAdsImg,
            title: "Meta Ads Dashboard",
            category: "Paid Social",
            caption: "Real campaign results: 3k+ link clicks."
        },
        {
            image: campaignOverviewImg,
            title: "High-Volume Lead Gen",
            category: "Campaign Strategy",
            caption: "Active ad sets delivering consistent results."
        }
    ];

    return (
        <section id="work" className="portfolio-page section-fullscreen">
            <div className="container">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="portfolio-header"
                >
                    <h5 className="section-subtitle">Case Studies</h5>
                    <h2 className="section-title">Selected Work</h2>
                </motion.header>

                <div className="portfolio-grid">
                    {portfolioItems.map((item, index) => (
                        <PortfolioCard
                            key={index}
                            index={index}
                            {...item}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="portfolio-cta"
                >
                    <h3>Ready to scale your business?</h3>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                        <a href="/#contact" className="btn btn--primary">Start a Project</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
