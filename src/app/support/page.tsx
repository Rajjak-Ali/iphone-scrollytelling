"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        category: "Orders & Shipping",
        questions: [
            {
                q: "How long does shipping take?",
                a: "Standard delivery takes 3-5 business days. Express delivery is available for 1-2 day shipping at an additional cost.",
            },
            {
                q: "Can I track my order?",
                a: "Yes! Once your order ships, you'll receive an email with tracking information. You can also track your order in your account.",
            },
            {
                q: "What is your return policy?",
                a: "We offer a 14-day return policy for all devices in original condition. Simply initiate a return from your account or contact support.",
            },
        ],
    },
    {
        category: "Trade-In",
        questions: [
            {
                q: "How does trade-in work?",
                a: "Get an instant estimate online, ship your device for free, and receive credit once it's verified. It's that simple.",
            },
            {
                q: "What condition does my device need to be in?",
                a: "We accept devices in any condition. Better condition means higher trade-in value, but even damaged devices have value.",
            },
        ],
    },
    {
        category: "AppleCare+",
        questions: [
            {
                q: "What does AppleCare+ cover?",
                a: "AppleCare+ covers unlimited accidental damage repairs (subject to service fees), battery service, and 24/7 priority technical support.",
            },
            {
                q: "Can I add AppleCare+ later?",
                a: "Yes, you can add AppleCare+ within 60 days of purchasing your iPhone. Just visit an Apple Store or contact us.",
            },
        ],
    },
    {
        category: "Technical",
        questions: [
            {
                q: "Is iPhone 17 Pro Max water resistant?",
                a: "Yes! iPhone 17 Pro Max has IP68 water resistance - rated for submersion up to 6 meters for 30 minutes.",
            },
            {
                q: "What chargers work with iPhone 17 Pro Max?",
                a: "iPhone 17 Pro Max uses USB-C. Any USB-C charger works. For fastest charging, use a 35W or higher adapter.",
            },
        ],
    },
];

export default function SupportPage() {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredFaqs = faqs.map((category) => ({
        ...category,
        questions: category.questions.filter(
            (q) =>
                q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                q.a.toLowerCase().includes(searchQuery.toLowerCase())
        ),
    })).filter((category) => category.questions.length > 0);

    return (
        <main className="bg-[#0d0d0d] min-h-screen pt-24">
            {/* Hero */}
            <section className="py-20 px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        How can we help?
                    </h1>
                    <div className="relative max-w-xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search for answers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-6 py-4 pl-14 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 text-lg"
                        />
                        <svg
                            className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="py-8 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { icon: "📦", label: "Track Order", href: "#" },
                            { icon: "🔄", label: "Start Return", href: "#" },
                            { icon: "💬", label: "Live Chat", href: "#" },
                            { icon: "📞", label: "Call Us", href: "#" },
                        ].map((action) => (
                            <Link
                                key={action.label}
                                href={action.href}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex items-center gap-4 group"
                            >
                                <span className="text-3xl">{action.icon}</span>
                                <span className="text-white font-medium group-hover:text-blue-400 transition-colors">
                                    {action.label}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-16 px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8">
                        Frequently Asked Questions
                    </h2>

                    {filteredFaqs.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-white/60">No results found for &quot;{searchQuery}&quot;</p>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {filteredFaqs.map((category) => (
                                <div key={category.category}>
                                    <h3 className="text-lg font-semibold text-white/80 mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                        {category.category}
                                    </h3>
                                    <div className="space-y-2">
                                        {category.questions.map((faq) => (
                                            <div
                                                key={faq.q}
                                                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
                                            >
                                                <button
                                                    onClick={() => setOpenQuestion(openQuestion === faq.q ? null : faq.q)}
                                                    className="w-full p-5 flex items-center justify-between text-left"
                                                >
                                                    <span className="text-white font-medium pr-4">{faq.q}</span>
                                                    <motion.svg
                                                        animate={{ rotate: openQuestion === faq.q ? 180 : 0 }}
                                                        className="w-5 h-5 text-white/50 flex-shrink-0"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </motion.svg>
                                                </button>
                                                <AnimatePresence>
                                                    {openQuestion === faq.q && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <p className="px-5 pb-5 text-white/60 leading-relaxed">
                                                                {faq.a}
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Contact Options */}
            <section className="py-16 px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-12">
                        Other ways to get help
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-8 rounded-3xl bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
                            <p className="text-white/60 mb-6">
                                Get instant help from our support team. Available 24/7.
                            </p>
                            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors">
                                Start Chat
                            </button>
                        </div>

                        <div className="p-8 rounded-3xl bg-gradient-to-b from-green-500/10 to-transparent border border-green-500/20 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Call Us</h3>
                            <p className="text-white/60 mb-6">
                                Speak directly with a support specialist.
                            </p>
                            <a href="tel:1-800-275-2273" className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-colors">
                                1-800-275-2273
                            </a>
                        </div>

                        <div className="p-8 rounded-3xl bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Visit a Store</h3>
                            <p className="text-white/60 mb-6">
                                Get hands-on help at an Apple Store near you.
                            </p>
                            <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-full transition-colors">
                                Find a Store
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
