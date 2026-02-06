import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const Education = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

    const styles = {
        section: {
            padding: 'var(--space-xl) 0',
            background: 'var(--bg-primary)',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-md)',
        },
        card: {
            borderLeft: '2px solid var(--text-primary)',
            paddingLeft: 'var(--space-md)',
        },
        degree: {
            fontSize: '1.25rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
        },
        institution: {
            fontSize: '1rem',
            color: 'var(--text-accent)',
        },
        year: {
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            marginTop: '0.25rem',
        }
    };

    return (
        <section id="education" style={styles.section} ref={ref}>
            <div className="container">
                <div className={`section-header reveal ${isVisible ? 'active' : ''}`}>
                    <h2 className="section-title">Education</h2>
                </div>

                <div className="reveal" style={{
                    ...styles.grid,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.6s ease'
                }}>
                    <div style={styles.card}>
                        <div style={styles.degree}>Bachelor of Business Administration (BBA)</div>
                        <div style={styles.institution}>Arid University</div>
                        <div style={styles.year}>2021 - 2025</div>
                    </div>
                    <div style={styles.card}>
                        <div style={styles.degree}>F.Sc (Intermediate)</div>
                        <div style={styles.institution}>APS, PMA Kakul</div>
                        <div style={styles.year}>2019 - 2021</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
