
import React, { useEffect, useRef, useState } from 'react';
import { MOTION, cn } from '../../utils/MotionTokens';

interface FadeInSectionProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    threshold?: number;
    direction?: 'up' | 'none';
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
    children,
    delay = 0,
    className = '',
    threshold = 0.1,
    direction = 'up'
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we can stop observing to save resources
                    if (domRef.current) observer.unobserve(domRef.current);
                }
            });
        }, {
            threshold,
            rootMargin: '0px 0px -50px 0px' // Slightly before bottom
        });

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [threshold]);

    const getTransform = () => {
        if (!isVisible && direction === 'up') return `translateY(${MOTION.OFFSET.MEDIUM}px)`;
        return 'none';
    };

    return (
        <div
            ref={domRef}
            className={cn(className)}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                transition: `opacity ${MOTION.DURATION.SLOW}ms ${MOTION.EASE.OUT} ${delay}ms, transform ${MOTION.DURATION.SLOW}ms ${MOTION.EASE.OUT} ${delay}ms`,
                willChange: 'opacity, transform'
            }}
        >
            {children}
        </div>
    );
};
