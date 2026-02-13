"use client";

import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const devices = [
    { name: "iPhone 16 Pro Max", value: 650, icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { name: "iPhone 16 Pro", value: 550, icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { name: "iPhone 16", value: 430, icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { name: "iPhone 15 Pro Max", value: 500, icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { name: "iPhone 15 Pro", value: 400, icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { name: "iPhone 15", value: 320, icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { name: "iPhone 14 Pro Max", value: 380, icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { name: "iPhone 14 Pro", value: 300, icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { name: "Samsung Galaxy S24 Ultra", value: 520, icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { name: "Samsung Galaxy S24+", value: 380, icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { name: "Google Pixel 9 Pro", value: 400, icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { name: "iPad Pro (M2)", value: 500, icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
];

const conditions = [
    { label: "Like New", multiplier: 1.0, desc: "No scratches or dents, works perfectly" },
    { label: "Good", multiplier: 0.85, desc: "Minor cosmetic wear, fully functional" },
    { label: "Fair", multiplier: 0.65, desc: "Visible scratches, all features work" },
    { label: "Poor", multiplier: 0.4, desc: "Significant wear, may have issues" },
];

const steps = [
    { num: 1, title: "Select your device", desc: "Choose the device you want to trade in" },
    { num: 2, title: "Choose condition", desc: "Describe its current state" },
    { num: 3, title: "Get your estimate", desc: "See how much credit you'll receive" },
];

export default function TradeInPage() {
    const [selectedDevice, setSelectedDevice] = useState<number | null>(null);
    const [selectedCondition, setSelectedCondition] = useState<number | null>(null);
    const [step, setStep] = useState(1);

    const estimatedValue = selectedDevice !== null && selectedCondition !== null
        ? Math.round(devices[selectedDevice].value * conditions[selectedCondition].multiplier)
        : 0;

    const iPhonePrice = 1199;
    const finalPrice = iPhonePrice - estimatedValue;

    return (
        <main className="bg-[#0d0d0d] min-h-screen pt-24">
            {/* Hero */}
            <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0"
                >
                    <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-500/15 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px]" />
                </motion.div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-400 text-sm font-medium tracking-wider uppercase mb-4"
                    >
                        Apple Trade In
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                    >
                        Trade in your device.<br />
                        <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                            Get credit toward a new one.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-xl max-w-2xl mx-auto"
                    >
                        Get an estimated trade-in value for your current device toward a new iPhone 17 Pro Max.
                    </motion.p>
                </div>
            </section>

            {/* Steps Indicator */}
            <section className="py-8 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-between">
                        {steps.map((s, i) => (
                            <div key={s.num} className="flex items-center">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: i * 0.15 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step > s.num
                                            ? "bg-green-500 text-white"
                                            : step === s.num
                                                ? "bg-white text-black"
                                                : "bg-white/10 text-white/40"
                                        }`}>
                                        {step > s.num ? "✓" : s.num}
                                    </div>
                                    <span className="text-xs text-white/40 mt-2 hidden sm:block">{s.title}</span>
                                </motion.div>
                                {i < steps.length - 1 && (
                                    <div className={`hidden sm:block w-24 md:w-40 h-[2px] mx-4 transition-colors ${step > s.num ? "bg-green-500" : "bg-white/10"
                                        }`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Step Content */}
            <section className="py-8 px-6 lg:px-8 min-h-[400px]">
                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        {/* Step 1: Select Device */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                                    Which device do you have?
                                </h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {devices.map((device, i) => (
                                        <motion.button
                                            key={device.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.03 }}
                                            onClick={() => {
                                                setSelectedDevice(i);
                                                setStep(2);
                                            }}
                                            className={`p-5 rounded-2xl border text-left transition-all group hover:scale-[1.02] ${selectedDevice === i
                                                    ? "border-green-500 bg-green-500/10"
                                                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                                    <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={device.icon} />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-white font-medium text-sm">{device.name}</p>
                                                    <p className="text-green-400 text-xs">Up to ${device.value}</p>
                                                </div>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Select Condition */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-center mb-8">
                                    <p className="text-white/40 text-sm mb-2">Trading in:</p>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        {selectedDevice !== null ? devices[selectedDevice].name : ""}
                                    </h2>
                                    <button
                                        onClick={() => setStep(1)}
                                        className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
                                    >
                                        Change device
                                    </button>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                                    What condition is it in?
                                </h3>

                                <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                                    {conditions.map((condition, i) => (
                                        <motion.button
                                            key={condition.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            onClick={() => {
                                                setSelectedCondition(i);
                                                setStep(3);
                                            }}
                                            className={`p-6 rounded-2xl border text-left transition-all hover:scale-[1.02] ${selectedCondition === i
                                                    ? "border-green-500 bg-green-500/10"
                                                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                                                }`}
                                        >
                                            <h4 className="text-white font-semibold text-lg mb-1">{condition.label}</h4>
                                            <p className="text-white/50 text-sm">{condition.desc}</p>
                                            {selectedDevice !== null && (
                                                <p className="text-green-400 text-sm mt-3 font-medium">
                                                    Estimated: ${Math.round(devices[selectedDevice].value * condition.multiplier)}
                                                </p>
                                            )}
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Result */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.2, type: "spring", damping: 15 }}
                                    className="max-w-lg mx-auto p-8 rounded-3xl bg-gradient-to-b from-green-500/10 to-transparent border border-green-500/20 mb-8"
                                >
                                    <p className="text-white/40 text-sm mb-2">Your estimated trade-in value</p>
                                    <motion.div
                                        initial={{ scale: 0.5 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.4, type: "spring", damping: 10 }}
                                        className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4"
                                    >
                                        ${estimatedValue}
                                    </motion.div>
                                    <p className="text-white/50 text-sm mb-6">
                                        {selectedDevice !== null ? devices[selectedDevice].name : ""} · {selectedCondition !== null ? conditions[selectedCondition].label : ""} condition
                                    </p>

                                    <div className="border-t border-white/10 pt-6 space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/50">iPhone 17 Pro Max</span>
                                            <span className="text-white">${iPhonePrice}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-green-400">Trade-in credit</span>
                                            <span className="text-green-400">-${estimatedValue}</span>
                                        </div>
                                        <div className="flex justify-between text-lg font-bold pt-3 border-t border-white/10">
                                            <span className="text-white">You pay</span>
                                            <span className="text-white">${finalPrice}</span>
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/buy"
                                        className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                                    >
                                        Continue to Buy
                                    </Link>
                                    <button
                                        onClick={() => { setStep(1); setSelectedDevice(null); setSelectedCondition(null); }}
                                        className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all"
                                    >
                                        Start Over
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-24 px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
                    >
                        How it works
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                                title: "Get an estimate",
                                desc: "Answer a few questions about your device and get an estimated trade-in value instantly.",
                                gradient: "from-blue-500 to-cyan-500",
                            },
                            {
                                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                                title: "Ship it to us",
                                desc: "We'll send you a prepaid shipping kit. Pack your device and drop it off.",
                                gradient: "from-green-500 to-emerald-500",
                            },
                            {
                                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                title: "Get your credit",
                                desc: "Once we receive and verify your device, credit is applied to your purchase.",
                                gradient: "from-purple-500 to-pink-500",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-transparent border border-white/10 hover:border-white/20 transition-all text-center"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6`}>
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
