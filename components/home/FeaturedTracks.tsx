"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { TRACKS } from "@/constants/data";
import GridBg from "@/components/shared/GridBg";
import TrackModal from "@/components/home/TrackModal";

export default function FeaturedTracks() {
    const [selectedTrack, setSelectedTrack] = useState<(typeof TRACKS)[number] | null>(null);

    return (
        <section className="relative overflow-hidden py-16 bg-gray-50 border-t border-gray-200">
            <GridBg />
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <p className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-2 font-semibold">
                    Latest
                </p>
                <h2 className="font-black tracking-[-4px] text-6xl md:text-7xl text-gray-900 mb-16">
                    FEATURED
                    <br />
                    TRACKS
                </h2>
                <div className="divide-y divide-gray-200">
                    {TRACKS.map((t, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedTrack(t)}
                            className="flex items-center justify-between py-6 group cursor-pointer w-full text-left"
                        >
                            <div className="flex items-center gap-3 md:gap-6 min-w-0">
                                <span className="text-gray-300 font-mono text-xs md:text-sm w-4 md:w-6 shrink-0">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-white border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition">
                                    <Play className="size-3 md:size-4 text-gray-500 group-hover:text-white transition ml-0.5 md:ml-0" />
                                </div>
                                <div className="min-w-0 pr-2">
                                    <p className="font-bold text-gray-900 text-sm sm:text-base md:text-lg group-hover:text-amber-500 transition truncate">
                                        {t.title}
                                    </p>
                                    <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm font-mono tracking-wider truncate">
                                        {t.genre}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-8 shrink-0 pl-2">
                                <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition hidden md:block">
                                    Watch ↗
                                </span>
                                <span className="text-gray-300 text-xs md:text-sm">{t.year}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <TrackModal
                isOpen={!!selectedTrack}
                onClose={() => setSelectedTrack(null)}
                track={selectedTrack}
            />
        </section>
    );
}
