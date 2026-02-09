import React from 'react';
import { motion } from 'framer-motion';
import { useOnScreen } from '../hooks/useOnScreen';
import { useCounter } from '../hooks/useCounter';
import { TrendingUp, Users, Target, BarChart2 } from 'lucide-react';
import './FeaturedCaseStudy.css';

const Metric = ({ icon: Icon, end, label, prefix = '', suffix = '', decimals = 0, delay }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.5 });
    const value = useCounter(end, 2000, 0, isVisible);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="metric-card"
        >
            <div className="metric-card__icon-wrap">
                <Icon size={24} />
            </div>
            <div className="metric-card__content">
                <span className="metric-card__value">
                    {prefix}{value.toFixed(decimals)}{suffix}
                </span>
                <span className="metric-card__label">{label}</span>
            </div>
        </motion.div>
    );
};

const FeaturedCaseStudy = () => {
    return (
        <div className="featured-case">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="featured-case__container"
            >
                <div className="featured-case__header">
                    <div>
                        <span className="featured-case__badge">Featured Client Success</span>
                        <h3 className="featured-case__title">HSQ TOWERS</h3>
                        <div className="featured-case__meta">Real Estate Lead Generation | Nov 2025 - Jan 2026</div>
                    </div>
                </div>

                <div className="featured-case__grid">
                    <div className="featured-case__info">
                        <div className="info-section">
                            <h4>Challenge</h4>
                            <p>Launch and scale lead generation for a luxury residential tower in Murree, aiming for high-intent prospects via Instagram messaging.</p>
                        </div>

                        <div className="info-section">
                            <h4>Strategy</h4>
                            <ul className="strategy-list">
                                <li>Multi-creative messaging campaigns (50% discount offers)</li>
                                <li>Seasonal winter-themed amenities highlight</li>
                                <li>Full-funnel approach: Traffic → Engagement → Conversions</li>
                            </ul>
                        </div>

                        <div className="info-section">
                            <h4>Impact</h4>
                            <p>Generated a high-volume qualified lead pipeline (5,700+ new contacts) with exceptional cost efficiency.</p>
                        </div>
                    </div>

                    <div className="featured-case__visuals">
                        <div className="featured-case__metrics">
                            <Metric icon={Users} end={6367} label="Total Contacts" delay={0.1} />
                            <Metric icon={Target} end={133} label="Cost / Conv (PKR)" delay={0.2} />
                            <Metric icon={TrendingUp} end={3.79} label="Impressions (M)" decimals={2} delay={0.3} />
                            <Metric icon={BarChart2} end={10} label="Conv. Rate" suffix="%" delay={0.4} />
                        </div>

                        <div className="featured-case__chart">
                            <h5 className="chart-heading">Top Performing Campaigns</h5>
                            <div className="chart-bars">
                                <ChartBar label="Snow/Luxury" value={2432} max={3000} delay={0.5} />
                                <ChartBar label="Half Price" value={1361} max={3000} delay={0.6} />
                                <ChartBar label="Winter Escape" value={667} max={3000} delay={0.7} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const ChartBar = ({ label, value, max, delay }) => {
    const widthPercentage = (value / max) * 100;

    return (
        <div className="chart-item">
            <div className="chart-item__info">
                <span className="chart-item__label">{label}</span>
                <span className="chart-item__value">{value.toLocaleString()}</span>
            </div>
            <div className="chart-item__track">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${widthPercentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay, ease: "circOut" }}
                    className="chart-item__fill"
                />
            </div>
        </div>
    );
};

export default FeaturedCaseStudy;
