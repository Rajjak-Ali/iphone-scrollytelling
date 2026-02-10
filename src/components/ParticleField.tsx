"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    color: string;
    glow: boolean;
}

const colors = [
    "from-blue-400/60 to-purple-500/60",
    "from-indigo-400/60 to-blue-500/60",
    "from-purple-400/60 to-pink-500/60",
    "from-cyan-400/60 to-blue-500/60",
    "from-violet-400/60 to-indigo-500/60",
];

export default function ParticleField({ count = 50 }: { count?: number }) {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1.5,
            duration: Math.random() * 25 + 15,
            delay: Math.random() * 8,
            color: colors[Math.floor(Math.random() * colors.length)],
            glow: Math.random() > 0.7,
        }));
        setParticles(newParticles);
    }, [count]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className={`absolute rounded-full bg-gradient-to-r ${particle.color}`}
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        filter: particle.glow
                            ? `blur(1px) drop-shadow(0 0 ${particle.size * 2}px rgba(100, 130, 255, 0.4))`
                            : "blur(0.5px)",
                    }}
                    animate={{
                        y: [0, -(80 + Math.random() * 80), 0],
                        x: [0, Math.random() * 60 - 30, 0],
                        opacity: [0, particle.glow ? 0.8 : 0.5, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Larger ambient floating dots */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`ambient-${i}`}
                    className="absolute rounded-full"
                    style={{
                        width: 6 + i * 2,
                        height: 6 + i * 2,
                        left: `${15 + i * 15}%`,
                        top: `${20 + i * 12}%`,
                        background: `radial-gradient(circle, rgba(100, 130, 255, 0.12) 0%, transparent 70%)`,
                        filter: "blur(2px)",
                    }}
                    animate={{
                        y: [0, -40 - i * 10, 0],
                        x: [0, 20 + i * 5, 0],
                        opacity: [0.1, 0.25, 0.1],
                    }}
                    transition={{
                        duration: 18 + i * 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 2,
                    }}
                />
            ))}
        </div>
    );
}
