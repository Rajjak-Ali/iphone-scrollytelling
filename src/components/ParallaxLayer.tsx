"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxLayerProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}

export default function ParallaxLayer({ children, speed = 0.5, className = "" }: ParallaxLayerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, speed * 10]);

    return (
        <motion.div
            ref={ref}
            style={{
                y,
                opacity,
                scale,
                rotate,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
