"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GridBg from "@/components/shared/GridBg";

export default function HeroSection() {
    return (
        <section className="min-h-screen overflow-hidden relative flex flex-col justify-center py-16 md:py-10">
            <GridBg />
            <div className="mx-auto max-w-7xl relative z-20 px-6 w-full">
                {/* Headline */}
                <div className="relative">
                    <p className="text-sm absolute -top-4 left-2 md:left-20 font-medium tracking-wider text-gray-400">
                        EST. 2014
                    </p>
                    <h1 className="z-20 relative font-black text-gray-900 text-left md:text-center tracking-[-4px] text-5xl sm:text-7xl md:text-9xl xl:tracking-[-1rem] sm:tracking-[-7px] md:tracking-[-14px] xl:text-[10rem]">
                        CREATIVE MUSIC
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-4xl xl:absolute xl:-bottom-12 xl:right-24 mt-2 xl:mt-0 font-thin tracking-[4px] md:tracking-[6px] text-gray-400">
                        <span className="text-amber-500">A</span>MUSICALS
                    </p>
                </div>

                {/* Skills card + hero photo */}
                <div className="grid relative">
                    <div className="space-y-8 pt-12 md:pt-20 flex gap-6 justify-center">
                        <div className="flex gap-6 bg-gray-100 w-full max-w-xl h-fit p-6 sm:p-10 items-end space-y-2 text-lg sm:text-xl font-bold md:text-2xl lg:text-3xl">
                            <div className="font-semibold text-base sm:text-xl text-gray-900">
                                <div>/ MUSIC PRODUCTION</div>
                                <div>/ SOUND DESIGN</div>
                                <div>/ LIVE PERFORMANCE</div>
                            </div>
                            <div className="absolute hidden md:flex left-1/2 -top-10 w-fit overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80"
                                    alt="Studio microphone"
                                    className="h-[350px] lg:h-[400px] w-full object-contain grayscale"
                                />
                                <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest text-gray-500">
                                    BASED IN NEW DELHI
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:hidden left-1/2 -top-10 w-full md:w-fit overflow-hidden bg-gray-100 -mt-4">
                        <img
                            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80"
                            alt="Studio microphone"
                            className="h-[300px] sm:h-[400px] w-full object-contain grayscale"
                        />
                        <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest text-gray-500">
                            BASED IN NEW DELHI
                        </div>
                    </div>
                </div>

                {/* Tagline */}
                <div className="md:mt-24 lg:mt-40 mt-10">
                    <p className="mx-auto max-w-2xl font-mono text-center text-xs sm:text-sm font-medium tracking-wide md:text-base text-gray-500">
                        WE ARE EXPERIENCED COMPOSERS AND PRODUCERS,
                        <br />
                        WHO CREATE MEMORABLE SONIC EXPERIENCES FOR
                        <br />
                        BRANDS AND AUDIENCES OF ALL SIZES
                    </p>
                </div>
                <div className="flex justify-center pt-6">
                    <Link href="/contact">
                        <Button size="lg" className="uppercase tracking-widest">
                            Book a Session
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
