"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function AirPodsPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);

    return (
        <main className="relative bg-white">
            {/* Hero */}
            <div ref={containerRef} className="relative" style={{ height: "400vh" }}>
                <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center bg-white">
                    <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

                    <div className="relative z-10 text-center px-6">
                        <motion.div style={{ opacity: opacity1 }}>
                            <h1 className="text-7xl md:text-9xl font-bold text-black mb-6">
                                AirPods Pro
                            </h1>
                            <p className="text-3xl md:text-5xl text-black/70">
                                Adaptive Audio
                            </p>
                        </motion.div>

                        <motion.div style={{ opacity: opacity2 }} className="absolute inset-0 flex items-center justify-center">
                            <div>
                                <h2 className="text-6xl md:text-8xl font-bold text-black mb-4">
                                    Personalized
                                </h2>
                                <p className="text-2xl md:text-4xl text-black/60">
                                    Spatial Audio with head tracking
                                </p>
                            </div>
                        </motion.div>

                        <motion.div style={{ opacity: opacity3 }} className="absolute inset-0 flex items-center justify-center">
                            <div>
                                <h2 className="text-6xl md:text-8xl font-bold text-black mb-4">
                                    Up to 6 hours
                                </h2>
                                <p className="text-2xl md:text-4xl text-black/60">
                                    Listening time on one charge
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Product Image Section */}
            <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 flex items-center justify-center"
                    >
                        <Image
                            src="/products/airpods-pro.png"
                            alt="AirPods Pro"
                            width={1200}
                            height={800}
                            className="w-full h-full object-contain drop-shadow-xl"
                            priority
                        />
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
                        className="text-5xl md:text-7xl font-bold text-white text-center mb-16"
                    >
                        Magic at your ears
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Active Noise Cancellation",
                                description: "Block out the world and focus on what you're listening to",
                                icon: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                            },
                            {
                                title: "Adaptive Transparency",
                                description: "Hear your environment with real-time noise reduction",
                                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            },
                            {
                                title: "Personalized Spatial Audio",
                                description: "Immersive sound that surrounds you with dynamic head tracking",
                                icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10"
                            >
                                <svg className="w-12 h-12 text-blue-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                                </svg>
                                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                                <p className="text-white/60 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center"
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
