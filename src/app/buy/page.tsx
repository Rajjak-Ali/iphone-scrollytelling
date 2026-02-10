"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";

const colors = [
    { name: "Natural Titanium", hex: "#c4b9a9" },
    { name: "Blue Titanium", hex: "#4a5568" },
    { name: "White Titanium", hex: "#e8e8e8" },
    { name: "Black Titanium", hex: "#1a1a1a" },
];

const storageOptions = [
    { size: "256GB", price: 1199 },
    { size: "512GB", price: 1399 },
    { size: "1TB", price: 1599 },
    { size: "2TB", price: 1799 },
];

export default function BuyPage() {
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedStorage, setSelectedStorage] = useState(0);
    const [paymentOption, setPaymentOption] = useState<"full" | "monthly">("full");

    const currentPrice = storageOptions[selectedStorage].price;
    const monthlyPrice = (currentPrice / 24).toFixed(2);

    return (
        <main className="bg-[#0d0d0d] min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative py-12 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
                        Buy
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        iPhone 17 Pro Max
                    </h1>
                    <p className="text-white/60 text-lg">
                        From ${currentPrice} or ${monthlyPrice}/mo. for 24 mo.
                    </p>
                </div>
            </section>

            {/* Product Configurator */}
            <section className="py-12 px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Product Image */}
                        <div className="sticky top-24">
                            <div className="aspect-square rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 flex items-center justify-center p-8">
                                <Image
                                    src="/images/display_vibrant_clean_1769249626566.png"
                                    alt="iPhone 17 Pro Max"
                                    width={400}
                                    height={600}
                                    className="max-h-[500px] w-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Configuration Options */}
                        <div className="space-y-10">
                            {/* Color Selection */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">
                                    Color - {colors[selectedColor].name}
                                </h3>
                                <div className="flex gap-4">
                                    {colors.map((color, index) => (
                                        <motion.button
                                            key={color.name}
                                            onClick={() => setSelectedColor(index)}
                                            className={`w-12 h-12 rounded-full border-2 transition-all ${selectedColor === index
                                                ? "border-blue-500 ring-2 ring-blue-500/30"
                                                : "border-white/20"
                                                }`}
                                            style={{ backgroundColor: color.hex }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            title={color.name}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Storage Selection */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">
                                    Storage
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {storageOptions.map((option, index) => (
                                        <button
                                            key={option.size}
                                            onClick={() => setSelectedStorage(index)}
                                            className={`p-4 rounded-2xl border transition-all text-left ${selectedStorage === index
                                                ? "border-blue-500 bg-blue-500/10"
                                                : "border-white/10 hover:border-white/20"
                                                }`}
                                        >
                                            <p className="text-white font-semibold">{option.size}</p>
                                            <p className="text-white/50 text-sm">
                                                ${option.price}
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Payment Option */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">
                                    Payment
                                </h3>
                                <div className="space-y-3">
                                    <button
                                        onClick={() => setPaymentOption("full")}
                                        className={`w-full p-4 rounded-2xl border transition-all text-left flex items-center justify-between ${paymentOption === "full"
                                            ? "border-blue-500 bg-blue-500/10"
                                            : "border-white/10 hover:border-white/20"
                                            }`}
                                    >
                                        <div>
                                            <p className="text-white font-semibold">Pay in full</p>
                                            <p className="text-white/50 text-sm">One-time payment</p>
                                        </div>
                                        <p className="text-white font-bold text-xl">${currentPrice}</p>
                                    </button>

                                    <button
                                        onClick={() => setPaymentOption("monthly")}
                                        className={`w-full p-4 rounded-2xl border transition-all text-left flex items-center justify-between ${paymentOption === "monthly"
                                            ? "border-blue-500 bg-blue-500/10"
                                            : "border-white/10 hover:border-white/20"
                                            }`}
                                    >
                                        <div>
                                            <p className="text-white font-semibold">Pay monthly</p>
                                            <p className="text-white/50 text-sm">
                                                24 months with Apple Card
                                            </p>
                                        </div>
                                        <p className="text-white font-bold text-xl">
                                            ${monthlyPrice}<span className="text-sm font-normal">/mo</span>
                                        </p>
                                    </button>
                                </div>
                            </div>

                            {/* Trade-in */}
                            <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">
                                            Get $200–$650 credit with trade‑in
                                        </p>
                                        <p className="text-white/60 text-sm mt-1">
                                            Trade in your current iPhone and get credit toward a new one.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-lg font-semibold text-white mb-4">
                                    Your iPhone 17 Pro Max
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Color</span>
                                        <span className="text-white">{colors[selectedColor].name}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Storage</span>
                                        <span className="text-white">
                                            {storageOptions[selectedStorage].size}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Payment</span>
                                        <span className="text-white">
                                            {paymentOption === "full" ? "Pay in full" : "Monthly"}
                                        </span>
                                    </div>
                                    <div className="pt-3 border-t border-white/10 flex justify-between">
                                        <span className="text-white font-semibold">Total</span>
                                        <span className="text-white font-bold text-xl">
                                            {paymentOption === "full"
                                                ? `$${currentPrice}`
                                                : `$${monthlyPrice}/mo`
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="space-y-3">
                                <button className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/20">
                                    Continue
                                </button>
                                <p className="text-center text-white/40 text-sm">
                                    Free delivery. Free returns.
                                </p>
                            </div>

                            {/* AppleCare+ */}
                            <div className="p-6 rounded-2xl border border-white/10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">
                                            Add AppleCare+ for iPhone
                                        </p>
                                        <p className="text-white/60 text-sm mt-1">
                                            Get unlimited repairs for accidental damage protection,
                                            Apple-certified repairs, and priority access to Apple experts.
                                        </p>
                                        <p className="text-blue-400 text-sm mt-2">
                                            $199 or $9.99/mo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Delivery Info */}
            <section className="py-16 px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Free Delivery</h3>
                            <p className="text-white/50 text-sm">
                                Get free delivery, or pick up available items at an Apple Store.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Pay Monthly</h3>
                            <p className="text-white/50 text-sm">
                                Pay over time with low monthly payments at 0% APR.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Free Returns</h3>
                            <p className="text-white/50 text-sm">
                                Not completely satisfied? Return it within 14 days.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
