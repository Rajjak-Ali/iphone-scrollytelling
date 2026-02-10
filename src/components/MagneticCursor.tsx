"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

interface MagneticCursorProps {
    children: React.ReactNode;
    className?: string;
    strength?: number;
}

export default function MagneticCursor({ children, className = "", strength = 0.4 }: MagneticCursorProps) {
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        x.set(distanceX * strength);
        y.set(distanceY * strength);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={`relative ${className}`}
        >
            {children}

            {/* Glow effect on hover */}
            <motion.div
                className="absolute inset-0 -z-10 rounded-3xl blur-2xl"
                animate={{
                    opacity: isHovered ? 0.3 : 0,
                    scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                style={{
                    background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)",
                }}
            />
        </motion.div>
    );
}
