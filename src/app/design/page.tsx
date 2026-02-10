"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import MacVideoPlayer from "@/components/MacVideoPlayer";
import { motion } from "framer-motion";
import { useState } from "react";

const colors = [
    { name: "Natural Titanium", hex: "#c4b9a9", description: "Elegant and timeless" },
    { name: "Blue Titanium", hex: "#4a5568", description: "Bold and sophisticated" },
    { name: "White Titanium", hex: "#e8e8e8", description: "Clean and modern" },
    { name: "Black Titanium", hex: "#1a1a1a", description: "Sleek and powerful" },
];

const materials = [
    {
        title: "Grade 5 Titanium",
        description: "The same alloy used in spacecraft, with an incredible strength-to-weight ratio.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: "Ceramic Shield Front",
        description: "Tougher than any smartphone glass, infused with nano-ceramic crystals.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
    },
    {
        title: "Textured Matte Glass",
        description: "Premium back glass with a sophisticated brushed texture.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
    },
    {
        title: "IP68 Water Resistance",
        description: "Rated for submersion up to 6 meters for 30 minutes.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
];

export default function DesignPage() {
    const [selectedColor, setSelectedColor] = useState(0);

    return (
        <main className="bg-[#0d0d0d] min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative py-20 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
                        Design
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        Forged in titanium.
                    </h1>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto">
                        A refined design that&apos;s both beautiful and built to last.
                        The lightest Pro Max ever, with the strongest materials.
                    </p>
                </div>
            </section>

            {/* Color Selector */}
            <section className="py-16 px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 md:p-16">
                        <div className="text-center mb-12">
                            <Image
                                src="/images/iphone_colors_lineup_1769248917594.png"
                                alt="iPhone Colors"
                                width={800}
                                height={400}
                                className="w-full max-w-2xl mx-auto"
                            />
                        </div>

                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-white mb-2">
                                {colors[selectedColor].name}
                            </h3>
                            <p className="text-white/50 mb-8">{colors[selectedColor].description}</p>

                            <div className="flex justify-center gap-4">
                                {colors.map((color, index) => (
                                    <motion.button
                                        key={color.name}
                                        onClick={() => setSelectedColor(index)}
                                        className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === index ? "border-white scale-110" : "border-white/20"
                                            }`}
                                        style={{ backgroundColor: color.hex }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Materials Grid */}
            <section className="py-16 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
                        Premium materials, superior durability.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {materials.map((material) => (
                            <motion.div
                                key={material.title}
                                className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all"
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-blue-400 mb-6">{material.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {material.title}
                                </h3>
                                <p className="text-white/60">{material.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dimensions Illustration */}
            <section className="py-24 px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Refined in every detail.
                            </h2>
                            <p className="text-white/60 text-lg mb-8">
                                At just 8.25mm thin and 221 grams, iPhone 17 Pro Max is the lightest
                                Pro Max model ever. The titanium frame is precisely machined to a
                                microscopic tolerance for a seamless feel.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <p className="text-3xl font-bold text-white">8.25mm</p>
                                    <p className="text-white/50 text-sm">Thickness</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <p className="text-3xl font-bold text-white">221g</p>
                                    <p className="text-white/50 text-sm">Weight</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                                <Image
                                    src="/images/display_vibrant_clean_1769249626566.png"
                                    alt="iPhone Display"
                                    width={400}
                                    height={400}
                                    className="max-w-[80%]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-24 px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
                            Watch
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Design in Motion
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            See the incredible craftsmanship and precision engineering up close.
                        </p>
                    </div>

                    <MacVideoPlayer />
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Choose your finish.
                    </h2>
                    <p className="text-white/60 text-lg mb-8">
                        Four stunning titanium colors. Starting at $1,199.
                    </p>
                    <Link
                        href="/buy"
                        className="inline-flex px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all hover:scale-105"
                    >
                        Buy iPhone 17 Pro Max
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
