import React from 'react';
import { motion } from 'framer-motion';
import { Download, Palette, Type } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './BrandGuidelines.css';

const BrandCard = ({ brand, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="brand-card"
        >
            <div className="brand-card-inner">
                <div className="brand-logo-container">
                    <img src={brand.logo} alt={`${brand.name} Logo`} className="brand-logo-main" />
                </div>

                <div className="brand-info-header">
                    <h3 className="brand-name-display">{brand.name}</h3>
                    <p className="brand-industry-tag">{brand.industry}</p>
                </div>

                <p className="brand-positioning-text">{brand.positioning}</p>

                <div className="brand-visual-snapshot">
                    <div className="snapshot-section">
                        <span className="snapshot-label">Color Palette</span>
                        <div className="palette-display-row">
                            {brand.colors.map((color, i) => (
                                <div key={i} className="swatch-group">
                                    <div
                                        className="color-circle"
                                        style={{ backgroundColor: color.hex }}
                                    ></div>
                                    <span className="hex-code-label">{color.hex}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="snapshot-section">
                        <span className="snapshot-label">Typography Showcase</span>
                        <div className="typography-preview-box">
                            <h4 className="headline-preview" style={{ fontFamily: brand.typography.headline }}>
                                {brand.typography.sample}
                            </h4>
                            <p className="body-preview" style={{ fontFamily: brand.typography.body }}>
                                {brand.typography.headline} / {brand.typography.body}
                            </p>
                        </div>
                    </div>

                    <div className="snapshot-section">
                        <div className="attribute-pills">
                            {brand.attributes.map((attr, i) => (
                                <span key={i} className="attr-pill">{attr}</span>
                            ))}
                        </div>
                    </div>

                    <div className="snapshot-section">
                        <span className="snapshot-label">Core Applications</span>
                        <div className="applications-list-cloud">
                            {brand.applications.map((app, i) => (
                                <span key={i} className="app-item">{app}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="achievement-insight">
                    <p>{brand.achievement}</p>
                </div>

                <a
                    href={brand.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand-download-link"
                >
                    <Download size={18} />
                    <span>Download Full Guidelines (PDF)</span>
                </a>
            </div>
        </motion.div>
    );
};

const BrandGuidelines = () => {
    const { brandGuidelines } = portfolioData;

    return (
        <section id="brand-identity" className="brand-identity-section section-padding">
            <div className="container">
                <div className="section-header text-center mb-16">
                    <h2 className="section-title text-gradient">Brand Identity & Guidelines</h2>
                    <p className="section-subtitle">Comprehensive brand systems from strategy to execution</p>
                    <div className="section-intro-text max-w-3xl mx-auto mt-8">
                        <p>
                            Comprehensive brand identity systems developed across diverse industries.
                            Each guideline document includes logo specifications, color palettes,
                            typography systems, usage rules, and brand voice guidelines to ensure
                            consistent, impactful brand execution.
                        </p>
                    </div>
                </div>

                <div className="brand-guidelines-grid">
                    {brandGuidelines.map((brand, index) => (
                        <BrandCard key={brand.id} brand={brand} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandGuidelines;
