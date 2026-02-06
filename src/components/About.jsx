import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useCounter } from '../hooks/useCounter';
import './About.css';
import profileImg from '../assets/profile.png'; // Updated to professional portrait

const Stat = ({ end, label, suffix = '', prefix = '' }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.5 });
    // Pass true to shouldAnimate when visible
    const value = useCounter(end, 2000, 0, isVisible);

    return (
        <div className={`stat-card reveal ${isVisible ? 'active' : ''}`} ref={ref}>
            <span className="stat-number">
                {prefix}{Number.isInteger(end) ? Math.floor(value) : value.toFixed(1)}{suffix}
            </span>
            <span className="stat-label">{label}</span>
        </div>
    );
};

const About = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

    return (
        <section id="about" className="about section-fullscreen" ref={ref}>
            <div className="container about__container">
                <div className={`about__image-column reveal ${isVisible ? 'active' : ''}`}>
                    <img src={profileImg} alt="Saad Sohail" className="about__image" />
                    <div className="about__image-decoration"></div>
                </div>

                <div className={`about__content reveal ${isVisible ? 'active' : ''}`}>
                    <h5 className="section-subtitle">My Biography</h5>
                    <h2 className="section-title">Who Am I?</h2>

                    <div className="about__text">
                        <p>
                            I am a results-oriented Digital Marketing Manager with over 4 years of experience,
                            specializing in Meta advertising and email marketing automation.
                        </p>
                        <p>
                            My expertise lies in developing data-driven strategies that optimize ROAS and drive
                            sustainable growth. From leading cross-functional teams to managing international
                            campaigns, I focus on turning complex data into actionable insights effectively.
                        </p>
                    </div>

                    <div className="about__stats">
                        <Stat end={4.5} label="Avg ROAS" suffix="x" />
                        <Stat end={30} label="Engagement" suffix="%" />
                        <Stat end={15} label="Growth" suffix="%" />
                        <Stat end={4} label="Years Exp" suffix="+" />
                    </div>

                    <div className="about__actions">
                        <a href="/Saad_Sohail_CV.pdf" download className="btn btn--primary">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
