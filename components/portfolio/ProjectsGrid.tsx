const PROJECTS: any[] = [];

export default function ProjectsGrid() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
                    {PROJECTS.map((p, i) => (
                        <div key={i} className="bg-white p-8 hover:bg-amber-50 transition group cursor-pointer">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold">{p.category}</span>
                                <span className="text-gray-400 text-sm">{p.year}</span>
                            </div>
                            <div className="w-full h-32 bg-gray-50 border border-gray-100 rounded mb-6 flex items-center justify-center text-4xl group-hover:bg-amber-50 transition">
                                ♪
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-amber-500 transition">{p.title}</h3>
                            <p className="text-gray-500 text-sm">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
