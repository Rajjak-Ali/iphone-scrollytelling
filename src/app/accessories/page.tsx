"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const categories = ["All", "Cases", "Chargers", "MagSafe", "Audio", "Protection"];

const accessories = [
    {
        name: "Silicone Case with MagSafe",
        category: "Cases",
        price: 49,
        color: "from-blue-500 to-indigo-600",
        description: "Ultra-smooth silicone exterior with a soft microfiber lining.",
        icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    },
    {
        name: "Clear Case with MagSafe",
        category: "Cases",
        price: 49,
        color: "from-gray-400 to-gray-600",
        description: "Show off your iPhone's design with scratch-resistant clarity.",
        icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    },
    {
        name: "FineWoven Case",
        category: "Cases",
        price: 59,
        color: "from-amber-500 to-orange-600",
        description: "Made from durable microtwill, a luxurious and sustainable alternative to leather.",
        icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    },
    {
        name: "MagSafe Charger",
        category: "Chargers",
        price: 39,
        color: "from-green-500 to-emerald-600",
        description: "Perfectly aligned magnets attach to your iPhone for faster wireless charging.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
        name: "MagSafe Duo Charger",
        category: "Chargers",
        price: 129,
        color: "from-purple-500 to-violet-600",
        description: "Charge your iPhone and Apple Watch simultaneously. Folds flat for travel.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
        name: "35W Dual USB-C Adapter",
        category: "Chargers",
        price: 59,
        color: "from-cyan-500 to-blue-600",
        description: "Compact power adapter with two USB-C ports for charging two devices at once.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
        name: "MagSafe Battery Pack",
        category: "MagSafe",
        price: 99,
        color: "from-teal-500 to-cyan-600",
        description: "Extend your battery life on the go with a snap-on wireless power bank.",
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    },
    {
        name: "MagSafe Wallet",
        category: "MagSafe",
        price: 59,
        color: "from-rose-500 to-pink-600",
        description: "Store your cards securely with Find My support if it gets separated.",
        icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    },
    {
        name: "AirPods Pro (2nd gen)",
        category: "Audio",
        price: 249,
        color: "from-sky-500 to-blue-600",
        description: "Active Noise Cancellation, Adaptive Transparency, and Personalized Spatial Audio.",
        icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z",
    },
    {
        name: "Ceramic Shield Protector",
        category: "Protection",
        price: 29,
        color: "from-yellow-500 to-amber-600",
        description: "Ultra-thin tempered glass screen protector with edge-to-edge coverage.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
        name: "Camera Lens Protector",
        category: "Protection",
        price: 29,
        color: "from-red-500 to-rose-600",
        description: "Sapphire crystal lens protectors designed to guard against scratches and cracks.",
        icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z",
    },
    {
        name: "MagSafe PopSocket",
        category: "MagSafe",
        price: 30,
        color: "from-fuchsia-500 to-purple-600",
        description: "MagSafe-compatible phone grip with swappable tops and a built-in stand.",
        icon: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const },
    }),
};

export default function AccessoriesPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = activeCategory === "All"
        ? accessories
        : accessories.filter((a) => a.category === activeCategory);

    return (
        <main className="bg-[#0d0d0d] min-h-screen pt-24">
            {/* Hero */}
            <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"
                />
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.p
                        custom={0} variants={fadeUp} initial="hidden" animate="visible"
                        className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4"
                    >
                        Accessories
                    </motion.p>
                    <motion.h1
                        custom={1} variants={fadeUp} initial="hidden" animate="visible"
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                    >
                        Complete your setup.
                    </motion.h1>
                    <motion.p
                        custom={2} variants={fadeUp} initial="hidden" animate="visible"
                        className="text-white/60 text-xl max-w-2xl mx-auto"
                    >
                        Cases, chargers, MagSafe accessories, and more — designed for iPhone 17 Pro Max.
                    </motion.p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="sticky top-16 z-30 bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-white/5 py-4 px-6">
                <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto no-scrollbar">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat
                                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        layout
                        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {filtered.map((item, i) => (
                            <motion.div
                                key={item.name}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group p-6 rounded-3xl bg-gradient-to-b from-white/[0.06] to-transparent border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                    </svg>
                                </div>
                                <span className="text-xs text-white/40 uppercase tracking-wider">{item.category}</span>
                                <h3 className="text-lg font-semibold text-white mt-1 mb-2">{item.name}</h3>
                                <p className="text-white/50 text-sm leading-relaxed mb-4">{item.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-bold text-lg">${item.price}</span>
                                    <span className="text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                                        Buy →
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                    >
                        Explore iPhone 17 Pro Max
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/buy"
                            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all hover:scale-105"
                        >
                            Buy iPhone
                        </Link>
                        <Link
                            href="/"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all"
                        >
                            Back to Home
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
