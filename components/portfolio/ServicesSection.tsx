const SERVICES: string[] = [];

export default function ServicesSection() {
    return (
        <section className="bg-gray-50 py-20 px-6 border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
                <p className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-2 font-semibold">What We Offer</p>
                <h2 className="text-4xl font-black mb-12 text-gray-900">Services</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {SERVICES.map(s => (
                        <div key={s} className="border border-gray-200 bg-white px-6 py-5 hover:border-amber-500 hover:bg-amber-50 transition">
                            <span className="text-amber-500 mr-3 font-bold">→</span>
                            <span className="font-medium text-gray-800">{s}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
