"use client";

import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── helpers (inlined to avoid importing from flickering-footer) ──────── */

const getRGBA = (cssColor: string, fallback = "rgba(180,180,180)"): string => {
    if (typeof window === "undefined") return fallback;
    try {
        const el = document.createElement("canvas").getContext("2d");
        if (!el) return fallback;
        el.fillStyle = cssColor;
        // parse back from the canvas context which normalises any CSS colour
        const c = el.fillStyle; // returns hex or rgb string
        // quick hex→rgba
        if (c.startsWith("#")) {
            const r = parseInt(c.slice(1, 3), 16);
            const g = parseInt(c.slice(3, 5), 16);
            const b = parseInt(c.slice(5, 7), 16);
            return `rgba(${r},${g},${b},1)`;
        }
        return c.replace("rgb", "rgba").replace(")", ",1)");
    } catch {
        return fallback;
    }
};

const colorWithOpacity = (color: string, opacity: number): string => {
    const match = color.match(/[\d.]+/g);
    if (!match || match.length < 3) return color;
    return `rgba(${match[0]},${match[1]},${match[2]},${opacity})`;
};

/* ── Loading‑screen FlickeringGrid (self‑contained) ──────────────────── */

interface GridProps {
    squareSize?: number;
    gridGap?: number;
    flickerChance?: number;
    color?: string;
    maxOpacity?: number;
    text?: string;
    fontSize?: number;
    fontWeight?: number | string;
}

function LoaderGrid({
    squareSize = 3,
    gridGap = 3,
    flickerChance = 0.3,
    color = "#ffffff",
    maxOpacity = 0.6,
    text = "AMUSICALS",
    fontSize = 90,
    fontWeight = 900,
}: GridProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState({ w: 0, h: 0 });
    const rgba = useMemo(() => getRGBA(color), [color]);

    const draw = useCallback(
        (
            ctx: CanvasRenderingContext2D,
            w: number,
            h: number,
            cols: number,
            rows: number,
            squares: Float32Array,
            dpr: number,
        ) => {
            ctx.clearRect(0, 0, w, h);

            // text mask
            const mask = document.createElement("canvas");
            mask.width = w;
            mask.height = h;
            const mc = mask.getContext("2d", { willReadFrequently: true })!;
            if (text) {
                mc.save();
                mc.scale(dpr, dpr);
                mc.fillStyle = "white";
                mc.font = `${fontWeight} ${fontSize}px "Inter", -apple-system, sans-serif`;
                mc.textAlign = "center";
                mc.textBaseline = "middle";
                mc.fillText(text, w / (2 * dpr), h / (2 * dpr));
                mc.restore();
            }

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * (squareSize + gridGap) * dpr;
                    const y = j * (squareSize + gridGap) * dpr;
                    const sw = squareSize * dpr;
                    const sh = squareSize * dpr;
                    const data = mc.getImageData(x, y, sw, sh).data;
                    const hit = data.some((v, idx) => idx % 4 === 0 && v > 0);
                    const op = squares[i * rows + j];
                    const final = hit ? Math.min(1, op * 3 + 0.5) : op;
                    ctx.fillStyle = colorWithOpacity(rgba, final);
                    ctx.fillRect(x, y, sw, sh);
                }
            }
        },
        [rgba, squareSize, gridGap, text, fontSize, fontWeight],
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let raf: number;

        const setup = () => {
            const w = container.clientWidth;
            const h = container.clientHeight;
            setSize({ w, h });
            const dpr = window.devicePixelRatio || 1;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            const cols = Math.ceil(w / (squareSize + gridGap));
            const rows = Math.ceil(h / (squareSize + gridGap));
            const squares = new Float32Array(cols * rows);
            for (let i = 0; i < squares.length; i++) squares[i] = Math.random() * maxOpacity;
            return { cols, rows, squares, dpr };
        };

        let params = setup();
        let last = 0;

        const tick = (t: number) => {
            const dt = (t - last) / 1000;
            last = t;
            for (let i = 0; i < params.squares.length; i++) {
                if (Math.random() < flickerChance * dt)
                    params.squares[i] = Math.random() * maxOpacity;
            }
            draw(ctx, canvas.width, canvas.height, params.cols, params.rows, params.squares, params.dpr);
            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);

        const ro = new ResizeObserver(() => {
            params = setup();
        });
        ro.observe(container);

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
        };
    }, [draw, squareSize, gridGap, flickerChance, maxOpacity]);

    return (
        <div ref={containerRef} className="absolute inset-0">
            <canvas ref={canvasRef} className="pointer-events-none" style={{ width: size.w, height: size.h }} />
        </div>
    );
}

/* ── Main LoadingScreen ──────────────────────────────────────────────── */

export default function LoadingScreen() {
    const [show, setShow] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 640);

        const timer = setTimeout(() => {
            setShow(false);
        }, 2800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key="loading-screen"
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        y: -40,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
                    }}
                >
                    {/* Flickering grid filling the entire screen */}
                    <LoaderGrid
                        squareSize={isMobile ? 2 : 3}
                        gridGap={isMobile ? 2 : 3}
                        color="#F59E0B"
                        maxOpacity={0.2}
                        flickerChance={0.35}
                        text="AMUSICALS"
                        fontSize={isMobile ? 40 : 100}
                        fontWeight={900}
                    />

                    {/* Subtle overlay gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-950/30 via-transparent to-gray-950/30 pointer-events-none" />

                    {/* Bottom tagline */}
                    <motion.p
                        className="absolute bottom-12 text-[10px] sm:text-xs font-mono tracking-[0.4em] uppercase text-gray-950"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Creative Music
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
