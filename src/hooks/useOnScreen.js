import { useState, useEffect, useRef } from 'react';

export function useOnScreen(options = { threshold: 0.1, rootMargin: "-50px" }) {
    const ref = useRef(null);
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Only set to true, never back to false for "reveal once" effect
            if (entry.isIntersecting) {
                setIntersecting(true);
                observer.unobserve(entry.target);
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return [ref, isIntersecting];
}
