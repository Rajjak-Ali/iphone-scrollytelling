"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
    {
        title: "Ceramic Shield",
        description: "Tougher than any smartphone glass",
        gradient: "from-sky-500 to-blue-600",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
        title: "ProMotion 120Hz",
        description: "Adaptive refresh rate for fluid scrolling",
        gradient: "from-purple-500 to-violet-600",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
        title: "USB-C Thunderbolt",
        description: "Blazing fast data transfer speeds",
        gradient: "from-orange-500 to-red-600",
        icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    {
        title: "Spatial Audio",
        description: "Immersive 3D sound experience",
        gradient: "from-emerald-500 to-teal-600",
        icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
    },
    {
        title: "Emergency SOS",
        description: "Satellite connectivity when you need it",
        gradient: "from-rose-500 to-pink-600",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
];

export default function HorizontalShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-40%"]);

    return (
        <section
            ref={containerRef}
            className="relative bg-[#0d0d0d]/90 py-24 px-6 lg:px-8 border-t border-white/5 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto mb-12">
                <motion.p
                    className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Innovation
                </motion.p>
                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Packed with breakthrough features.
                </motion.h2>
            </div>

            {/* Horizontal scrolling cards */}
            <motion.div
                className="flex gap-6 will-change-transform"
                style={{ x }}
            >
                {features.map((feature, i) => (
                    <motion.div
                        key={feature.title}
                        className="flex-shrink-0 w-[320px] md:w-[380px] p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-transparent border border-white/10 hover:border-white/20 transition-all duration-500 group"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>

                        {/* Subtle glow on hover */}
                        <div
                            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                            style={{
                                background: `radial-gradient(circle at center, ${feature.gradient.includes("sky") ? "rgba(56, 189, 248, 0.04)" :
                                        feature.gradient.includes("purple") ? "rgba(168, 85, 247, 0.04)" :
                                            feature.gradient.includes("orange") ? "rgba(249, 115, 22, 0.04)" :
                                                feature.gradient.includes("emerald") ? "rgba(52, 211, 153, 0.04)" :
                                                    "rgba(251, 113, 133, 0.04)"
                                    } 0%, transparent 70%)`,
                            }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
