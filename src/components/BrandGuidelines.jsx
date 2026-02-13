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
            className="brand-card glass-panel"
        >
            <div className="brand-header">
                <div className="brand-logo-placeholder">{brand.logo}</div>
                <h3 className="brand-name">{brand.name}</h3>
            </div>

            <div className="brand-section">
                <div className="section-label">
                    <Palette size={14} /> Color Palette
                </div>
                <div className="color-swatches">
                    {brand.colors.map((color, i) => (
                        <div
                            key={i}
                            className="color-swatch"
                            style={{ backgroundColor: color }}
                            title={color}
                        />
                    ))}
                </div>
            </div>

            <div className="brand-section">
                <div className="section-label">
                    <Type size={14} /> Typography
                </div>
                <p className="typography-sample" style={{ fontFamily: 'sans-serif' }}>
                    {brand.typography}
                </p>
                <div className="abc-sample">Aa Bb Cc 123</div>
            </div>

            <button className="download-btn">
                <Download size={16} /> Download Brand Book
            </button>
        </motion.div>
    );
};

const BrandGuidelines = () => {
    const { brandGuidelines } = portfolioData;

    return (
        <section className="brand-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-gradient">Brand Identity Systems</h2>
                    <p className="section-subtitle">Scalable design languages for modern businesses.</p>
                </div>

                <div className="brand-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {brandGuidelines.map((brand, index) => (
                        <BrandCard key={brand.id} brand={brand} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandGuidelines;
