"use client";

import { memo, useMemo, useEffect, useState } from "react";
import { motion } from "motion/react";

interface Point {
    x: number;
    y: number;
}

interface PathData {
    id: string;
    d: string;
    opacity: number;
    width: number;
}

// Simplified path generation for hero background
function generateHeroPath(
    index: number,
    type: "primary" | "secondary" | "accent"
): string {
    const baseAmplitude =
        type === "primary" ? 100 : type === "secondary" ? 70 : 40;
    const phase = index * 0.3;
    const points: Point[] = [];
    const segments = type === "primary" ? 8 : type === "secondary" ? 6 : 4;

    const startX = 1200;
    const startY = 400;
    const endX = -1200;
    const endY = -400 + index * 20;

    for (let i = 0; i <= segments; i++) {
        const progress = i / segments;
        const eased = 1 - (1 - progress) ** 2;

        const baseX = startX + (endX - startX) * eased;
        const baseY = startY + (endY - startY) * eased;

        const amplitudeFactor = 1 - eased * 0.2;
        const wave1 =
            Math.sin(progress * Math.PI * 2 + phase) *
            (baseAmplitude * 0.7 * amplitudeFactor);
        const wave2 =
            Math.cos(progress * Math.PI * 3 + phase) *
            (baseAmplitude * 0.3 * amplitudeFactor);

        points.push({
            x: baseX,
            y: baseY + wave1 + wave2,
        });
    }

    const pathCommands = points.map((point: Point, i: number) => {
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

const generateUniqueId = (prefix: string, index: number): string =>
    `${prefix}-${index}`;

// Hero Background Waves component
const HeroBackgroundWaves = memo(function HeroBackgroundWaves() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const primaryPaths: PathData[] = useMemo(
        () =>
            Array.from({ length: 6 }, (_, i) => ({
                id: generateUniqueId("hero-primary", i),
                d: generateHeroPath(i, "primary"),
                opacity: 0.3 + i * 0.05,
                width: 3 + i * 0.2,
            })),
        []
    );

    const secondaryPaths: PathData[] = useMemo(
        () =>
            Array.from({ length: 8 }, (_, i) => ({
                id: generateUniqueId("hero-secondary", i),
                d: generateHeroPath(i, "secondary"),
                opacity: 0.25 + i * 0.03,
                width: 2 + i * 0.15,
            })),
        []
    );

    const accentPaths: PathData[] = useMemo(
        () =>
            Array.from({ length: 4 }, (_, i) => ({
                id: generateUniqueId("hero-accent", i),
                d: generateHeroPath(i, "accent"),
                opacity: 0.2 + i * 0.02,
                width: 1.5 + i * 0.1,
            })),
        []
    );

    if (!isClient) {
        return <div className="absolute inset-0 pointer-events-none overflow-hidden" />;
    }

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full text-muted-foreground/10"
                viewBox="-1200 -400 2400 800"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient
                        id="heroGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                        <stop
                            offset="50%"
                            stopColor="rgba(240, 240, 240, 0.6)"
                        />
                        <stop
                            offset="100%"
                            stopColor="rgba(255, 255, 255, 0.3)"
                        />
                    </linearGradient>
                </defs>

                <g className="primary-waves">
                    {primaryPaths.map((path, index) => (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke="url(#heroGradient)"
                            strokeWidth={path.width}
                            strokeLinecap="round"
                            initial={{ opacity: 0, pathLength: 0 }}
                            animate={{ 
                                opacity: path.opacity,
                                pathLength: 1,
                                y: [0, -8, 0],
                            }}
                            transition={{
                                opacity: { duration: 2, delay: index * 0.1 },
                                pathLength: { duration: 3, delay: index * 0.2 },
                                y: {
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                    delay: index * 0.5,
                                },
                            }}
                        />
                    ))}
                </g>

                <g className="secondary-waves" style={{ opacity: 0.7 }}>
                    {secondaryPaths.map((path, index) => (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke="url(#heroGradient)"
                            strokeWidth={path.width}
                            strokeLinecap="round"
                            initial={{ opacity: 0, pathLength: 0 }}
                            animate={{
                                opacity: path.opacity,
                                pathLength: 1,
                                y: [0, -5, 0],
                            }}
                            transition={{
                                opacity: { duration: 2.5, delay: index * 0.15 },
                                pathLength: { duration: 4, delay: index * 0.25 },
                                y: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                    delay: index * 0.3,
                                },
                            }}
                        />
                    ))}
                </g>

                <g className="accent-waves" style={{ opacity: 0.5 }}>
                    {accentPaths.map((path, index) => (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke="url(#heroGradient)"
                            strokeWidth={path.width}
                            strokeLinecap="round"
                            initial={{ opacity: 0, pathLength: 0 }}
                            animate={{
                                opacity: path.opacity,
                                pathLength: 1,
                                y: [0, -3, 0],
                            }}
                            transition={{
                                opacity: { duration: 3, delay: index * 0.2 },
                                pathLength: { duration: 5, delay: index * 0.3 },
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                    delay: index * 0.2,
                                },
                            }}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
});

export default HeroBackgroundWaves;
