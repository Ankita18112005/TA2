import GridBg from "@/components/shared/GridBg";

export default function TeamHero() {
    return (
        <section className="min-h-screen relative overflow-hidden flex flex-col justify-center py-20">
            <GridBg />
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
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
            </div>
        </section>
    );
}
