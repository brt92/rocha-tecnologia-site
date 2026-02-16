
import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../../utils/MotionTokens';

interface GlowHeroProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}

export const GlowHero: React.FC<GlowHeroProps> = ({
    children,
    className = '',
    glowColor = 'rgba(15, 137, 174, 0.15)' // Brand primary color with low opacity
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth movement for the glow
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top } = ref.current?.getBoundingClientRect() || { left: 0, top: 0 };

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const background = useMotionTemplate`radial-gradient(
    600px circle at ${springX}px ${springY}px,
    ${glowColor},
    transparent 80%
  )`;

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            className={cn("relative overflow-hidden group", className)}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-50 group-hover:opacity-100 transition duration-500"
                style={{ background }}
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
