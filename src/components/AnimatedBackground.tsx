"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Large floating gradient orb 1 — slow drift */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07]"
                style={{
                    background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
                    top: "10%",
                    left: "-10%",
                    filter: "blur(80px)",
                }}
                animate={{
                    x: [0, 120, 50, -50, 0],
                    y: [0, -80, 60, -30, 0],
                    scale: [1, 1.2, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Large floating gradient orb 2 — counter-drift */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full opacity-[0.06]"
                style={{
                    background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
                    top: "50%",
                    right: "-5%",
                    filter: "blur(80px)",
                }}
                animate={{
                    x: [0, -100, -30, 80, 0],
                    y: [0, 60, -90, 40, 0],
                    scale: [1, 0.9, 1.15, 0.95, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Smaller accent orb — faster */}
            <motion.div
                className="absolute w-[350px] h-[350px] rounded-full opacity-[0.05]"
                style={{
                    background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
                    bottom: "15%",
                    left: "30%",
                    filter: "blur(60px)",
                }}
                animate={{
                    x: [0, 80, -60, 40, 0],
                    y: [0, -50, 70, -30, 0],
                    scale: [1, 1.1, 0.85, 1.05, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Teal accent — bottom left */}
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04]"
                style={{
                    background: "radial-gradient(circle, #14b8a6 0%, transparent 70%)",
                    bottom: "-5%",
                    left: "-10%",
                    filter: "blur(70px)",
                }}
                animate={{
                    x: [0, 50, -30, 70, 0],
                    y: [0, -40, 50, -60, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Subtle mesh grid overlay for depth */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />
        </div>
    );
}
