import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const ExperienceItem = ({ role, company, date, points, items, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="timeline-item"
        >
            <div className="timeline-dot">
                <Briefcase size={16} />
            </div>
            <div className="timeline-content">
                <span className="timeline-date">{date}</span>
                <h3 className="timeline-role">{role}</h3>
                <h4 className="timeline-company">{company}</h4>
                <div className="timeline-desc">
                    <ul>
                        {(points || items || []).map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h5 className="section-subtitle">Career Path</h5>
                    <h2 className="section-title">Professional Experience</h2>
                </motion.div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    <div className="timeline-items">
                        <ExperienceItem
                            index={0}
                            role="Marketing Manager"
                            company="Vorniqo Solutions"
                            date="Nov 2025 - Present"
                            items={[
                                "Develop and oversee integrated digital marketing strategies.",
                                "Lead cross-functional teams for multi-channel campaigns.",
                                "Analyze performance data to track KPIs and maximize ROAS."
                            ]}
                        />

                        <ExperienceItem
                            index={1}
                            role="Marketing Specialist"
                            company="Evertise AI PR"
                            date="Apr 2021 - Oct 2024"
                            items={[
                                "Managed international Meta ad campaigns with 4.5x average ROAS.",
                                "Increased email engagement rates by 30% through automation.",
                                "Led digital outreach initiatives for Khubaiib Foundation.",
                                "Executed targeted campaigns for Deenar Marketing and BizBuzz Agency.",
                                "Mentored junior marketers on best practices."
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
