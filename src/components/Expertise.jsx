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
        title: "Meta Advertising",
        desc: "Advanced targeting and creative strategies to maximize ROAS on Facebook & Instagram.",
        icon: Target,
        color: "#6366f1"
    },
    {
        title: "Email Marketing",
        desc: "Automated flows and segmented campaigns that drive retention and repeat purchases.",
        icon: Mail,
        color: "#8b5cf6"
    },
    {
        title: "Growth Marketing",
        desc: "Data-driven experiments to identify and scale new channels for user acquisition.",
        icon: TrendingUp,
        color: "#ec4899"
    },
    {
        title: "Digital Strategy",
        desc: "Comprehensive roadmaps aligning digital channels with business objectives.",
        icon: Lightbulb,
        color: "#f59e0b"
    },
    {
        title: "Social Media Management",
        desc: "Engaging content calendars and community management to build brand loyalty.",
        icon: Share2,
        color: "#06b6d4"
    },
    {
        title: "Analytics & Optimization",
        desc: "Deep dive analysis and A/B testing to continuously improve funnel performance.",
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
