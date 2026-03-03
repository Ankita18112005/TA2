import GridBg from "@/components/shared/GridBg";

export default function ValuesSection() {
    return (
        <section className="relative overflow-hidden py-24 bg-white">
            <GridBg />
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <p className="text-sm font-medium tracking-[0.3em] text-amber-500 uppercase mb-2">What Drives Us</p>
                <h2 className="font-black tracking-[-4px] text-6xl md:text-7xl text-gray-900 mb-16">VALUES</h2>
                <div className="grid md:grid-cols-3 gap-px bg-gray-200">
                    {[
                        ["Creativity", "We push every boundary and explore new sonic possibilities on every project."],
                        ["Collaboration", "Great music is born from trust, respect and collective energy."],
                        ["Excellence", "We hold ourselves to the highest standard in every note we create."],
                    ].map(([title, desc]) => (
                        <div key={title} className="bg-white p-10 hover:bg-amber-50 transition">
                            <div className="w-2 h-10 bg-amber-500 mb-6" />
                            <h3 className="text-2xl font-black mb-3 text-gray-900 tracking-tight">{title}</h3>
                            <p className="text-gray-500 font-mono text-sm tracking-wide">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
