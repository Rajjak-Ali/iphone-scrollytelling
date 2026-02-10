"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function VisionProPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.2]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
    const opacity3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
    const opacity4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

    return (
        <main className="relative bg-black">
            {/* Hero */}
            <div ref={containerRef} className="relative" style={{ height: "500vh" }}>
                <div className="sticky top-0 h-screen overflow-hidden">
                    <motion.div
                        style={{ scale }}
                        className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-pink-900/40"
                    />

                    <div className="relative h-full flex items-center justify-center px-6">
                        <div className="text-center max-w-6xl">
                            <motion.div style={{ opacity: opacity1 }}>
                                <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold text-white mb-8">
                                    Vision Pro
                                </h1>
                                <p className="text-3xl md:text-5xl text-white/80">
                                    Welcome to spatial computing
                                </p>
                            </motion.div>

                            <motion.div style={{ opacity: opacity2 }} className="absolute inset-0 flex items-center justify-center">
                                <div>
                                    <h2 className="text-6xl md:text-8xl font-bold text-white mb-6">
                                        4K for each eye
                                    </h2>
                                    <p className="text-2xl md:text-4xl text-white/70">
                                        More pixels than a 4K TV
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div style={{ opacity: opacity3 }} className="absolute inset-0 flex items-center justify-center">
                                <div>
                                    <h2 className="text-6xl md:text-8xl font-bold text-white mb-6">
                                        EyeSight
                                    </h2>
                                    <p className="text-2xl md:text-4xl text-white/70">
                                        See and be seen
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div style={{ opacity: opacity4 }} className="absolute inset-0 flex items-center justify-center">
                                <div>
                                    <h2 className="text-6xl md:text-8xl font-bold text-white mb-6">
                                        Spatial Audio
                                    </h2>
                                    <p className="text-2xl md:text-4xl text-white/70">
                                        Sound all around you
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Image Section */}
            <section className="relative bg-gradient-to-b from-black to-purple-900/20 py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-pink-900/40 backdrop-blur-xl border border-white/10 flex items-center justify-center"
                    >
                        <div className="text-center">
                            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 flex items-center justify-center">
                                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <p className="text-white/40 text-sm">Vision Pro Product Image</p>
                            <p className="text-white/20 text-xs mt-2">Add your image here</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="relative bg-black py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold text-white text-center mb-20"
                    >
                        A new dimension
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-16 mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-8">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold text-white">
                                Eye and hand tracking
                            </h3>
                            <p className="text-xl text-white/60 leading-relaxed">
                                Simply look at an element and tap your fingers together to select. It&apos;s the most natural and intuitive way to interact.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-8">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                </svg>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold text-white">
                                Infinite canvas
                            </h3>
                            <p className="text-xl text-white/60 leading-relaxed">
                                Apps can fill the space around you. Arrange them anywhere and scale to the perfect size. Your workspace has never been this flexible.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { value: "23M", label: "Pixels" },
                            { value: "M2", label: "Chip" },
                            { value: "12", label: "Cameras & sensors" },
                            { value: "2hrs", label: "Battery" }
                        ].map((spec, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-white mb-3">{spec.value}</div>
                                <div className="text-white/50 text-sm uppercase tracking-wider">{spec.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-20 text-center"
                    >
                        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                            <span>Back to Home</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
