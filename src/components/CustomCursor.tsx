"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [mounted, setMounted] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // macOS-like smooth movement
    const springConfig = {
        damping: 28,
        stiffness: 500,
        mass: 0.2
    };

    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        setMounted(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);

        // Hide default cursor
        document.body.style.cursor = 'none';
        const style = document.createElement('style');
        style.innerHTML = '* { cursor: none !important; }';
        document.head.appendChild(style);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.style.cursor = 'auto';
            style.remove();
        };
    }, [cursorX, cursorY]);

    if (!mounted) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[10000]"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        >
            {/* Exact macOS cursor - black arrow with white outline */}
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.3))',
                }}
            >
                {/* White outline */}
                <path
                    d="M3 3L3 18.5L8 13.5L11 20L13 19L10 12.5L16.5 11.5L3 3Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1"
                />
                {/* Black fill */}
                <path
                    d="M4.5 4.5L4.5 16L8.5 12L11 17.5L11.8 17.2L9.2 12L14.5 11.2L4.5 4.5Z"
                    fill="black"
                />
            </svg>
        </motion.div>
    );
}
