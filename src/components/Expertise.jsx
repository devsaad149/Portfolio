import React from 'react';
import { motion } from 'framer-motion';
import {
    Target,
    Mail,
    TrendingUp,
    Lightbulb,
    Share2,
    BarChart3
} from 'lucide-react';
import TiltCard from './3D/TiltCard';
import './Expertise.css';

const services = [
    {
        title: "Paid Acquisition Engines",
        desc: "Scale your revenue with precision-targeted Meta campaigns that stop the scroll and drive conversions.",
        icon: Target,
        color: "#6366f1"
    },
    {
        title: "Retention Ecosystems",
        desc: "Turn one-time buyers into lifetime value with automated flows that generate revenue while you sleep.",
        icon: Mail,
        color: "#8b5cf6"
    },
    {
        title: "Full-Funnel Growth",
        desc: "Data-backed experiments to unlock new acquisition channels and layout your entire customer journey.",
        icon: TrendingUp,
        color: "#ec4899"
    },
    {
        title: "Strategic Roadmaps",
        desc: "Clear, actionable blueprints to align your digital channels with tangible business objectives.",
        icon: Lightbulb,
        color: "#f59e0b"
    },
    {
        title: "Brand Authority",
        desc: "Build a loyal community and commanding presence that positions your brand as the industry leader.",
        icon: Share2,
        color: "#06b6d4"
    },
    {
        title: "Conversion Science",
        desc: "Eliminate guesswork. Deep-dive analytics to identify leaks and optimize every touchpoint for maximum ROI.",
        icon: BarChart3,
        color: "#10b981"
    }
];

const Expertise = () => {
    return (
        <section id="services" className="services section-fullscreen">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h5 className="section-subtitle">Expertise</h5>
                    <h2 className="section-title">My Services</h2>
                </motion.div>

                <div className="services__grid">
                    {services.map((service, index) => (
                        <TiltCard key={index} className="service-card-wrapper">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="service-card"
                            >
                                <div className="service-icon" style={{ background: `${service.color}20`, color: service.color }}>
                                    <service.icon size={32} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
