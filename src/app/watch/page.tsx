"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function WatchPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const opacity1 = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.75], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <main className="relative bg-black">
            {/* Hero Section */}
            <div ref={containerRef} className="relative" style={{ height: "400vh" }}>
                <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
                    <motion.div
                        style={{ scale, rotate: opacity1 }}
                        className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-pink-900/30 to-orange-900/30"
                    />

                    <div className="relative z-10 text-center px-6">
                        <motion.div style={{ opacity: opacity1 }}>
                            <h1 className="text-7xl md:text-9xl font-bold text-white mb-6">
                                Apple Watch
                            </h1>
                            <p className="text-3xl md:text-5xl text-white/80">
                                Ultra 2
                            </p>
                        </motion.div>

                        <motion.div style={{ opacity: opacity2 }} className="absolute inset-0 flex items-center justify-center">
                            <div>
                                <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">
                                    Titanium
                                </h2>
                                <p className="text-2xl md:text-4xl text-white/70">
                                    Rugged and refined
                                </p>
                            </div>
                        </motion.div>

                        <motion.div style={{ opacity: opacity3 }} className="absolute inset-0 flex items-center justify-center">
                            <div>
                                <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">
                                    49mm Display
                                </h2>
                                <p className="text-2xl md:text-4xl text-white/70">
                                    The biggest, brightest
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Product Image Section */}
            <section className="relative bg-gradient-to-b from-black to-red-900/10 py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative aspect-square md:aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                        <Image
                            src="/products/apple-watch.png"
                            alt="Apple Watch Ultra"
                            width={1000}
                            height={1000}
                            className="w-full h-full object-contain drop-shadow-2xl"
                            priority
                        />
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="relative bg-black py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-4xl md:text-6xl font-bold text-white">
                                Adventure awaits
                            </h3>
                            <p className="text-xl text-white/60 leading-relaxed">
                                Depth gauge. Dual-frequency GPS. Three-mic array for crystal-clear calls. The most rugged and capable Apple Watch pushes the limits so you can do the same.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-4xl md:text-6xl font-bold text-white">
                                Health insights
                            </h3>
                            <p className="text-xl text-white/60 leading-relaxed">
                                Advanced sensors provide insights to help you better understand your health. Track your blood oxygen. Take an ECG. Measure your sleep. See how your body responds to stress.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "100m", subtitle: "Water resistant", gradient: "from-blue-500 to-cyan-500" },
                            { title: "36 hrs", subtitle: "Battery life", gradient: "from-green-500 to-emerald-500" },
                            { title: "S9 SiP", subtitle: "Dual-core", gradient: "from-purple-500 to-pink-500" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-center"
                            >
                                <div className={`text-5xl md:text-7xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4`}>
                                    {stat.title}
                                </div>
                                <p className="text-white/60 text-lg">{stat.subtitle}</p>
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
