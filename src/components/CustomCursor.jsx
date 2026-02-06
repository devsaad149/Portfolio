import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mousedown", onMouseDown);
            document.addEventListener("mouseup", onMouseUp);
            document.addEventListener("mouseenter", onMouseEnter);
            document.addEventListener("mouseleave", onMouseLeave);

            const linkElements = document.querySelectorAll("a, button, input, textarea");
            linkElements.forEach(el => {
                el.addEventListener("mouseenter", () => setLinkHovered(true));
                el.addEventListener("mouseleave", () => setLinkHovered(false));
            });
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
        };

        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseDown = () => {
            setClicked(true);
        };

        const onMouseUp = () => {
            setClicked(false);
        };

        const onMouseLeave = () => {
            setHidden(true);
        };

        const onMouseEnter = () => {
            setHidden(false);
        };

        addEventListeners();
        return () => removeEventListeners();
    }, []); // Re-running on route change might be needed if links change dynamically, but for single page it's ok.

    // Re-attach link listeners purely for this simple implementation
    useEffect(() => {
        const handleLinkHover = () => setLinkHovered(true);
        const handleLinkLeave = () => setLinkHovered(false);

        const links = document.querySelectorAll("a, button, .clickable");
        links.forEach(link => {
            link.addEventListener('mouseenter', handleLinkHover);
            link.addEventListener('mouseleave', handleLinkLeave);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('mouseenter', handleLinkHover);
                link.removeEventListener('mouseleave', handleLinkLeave);
            });
        };
    });

    const cursorClasses = `cursor-dot ${clicked ? "clicked" : ""} ${hidden ? "hidden" : ""} ${linkHovered ? "hovered" : ""}`;
    const cursorRingClasses = `cursor-ring ${clicked ? "clicked" : ""} ${hidden ? "hidden" : ""} ${linkHovered ? "hovered" : ""}`;

    return (
        <>
            <div
                className={cursorRingClasses}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div
                className={cursorClasses}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <style>{`
        body { cursor: none; }
        @media (max-width: 768px) {
          .cursor-dot, .cursor-ring { display: none; }
          body { cursor: auto; }
        }
        .cursor-dot {
          width: 8px;
          height: 8px;
          background-color: var(--text-primary);
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: width 0.2s, height 0.2s, background-color 0.2s;
        }
        .cursor-ring {
          width: 40px;
          height: 40px;
          border: 1px solid var(--text-secondary);
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          transition: left 0.1s ease-out, top 0.1s ease-out, width 0.2s, height 0.2s, background-color 0.2s;
        }
        .cursor-ring.clicked {
          width: 30px;
          height: 30px;
          background-color: rgba(255, 255, 255, 0.1);
        }
        .cursor-ring.hovered {
          width: 60px;
          height: 60px;
          background-color: rgba(255, 255, 255, 0.05);
          border-color: transparent;
        }
        .cursor-dot.hovered {
          width: 4px;
          height: 4px;
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
