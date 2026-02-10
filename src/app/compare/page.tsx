"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

const models = [
    {
        name: "iPhone 17 Pro Max",
        image: "/images/display_vibrant_clean_1769249626566.png",
        price: 1199,
        display: '6.9"',
        chip: "A19 Bionic",
        camera: "48MP Pro",
        zoom: "5x optical",
        battery: "29 hours",
        weight: "221g",
        features: ["Dynamic Island", "ProMotion 120Hz", "Always-On", "USB-C 3.0", "Titanium frame"],
        isNew: true,
    },
    {
        name: "iPhone 17 Pro",
        image: "/images/display_vibrant_clean_1769249626566.png",
        price: 999,
        display: '6.3"',
        chip: "A19 Bionic",
        camera: "48MP Pro",
        zoom: "3x optical",
        battery: "23 hours",
        weight: "187g",
        features: ["Dynamic Island", "ProMotion 120Hz", "Always-On", "USB-C 3.0", "Titanium frame"],
        isNew: true,
    },
    {
        name: "iPhone 17",
        image: "/images/display_vibrant_clean_1769249626566.png",
        price: 799,
        display: '6.1"',
        chip: "A18 Bionic",
        camera: "48MP",
        zoom: "2x optical",
        battery: "20 hours",
        weight: "171g",
        features: ["Dynamic Island", "60Hz", "USB-C 2.0", "Aluminum frame"],
        isNew: false,
    },
    {
        name: "iPhone 16 Pro Max",
        image: "/images/display_vibrant_clean_1769249626566.png",
        price: 999,
        display: '6.7"',
        chip: "A17 Pro",
        camera: "48MP Pro",
        zoom: "5x optical",
        battery: "27 hours",
        weight: "227g",
        features: ["Dynamic Island", "ProMotion 120Hz", "Always-On", "USB-C", "Titanium frame"],
        isNew: false,
    },
];

const comparisonRows = [
    { label: "Display", key: "display" },
    { label: "Chip", key: "chip" },
    { label: "Camera", key: "camera" },
    { label: "Optical Zoom", key: "zoom" },
    { label: "Battery Life", key: "battery" },
    { label: "Weight", key: "weight" },
];

export default function ComparePage() {
    const [selectedModels, setSelectedModels] = useState<number[]>([0, 1]);

    const toggleModel = (index: number) => {
        if (selectedModels.includes(index)) {
            if (selectedModels.length > 2) {
                setSelectedModels(selectedModels.filter((i) => i !== index));
            }
        } else {
            if (selectedModels.length < 4) {
                setSelectedModels([...selectedModels, index]);
            }
        }
    };

    const selectedModelData = selectedModels.map((i) => models[i]);

    return (
        <main className="bg-[#0d0d0d] min-h-screen pt-24">
            {/* Hero */}
            <section className="py-16 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
                        Compare
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Find your perfect iPhone.
                    </h1>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto">
                        Compare features, specs, and prices to choose the right iPhone for you.
                    </p>
                </div>
            </section>

            {/* Model Selector */}
            <section className="py-8 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <p className="text-white/60 text-sm mb-4">Select models to compare (2-4):</p>
                    <div className="flex flex-wrap gap-3">
                        {models.map((model, index) => (
                            <button
                                key={model.name}
                                onClick={() => toggleModel(index)}
                                className={`px-4 py-2 rounded-full border transition-all ${selectedModels.includes(index)
                                        ? "bg-blue-500 border-blue-500 text-white"
                                        : "border-white/20 text-white/60 hover:border-white/40"
                                    }`}
                            >
                                {model.name}
                                {model.isNew && (
                                    <span className="ml-2 px-2 py-0.5 bg-orange-500 text-white text-xs rounded-full">
                                        NEW
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-16 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto overflow-x-auto">
                    <table className="w-full min-w-[800px]">
                        {/* Header with images */}
                        <thead>
                            <tr>
                                <th className="p-4 text-left w-40"></th>
                                {selectedModelData.map((model) => (
                                    <th key={model.name} className="p-4 text-center">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex flex-col items-center"
                                        >
                                            <div className="w-32 h-48 relative mb-4">
                                                <Image
                                                    src={model.image}
                                                    alt={model.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <h3 className="text-lg font-semibold text-white">{model.name}</h3>
                                            <p className="text-blue-400 font-bold text-xl mt-2">
                                                From ${model.price}
                                            </p>
                                            {model.isNew && (
                                                <span className="mt-2 px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">
                                                    Just Released
                                                </span>
                                            )}
                                        </motion.div>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {/* Specs rows */}
                            {comparisonRows.map((row) => (
                                <tr key={row.label} className="border-t border-white/10">
                                    <td className="p-4 text-white/50 font-medium">{row.label}</td>
                                    {selectedModelData.map((model) => (
                                        <td key={model.name + row.key} className="p-4 text-center text-white">
                                            {model[row.key as keyof typeof model]}
                                        </td>
                                    ))}
                                </tr>
                            ))}

                            {/* Features row */}
                            <tr className="border-t border-white/10">
                                <td className="p-4 text-white/50 font-medium align-top">Features</td>
                                {selectedModelData.map((model) => (
                                    <td key={model.name + "features"} className="p-4">
                                        <ul className="space-y-2">
                                            {model.features.map((feature) => (
                                                <li key={feature} className="flex items-center justify-center gap-2 text-sm">
                                                    <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-white/80">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                ))}
                            </tr>

                            {/* Buy buttons */}
                            <tr className="border-t border-white/10">
                                <td className="p-4"></td>
                                {selectedModelData.map((model) => (
                                    <td key={model.name + "buy"} className="p-6 text-center">
                                        <Link
                                            href="/buy"
                                            className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all hover:scale-105"
                                        >
                                            Buy {model.name.split(" ").slice(-2).join(" ")}
                                        </Link>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Help Section */}
            <section className="py-16 px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Need help choosing?
                    </h2>
                    <p className="text-white/60 mb-8">
                        Chat with an iPhone Specialist to find the perfect model for your needs.
                    </p>
                    <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-colors">
                        Chat with a Specialist
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
