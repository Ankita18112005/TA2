const projects = [
  { title: 'Summer Vibes', category: 'Album', year: '2024', desc: 'Upbeat summer collection spanning pop, R&B and afrobeats.' },
  { title: 'Indie Folk Set', category: 'Composition', year: '2024', desc: 'A 6-track acoustic journey rooted in folk storytelling.' },
  { title: 'Jazz Nights', category: 'Live Recording', year: '2023', desc: 'Studio-quality live jazz recordings from an intimate venue.' },
  { title: 'Serenity', category: 'Ambient / Sound Design', year: '2023', desc: 'Meditation soundscape crafted for mindfulness apps.' },
  { title: 'Pop Fusion', category: 'Production', year: '2023', desc: 'Contemporary pop with fresh arrangements and catchy hooks.' },
  { title: 'World Blend', category: 'World Music', year: '2022', desc: 'Global sounds fused with modern electronic production.' },
];

const services = [
  'Music Production', 'Sound Engineering', 'Composition & Arrangement',
  'Live Performance', 'Mixing & Mastering', 'Music Consultation',
];

export default function Portfolio() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-amber-50 py-24 px-6 border-b border-amber-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-2 font-semibold">Our Work</p>
          <h1 className="text-6xl md:text-7xl font-black text-gray-900">Portfolio</h1>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {projects.map((p, i) => (
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

      {/* Services */}
      <section className="bg-gray-50 py-20 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-2 font-semibold">What We Offer</p>
          <h2 className="text-4xl font-black mb-12 text-gray-900">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(s => (
              <div key={s} className="border border-gray-200 bg-white px-6 py-5 hover:border-amber-500 hover:bg-amber-50 transition">
                <span className="text-amber-500 mr-3 font-bold">→</span>
                <span className="font-medium text-gray-800">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
