import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
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
        title: "Back-in-Stock",
        category: "Automation",
        year: "2024"
    },
    {
        id: 2,
        image: abandonedCartImg,
        title: "Cart Recovery",
        category: "Email & SMS",
        year: "2024"
    },
    {
        id: 3,
        image: metaAdsImg,
        title: "Meta Dashboard",
        category: "Paid Social",
        year: "2023"
    },
    {
        id: 4,
        image: campaignOverviewImg,
        title: "Lead Gen",
        category: "Strategy",
        year: "2023"
    }
];

const PortfolioItem = ({ item, index, setHoveredImg }) => {
    return (
        <motion.div
            className="portfolio_item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredImg(item.image)}
            onMouseLeave={() => setHoveredImg(null)}
        >
            <div className="portfolio_item_header">
                <span className="portfolio_index">0{index + 1}</span>
                <h2 className="portfolio_title">{item.title}</h2>
            </div>

            <div className="portfolio_item_meta">
                <span className="portfolio_cat">{item.category}</span>
                <span className="portfolio_year">{item.year}</span>
            </div>

            <div className="portfolio_arrow">
                <ArrowUpRight size={32} />
            </div>
        </motion.div>
    );
};

const Portfolio = () => {
    const [hoveredImg, setHoveredImg] = useState(null);

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
                        />
                    ))}
                </div>
            </div>

            {/* Hover Image Reveal */}
            <div className="portfolio_reveal_container">
                <AnimatePresence>
                    {hoveredImg && (
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
        </section>
    );
};

export default Portfolio;
