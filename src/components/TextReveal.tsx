"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

interface Word {
    text: string;
    className?: string;
}

interface TextRevealProps {
    words: Word[];
    className?: string;
}

export default function TextReveal({ words, className = "" }: TextRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.8", "start 0.2"],
    });

    return (
        <div ref={ref} className={`relative ${className}`}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;

                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        <span className={word.className}>{word.text}</span>
                    </Word>
                );
            })}
        </div>
    );
}

function Word({
    children,
    progress,
    range,
}: {
    children: React.ReactNode;
    progress: MotionValue<number>;
    range: [number, number];
}) {
    const opacity = useTransform(progress, range, [0.2, 1]);
    const scale = useTransform(progress, range, [0.95, 1]);
    const filter = useTransform(progress, range, ["blur(5px)", "blur(0px)"]);

    return (
        <motion.span
            style={{ opacity, scale, filter }}
            className="inline-block mr-2 transition-all"
        >
            {children}
        </motion.span>
    );
}
