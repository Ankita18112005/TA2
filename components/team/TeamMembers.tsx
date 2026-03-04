/* eslint-disable @next/next/no-img-element */
import { MEMBERS } from "@/constants/data";
import GridBg from "@/components/shared/GridBg";

export default function TeamMembers() {
    return (
        <>
            {MEMBERS.map((m, i) => (
                <section
                    key={`${m.name}-${i}`}
                    className={`relative overflow-hidden py-24 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                    <GridBg />
                    <div className="relative z-10 max-w-7xl mx-auto px-6">
                        {/* Name headline */}
                        <div className="relative mb-6">
                            <h2 className="font-black tracking-[-4px] text-6xl md:text-8xl text-gray-900 leading-none">
                                {m.name}
                            </h2>
                            <p
                                className="text-lg md:text-2xl font-thin tracking-[4px] md:tracking-[6px] uppercase text-gray-400 mt-2 md:mt-0 md:absolute md:-bottom-8 md:left-0"
                            >
                                {m.role}
                            </p>
                        </div>

                        {/* Card + Photo row */}
                        <div className={`flex flex-col md:flex-row gap-6 pt-16 items-start ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                            {/* Skills card */}
                            <div className="bg-gray-100 p-6 md:p-10 w-full md:max-w-sm shrink-0 h-fit">
                                <div className="font-semibold text-xl space-y-2 text-gray-900">
                                    {m.skills.map(s => <div key={s}>{s}</div>)}
                                </div>
                            </div>

                            {/* Photo */}
                            <div className="relative flex bg-gray-100 overflow-hidden w-full md:flex-1 md:max-w-sm">
                                <img
                                    src={m.image}
                                    alt={m.name}
                                    className="w-full object-cover grayscale"
                                    style={{ height: "320px" }}
                                />
                                <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest text-gray-500 shrink-0">
                                    {m.location}
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="flex flex-col justify-end flex-1 pb-4">
                                <p className="font-mono text-sm tracking-wide text-gray-500 uppercase leading-relaxed">
                                    {m.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
