"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

const reviews = [
    {
        id: 1,
        name: "Alex Thompson",
        avatar: "AT",
        rating: 5,
        verified: true,
        date: "January 20, 2026",
        title: "Best iPhone I've ever owned",
        content: "The camera system is absolutely incredible. The 5x zoom has completely changed how I take photos. Battery life is amazing too - I can go two full days without charging with moderate use.",
        helpful: 124,
        variant: "Natural Titanium, 512GB",
    },
    {
        id: 2,
        name: "Sarah Martinez",
        avatar: "SM",
        rating: 5,
        verified: true,
        date: "January 18, 2026",
        title: "Worth every penny",
        content: "Coming from the iPhone 14 Pro, this is a massive upgrade. The display is stunning, the titanium frame feels premium, and the A19 chip handles everything I throw at it. ProRes video recording is a game-changer for my content creation.",
        helpful: 89,
        variant: "Blue Titanium, 1TB",
    },
    {
        id: 3,
        name: "Michael Chen",
        avatar: "MC",
        rating: 4,
        verified: true,
        date: "January 15, 2026",
        title: "Almost perfect",
        content: "Great phone overall. The camera and display are exceptional. Only giving 4 stars because I wish the base storage was 512GB instead of 256GB. Otherwise, it's the best smartphone on the market.",
        helpful: 67,
        variant: "Black Titanium, 256GB",
    },
    {
        id: 4,
        name: "Emily Watson",
        avatar: "EW",
        rating: 5,
        verified: true,
        date: "January 12, 2026",
        title: "Photographer's dream phone",
        content: "As a professional photographer, I was skeptical about phone cameras. The iPhone 17 Pro Max changed my mind. The 48MP sensor captures incredible detail, and the computational photography features are mind-blowing.",
        helpful: 156,
        variant: "White Titanium, 1TB",
    },
    {
        id: 5,
        name: "David Park",
        avatar: "DP",
        rating: 5,
        verified: true,
        date: "January 10, 2026",
        title: "The display is unreal",
        content: "I watch a lot of content on my phone and this display is absolutely gorgeous. The always-on feature is subtle and useful. ProMotion makes everything feel so smooth. Best phone I've ever used.",
        helpful: 92,
        variant: "Natural Titanium, 256GB",
    },
];

const ratingBreakdown = {
    5: 78,
    4: 15,
    3: 5,
    2: 1,
    1: 1,
};

export default function ReviewsPage() {
    const [sortBy, setSortBy] = useState("helpful");
    const [filterRating, setFilterRating] = useState<number | null>(null);

    const averageRating = 4.8;
    const totalReviews = 2847;

    const filteredReviews = filterRating
        ? reviews.filter((r) => r.rating === filterRating)
        : reviews;

    return (
        <main className="bg-[#0d0d0d] min-h-screen pt-24">
            {/* Hero */}
            <section className="py-16 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
                                Customer Reviews
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                See what people are saying.
                            </h1>
                            <p className="text-white/60 text-lg">
                                Real reviews from verified iPhone 17 Pro Max owners.
                            </p>
                        </div>

                        {/* Rating Summary */}
                        <div className="bg-white/5 rounded-3xl border border-white/10 p-8">
                            <div className="flex items-center gap-6 mb-6">
                                <div className="text-center">
                                    <p className="text-5xl font-bold text-white">{averageRating}</p>
                                    <div className="flex gap-1 mt-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg
                                                key={star}
                                                className={`w-5 h-5 ${star <= Math.round(averageRating) ? "text-yellow-400" : "text-white/20"}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-white/50 text-sm mt-1">{totalReviews.toLocaleString()} reviews</p>
                                </div>

                                <div className="flex-1 space-y-2">
                                    {[5, 4, 3, 2, 1].map((stars) => (
                                        <button
                                            key={stars}
                                            onClick={() => setFilterRating(filterRating === stars ? null : stars)}
                                            className={`w-full flex items-center gap-3 group ${filterRating === stars ? "opacity-100" : "opacity-60 hover:opacity-100"}`}
                                        >
                                            <span className="text-white/60 text-sm w-4">{stars}</span>
                                            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${ratingBreakdown[stars as keyof typeof ratingBreakdown]}%` }}
                                                    className="h-full bg-yellow-400 rounded-full"
                                                />
                                            </div>
                                            <span className="text-white/40 text-sm w-10 text-right">
                                                {ratingBreakdown[stars as keyof typeof ratingBreakdown]}%
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href="/buy"
                                className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors block text-center"
                            >
                                Write a Review
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="py-16 px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Sort/Filter */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            {filterRating && (
                                <button
                                    onClick={() => setFilterRating(null)}
                                    className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm flex items-center gap-2"
                                >
                                    {filterRating} stars
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                        >
                            <option value="helpful">Most Helpful</option>
                            <option value="recent">Most Recent</option>
                            <option value="highest">Highest Rated</option>
                            <option value="lowest">Lowest Rated</option>
                        </select>
                    </div>

                    {/* Review List */}
                    <div className="space-y-6">
                        {filteredReviews.map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                                            {review.avatar}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="text-white font-medium">{review.name}</p>
                                                {review.verified && (
                                                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
                                                        Verified
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-white/40 text-sm">{review.variant}</p>
                                        </div>
                                    </div>
                                    <p className="text-white/40 text-sm">{review.date}</p>
                                </div>

                                <div className="flex gap-1 mb-3">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg
                                            key={star}
                                            className={`w-4 h-4 ${star <= review.rating ? "text-yellow-400" : "text-white/20"}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                <h3 className="text-lg font-semibold text-white mb-2">{review.title}</h3>
                                <p className="text-white/70 leading-relaxed mb-4">{review.content}</p>

                                <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                        </svg>
                                        <span className="text-sm">Helpful ({review.helpful})</span>
                                    </button>
                                    <button className="text-white/50 hover:text-white transition-colors text-sm">
                                        Report
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-12 text-center">
                        <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-colors">
                            Load More Reviews
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
