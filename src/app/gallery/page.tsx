"use client";

import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import { useState } from "react";
import Image from "next/image";

const photoCategories = ["All", "Portrait", "Night Mode", "Macro", "Cinematic", "Landscape"];

const photos = [
    {
        title: "Golden Hour Portrait",
        category: "Portrait",
        aspect: "aspect-[3/4]",
        gradient: "from-orange-900/40 to-amber-900/40",
        desc: "Shot on iPhone 17 Pro Max · 48MP Main Camera · ƒ/1.78",
    },
    {
        title: "City Lights",
        category: "Night Mode",
        aspect: "aspect-[4/3]",
        gradient: "from-blue-900/40 to-purple-900/40",
        desc: "Shot on iPhone 17 Pro Max · Night Mode · 3s exposure",
    },
    {
        title: "Dew Drop",
        category: "Macro",
        aspect: "aspect-square",
        gradient: "from-green-900/40 to-teal-900/40",
        desc: "Shot on iPhone 17 Pro Max · Ultra Wide Macro · 2cm focus",
    },
    {
        title: "Mountain Sunrise",
        category: "Landscape",
        aspect: "aspect-[16/9]",
        gradient: "from-rose-900/40 to-orange-900/40",
        desc: "Shot on iPhone 17 Pro Max · 5x Telephoto · HDR",
    },
    {
        title: "Cinematic Portrait",
        category: "Cinematic",
        aspect: "aspect-[2/3]",
        gradient: "from-purple-900/40 to-pink-900/40",
        desc: "Shot on iPhone 17 Pro Max · Cinematic Mode · 4K 30fps",
    },
    {
        title: "Night Architecture",
        category: "Night Mode",
        aspect: "aspect-[4/3]",
        gradient: "from-indigo-900/40 to-blue-900/40",
        desc: "Shot on iPhone 17 Pro Max · Night Mode · Ultra Wide",
    },
    {
        title: "Flower Close-Up",
        category: "Macro",
        aspect: "aspect-[3/4]",
        gradient: "from-pink-900/40 to-rose-900/40",
        desc: "Shot on iPhone 17 Pro Max · Macro Photography",
    },
    {
        title: "Sunset Silhouette",
        category: "Portrait",
        aspect: "aspect-[4/3]",
        gradient: "from-amber-900/40 to-red-900/40",
        desc: "Shot on iPhone 17 Pro Max · Portrait Mode · Natural Light",
    },
    {
        title: "Ocean Waves",
        category: "Landscape",
        aspect: "aspect-[16/9]",
        gradient: "from-cyan-900/40 to-blue-900/40",
        desc: "Shot on iPhone 17 Pro Max · Action Mode · 48MP",
    },
    {
        title: "Rainy Street",
        category: "Night Mode",
        aspect: "aspect-square",
        gradient: "from-slate-900/40 to-gray-900/40",
        desc: "Shot on iPhone 17 Pro Max · Night Mode · Deep Fusion",
    },
    {
        title: "Moving Portrait",
        category: "Cinematic",
        aspect: "aspect-[4/3]",
        gradient: "from-violet-900/40 to-fuchsia-900/40",
        desc: "Shot on iPhone 17 Pro Max · Cinematic Mode · Rack Focus",
    },
    {
        title: "Water Droplet",
        category: "Macro",
        aspect: "aspect-square",
        gradient: "from-sky-900/40 to-cyan-900/40",
        desc: "Shot on iPhone 17 Pro Max · Macro · 2x zoom",
    },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

    const filtered = activeCategory === "All"
        ? photos
        : photos.filter((p) => p.category === activeCategory);

    return (
        <main className="bg-[#0d0d0d] min-h-screen pt-24">
            {/* Hero */}
            <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]" />
                </motion.div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-4"
                    >
                        Shot on iPhone
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                    >
                        The Gallery
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/60 text-xl max-w-2xl mx-auto"
                    >
                        Stunning photography captured with the pro camera system on iPhone 17 Pro Max.
                    </motion.p>
                </div>
            </section>

            {/* Category Tabs */}
            <section className="sticky top-16 z-30 bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-white/5 py-4 px-6">
                <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto no-scrollbar">
                    {photoCategories.map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat
                                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
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

            {/* Gallery Grid — Masonry-style */}
            <section className="py-12 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((photo, i) => (
                                <motion.div
                                    key={photo.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    onClick={() => setSelectedPhoto(i)}
                                    className="break-inside-avoid cursor-pointer group"
                                >
                                    <div className={`${photo.aspect} rounded-2xl overflow-hidden bg-gradient-to-br ${photo.gradient} border border-white/10 group-hover:border-white/25 transition-all relative`}>
                                        {/* Placeholder gradient with icon */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <svg className="w-16 h-16 text-white/20 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <p className="text-white/30 text-xs">{photo.title}</p>
                                            </div>
                                        </div>

                                        {/* Hover overlay  */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-end p-6"
                                        >
                                            <div>
                                                <h3 className="text-white font-semibold text-lg">{photo.title}</h3>
                                                <p className="text-white/60 text-xs mt-1">{photo.desc}</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedPhoto !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={`aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-br ${filtered[selectedPhoto]?.gradient || "from-gray-900 to-gray-800"} border border-white/10 flex items-center justify-center mb-6`}>
                                <div className="text-center">
                                    <svg className="w-24 h-24 text-white/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="text-white/40 text-sm">{filtered[selectedPhoto]?.title}</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {filtered[selectedPhoto]?.title}
                                </h3>
                                <p className="text-white/50 text-sm">
                                    {filtered[selectedPhoto]?.desc}
                                </p>
                            </div>
                        </motion.div>

                        {/* Close button */}
                        <button
                            onClick={() => setSelectedPhoto(null)}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Camera CTA */}
            <section className="py-24 px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                    >
                        Capture your own masterpiece
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-white/60 text-lg mb-8"
                    >
                        The pro camera system on iPhone 17 Pro Max makes everyone a photographer.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="/camera"
                            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all hover:scale-105"
                        >
                            Explore Camera
                        </a>
                        <a
                            href="/"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all"
                        >
                            Back to Home
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
