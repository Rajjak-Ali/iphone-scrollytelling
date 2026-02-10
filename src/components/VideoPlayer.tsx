"use client";

import { useState, useEffect, useRef } from "react";

export default function VideoPlayer() {
    const [mounted, setMounted] = useState(false);
    const [videoKey, setVideoKey] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        // Video is 16 seconds long - restart every 16 seconds to create loop
        timerRef.current = setInterval(() => {
            setVideoKey(prev => prev + 1);
        }, 16000);

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

    // With controls=0, ScreenPal still shows the mute button in lower right corner
    // Removed scale transform to show the mute button area
    const videoUrl = `https://go.screenpal.com/player/cOVZDVn3IVM?width=1280&height=720&ff=1&title=0&controls=0&a=1&fs=0&m=1&bg=transparent&autostart=1&v=${videoKey}`;

    return (
        <div className="relative w-full aspect-video max-w-6xl mx-auto rounded-3xl overflow-hidden bg-black">
            {/* Video iframe - removed pointer-events-none to allow mute button interaction */}
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

            {/* Overlay that blocks center area but allows bottom-right corner for mute button */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 85%, 85% 100%, 0 100%)'
                }}
            />
        </div>
    );
}
