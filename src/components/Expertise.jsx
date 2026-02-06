import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import './Expertise.css';

const services = [
    {
        title: "Meta Advertising",
        desc: "Advanced targeting and creative strategies to maximize ROAS on Facebook & Instagram.",
        icon: "🎯",
        color: "#2196F3"
    },
    {
        title: "Email Marketing",
        desc: "Automated flows and segmented campaigns that drive retention and repeat purchases.",
        icon: "✉️",
        color: "#E91E63"
    },
    {
        title: "Growth Marketing",
        desc: "Data-driven experiments to identify and scale new channels for user acquisition.",
        icon: "🚀",
        color: "#7AC943"
    },
    {
        title: "Digital Strategy",
        desc: "Comprehensive roadmaps aligning digital channels with business objectives.",
        icon: "💡",
        color: "#FF9800"
    },
    {
        title: "Social Media Mgmt",
        desc: "Engaging content calendars and community management to build brand loyalty.",
        icon: "📱",
        color: "#9C27B0"
    },
    {
        title: "Analytics & Optimization",
        desc: "Deep dive analysis and A/B testing to continuously improve funnel performance.",
        icon: "📊",
        color: "#00BCD4"
    }
];

const Expertise = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

    return (
        <section id="services" className="services section-fullscreen" ref={ref}>
            <div className="container">
                <div className={`section-header reveal ${isVisible ? 'active' : ''}`}>
                    <h2 className="section-title">My Services</h2>
                    <p className="section-subtitle">What I Do</p>
                </div>

                <div className="services__grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card reveal ${isVisible ? 'active' : ''}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="service-icon" style={{ color: service.color }}>{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
