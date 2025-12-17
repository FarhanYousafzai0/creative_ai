"use client";;
/**
 * @author: @dorian_baffier
 * @description: Background Paths
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { memo, useMemo } from "react";
import { motion } from "motion/react";

// Path generation function
function generateAestheticPath(index, position, type) {
    const baseAmplitude =
        type === "primary" ? 150 : type === "secondary" ? 100 : 60;
    const phase = index * 0.2;
    const points = [];
    const segments = type === "primary" ? 10 : type === "secondary" ? 8 : 6;

    const startX = 2400;
    const startY = 800;
    const endX = -2400;
    const endY = -800 + index * 25;

    for (let i = 0; i <= segments; i++) {
        const progress = i / segments;
        const eased = 1 - (1 - progress) ** 2;

        const baseX = startX + (endX - startX) * eased;
        const baseY = startY + (endY - startY) * eased;

        const amplitudeFactor = 1 - eased * 0.3;
        const wave1 =
            Math.sin(progress * Math.PI * 3 + phase) *
            (baseAmplitude * 0.7 * amplitudeFactor);
        const wave2 =
            Math.cos(progress * Math.PI * 4 + phase) *
            (baseAmplitude * 0.3 * amplitudeFactor);
        const wave3 =
            Math.sin(progress * Math.PI * 2 + phase) *
            (baseAmplitude * 0.2 * amplitudeFactor);

        points.push({
            x: baseX * position,
            y: baseY + wave1 + wave2 + wave3,
        });
    }

    const pathCommands = points.map((point, i) => {
        if (i === 0) return `M ${point.x} ${point.y}`;
        const prevPoint = points[i - 1];
        const tension = 0.4;
        const cp1x = prevPoint.x + (point.x - prevPoint.x) * tension;
        const cp1y = prevPoint.y;
        const cp2x = prevPoint.x + (point.x - prevPoint.x) * (1 - tension);
        const cp2y = point.y;
        return `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
    });

    return pathCommands.join(" ");
}

const generateUniqueId = prefix => `${prefix}-${Math.random().toString(36).substr(2, 9)}`;

// Memoized FloatingPaths component
const FloatingPaths = memo(function FloatingPaths({
    position
}) {
    // Increased number of paths while maintaining optimization
    const primaryPaths = useMemo(() =>
        Array.from({ length: 12 }, (_, i) => ({
            id: generateUniqueId("primary"),
            d: generateAestheticPath(i, position, "primary"),
            opacity: 0.15 + i * 0.02,
            width: 4 + i * 0.3,
            duration: 25,
            delay: 0,
        })), [position]);

    const secondaryPaths = useMemo(() =>
        Array.from({ length: 15 }, (_, i) => ({
            id: generateUniqueId("secondary"),
            d: generateAestheticPath(i, position, "secondary"),
            opacity: 0.12 + i * 0.015,
            width: 3 + i * 0.25,
            duration: 20,
            delay: 0,
        })), [position]);

    const accentPaths = useMemo(() =>
        Array.from({ length: 10 }, (_, i) => ({
            id: generateUniqueId("accent"),
            d: generateAestheticPath(i, position, "accent"),
            opacity: 0.08 + i * 0.12,
            width: 2 + i * 0.2,
            duration: 15,
            delay: 0,
        })), [position]);

    // Shared animation configuration
    const sharedAnimationProps = {
        opacity: 1,
        scale: 1,
        transition: {
            opacity: { duration: 1 },
            scale: { duration: 1 },
        },
    };

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full text-slate-950/40 dark:text-white/40"
                viewBox="-2400 -800 4800 1600"
                fill="none"
                preserveAspectRatio="xMidYMid slice">
                <title>Background Paths</title>
                <defs>
                    <linearGradient id="sharedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(147, 51, 234, 0.5)" />
                        <stop offset="50%" stopColor="rgba(236, 72, 153, 0.5)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.5)" />
                    </linearGradient>
                </defs>

                <g className="primary-waves">
                    {primaryPaths.map((path) => (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke="url(#sharedGradient)"
                            strokeWidth={path.width}
                            strokeLinecap="round"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                ...sharedAnimationProps,
                                y: [0, -15, 0],
                            }}
                            transition={{
                                ...sharedAnimationProps.transition,
                                y: {
                                    duration: 8,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                },
                            }}
                            style={{ opacity: path.opacity }} />
                    ))}
                </g>

                <g className="secondary-waves" style={{ opacity: 0.8 }}>
                    {secondaryPaths.map((path) => (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke="url(#sharedGradient)"
                            strokeWidth={path.width}
                            strokeLinecap="round"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{
                                ...sharedAnimationProps,
                                y: [0, -10, 0],
                            }}
                            transition={{
                                ...sharedAnimationProps.transition,
                                y: {
                                    duration: 6,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                },
                            }}
                            style={{ opacity: path.opacity }} />
                    ))}
                </g>

                <g className="accent-waves" style={{ opacity: 0.6 }}>
                    {accentPaths.map((path) => (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke="url(#sharedGradient)"
                            strokeWidth={path.width}
                            strokeLinecap="round"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{
                                ...sharedAnimationProps,
                                y: [0, -5, 0],
                            }}
                            transition={{
                                ...sharedAnimationProps.transition,
                                y: {
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                },
                            }}
                            style={{ opacity: path.opacity }} />
                    ))}
                </g>
            </svg>
        </div>
    );
});

// Memoized AnimatedTitle component
const AnimatedTitle = memo(function AnimatedTitle({
    title
}) {
    return (
        <motion.h1
            className="text-3xl sm:text-5xl md:text-5xl font-bold mb-8 tracking-tighter
                text-transparent bg-clip-text bg-gradient-to-r 
                from-neutral-800/90 to-neutral-600/90
                dark:from-white/90 dark:to-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1.2,
                ease: [0.2, 0.65, 0.3, 0.9],
            }}>
            {title}
        </motion.h1>
    );
});

export default memo(function BackgroundPaths({
    title = "Background Paths"
}) {
    return (
        <div
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black dark:bg-neutral-950">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
            </div>
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
            <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden">

{/* Bottom Image */}


{/* Content */}
<div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center gap-8">

  {/* Badge */}
  <div className="flex items-center mt-10 gap-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-4 py-1.5">
    <span className="text-xs font-semibold text-white bg-linear-to-br from-violet-500 to-violet-700 px-2 py-1 rounded-full">
      2025
    </span>
    <span className="text-sm text-gray-300">Next-Gen AI Studio</span>
  </div>

  {/* Heading */}
  <h1 className="font-heading text-white tracking-tight leading-tighter
    text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
    AI-Driven Success <br />
    <span className="text-white/90">Redefining the Future.</span>
  </h1>

  {/* Description */}
  <p className="max-w-xl text-gray-400 text-base sm:text-lg leading-relaxed">
    Creating latest solutions that redefine innovation.
    Stay ahead with AI-powered technology for the future.
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 pt-4">
    <button className="px-6 py-3 rounded-xl bg-white cursor-pointer text-black font-medium hover:bg-gray-200 transition">
      Connect With Us
    </button>
    <button className="px-6 py-3 rounded-xl bg-white/10 cursor-pointer text-white border border-white/20 backdrop-blur-md hover:bg-white/20 transition">
      What is Nubien?
    </button>
  </div>

</div>

</section>
            </div>
        </div>
    );
});
