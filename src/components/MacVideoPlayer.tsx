"use client";

import { useState, useEffect, useRef } from "react";

export default function MacVideoPlayer() {
    const [mounted, setMounted] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [videoKey, setVideoKey] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        // Video is 24 seconds - restart every 24 seconds to create loop effect
        timerRef.current = setInterval(() => {
            setVideoKey(prev => prev + 1);
        }, 24000);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [mounted]);

    if (!mounted) {
        return (
            <div className="relative w-full aspect-video max-w-6xl mx-auto rounded-3xl overflow-hidden bg-black flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
        );
    }

    // Removed m=1 (mute) to allow audio playback
    const videoUrl = `https://go.screenpal.com/player/cOVTimn3IKq?ff=1&title=0&controls=0&a=1&fs=0&bg=transparent&v=${videoKey}`;

    return (
        <div
            className="relative w-full aspect-video max-w-6xl mx-auto rounded-3xl overflow-hidden bg-black"
        >
            {/* Video iframe */}
            <div className="absolute inset-0">
                <iframe
                    key={videoKey}
                    src={videoUrl}
                    width="1280"
                    height="720"
                    style={{ border: 0 }}
                    scrolling="no"
                    allow="autoplay; encrypted-media"
                    className="w-full h-full"
                />
            </div>

            {/* Click blocker overlay */}
            <div className="absolute inset-0 z-10" />

            {/* Gradient to hide any remaining controls */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none" />
        </div>
    );
}
