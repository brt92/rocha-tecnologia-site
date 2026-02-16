
import React, { useEffect, useRef, useState } from 'react';
import { MOTION, cn } from '../../utils/MotionTokens';

interface StaggerGridProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    columns?: 1 | 2 | 3 | 4;
}

export const StaggerGrid: React.FC<StaggerGridProps> = ({
    children,
    className = '',
    staggerDelay = MOTION.DELAY.STAGGER,
    columns
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
                if (domRef.current) observer.unobserve(domRef.current);
            }
        }, { threshold: 0.1 });

        if (domRef.current) observer.observe(domRef.current);

        return () => {
            if (domRef.current) observer.unobserve(domRef.current);
        };
    }, []);

    // Clone children to add delay style
    const staggeredChildren = React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        return React.cloneElement(child as React.ReactElement<any>, {
            style: {
                ...(child.props.style || {}),
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : `translateY(${MOTION.OFFSET.SMALL}px)`,
                transition: `opacity ${MOTION.DURATION.MEDIUM}ms ${MOTION.EASE.OUT} ${index * staggerDelay}ms, transform ${MOTION.DURATION.MEDIUM}ms ${MOTION.EASE.OUT} ${index * staggerDelay}ms`
            }
        });
    });

    const gridCols = columns ? `grid-cols-1 md:grid-cols-${columns}` : '';

    return (
        <div
            ref={domRef}
            className={cn('grid gap-6', gridCols, className)}
        >
            {staggeredChildren}
        </div>
    );
};
