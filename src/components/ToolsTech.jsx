import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './ToolsTech.css';

const ToolsTech = () => {
    const { toolsAndTech } = portfolioData;

    return (
        <section className="tools-section section-padding" id="tools">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-gradient">Tools & Technology Stack</h2>
                    <p className="section-subtitle">Platforms and software I use to deliver high-performance marketing campaigns</p>
                </div>

                <div className="tools-grid">
                    {toolsAndTech.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="tool-card glass-panel"
                        >
                            <div className="card-header">
                                <div className="icon-box">
                                    <category.icon size={28} className="tool-category-icon" />
                                </div>
                                <h3 className="category-title">{category.category}</h3>
                            </div>

                            <ul className="tool-list">
                                {category.tools.map((tool, i) => (
                                    <li key={i} className="tool-item">
                                        <span className="tool-name">{tool.name}</span>
                                        <span className="tool-desc">{tool.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="tools-footer text-center mt-12"
                >
                    <p className="text-gray-400 italic">"Constantly learning and adapting to new marketing technologies and platforms to deliver cutting-edge campaigns."</p>
                </motion.div>
            </div>
        </section>
    );
};

export default ToolsTech;
