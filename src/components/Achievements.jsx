import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './3D/TiltCard';
import FeaturedCaseStudy from './FeaturedCaseStudy';
import './Achievements.css';

const AchievementCard = ({ icon, title, desc, delay }) => {
    return (
        <TiltCard className="achievement-card-wrapper">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                className="achievement-card"
            >
                <span className="achievement-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
            </motion.div>
        </TiltCard>
    );
};

const Achievements = () => {
    const data = [
        {
            icon: "🎯",
            title: "Market Expansion",
            desc: "Identified untapped markets and launched systems resulting in significant revenue increase within 6 months."
        },
        {
            icon: "📈",
            title: "Revenue Growth",
            desc: "Implemented new strategy at Evertise PR, increasing deal size and market cap by 15%."
        },
        {
            icon: "🚀",
            title: "Campaign Performance",
            desc: "Consistently delivered 4.5x ROAS across international Meta advertising campaigns."
        },
        {
            icon: "💌",
            title: "Email Marketing",
            desc: "Boosted email engagement rates by 30% through automation and optimization."
        }
    ];

    return (
        <section id="achievements" className="achievements">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h5 className="section-subtitle">Impact</h5>
                    <h2 className="section-title">Key Achievements</h2>
                </motion.div>

                <FeaturedCaseStudy />

                <div className="achievements__grid">
                    {data.map((item, i) => (
                        <AchievementCard key={i} {...item} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
