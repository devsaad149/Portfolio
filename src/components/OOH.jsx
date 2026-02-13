import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Maximize } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './OOH.css';

const OOHItem = ({ item, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className={`ooh-item ${isEven ? 'even' : 'odd'}`}>
            <motion.div style={{ y, opacity }} className="ooh-image-container">
                <img src={item.image} alt={item.title} className="ooh-image" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="ooh-content"
            >
                <span className="ooh-index">0{index + 1}</span>
                <h3 className="ooh-title">{item.title}</h3>
                <p className="ooh-desc">{item.specs}</p>
            </motion.div>
        </div>
    );
};

const OOH = () => {
    const { ooh } = portfolioData;

    return (
        <section className="ooh-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-gradient">Social Media Campaign Design</h2>
                    <p className="section-subtitle">High-impact social content with omnichannel application potential</p>
                    <p className="section-intro" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        Strategic social media designs created for maximum visual impact across digital platforms. Each design demonstrates strong composition, typography, and brand messaging that translates effectively across multiple touchpoints.
                    </p>
                </div>

                <div className="ooh-list">
                    {ooh.map((item, index) => (
                        <OOHItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OOH;
