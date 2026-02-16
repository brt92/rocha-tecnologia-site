
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/MotionTokens';

interface TooltipProps {
    term: string;
    definition: string;
    className?: string;
    position?: 'top' | 'bottom';
}

export const Tooltip: React.FC<TooltipProps> = ({
    term,
    definition,
    className = '',
    position = 'top'
}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <span
            className="relative inline-block cursor-help group"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
        >
            <span className={cn("border-b border-dashed border-slate-400 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors", className)}>
                {term}
            </span>

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: position === 'top' ? 10 : -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                            "absolute z-50 w-64 p-3 text-xs font-medium text-white bg-slate-900 rounded-xl shadow-xl pointer-events-none left-1/2 -translate-x-1/2",
                            position === 'top' ? "-top-2 -translate-y-full mb-2" : "top-full mt-2"
                        )}
                    >
                        {definition}
                        {/* Arrow */}
                        <div
                            className={cn(
                                "absolute left-1/2 -translate-x-1/2 border-8 border-transparent",
                                position === 'top' ? "top-full border-t-slate-900" : "bottom-full border-b-slate-900"
                            )}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
};
