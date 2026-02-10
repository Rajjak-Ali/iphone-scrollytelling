"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    duration?: number;
    decimals?: number;
}

function Counter({ value, suffix = "", prefix = "", duration = 2, decimals = 0 }: Omit<AnimatedCounterProps, "label">) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration * 1000 });
    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplayValue(latest.toFixed(decimals));
        });
        return unsubscribe;
    }, [springValue, decimals]);

    return (
        <span ref={ref}>
            {prefix}{displayValue}{suffix}
        </span>
    );
}

export default function AnimatedCounterSection() {
    const stats = [
        { value: 48, suffix: "MP", label: "Pro Camera", prefix: "" },
        { value: 29, suffix: "hrs", label: "Battery Life", prefix: "" },
        { value: 6.9, suffix: '"', label: "Display Size", prefix: "", decimals: 1 },
        { value: 5, suffix: "x", label: "Optical Zoom", prefix: "" },
    ];

    return (
        <section className="relative bg-[#0d0d0d]/90 py-20 px-6 lg:px-8 border-t border-white/5 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="text-center group"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            <div className="relative inline-block">
                                {/* Glow behind number */}
                                <div
                                    className="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                                    style={{
                                        background: `radial-gradient(circle, ${i === 0 ? "#3b82f6" : i === 1 ? "#22c55e" : i === 2 ? "#a855f7" : "#f97316"
                                            } 0%, transparent 70%)`,
                                    }}
                                />
                                <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white relative">
                                    <Counter
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        prefix={stat.prefix}
                                        decimals={stat.decimals || 0}
                                    />
                                </h3>
                            </div>
                            <p className="text-white/50 text-sm mt-3 tracking-wider uppercase">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
