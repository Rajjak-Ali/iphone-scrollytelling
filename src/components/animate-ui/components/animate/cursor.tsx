'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence, type MotionValue } from 'framer-motion';

// --- Types ---
interface CursorContextType {
    cursorX: MotionValue<number>;
    cursorY: MotionValue<number>;
    isHovering: boolean;
    setIsHovering: (hovering: boolean) => void;
    followerText: string | null;
    setFollowerText: (text: string | null) => void;
    followerSide: CursorFollowProps['side'];
    setFollowerSide: (side: CursorFollowProps['side']) => void;
    followerAlign: CursorFollowProps['align'];
    setFollowerAlign: (align: CursorFollowProps['align']) => void;
    followerSideOffset: number;
    setFollowerSideOffset: (offset: number) => void;
    followerAlignOffset: number;
    setFollowerAlignOffset: (offset: number) => void;
}

export interface CursorFollowProps {
    children: React.ReactNode;
    side?: 'top' | 'bottom' | 'left' | 'right';
    sideOffset?: number;
    align?: 'start' | 'center' | 'end';
    alignOffset?: number;
}

// --- Context ---
const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursor = () => {
    const context = useContext(CursorContext);
    if (!context) {
        throw new Error('useCursor must be used within a CursorProvider');
    }
    return context;
};

// --- Provider ---
export const CursorProvider = ({
    children,
    global = false,
}: {
    children: React.ReactNode;
    global?: boolean;
}) => {
    const [isHovering, setIsHovering] = useState(false);
    const [followerText, setFollowerText] = useState<string | null>(null);
    const [followerSide, setFollowerSide] = useState<CursorFollowProps['side']>('bottom');
    const [followerAlign, setFollowerAlign] = useState<CursorFollowProps['align']>('end');
    const [followerSideOffset, setFollowerSideOffset] = useState<number>(15);
    const [followerAlignOffset, setFollowerAlignOffset] = useState<number>(5);


    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    // Global styles to hide default cursor if global is true
    useEffect(() => {
        if (global) {
            document.body.style.cursor = 'none';
            const style = document.createElement('style');
            style.innerHTML = 'a, button, [role="button"], input, textarea, select { cursor: none !important; }';
            document.head.appendChild(style);

            return () => {
                document.body.style.cursor = 'auto';
                style.remove();
            };
        }
    }, [global]);


    return (
        <CursorContext.Provider
            value={{
                cursorX,
                cursorY,
                isHovering,
                setIsHovering,
                followerText,
                setFollowerText,
                followerSide,
                setFollowerSide,
                followerAlign,
                setFollowerAlign,
                followerSideOffset,
                setFollowerSideOffset,
                followerAlignOffset,
                setFollowerAlignOffset,
            }}
        >
            {children}
        </CursorContext.Provider>
    );
};

// --- Cursor Component ---
export const Cursor = () => {
    const { cursorX, cursorY, isHovering, followerText, followerSide, followerSideOffset, followerAlign, followerAlignOffset } = useCursor();
    const [isVisible, setIsVisible] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Ultra-premium smooth spring — buttery trailing with luxurious glide
    const springConfig = { stiffness: 180, damping: 22, mass: 0.3 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    // Outer glow ring — even smoother, trailing behind the cursor
    const ringSpring = { stiffness: 100, damping: 18, mass: 0.5 };
    const ringX = useSpring(cursorX, ringSpring);
    const ringY = useSpring(cursorY, ringSpring);

    const [isTextHover, setIsTextHover] = useState(false);

    useEffect(() => {
        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseMove = (e: MouseEvent) => {
            setIsVisible(true);

            // Text Hover Detection
            const target = e.target as HTMLElement;
            const isText =
                target.matches('p, h1, h2, h3, h4, h5, h6, span, input, textarea, label, li, td, th, caption') ||
                window.getComputedStyle(target).cursor === 'text';

            setIsTextHover(isText);
        };

        document.documentElement.addEventListener('mouseenter', handleMouseEnter);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);

        // Initial check
        if (document.hasFocus()) {
            setIsVisible(true);
        }

        return () => {
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {/* Outer Glow Ring — trails behind cursor with luxurious delay */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[99998]"
                style={{
                    x: ringX,
                    y: ringY,
                    opacity: isVisible ? 1 : 0,
                }}
            >
                <motion.div
                    className="relative flex items-center justify-center"
                    style={{ transform: 'translate(-50%, -50%)' }}
                    animate={{
                        scale: isClicking ? 0.6 : (isHovering ? 1.8 : 1),
                        opacity: isClicking ? 0.3 : (isHovering ? 0.6 : 0.4),
                    }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                    <div
                        className="w-10 h-10 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(100, 130, 255, 0.15) 0%, rgba(130, 80, 255, 0.08) 50%, transparent 70%)',
                            boxShadow: '0 0 20px 4px rgba(100, 130, 255, 0.08)',
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Main Cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[99999]"
                style={{ x, y, opacity: isVisible ? 1 : 0 }}
            >
                {/* Main Cursor Dot */}
                <motion.div
                    className="relative flex items-center justify-center"
                    animate={{
                        scale: isClicking ? 0.8 : (isHovering ? 0 : 1),
                    }}
                    transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                >

                    {/* I-Beam Cursor (Text) - Custom SVG */}
                    {!isHovering && !followerText && isTextHover && (
                        <motion.div
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: 1, scaleY: 1 }}
                            exit={{ opacity: 0, scaleY: 0 }}
                            transition={{ duration: 0.1 }}
                            className="relative z-50"
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                style={{ filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.5))" }}
                            >
                                <path
                                    d="M8 4 L24 4 L24 7 L20 7 Q17 7 17 11 L17 21 Q17 25 20 25 L24 25 L24 28 L8 28 L8 25 L12 25 Q15 25 15 21 L15 11 Q15 7 12 7 L8 7 Z"
                                    fill="#000000"
                                    stroke="white"
                                    strokeWidth="1"
                                />
                            </svg>
                        </motion.div>
                    )}

                    {/* Mac-style Arrow Cursor */}
                    {!isHovering && !followerText && !isTextHover && (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))" }}
                        >
                            <path
                                d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                                fill="#000000"
                                stroke="white"
                                strokeWidth="1"
                            />
                        </svg>
                    )}

                </motion.div>


                {/* Follower / Tooltip */}
                <AnimatePresence>
                    {followerText && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-black whitespace-nowrap shadow-lg border border-white/20"
                            style={{
                                // Logic to position relative to cursor center (0,0) based on side/align
                                ...(followerSide === 'top' && { bottom: `${followerSideOffset}px` }),
                                ...(followerSide === 'bottom' && { top: `${followerSideOffset}px` }),
                                ...(followerSide === 'left' && { right: `${followerSideOffset}px` }),
                                ...(followerSide === 'right' && { left: `${followerSideOffset}px` }),

                                // Align logic relative to center
                                ...(followerAlign === 'center' && { left: '50%', x: '-50%' }),
                                ...(followerAlign === 'start' && { right: `${followerAlignOffset}px` }),
                                ...(followerAlign === 'end' && { left: `${followerAlignOffset}px` }),
                            }}
                        >
                            {followerText}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

// --- CursorFollow Component ---
export const CursorFollow = ({
    children,
    side = 'bottom',
    sideOffset = 15,
    align = 'end',
    alignOffset = 5,
}: CursorFollowProps) => {
    const { setFollowerText, setFollowerSide, setFollowerAlign, setFollowerSideOffset, setFollowerAlignOffset } = useCursor();
    const text = typeof children === 'string' ? children : 'View';

    return (
        <div
            onMouseEnter={() => {
                setFollowerText(text);
                setFollowerSide(side);
                setFollowerAlign(align);
                setFollowerSideOffset(sideOffset);
                setFollowerAlignOffset(alignOffset);
            }}
            onMouseLeave={() => {
                setFollowerText(null);
            }}
            className="contents"
        >
            {children}
        </div>
    );
};
