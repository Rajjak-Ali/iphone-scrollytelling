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

export default function WatchPage() {
    return (
        <main className="relative bg-black">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Animated gradient background */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-pink-900/30 to-orange-900/30"
                />

                {/* Animated rings */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute w-[600px] h-[600px] border border-white/10 rounded-full"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 2.5, delay: 0.8 }}
                    className="absolute w-[900px] h-[900px] border border-white/5 rounded-full"
                />

                <div className="relative z-10 text-center px-6">
                    <motion.p
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-red-400 text-sm font-medium tracking-wider uppercase mb-6"
                    >
                        The most rugged Apple Watch
                    </motion.p>
                    <motion.h1
                        custom={1}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-7xl md:text-9xl font-bold text-white mb-6"
                    >
                        Apple Watch
                    </motion.h1>
                    <motion.p
                        custom={2}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-3xl md:text-5xl text-white/80 mb-4"
                    >
                        Ultra 2
                    </motion.p>
                    <motion.p
                        custom={3}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-lg text-white/50 max-w-xl mx-auto mb-10"
                    >
                        Titanium. 49mm display. 100m water resistant. The biggest, brightest, most rugged Apple Watch ever.
                    </motion.p>
                    <motion.div
                        custom={4}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/buy"
                            className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
                        >
                            Buy Apple Watch Ultra 2
                        </Link>
                    </motion.div>
                </div>
            </section>

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
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-center hover:border-white/20 transition-all"
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
