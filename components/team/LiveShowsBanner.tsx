import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LiveShowsBanner() {
    return (
        <section className="relative overflow-hidden py-24 bg-gray-900">
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: `linear-gradient(to right, #e5e5e5 1px, transparent 1px),
            linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                }}
            />
            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                <div>
                    <p className="text-sm font-medium tracking-[0.3em] text-amber-500 uppercase mb-2">
                        On Stage
                    </p>
                    <h2 className="font-black tracking-[-4px] text-6xl md:text-7xl text-white leading-none">
                        LIVE SHOWS
                    </h2>
                    <p className="mt-4 font-mono text-sm tracking-wide text-gray-400 uppercase max-w-md">
                        Watch our performances, browse photos from the stage, and relive the energy.
                    </p>
                </div>
                <Link href="/live-shows">
                    <Button size="lg" className="uppercase tracking-widest px-12 py-6 text-base bg-amber-500 hover:bg-amber-600 text-white">
                        View Live Shows
                    </Button>
                </Link>
            </div>
        </section>
    );
}
