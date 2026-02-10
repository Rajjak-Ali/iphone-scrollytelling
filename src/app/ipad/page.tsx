"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function IPadPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Parallax transforms
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);

    return (
        <main className="relative bg-[#0d0d0d]">
            {/* Hero Section with Parallax */}
            <div ref={containerRef} className="relative" style={{ height: "400vh" }}>
                <div className="sticky top-0 h-screen overflow-hidden">
                    {/* Background Gradient */}
                    <motion.div
                        style={{ opacity: opacity1 }}
                        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"
                    />

                    {/* Main Content */}
                    <div className="relative h-full flex items-center justify-center px-6">
                        <div className="text-center max-w-5xl">
                            <motion.div style={{ opacity: opacity1, scale }}>
                                <motion.h1
                                    className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    iPad Pro
                                </motion.h1>
                                <motion.p
                                    className="text-2xl md:text-4xl text-white/80 mb-8"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    Supercharged by M2
                                </motion.p>
                            </motion.div>

                            <motion.div style={{ opacity: opacity2 }} className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
                                        Liquid Retina Display
                                    </h2>
                                    <p className="text-xl md:text-3xl text-white/70">
                                        12.9&quot; of pure brilliance
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div style={{ opacity: opacity3 }} className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
                                        Apple Pencil
                                    </h2>
                                    <p className="text-xl md:text-3xl text-white/70">
                                        Precision meets creativity
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        style={{ opacity: opacity1 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <span className="text-white/60 text-sm">Scroll to explore</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2"
                        >
                            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Product Image Section */}
            <section className="relative bg-gradient-to-b from-[#0d0d0d] to-purple-900/20 py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-white/10 flex items-center justify-center"
                    >
                        <Image
                            src="/products/ipad-pro.png"
                            alt="iPad Pro"
                            width={1200}
                            height={750}
                            className="w-full h-full object-contain drop-shadow-2xl"
                            priority
                        />
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative bg-[#0d0d0d] py-24 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-center text-white mb-4"
                    >
                        Why iPad Pro?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-white/60 text-center max-w-2xl mx-auto mb-16"
                    >
                        The ultimate iPad experience with breakthrough M2 performance.
                    </motion.p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                                title: "M2 Chip",
                                description: "8-core CPU delivers up to 15% faster performance",
                                gradient: "from-blue-500 to-purple-600"
                            },
                            {
                                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                title: "ProMotion Display",
                                description: "120Hz adaptive refresh rate for fluid scrolling",
                                gradient: "from-orange-500 to-red-600"
                            },
                            {
                                icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                title: "Apple Pencil",
                                description: "Hover, tilt, and pressure for  perfect precision",
                                gradient: "from-green-500 to-teal-600"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        >
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
