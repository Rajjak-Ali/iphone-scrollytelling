"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("theme") as Theme | null;
        if (saved) {
            setTheme(saved);
            document.documentElement.setAttribute("data-theme", saved);
        }
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => {
            const next = prev === "dark" ? "light" : "dark";
            localStorage.setItem("theme", next);
            document.documentElement.setAttribute("data-theme", next);
            return next;
        });
    }, []);

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// --- Animated Theme Toggle with Ring Effect ---
export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [showRing, setShowRing] = useState(false);

    const handleToggle = () => {
        setShowRing(true);
        toggleTheme();
        setTimeout(() => setShowRing(false), 800);
    };

    return (
        <>
            {/* Full-screen ring transition overlay */}
            <AnimatePresence>
                {showRing && (
                    <motion.div
                        className="fixed inset-0 z-[999999] pointer-events-none flex items-center justify-center"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                    >
                        <motion.div
                            className="rounded-full"
                            style={{
                                background: theme === "light"
                                    ? "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 60%, transparent 70%)"
                                    : "radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.05) 60%, transparent 70%)",
                            }}
                            initial={{ width: 0, height: 0, opacity: 0.8 }}
                            animate={{ width: "300vmax", height: "300vmax", opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <button
                onClick={handleToggle}
                className="relative w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-white/10 dark:hover:bg-white/10"
                aria-label="Toggle theme"
            >
                <AnimatePresence mode="wait">
                    {theme === "dark" ? (
                        <motion.svg
                            key="sun"
                            className="w-[18px] h-[18px] text-yellow-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            initial={{ rotate: -90, scale: 0, opacity: 0 }}
                            animate={{ rotate: 0, scale: 1, opacity: 1 }}
                            exit={{ rotate: 90, scale: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            key="moon"
                            className="w-[18px] h-[18px] text-indigo-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            initial={{ rotate: 90, scale: 0, opacity: 0 }}
                            animate={{ rotate: 0, scale: 1, opacity: 1 }}
                            exit={{ rotate: -90, scale: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </motion.svg>
                    )}
                </AnimatePresence>

                {/* Pulsing ring around toggle */}
                <motion.div
                    className="absolute inset-0 rounded-full border"
                    style={{
                        borderColor: theme === "dark" ? "rgba(250, 204, 21, 0.3)" : "rgba(79, 70, 229, 0.3)",
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </button>
        </>
    );
}
