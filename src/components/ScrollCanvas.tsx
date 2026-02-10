"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const TOTAL_FRAMES = 40;
const FRAME_PREFIX = "ezgif-frame-";

interface TextOverlay {
    text: string;
    subtext?: string;
    scrollStart: number;
    scrollEnd: number;
    position: "center" | "left" | "right";
}

const textOverlays: TextOverlay[] = [
    {
        text: "iPhone 17 Pro Max",
        subtext: "Titanium. So Strong. So Light. So Pro.",
        scrollStart: 0,
        scrollEnd: 0.2,
        position: "center",
    },
    {
        text: "Precision Engineering",
        subtext: "Crafted with surgical-grade components",
        scrollStart: 0.25,
        scrollEnd: 0.45,
        position: "left",
    },
    {
        text: "Every Component, Perfected",
        subtext: "A15 Bionic. The world's fastest smartphone chip.",
        scrollStart: 0.5,
        scrollEnd: 0.7,
        position: "right",
    },
    {
        text: "Experience the Future",
        subtext: "Available now.",
        scrollStart: 0.8,
        scrollEnd: 1.0,
        position: "center",
    },
];

// Separate component for each text overlay to properly use hooks
function TextOverlayItem({
    overlay,
    scrollYProgress,
}: {
    overlay: TextOverlay;
    scrollYProgress: MotionValue<number>;
}) {
    const fadeInStart = overlay.scrollStart;
    const fadeInEnd = overlay.scrollStart + 0.05;
    const fadeOutStart = overlay.scrollEnd - 0.05;
    const fadeOutEnd = overlay.scrollEnd;

    const opacity = useTransform(
        scrollYProgress,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [overlay.scrollStart, overlay.scrollStart + 0.05],
        [30, 0]
    );

    return (
        <motion.div
            className={`absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 pointer-events-none ${overlay.position === "center"
                    ? "items-center text-center"
                    : overlay.position === "left"
                        ? "items-start text-left"
                        : "items-end text-right"
                }`}
            style={{ opacity, y }}
        >
            <h2
                className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white/90 ${overlay.position === "center" ? "max-w-4xl" : "max-w-2xl"
                    }`}
                style={{
                    textShadow: "0 4px 30px rgba(0,0,0,0.5)",
                }}
            >
                {overlay.text}
            </h2>
            {overlay.subtext && (
                <p
                    className="mt-4 md:mt-6 text-lg md:text-xl lg:text-2xl text-white/60 font-light tracking-wide max-w-xl"
                    style={{
                        textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                    }}
                >
                    {overlay.subtext}
                </p>
            )}
        </motion.div>
    );
}

// Separate component for scroll indicator
function ScrollIndicator({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>;
}) {
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    return (
        <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
            style={{ opacity }}
        >
            <p className="text-white/40 text-xs tracking-widest uppercase mb-3">
                Scroll to Explore
            </p>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
                <motion.div
                    className="w-1.5 h-1.5 bg-white/60 rounded-full"
                    animate={{ y: [0, 12, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </motion.div>
    );
}

// Canvas component that handles the animation
function CanvasAnimation({
    images,
    scrollYProgress,
}: {
    images: HTMLImageElement[];
    scrollYProgress: MotionValue<number>;
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const currentFrameRef = useRef(0);

    // Draw frame to canvas
    const drawFrame = useCallback(
        (frameIndex: number) => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext("2d");
            const img = images[frameIndex];

            if (!canvas || !ctx || !img) return;

            // Get device pixel ratio for sharp rendering
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            // Set canvas size accounting for device pixel ratio
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);

            // Clear canvas
            ctx.fillStyle = "#0d0d0d";
            ctx.fillRect(0, 0, rect.width, rect.height);

            // Calculate aspect ratio preserving dimensions
            const imgAspect = img.width / img.height;
            const canvasAspect = rect.width / rect.height;

            let drawWidth, drawHeight, drawX, drawY;

            if (imgAspect > canvasAspect) {
                // Image is wider - fit to width
                drawWidth = rect.width;
                drawHeight = rect.width / imgAspect;
                drawX = 0;
                drawY = (rect.height - drawHeight) / 2;
            } else {
                // Image is taller - fit to height
                drawHeight = rect.height;
                drawWidth = rect.height * imgAspect;
                drawX = (rect.width - drawWidth) / 2;
                drawY = 0;
            }

            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        },
        [images]
    );

    // Handle scroll updates
    useEffect(() => {
        if (images.length === 0) return;

        const unsubscribe = scrollYProgress.on("change", (progress) => {
            const frameIndex = Math.min(
                Math.floor(progress * TOTAL_FRAMES),
                TOTAL_FRAMES - 1
            );

            if (frameIndex !== currentFrameRef.current) {
                currentFrameRef.current = frameIndex;
                drawFrame(frameIndex);
            }
        });

        // Draw first frame
        drawFrame(0);

        return () => unsubscribe();
    }, [images, scrollYProgress, drawFrame]);

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (images.length > 0) {
                drawFrame(currentFrameRef.current);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [images, drawFrame]);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ backgroundColor: "#0d0d0d" }}
        />
    );
}

export default function ScrollCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    // Set mounted state after hydration
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Use scroll progress based on the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Preload all images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            let loaded = 0;

            const promises = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
                return new Promise<HTMLImageElement>((resolve, reject) => {
                    const img = new Image();
                    const frameNumber = String(i + 1).padStart(3, "0");
                    img.src = `/frames/${FRAME_PREFIX}${frameNumber}.jpg`;
                    img.onload = () => {
                        loaded++;
                        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
                        resolve(img);
                    };
                    img.onerror = reject;
                });
            });

            try {
                const results = await Promise.all(promises);
                loadedImages.push(...results);
                setImages(loadedImages);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to load images:", error);
            }
        };

        loadImages();
    }, []);

    // Always render the container to keep the ref attached
    return (
        <div ref={containerRef} className="relative h-[400vh]">
            {/* Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 bg-[#0d0d0d] flex flex-col items-center justify-center z-50">
                    <div className="relative">
                        {/* Spinner */}
                        <div className="w-16 h-16 border-2 border-white/10 border-t-white/80 rounded-full animate-spin" />
                    </div>
                    <p className="mt-6 text-white/60 text-sm tracking-wider uppercase">
                        Loading Experience
                    </p>
                    <div className="mt-4 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 ease-out"
                            style={{ width: `${loadProgress}%` }}
                        />
                    </div>
                    <p className="mt-2 text-white/40 text-xs">{loadProgress}%</p>
                </div>
            )}

            {/* Sticky Canvas Container - Always rendered */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {isMounted && images.length > 0 && (
                    <CanvasAnimation images={images} scrollYProgress={scrollYProgress} />
                )}

                {/* Placeholder while loading */}
                {(!isMounted || images.length === 0) && (
                    <div className="w-full h-full bg-[#0d0d0d]" />
                )}

                {/* Text Overlays - Only show when loaded */}
                {!isLoading && isMounted && (
                    <>
                        {textOverlays.map((overlay, index) => (
                            <TextOverlayItem
                                key={index}
                                overlay={overlay}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}

                        {/* Scroll Indicator - Only show at top */}
                        <ScrollIndicator scrollYProgress={scrollYProgress} />
                    </>
                )}
            </div>
        </div>
    );
}
