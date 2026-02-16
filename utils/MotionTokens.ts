// Motion Design Tokens
// Central source of truth for all animation values to ensure consistency

export const MOTION = {
    // Durations (ms)
    DURATION: {
        FAST: 200,
        MEDIUM: 300,
        SLOW: 350,
        XSLOW: 500,
    },

    // Easings (Bezier curves)
    EASE: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)', // ease-in-out standard
        OUT: 'cubic-bezier(0.0, 0, 0.2, 1)',      // deceleration
        IN: 'cubic-bezier(0.4, 0, 1, 1)',         // acceleration
        BOUNCE: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // subtle bounce
    },

    // Offsets (px) for scroll reveals
    OFFSET: {
        SMALL: 8,
        MEDIUM: 16,
        LARGE: 24,
    },

    // Delays (ms)
    DELAY: {
        STAGGER: 50, // Time between list items
        NONE: 0,
        SHORT: 100,
        LONG: 300,
    }
};

// Utility to combine classes
export const cn = (...classes: (string | undefined | null | false)[]) => {
    return classes.filter(Boolean).join(' ');
};
