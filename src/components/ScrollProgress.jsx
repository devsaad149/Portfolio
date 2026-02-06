import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const updateScrollProgress = () => {
        const scrolled = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / totalHeight) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <div className="scroll-progress-container">
            <div
                className="scroll-progress-bar"
                style={{ width: `${scrollProgress}%` }}
                aria-hidden="true"
            />
        </div>
    );
};

export default ScrollProgress;
