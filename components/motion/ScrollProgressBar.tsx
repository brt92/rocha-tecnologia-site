
import React, { useEffect, useState } from 'react';

export const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (scrollProgress === 0) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] pointer-events-none">
            <div
                className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"
                style={{
                    width: `${scrollProgress * 100}%`,
                    transition: 'width 0.1s ease-out'
                }}
            />
        </div>
    );
};
