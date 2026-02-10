"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] z-[99999] origin-left"
            style={{
                scaleX,
                background: "linear-gradient(90deg, #6366f1 0%, #3b82f6 30%, #a855f7 60%, #ec4899 100%)",
                boxShadow: "0 0 10px rgba(99, 102, 241, 0.5), 0 0 30px rgba(99, 102, 241, 0.2)",
            }}
        />
    );
}
