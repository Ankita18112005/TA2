import { SOCIALS } from "@/constants/data";
import { ArrowDownRight } from "lucide-react";
import GridBg from "@/components/shared/GridBg";

export default function ContactInfo() {
    return (
        <section className="relative overflow-hidden py-24 bg-gray-50 border-t border-gray-200">
            <GridBg />
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <p className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-2 font-semibold">
                            Connect
                        </p>
                        <h2 className="font-black tracking-[-4px] text-5xl md:text-7xl text-gray-900 leading-none uppercase">
                            Get In<br />Touch
                        </h2>
                    </div>
                    <a
                        href="mailto:info@teamayan.com"
                        className="flex items-center gap-3 bg-gray-900 hover:bg-amber-500 text-white font-bold uppercase tracking-widest px-10 py-5 text-sm transition w-fit"
                    >
                        Contact Us
                        <ArrowDownRight className="size-5" />
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {SOCIALS.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="group flex items-center gap-4 bg-white border border-gray-200 px-6 py-4 hover:border-amber-500 hover:bg-amber-50 transition w-full"
                        >
                            <span className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-amber-500 flex items-center justify-center text-gray-500 group-hover:text-white transition">
                                {s.icon}
                            </span>
                            <span className="font-bold text-gray-900 text-sm tracking-wider uppercase group-hover:text-amber-500 transition">
                                {s.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
