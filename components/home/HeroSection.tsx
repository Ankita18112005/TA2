/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GridBg from "@/components/shared/GridBg";

export default function HeroSection() {
    return (
        <section className="min-h-screen overflow-hidden relative py-20">
            <GridBg />
            <div className="mx-auto max-w-7xl relative z-20 px-6">
                {/* Headline */}
                <div className="relative">
                    <p className="text-sm absolute -top-4 left-20 font-medium tracking-wider text-gray-400">
                        EST. 2014
                    </p>
                    <h1 className="z-20 relative font-black text-gray-900 text-center tracking-[-7px] text-7xl md:text-9xl xl:tracking-[-1rem] md:tracking-[-14px] xl:text-[10rem]">
                        CREATIVE MUSIC
                    </h1>
                    <p className="text-4xl hidden xl:block absolute -bottom-12 right-24 font-thin tracking-[6px] text-gray-400">
                        TEAM AYAN
                    </p>
                    <p className="text-4xl absolute xl:hidden -bottom-12 left-24 font-thin tracking-[6px] text-gray-400">
                        TEAM AYAN
                    </p>
                </div>

                {/* Skills card + hero photo */}
                <div className="grid relative">
                    <div className="space-y-8 pt-20 flex gap-6 justify-center">
                        <div className="flex gap-6 bg-gray-100 w-full max-w-xl h-fit p-10 items-end space-y-2 text-xl font-bold md:text-2xl lg:text-3xl">
                            <div className="font-semibold text-xl text-gray-900">
                                <div>/ MUSIC PRODUCTION</div>
                                <div>/ SOUND DESIGN</div>
                                <div>/ LIVE PERFORMANCE</div>
                            </div>
                            <div className="absolute hidden md:flex left-1/2 -top-10 w-fit overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80"
                                    alt="Studio microphone"
                                    className="h-[400px] w-full object-contain grayscale"
                                />
                                <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest text-gray-500">
                                    BASED IN NEW DELHI
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:hidden left-1/2 -top-10 w-full md:w-fit overflow-hidden bg-gray-100">
                        <img
                            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80"
                            alt="Studio microphone"
                            className="h-[400px] w-full object-contain grayscale"
                        />
                        <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest text-gray-500">
                            BASED IN NEW DELHI
                        </div>
                    </div>
                </div>

                {/* Tagline */}
                <div className="md:mt-40 mt-10">
                    <p className="mx-auto max-w-2xl font-mono text-center text-sm font-medium tracking-wide md:text-base text-gray-500">
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

                {/* Recent Work strip */}
                <div className="md:flex mt-20 items-end justify-between">
                    <div className="relative h-48 w-72 mb-8 md:mb-0">
                        <div className="w-60 h-36 shadow-lg border rounded-md overflow-hidden absolute bottom-0 left-0">
                            <img
                                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&auto=format&fit=crop&q=80"
                                alt="Studio"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-60 h-36 shadow-lg border rounded-md overflow-hidden absolute bottom-3 left-3">
                            <img
                                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&auto=format&fit=crop&q=80"
                                alt="Performance"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-60 h-36 shadow-lg border rounded-md overflow-hidden absolute bottom-6 left-6">
                            <img
                                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop&q=80"
                                alt="Concert"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center md:justify-end gap-2 text-gray-500">
                            <span className="text-lg font-medium tracking-wider">RECENT WORK</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="m7 7 10 10" /><path d="M17 7v10H7" /></svg>
                        </div>
                        <div className="mt-3 md:text-right">
                            <h2 className="text-5xl font-black uppercase tracking-[-4px] text-gray-900">
                                Music Without Limits
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
