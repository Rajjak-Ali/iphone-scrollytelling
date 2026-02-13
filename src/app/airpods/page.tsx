"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] as const },
    }),
};

export default function AirPodsPage() {
    return (
        <main className="relative bg-white">
            {/* Hero */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
                {/* Soft radial gradient */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"
                />

                {/* Subtle floating shapes */}
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                    className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/3 left-1/4 w-60 h-60 bg-purple-100/40 rounded-full blur-3xl"
                />

                <div className="relative z-10 text-center px-6">
                    <motion.p
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-6"
                    >
                        Adaptive Audio. Personalized Spatial Audio.
                    </motion.p>
                    <motion.h1
                        custom={1}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-7xl md:text-9xl font-bold text-black mb-6"
                    >
                        AirPods Pro
                    </motion.h1>
                    <motion.p
                        custom={2}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-2xl md:text-4xl text-black/60 mb-4"
                    >
                        Up to 6 hours listening time
                    </motion.p>
                    <motion.p
                        custom={3}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-lg text-black/40 max-w-xl mx-auto mb-10"
                    >
                        Rebuilt from the sound up. Featuring Active Noise Cancellation, Adaptive Transparency, and Personalized Spatial Audio with head tracking.
                    </motion.p>
                    <motion.div
                        custom={4}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <Link
                            href="/buy"
                            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                        >
                            Buy AirPods Pro
                        </Link>
                    </motion.div>
                </div>
            </section>

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
                                whileHover={{ scale: 1.05, y: -8 }}
                                className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-white/20 transition-all"
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
