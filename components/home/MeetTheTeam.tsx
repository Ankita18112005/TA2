/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GridBg from "@/components/shared/GridBg";

export default function MeetTheTeam() {
    return (
        <section className="relative overflow-hidden py-24 bg-white">
            <GridBg />
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="relative mb-10">
                    <p className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-2 font-semibold">
                        The People
                    </p>
                    <h2 className="font-black tracking-[-4px] text-6xl md:text-8xl text-gray-900 leading-none">
                        MEET THE
                        <br />
                        TEAM
                    </h2>
                </div>

                {/* Lead member preview */}
                <div className="flex flex-col lg:flex-row gap-6 pt-8 items-start">
                    <div className="bg-gray-100 p-10 w-full lg:max-w-xs shrink-0 h-fit">
                        <div className="font-semibold text-xl space-y-2 text-gray-900">
                            <div>/ COMPOSITION</div>
                            <div>/ PRODUCTION</div>
                            <div>/ ARRANGEMENT</div>
                        </div>
                    </div>
                    <div className="relative flex bg-gray-100 overflow-hidden w-full lg:max-w-xl">
                        <img
                            src="/images/home/teamayan.jpg"
                            alt="Team Ayan"
                            className="w-full object-cover grayscale"
                            style={{ height: 320 }}
                        />
                        <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest text-gray-500 shrink-0">
                            NEW DELHI, INDIA
                        </div>
                    </div>
                    <div className="flex flex-col justify-between flex-1">
                        <div>
                            <h3 className="font-black tracking-[-3px] text-5xl text-gray-900 mb-2">
                                TEAM AYAN
                            </h3>
                            <p className="text-xl font-thin tracking-[4px] uppercase text-gray-400">
                                Lead Composer
                            </p>
                        </div>
                        <p className="font-mono text-sm tracking-wide text-gray-500 uppercase leading-relaxed mt-8">
                            10+ years shaping the sonic identity of artists, brands and film
                            projects across genres.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center mt-16">
                    <Link href="/team">
                        <Button
                            size="lg"
                            className="uppercase tracking-widest px-12 py-6 text-base"
                        >
                            View Full Team
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
