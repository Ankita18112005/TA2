"use client";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ClassValue, clsx } from "clsx";
import * as Color from "color-bits";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { NAV_LINKS, SOCIALS } from "@/constants/data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to convert any CSS color to rgba
export const getRGBA = (
  cssColor: React.CSSProperties["color"],
  fallback: string = "rgba(180, 180, 180)",
): string => {
  if (typeof window === "undefined") return fallback;
  if (!cssColor) return fallback;

  try {
    // Handle CSS variables
    if (typeof cssColor === "string" && cssColor.startsWith("var(")) {
      const element = document.createElement("div");
      element.style.color = cssColor;
      document.body.appendChild(element);
      const computedColor = window.getComputedStyle(element).color;
      document.body.removeChild(element);
      return Color.formatRGBA(Color.parse(computedColor));
    }

    return Color.formatRGBA(Color.parse(cssColor));
  } catch (e) {
    console.error("Color parsing failed:", e);
    return fallback;
  }
};

// Helper function to add opacity to an RGB color string
export const colorWithOpacity = (color: string, opacity: number): string => {
  if (!color.startsWith("rgb")) return color;
  return Color.formatRGBA(Color.alpha(Color.parse(color), opacity));
};

// ── FlickeringGrid canvas component ─────────────────────────────────────

interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
  text?: string;
  textColor?: string;
  fontSize?: number;
  fontWeight?: number | string;
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 3,
  gridGap = 3,
  flickerChance = 0.2,
  color = "#B4B4B4",
  width,
  height,
  className,
  maxOpacity = 0.15,
  text = "",
  fontSize = 140,
  fontWeight = 600,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const memoizedColor = useMemo(() => {
    return getRGBA(color);
  }, [color]);

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number,
    ) => {
      ctx.clearRect(0, 0, width, height);

      const maskCanvas = document.createElement("canvas");
      maskCanvas.width = width;
      maskCanvas.height = height;
      const maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
      if (!maskCtx) return;

      if (text) {
        maskCtx.save();
        maskCtx.scale(dpr, dpr);
        maskCtx.fillStyle = "white";
        maskCtx.font = `${fontWeight} ${fontSize}px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
        maskCtx.textAlign = "center";
        maskCtx.textBaseline = "middle";
        maskCtx.fillText(text, width / (2 * dpr), height / (2 * dpr));
        maskCtx.restore();
      }

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * (squareSize + gridGap) * dpr;
          const y = j * (squareSize + gridGap) * dpr;
          const squareWidth = squareSize * dpr;
          const squareHeight = squareSize * dpr;

          const maskData = maskCtx.getImageData(
            x,
            y,
            squareWidth,
            squareHeight,
          ).data;
          const hasText = maskData.some(
            (value, index) => index % 4 === 0 && value > 0,
          );

          const opacity = squares[i * rows + j];
          const finalOpacity = hasText
            ? Math.min(1, opacity * 3 + 0.4)
            : opacity;

          ctx.fillStyle = colorWithOpacity(memoizedColor, finalOpacity);
          ctx.fillRect(x, y, squareWidth, squareHeight);
        }
      }
    },
    [memoizedColor, squareSize, gridGap, text, fontSize, fontWeight],
  );

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const cols = Math.ceil(width / (squareSize + gridGap));
      const rows = Math.ceil(height / (squareSize + gridGap));

      const squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }

      return { cols, rows, squares, dpr };
    },
    [squareSize, gridGap, maxOpacity],
  );

  const updateSquares = useCallback(
    (squares: Float32Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
    },
    [flickerChance, maxOpacity],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let gridParams: ReturnType<typeof setupCanvas>;

    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth;
      const newHeight = height || container.clientHeight;
      setCanvasSize({ width: newWidth, height: newHeight });
      gridParams = setupCanvas(canvas, newWidth, newHeight);
    };

    updateCanvasSize();

    let lastTime = 0;
    const animate = (time: number) => {
      if (!isInView) return;

      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;

      updateSquares(gridParams.squares, deltaTime);
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.dpr,
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });

    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    intersectionObserver.observe(canvas);

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [setupCanvas, updateSquares, drawGrid, width, height, isInView]);

  return (
    <div
      ref={containerRef}
      className={cn(`h-full w-full ${className}`)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
        }}
      />
    </div>
  );
};

// ── useMediaQuery hook ──────────────────────────────────────────────────

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function checkQuery() {
      const result = window.matchMedia(query);
      setValue(result.matches);
    }

    checkQuery();

    window.addEventListener("resize", checkQuery);

    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener("change", checkQuery);

    return () => {
      window.removeEventListener("resize", checkQuery);
      mediaQuery.removeEventListener("change", checkQuery);
    };
  }, [query]);

  return value;
}

// ── Site config (Team Ayan) ─────────────────────────────────────────────

export const siteConfig = {
  description:
    "Composers, producers and performers crafting original music that moves people worldwide.",
  footerLinks: [
    {
      title: "Navigate",
      links: NAV_LINKS.map((l, i) => ({ id: i + 1, title: l.label, url: l.href })),
    },
    {
      title: "Services",
      links: [
        { id: 10, title: "Music Production", url: "#get-in-touch" },
        { id: 11, title: "Sound Engineering", url: "#get-in-touch" },
        { id: 12, title: "Live Performance", url: "/live-shows" },
      ],
    },
    {
      title: "Get in Touch",
      links: [
        { id: 20, title: "hello@amusicals.com", url: "https://mail.google.com/mail/?view=cm&to=hello@teamayan.com", external: true },
        { id: 21, title: "Kolkata, West Bengal", url: "", noLink: true },
        { id: 22, title: "Contact Us", url: "#get-in-touch" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;

// ── Footer component ────────────────────────────────────────────────────

export const Component = () => {
  const tablet = useMediaQuery("(max-width: 1024px)");
  const mobile = useMediaQuery("(max-width: 640px)");

  return (
    <footer id="footer" className="w-full pb-0 bg-gray-900 text-gray-400">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between p-10 max-w-7xl mx-auto">
        {/* Brand + socials */}
        <div className="flex flex-col items-start justify-start gap-y-5 max-w-xs mx-0">
          <Link href="/" className="flex items-center gap-2">
            <p className="text-2xl font-black tracking-widest uppercase text-white">
              <span className="text-amber-500">A</span>Musicals
            </p>
          </Link>
          <p className="tracking-tight text-gray-400 font-medium text-sm leading-relaxed">
            {siteConfig.description}
          </p>
          {/* Social icons */}
          <div className="flex gap-3 mt-1">
            {SOCIALS.map((s) => {
              const brandHover: Record<string, string> = {
                "YouTube": "hover:bg-red-600 hover:text-white",
                "Instagram": "hover:bg-amber-600 hover:text-white",
                "Spotify": "hover:bg-green-500 hover:text-white",
                "Twitter / X": "hover:bg-black hover:text-white",
              };
              const hoverClass = brandHover[s.label] ?? "hover:bg-amber-500 hover:text-white";
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 ${hoverClass} transition`}
                >
                  {s.icon}
                </a>
              );
            })}
          </div>
        </div>

        {/* Links columns */}
        <div className="pt-8 md:pt-0 md:w-1/2">
          <div className="flex flex-col items-start justify-start md:flex-row md:items-start md:justify-between gap-y-6 lg:pl-10">
            {siteConfig.footerLinks.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-y-2">
                <li className="mb-2 text-xs font-bold tracking-[0.25em] uppercase text-white">
                  {column.title}
                </li>
                {column.links.map((link) => (
                  <li
                    key={link.id}
                    className="group inline-flex cursor-pointer items-center justify-start gap-1 text-sm tracking-wide text-gray-400"
                  >
                    {"noLink" in link && link.noLink ? (
                      <span className="text-gray-400">{link.title}</span>
                    ) : "external" in link && link.external ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-500 hover:underline transition"
                      >
                        {link.title}
                      </a>
                    ) : link.url.startsWith("#") ? (
                      <a
                        href={link.url}
                        onClick={(e) => {
                          e.preventDefault();
                          document.querySelector(link.url)?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="hover:text-amber-500 hover:underline transition"
                      >
                        {link.title}
                      </a>
                    ) : (
                      <Link
                        href={link.url}
                        className="hover:text-amber-500 transition"
                      >
                        {link.title}
                      </Link>
                    )}
                    {!("noLink" in link && link.noLink) && (
                      <div className="flex size-4 items-center justify-center border border-gray-700 rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                        <ChevronRightIcon className="h-4 w-4" />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* Divider + copyright */}
      <div className="border-t border-gray-800 max-w-7xl mx-auto">
        <div className="px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider uppercase">
          <p>&copy; {new Date().getFullYear()} AMusicals. All rights reserved.</p>
          <p className="text-gray-600">Designed and Developed by <a href="https://www.parot.dev" target="_blank" rel="noopener noreferrer" className="text-amber-500 font-bold hover:text-lime-800">TEAM PAROT</a>.</p>
        </div>
      </div>

      {/* Flickering grid banner */}
      <div className="w-full h-48 md:h-64 relative mt-4 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 z-10 from-20%" />
        <div className="absolute inset-0">
          <FlickeringGrid
            text="AMUSICALS"
            fontSize={mobile ? 36 : tablet ? 60 : 90}
            fontWeight={900}
            className="h-full w-full"
            squareSize={mobile ? 1 : 2}
            gridGap={mobile ? 1 : tablet ? 2 : 3}
            color="#FFFFFF"
            maxOpacity={mobile ? 0.25 : 0.5}
            flickerChance={0.1}
          />
        </div>
      </div>
    </footer>
  );
};
