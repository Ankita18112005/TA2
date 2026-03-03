/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Play, MapPin, Calendar } from "lucide-react";
import { SHOWS } from "@/constants/data";
import GridBg from "@/components/shared/GridBg";

export default function FeaturedShows() {
    const [activeVideo, setActiveVideo] = useState<number | null>(null);

    return (
        <section className="relative overflow-hidden py-24 bg-gray-50">
            <GridBg />
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <p className="text-sm font-medium tracking-[0.3em] text-amber-500 uppercase mb-2">
                    Highlights
                </p>
                <h2 className="font-black tracking-[-4px] text-6xl md:text-7xl text-gray-900 mb-16">
                    FEATURED SHOWS
                </h2>

                <div className="space-y-20">
                    {SHOWS.map((show, i) => (
                        <div
                            key={show.title}
                            className={`flex flex-col ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                                } gap-10 items-start`}
                        >
                            {/* Video / Thumbnail */}
                            <div className="relative w-full lg:w-3/5 aspect-video bg-gray-200 overflow-hidden group">
                                {activeVideo === i ? (
                                    <iframe
                                        src={`${show.videoUrl}?autoplay=1`}
                                        title={show.title}
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    />
                                ) : (
                                    <>
                                        <img
                                            src={show.thumbnail}
                                            alt={show.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                                        />
                                        <button
                                            onClick={() => setActiveVideo(i)}
                                            className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition"
                                        >
                                            <div className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                                                <Play className="size-8 text-white ml-1" fill="white" />
                                            </div>
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Info */}
                            <div className="w-full lg:w-2/5 flex flex-col justify-center">
                                <h3 className="font-black text-3xl md:text-4xl tracking-tight text-gray-900 mb-4 leading-tight">
                                    {show.title}
                                </h3>
                                <div className="flex items-center gap-3 text-gray-400 text-sm font-mono tracking-wider uppercase mb-2">
                                    <Calendar className="size-4" />
                                    {show.date}
                                </div>
                                <div className="flex items-center gap-3 text-gray-400 text-sm font-mono tracking-wider uppercase mb-6">
                                    <MapPin className="size-4" />
                                    {show.venue}
                                </div>
                                <p className="text-gray-500 font-mono text-sm tracking-wide leading-relaxed uppercase">
                                    {show.description}
                                </p>
                                <button
                                    onClick={() => setActiveVideo(activeVideo === i ? null : i)}
                                    className="mt-8 inline-flex items-center gap-2 text-amber-500 font-semibold text-sm tracking-widest uppercase hover:text-amber-600 transition"
                                >
                                    <Play className="size-4" />
                                    {activeVideo === i ? "Close Video" : "Watch Performance"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
