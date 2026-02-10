"use client";

import { motion } from "framer-motion";

interface TextMarqueeProps {
    text?: string;
    speed?: number;
    className?: string;
}

export default function TextMarquee({
    text = "iPhone 17 Pro Max",
    speed = 20,
    className = "",
}: TextMarqueeProps) {
    const items = Array(8).fill(text);

    return (
        <div className={`overflow-hidden whitespace-nowrap ${className}`}>
            <motion.div
                className="inline-flex gap-12"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                {items.map((item, i) => (
                    <span
                        key={i}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent px-8"
                        style={{
                            WebkitTextStroke: "1px rgba(255, 255, 255, 0.08)",
                        }}
                    >
                        {item}
                    </span>
                ))}
                {items.map((item, i) => (
                    <span
                        key={`dup-${i}`}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent px-8"
                        style={{
                            WebkitTextStroke: "1px rgba(255, 255, 255, 0.08)",
                        }}
                    >
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
