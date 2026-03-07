/* eslint-disable @next/next/no-img-element */
import { MEMBERS } from "@/constants/data";
import GridBg from "@/components/shared/GridBg";

export default function TeamMembers() {
    return (
        <>
            {MEMBERS.map((m, i) => (
                <section
                    key={`${m.name}-${i}`}
                    className={`relative overflow-hidden py-4 sm:py-16 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                    <GridBg />
                    <div className="relative z-10 max-w-7xl mx-auto px-6">
                        {/* Name headline */}
                        <div className="relative mb-6">
                            <h2 className="font-black tracking-[-4px] text-6xl md:text-8xl text-amber-900 leading-none">
                                {m.name}
                            </h2>
                            <p
                                className="text-lg md:text-2xl font-semibold tracking-[4px] md:tracking-[6px] uppercase text-gray-900 mt-2 md:mt-0 md:absolute md:-bottom-8 md:left-0"
                            >
                                {m.role}
                            </p>
                        </div>

                        {/* Card + Photo row */}
                        <div className={`flex flex-col md:flex-row gap-6 pt-8 items-start ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                            {/* Skills card */}
                            <div className="bg-gray-100 p-6 md:p-10 w-full md:max-w-sm shrink-0 h-fit">
                                <div className="font-bold text-xl space-y-2 text-gray-900">
                                    {m.skills.map(s => <div key={s}>{s}</div>)}
                                </div>
                            </div>

                            {/* Photo */}
                            <div className="relative flex bg-gray-100 overflow-hidden w-full md:flex-1 md:max-w-sm">
                                <img
                                    src={m.image}
                                    alt={m.name}
                                    className="flex-1 min-w-0 object-cover grayscale"
                                    style={{ height: "320px" }}
                                />
                                <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest text-amber-900 shrink-0">
                                    {m.location}
                                </div>
                            </div>

                            {/* Bio + Music Links */}
                            <div className="flex flex-col justify-end flex-1 pb-4">
                                <p className="font-mono text-sm tracking-wide text-gray-800 uppercase leading-relaxed">
                                    {m.desc}
                                </p>

                                {m.musicLinks && m.musicLinks.length > 0 && (
                                    <div className="mt-6">
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-semibold mb-3">
                                            Featured Work
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            {m.musicLinks.map((link: { title: string; url: string }) => (
                                                <a
                                                    key={link.url}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-amber-50 border border-gray-200 hover:border-amber-300 rounded transition-all group w-fit"
                                                >
                                                    <svg className="size-3.5 text-red-500 group-hover:text-red-500 transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
                                                    </svg>
                                                    <span className="text-xs font-medium tracking-wide text-gray-900 group-hover:text-gray-900">
                                                        {link.title}
                                                    </span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
