import Link from "next/link";
import GridBg from "@/components/shared/GridBg";

export default function LiveShowsCta() {
    return (
        <section className="relative overflow-hidden py-24 bg-gray-50 border-t border-gray-200">
            <GridBg />
            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-end justify-between gap-12">
                <div>
                    <p className="font-mono text-sm tracking-widest text-gray-400 uppercase mb-4">
                        Want us at your event?
                    </p>
                    <h2 className="font-black tracking-[-4px] text-5xl md:text-7xl text-gray-900 leading-none uppercase">
                        Book A<br />Live Show
                    </h2>
                </div>
                <Link
                    href="/contact"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold tracking-widest uppercase px-12 py-5 text-sm transition"
                >
                    Get In Touch
                </Link>
            </div>
        </section>
    );
}
