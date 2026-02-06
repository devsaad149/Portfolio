import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import './Achievements.css';

const AchievementCard = ({ icon, title, desc, delay }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

    return (
        <div
            className={`achievement-card reveal ${isVisible ? 'active' : ''}`}
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <span className="achievement-icon">{icon}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
};

import FeaturedCaseStudy from './FeaturedCaseStudy';

const Achievements = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

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
        <section id="achievements" className="achievements" ref={ref}>
            <div className="container">
                <div className={`section-header reveal ${isVisible ? 'active' : ''}`}>
                    <h2 className="section-title">Key Achievements</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Delivering impact through execution</p>
                </div>

                <FeaturedCaseStudy />

                <div className="achievements__grid">
                    {data.map((item, i) => (
                        <AchievementCard key={i} {...item} delay={i * 100} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
