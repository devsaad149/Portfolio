import React, { useEffect } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { Link } from 'react-router-dom';
import cs1 from '../assets/casestudies/cs1.jpg';
import cs2 from '../assets/casestudies/cs2.jpg';
import cs3 from '../assets/casestudies/cs3.jpg';
import cs4 from '../assets/casestudies/cs4.jpg';

const CaseStudies = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

    const styles = {
        page: {
            paddingTop: 'var(--header-height)',
            minHeight: '100vh',
            backgroundColor: 'var(--bg-primary)',
        },
        header: {
            padding: 'var(--space-xl) 0 var(--space-md)',
            textAlign: 'center',
        },
        title: {
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            color: 'var(--text-primary)',
            marginBottom: 'var(--space-sm)',
        },
        subtitle: {
            color: 'var(--text-secondary)',
            fontSize: '1.2rem',
            marginBottom: 'var(--space-lg)',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-md)',
            paddingBottom: 'var(--space-xl)',
        },
        imageCard: {
            background: 'rgba(255,255,255,0.03)',
            padding: 'var(--space-sm)',
            borderRadius: '8px',
            transition: 'transform var(--transition-medium)',
        },
        image: {
            width: '100%',
            borderRadius: '4px',
            display: 'block',
        },
        backLink: {
            display: 'block',
            textAlign: 'center',
            marginBottom: 'var(--space-xl)',
            color: 'var(--text-primary)',
            textDecoration: 'underline',
        }
    };

    const images = [cs1, cs2, cs3, cs4];

    return (
        <div style={styles.page}>
            <div className="container">
                <div style={styles.header}>
                    <h1 style={styles.title} className="slide-up active">Campaign Results</h1>
                    <p style={styles.subtitle} className="fade-in active delay-200">
                        Proven track record of high-performance Meta campaigns.
                    </p>
                </div>

                <div
                    style={styles.grid}
                    ref={ref}
                >
                    {images.map((img, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.imageCard,
                                transitionDelay: `${index * 100}ms`
                            }}
                            className={`reveal ${isVisible ? 'active' : ''}`}
                        >
                            <img src={img} alt={`Case Study ${index + 1}`} style={styles.image} />
                        </div>
                    ))}
                </div>

                <Link to="/" style={styles.backLink} className="btn">
                    ← Back to Portfolio
                </Link>
            </div>
        </div>
    );
};

export default CaseStudies;
