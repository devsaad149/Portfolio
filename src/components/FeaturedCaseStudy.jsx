import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useCounter } from '../hooks/useCounter';
import './FeaturedCaseStudy.css';

const Metric = ({ icon, end, label, prefix = '', suffix = '', decimals = 0 }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.5 });
    const value = useCounter(end, 2000, 0, isVisible);

    return (
        <div className="metric-card" ref={ref}>
            <span className="metric-card__icon">{icon}</span>
            <span className="metric-card__value">
                {prefix}{value.toFixed(decimals)}{suffix}
            </span>
            <span className="metric-card__label">{label}</span>
        </div>
    );
};

const FeaturedCaseStudy = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

    return (
        <div className={`featured-case reveal ${isVisible ? 'active' : ''}`} ref={ref}>
            <div className="featured-case__header">
                <div>
                    <span className="featured-case__label">Featured Client Success</span>
                    <h3 className="featured-case__title">HSQ TOWERS</h3>
                    <div className="featured-case__meta">Real Estate Lead Generation | Nov 2025 - Jan 2026</div>
                </div>
            </div>

            <div className="featured-case__body">
                <div className="featured-case__info">
                    <h4>Challenge</h4>
                    <p>Launch and scale lead generation for a luxury residential tower in Murree, aiming for high-intent prospects via Instagram messaging.</p>

                    <h4>Strategy</h4>
                    <ul>
                        <li>• Multi-creative messaging campaigns (50% discount offers)</li>
                        <li>• Seasonal winter-themed amenities highlight</li>
                        <li>• Full-funnel approach: Traffic → Engagement → Conversions</li>
                    </ul>

                    <h4>Impact</h4>
                    <p>Generated a high-volume qualified lead pipeline (5,700+ new contacts) with exceptional cost efficiency.</p>
                </div>

                <div className="featured-case__data">
                    <div className="featured-case__metrics">
                        <Metric icon="💬" end={6367} label="Total Contacts" />
                        <Metric icon="💰" end={133} label="Cost / Conv (PKR)" />
                        <Metric icon="👁" end={3.79} label="Impressions (M)" decimals={2} />
                        <Metric icon="📉" end={10} label="Conv. Rate" suffix="%" decimals={0} />
                    </div>

                    <div className="featured-case__chart">
                        <div className="chart-title">Top Performing Campaigns (Contacts)</div>
                        <div className="chart-bars">
                            <ChartBar label="Snow/Luxury" value={2432} max={3000} isVisible={isVisible} delay={500} />
                            <ChartBar label="Half Price" value={1361} max={3000} isVisible={isVisible} delay={700} />
                            <ChartBar label="Winter Escape" value={667} max={3000} isVisible={isVisible} delay={900} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ChartBar = ({ label, value, max, isVisible, delay }) => {
    const widthPercentage = (value / max) * 100;

    return (
        <div className="chart-bar-row">
            <span className="chart-label">{label}</span>
            <div className="chart-track">
                <div
                    className="chart-fill"
                    style={{
                        width: isVisible ? `${widthPercentage}%` : '0%',
                        transitionDelay: `${delay}ms`
                    }}
                >
                    <span style={{
                        paddingLeft: '8px',
                        color: 'white',
                        fontSize: '0.75rem',
                        lineHeight: '24px',
                        fontWeight: '600',
                        display: 'block',
                        whiteSpace: 'nowrap'
                    }}>
                        {value.toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCaseStudy;
