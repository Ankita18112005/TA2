import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GridBg from "@/components/shared/GridBg";

export default function LiveShowsHero() {
    return (
        <section className="min-h-[50vh] relative overflow-hidden flex flex-col justify-center py-20">
            <GridBg />
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <Link
                    href="/team"
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-widest text-gray-400 hover:text-amber-500 transition mb-8 uppercase"
                >
                    <ArrowLeft className="size-4" /> Back to Team
                </Link>

                <p className="text-sm font-medium tracking-[0.3em] text-gray-400 mb-4 uppercase">
                    Captured On Stage
                </p>
                <h1 className="font-black text-gray-900 tracking-[-6px] text-7xl md:text-9xl leading-none">
                    LIVE<br />
                    <span className="text-amber-500">SHOWS</span>
                </h1>
                <p className="mt-6 max-w-xl text-gray-500 font-mono text-sm tracking-wide uppercase">
                    Relive the energy, the crowd and the raw emotion&mdash;
                    <br />
                    performances that define who we are.
                </p>
            </div>
        </section>
    );
}
