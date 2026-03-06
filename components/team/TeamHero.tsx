import GridBg from "@/components/shared/GridBg";
import Link from "next/link";
import { TEAM_HERO_NAMES, TEAM_HERO_SKILLS } from "@/constants/data";

export default function TeamHero() {
    return (
        <section className="min-h-screen relative overflow-hidden flex flex-col py-16">
            <GridBg />

            {/* ── Watermark names (background) ────────────────────── */}
            <div className="absolute inset-0 z-[1] flex flex-col justify-end sm:justify-center items-end pr-4 pb-32 sm:pb-0 md:pr-16 opacity-[0.06] sm:opacity-[0.07] pointer-events-none select-none overflow-hidden">
                {TEAM_HERO_NAMES.map((name) => (
                    <p
                        key={name}
                        className="font-black text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-[-2px] sm:tracking-[-4px] md:tracking-[-8px] text-gray-900 whitespace-nowrap"
                    >
                        {name}
                    </p>
                ))}
            </div>

            {/* ── Main content ─────────────────────────────────────── */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-start pt-24 sm:pt-0 sm:justify-center">
                <p className="text-sm font-medium tracking-[0.3em] text-gray-400 mb-4 uppercase">
                    The People Behind The Sound
                </p>
                <h1 className="font-black text-gray-900 tracking-[-6px] text-7xl md:text-9xl leading-none">
                    OUR<br /><span className="text-amber-500">TEAM</span>
                </h1>
                <p className="mt-6 max-w-xl text-gray-500 font-mono text-sm tracking-wide uppercase">
                    Composers, producers and artists working together<br />
                    to craft music that moves people worldwide.
                </p>
                <Link
                    href="/live-shows"
                    className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-amber-500 transition-colors duration-300 w-fit"
                >
                    View Our Shows
                    <svg className="size-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </Link>
            </div>

            {/* ── Skills marquee strip ─────────────────────────────── */}
            <div className="relative z-10 mt-auto border-t border-b border-gray-200 py-4 overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {/* Duplicate the list twice for seamless loop */}
                    {[...TEAM_HERO_SKILLS, ...TEAM_HERO_SKILLS].map((skill, i) => (
                        <span key={`${skill}-${i}`} className="flex items-center">
                            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-gray-900 px-6 md:px-10">
                                {skill}
                            </span>
                            <span className="text-amber-500 text-lg">✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
