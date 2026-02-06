import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import './Experience.css';

const ExperienceItem = ({ role, company, date, points, items }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

    return (
        <div className={`timeline-item revealSlide ${isVisible ? 'active' : ''}`} ref={ref}>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <span className="timeline-date">{date}</span>
                <h3 className="timeline-role">{role}</h3>
                <h4 className="timeline-company">{company}</h4>
                <div className="timeline-desc">
                    <ul>
                        {points && points.map((p, i) => <li key={i}>{p}</li>)}
                        {items && items.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

    return (
        <section id="experience" className="experience" ref={ref}>
            <div className="container">
                <div className={`section-header reveal ${isVisible ? 'active' : ''}`}>
                    <h2 className="section-title">Professional Experience</h2>
                </div>

                <div className="timeline">
                    <ExperienceItem
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
        </section>
    );
};

export default Experience;
