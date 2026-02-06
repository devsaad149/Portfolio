import { useState, useEffect } from 'react';

export function useCounter(end, duration = 2000, start = 0, shouldAnimate = false) {
    const [count, setCount] = useState(start);

    useEffect(() => {
        if (!shouldAnimate) return;

        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function (easeOutExpo)
            const easeValue = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCount(start + (end - start) * easeValue);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [end, duration, start, shouldAnimate]);

    return count;
}
