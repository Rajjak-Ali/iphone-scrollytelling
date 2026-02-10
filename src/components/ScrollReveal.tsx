"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right" | "none";
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
    blur?: boolean;
    scale?: boolean;
}

export default function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.8,
    className = "",
    once = true,
    blur = false,
    scale = false,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-80px" });

    const directionMap = {
        up: { y: 60, x: 0 },
        down: { y: -60, x: 0 },
        left: { x: 60, y: 0 },
        right: { x: -60, y: 0 },
        none: { x: 0, y: 0 },
    };

    const offset = directionMap[direction];

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                y: offset.y,
                x: offset.x,
                filter: blur ? "blur(10px)" : "blur(0px)",
                scale: scale ? 0.9 : 1,
            }}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                x: 0,
                filter: "blur(0px)",
                scale: 1,
            } : {
                opacity: 0,
                y: offset.y,
                x: offset.x,
                filter: blur ? "blur(10px)" : "blur(0px)",
                scale: scale ? 0.9 : 1,
            }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
