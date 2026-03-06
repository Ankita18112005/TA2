"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/* ── Config ── */
const AUTO_CYCLE_MS = 3500;
const PAUSE_AFTER_CLICK_MS = 6000;
const ACTIVE_FLEX = 10;            // expanded panel size
const INACTIVE_LEFT_FLEX = 0.00;   // panels BEFORE active (left side)
const INACTIVE_RIGHT_FLEX = 0.5;   // panels AFTER active (right side)

const images = [
    { src: "/images/live-hero/lh1.jpg", position: "center" },
    { src: "/images/live-hero/lh2.jpg", position: "60% center" },
    { src: "/images/live-hero/lh3.jpg", position: "60% center" },
    { src: "/images/live-hero/lh4.jpg", position: "center 60%" },
    { src: "/images/live-hero/lh5.jpg", position: "center 20%" },
    { src: "/images/live-hero/lh6.jpg", position: "center top" },
    { src: "/images/live-hero/lh7.jpg", position: "center" },
    { src: "/images/live-hero/lh8.jpg", position: "center top" },
    { src: "/images/live-hero/lh9.jpg", position: "center 35%" },
    { src: "/images/live-hero/lh10.jpg", position: "center" },
];

/* ─────────────────────────────────────────────── */

const InteractiveSelector = () => {
    const [active, setActive] = useState(0);
    const [ready, setReady] = useState<boolean[]>([]);
    const paused = useRef(false);
    const pauseId = useRef<NodeJS.Timeout | null>(null);

    /* ── infinite auto‑cycle ── */
    useEffect(() => {
        const id = setInterval(() => {
            if (!paused.current) setActive((p) => (p + 1) % images.length);
        }, AUTO_CYCLE_MS);
        return () => clearInterval(id);
    }, []);

    /* ── staggered reveal ── */
    useEffect(() => {
        const ids: NodeJS.Timeout[] = [];
        images.forEach((_, i) =>
            ids.push(setTimeout(() => setReady((p) => [...p, true]), 100 * i))
        );
        return () => ids.forEach(clearTimeout);
    }, []);

    /* ── manual tap / click ── */
    const pick = useCallback(
        (i: number) => {
            if (i !== active) setActive(i);
            paused.current = true;
            if (pauseId.current) clearTimeout(pauseId.current);
            pauseId.current = setTimeout(() => {
                paused.current = false;
            }, PAUSE_AFTER_CLICK_MS);
        },
        [active]
    );

    /* ── swipe support for mobile ── */
    const touchX = useRef(0);
    const handleTouchStart = (e: React.TouchEvent) => {
        touchX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        const diff = touchX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            const next = diff > 0
                ? (active + 1) % images.length
                : (active - 1 + images.length) % images.length;
            pick(next);
        }
    };

    return (
        <section
            className="relative w-full h-[100svh] overflow-hidden bg-black"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* ═══════════════════════════════════════════
                DESKTOP  (md+) — interactive flex panels
            ═══════════════════════════════════════════ */}
            <div className="hidden md:flex absolute inset-0 items-stretch">
                {/* Render in circular order: active first, rest follow to the right */}
                {Array.from({ length: images.length }, (_, pos) => {
                    const imgIndex = (active + pos) % images.length;
                    const { src, position } = images[imgIndex];
                    const isActive = pos === 0;
                    return (
                        <div
                            key={imgIndex}
                            onClick={() => pick(imgIndex)}
                            className="relative overflow-hidden cursor-pointer transition-all duration-700"
                            style={{
                                flex: isActive
                                    ? `${ACTIVE_FLEX} 1 0%`
                                    : `${INACTIVE_RIGHT_FLEX} 1 0%`,
                                opacity: ready[imgIndex] ? 1 : 0,
                                transform: ready[imgIndex] ? "scaleX(1)" : "scaleX(0.7)",
                                transition: "flex 0.7s cubic-bezier(.4,0,.2,1), opacity 0.5s, transform 0.5s",
                            }}
                        >
                            {/* image layer */}
                            <div
                                className="absolute inset-0 transition-transform duration-700"
                                style={{
                                    backgroundImage: `url('${src}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: position,
                                    transform: isActive ? "scale(1)" : "scale(1.15)",
                                }}
                            />
                            {/* inactive darkening */}
                            <div
                                className="absolute inset-0 transition-opacity duration-500"
                                style={{ background: "rgba(0,0,0,0.45)", opacity: isActive ? 0 : 1 }}
                            />
                            {/* active accent edge */}
                            {isActive && (
                                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-amber-500 z-10" />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* ═══════════════════════════════════════════
                MOBILE  (<md) — full‑screen crossfade
            ═══════════════════════════════════════════ */}
            <div className="md:hidden absolute inset-0">
                {images.map(({ src, position }, i) => (
                    <div
                        key={i}
                        className="absolute inset-0 bg-cover transition-opacity duration-700"
                        style={{
                            backgroundImage: `url('${src}')`,
                            backgroundPosition: position,
                            opacity: active === i ? 1 : 0,
                            zIndex: active === i ? 1 : 0,
                        }}
                    />
                ))}
            </div>

            {/* ═══════════════════════════════════════════
                Shared overlay gradient for text contrast
            ═══════════════════════════════════════════ */}
            <div
                className="absolute inset-0 z-[5] pointer-events-none"
                style={{
                    background: `
                        linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 35%),
                        linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 55%, transparent 100%),
                        linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 30%)
                    `,
                }}
            />

            {/* ═══════════════════════════════════════════
                Hero text — scales across breakpoints
            ═══════════════════════════════════════════ */}
            <div className="relative z-[6] flex flex-col justify-end md:justify-center h-full max-w-7xl mx-auto px-5 sm:px-8 pb-24 md:pb-0 pointer-events-none">
                <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-amber-500 mb-2 md:mb-3 uppercase">
                    Captured On Stage
                </p>

                <h1 className="font-black text-white tracking-tighter text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)]">
                    LIVE<br />
                    <span className="text-amber-500 drop-shadow-[0_2px_40px_rgba(255,0,99,0.3)]">
                        SHOWS
                    </span>
                </h1>

                <p className="mt-3 md:mt-4 max-w-sm md:max-w-md text-gray-400 font-mono text-[10px] sm:text-xs tracking-wide uppercase leading-relaxed">
                    Relive the energy, the crowd and the raw emotion&mdash;
                    <br className="hidden sm:block" />
                    performances that define who we are.
                </p>

                <p className="mt-4 md:mt-5 mb-8 text-[9px] sm:text-[10px] font-medium tracking-[0.3em] text-amber-500/50 uppercase">
                    Energy is not limited to Stage
                </p>

                <Link
                    href="/team"
                    className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-amber-500 transition-colors duration-300 pointer-events-auto w-fit"
                >
                    <ArrowLeft className="size-4" />
                    Our Team
                </Link>
            </div>

            {/* ═══════════════════════════════════════════
                Progress dots (mobile + desktop)
            ═══════════════════════════════════════════ */}
            <div className="absolute z-[7] bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 pointer-events-auto">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => pick(i)}
                        aria-label={`Show photo ${i + 1}`}
                        className="group relative h-5 flex items-center"
                    >
                        <span
                            className="block rounded-full transition-all duration-500"
                            style={{
                                width: active === i ? 24 : 6,
                                height: 6,
                                background: active === i ? "#ff0063" : "rgba(255,255,255,0.35)",
                            }}
                        />
                    </button>
                ))}
            </div>

            {/* ═══════════════════════════════════════════
                Photo counter (mobile)
            ═══════════════════════════════════════════ */}
            <div className="md:hidden absolute z-[7] top-5 right-5 bg-black/40 backdrop-blur-md rounded-full px-3 py-1">
                <span className="text-white text-xs font-mono tracking-wider">
                    {String(active + 1).padStart(2, "0")}
                    <span className="text-gray-500"> / {String(images.length).padStart(2, "0")}</span>
                </span>
            </div>

            {/* ═══════════════════════════════════════════
                Back link (mobile — top left)
            ═══════════════════════════════════════════ */}
            <Link
                href="/team"
                className="md:hidden absolute z-[7] top-5 left-5 inline-flex items-center gap-1.5 text-[10px] font-medium tracking-widest text-gray-300 hover:text-amber-500 transition uppercase bg-black/30 backdrop-blur-md rounded-full px-3 py-1.5"
            >
                <ArrowLeft className="size-3" /> Back
            </Link>
        </section>
    );
};

export default InteractiveSelector;
