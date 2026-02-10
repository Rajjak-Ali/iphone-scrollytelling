"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TextMorphProps {
    texts: string[];
    className?: string;
    interval?: number;
}

export default function TextMorph({ texts, className = "", interval = 3000 }: TextMorphProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, interval);

        return () => clearInterval(timer);
    }, [texts.length, interval]);

    return (
        <div className={`relative inline-block ${className}`}>
            <motion.span
                key={index}
                initial={{
                    opacity: 0,
                    y: 50,
                    filter: "blur(10px)",
                    scale: 0.8,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    scale: 1,
                }}
                exit={{
                    opacity: 0,
                    y: -50,
                    filter: "blur(10px)",
                    scale: 0.8,
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                }}
                className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
                {texts[index]}
            </motion.span>
        </div>
    );
}
