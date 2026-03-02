const fs = require('fs');

fs.writeFileSync('app/page.tsx', `/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowDownRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const tracks = [
  { title: "Midnight Echoes", genre: "Ambient", duration: "3:42", year: "2024" },
  { title: "Golden Hour", genre: "Indie Pop", duration: "4:01", year: "2024" },
  { title: "Storm and Silence", genre: "Cinematic", duration: "5:18", year: "2023" },
  { title: "Pulse", genre: "Electronic", duration: "3:55", year: "2023" },
];

const GridBg = () => (
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`linear-gradient(to right, #e5e5e5 1px, transparent 1px),
        linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)\`,
      backgroundSize: "20px 20px",
      maskImage: \`repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
        radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)\`,
      WebkitMaskImage: \`repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
        radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)\`,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
);

export default function Home() {
  return (
    <div className="bg-white">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="min-h-screen overflow-hidden relative py-20">
        <GridBg />
        <div className="mx-auto max-w-7xl relative z-20 px-6">
          {/* Headline */}
          <div className="relative">
            <p className="text-sm absolute -top-4 left-20 font-medium tracking-wider text-gray-400">
              EST. 2014
            </p>
            <h1 className="z-20 relative font-black text-gray-900 text-center tracking-[-7px] text-7xl md:text-9xl xl:tracking-[-1rem] md:tracking-[-14px] xl:text-[10rem]">
              CREATIVE MUSIC
            </h1>
            <p className="text-4xl hidden xl:block absolute -bottom-12 right-24 font-thin tracking-[6px] text-gray-400">
              TEAM AYAN
            </p>
            <p className="text-4xl absolute xl:hidden -bottom-12 left-24 font-thin tracking-[6px] text-gray-400">
              TEAM AYAN
            </p>
          </div>

          {/* Skills card + photo */}
          <div className="grid relative">
            <div className="space-y-8 pt-20 flex gap-6 justify-center">
              <div className="flex gap-6 bg-gray-100 w-full max-w-xl h-fit p-10 items-end space-y-2 text-xl font-bold md:text-2xl lg:text-3xl">
                <div className="font-semibold text-xl text-gray-900">
                  <div>/ MUSIC PRODUCTION</div>
                  <div>/ SOUND DESIGN</div>
                  <div>/ LIVE PERFORMANCE</div>
                </div>
                <div className="absolute hidden md:flex left-1/2 -top-10 w-fit overflow-hidden bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80"
                    alt="Studio microphone"
                    className="h-[400px] w-full object-contain grayscale"
                  />
                  <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest text-gray-500">
                    BASED IN NEW DELHI
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:hidden left-1/2 -top-10 w-full md:w-fit overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80"
                alt="Studio microphone"
                className="h-[400px] w-full object-contain grayscale"
              />
              <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest text-gray-500">
                BASED IN NEW DELHI
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="md:mt-40 mt-10">
            <p className="mx-auto max-w-2xl font-mono text-center text-sm font-medium tracking-wide md:text-base text-gray-500">
              WE ARE EXPERIENCED COMPOSERS AND PRODUCERS,
              <br />
              WHO CREATE MEMORABLE SONIC EXPERIENCES FOR
              <br />
              BRANDS AND AUDIENCES OF ALL SIZES
            </p>
          </div>
          <div className="flex justify-center pt-6">
            <Link href="/contact">
              <Button size="lg" className="uppercase tracking-widest">Book a Session</Button>
            </Link>
          </div>

          {/* Recent Work + stacked images */}
          <div className="md:flex mt-20 items-end justify-between">
            <div className="relative">
              <div className="w-60 h-36 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&auto=format&fit=crop&q=80"
                  alt="Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-60 h-36 absolute left-6 -top-6 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&auto=format&fit=crop&q=80"
                  alt="Performance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-60 h-36 absolute left-12 -top-12 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop&q=80"
                  alt="Concert"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center md:justify-end gap-2 text-gray-500">
                <span className="text-lg font-medium tracking-wider">RECENT WORK</span>
                <ArrowDownRight className="size-6" />
              </div>
              <div className="mt-3 md:text-right">
                <h2 className="text-5xl font-black uppercase tracking-[-4px] text-gray-900">
                  Music Without Limits
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED TRACKS ═══════════════════ */}
      <section className="relative overflow-hidden py-24 bg-gray-50 border-t border-gray-200">
        <GridBg />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-2 font-semibold">Latest</p>
          <h2 className="font-black tracking-[-4px] text-6xl md:text-7xl text-gray-900 mb-16">FEATURED<br />TRACKS</h2>
          <div className="divide-y divide-gray-200">
            {tracks.map((t, i) => (
              <div key={i} className="flex items-center justify-between py-6 group cursor-pointer">
                <div className="flex items-center gap-6">
                  <span className="text-gray-300 font-mono text-sm w-6">{String(i + 1).padStart(2, "0")}</span>
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition">
                    <Play className="size-4 text-gray-500 group-hover:text-white transition" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg group-hover:text-amber-500 transition">{t.title}</p>
                    <p className="text-gray-400 text-sm font-mono tracking-wider">{t.genre}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-gray-400 text-sm font-mono hidden md:block">{t.duration}</span>
                  <span className="text-gray-300 text-sm">{t.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <section className="bg-amber-500 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
          {[["50+", "Projects"], ["100+", "Clients"], ["10+", "Years"], ["30+", "Members"]].map(([n, l]) => (
            <div key={l}>
              <p className="text-6xl font-black">{n}</p>
              <p className="text-sm uppercase tracking-[0.3em] mt-2 text-white/70">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ MEET THE TEAM PREVIEW ═══════════════════ */}
      <section className="relative overflow-hidden py-24 bg-white">
        <GridBg />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="relative mb-10">
            <p className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-2 font-semibold">The People</p>
            <h2 className="font-black tracking-[-4px] text-6xl md:text-8xl text-gray-900 leading-none">MEET THE<br />TEAM</h2>
          </div>

          {/* First member preview in editorial style */}
          <div className="flex gap-6 pt-8 items-start">
            <div className="bg-gray-100 p-10 w-full max-w-sm shrink-0 h-fit">
              <div className="font-semibold text-xl space-y-2 text-gray-900">
                <div>/ COMPOSITION</div>
                <div>/ PRODUCTION</div>
                <div>/ ARRANGEMENT</div>
              </div>
            </div>
            <div className="relative flex bg-gray-100 overflow-hidden flex-1 max-w-sm">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80"
                alt="Ayan Kumar"
                className="w-full object-cover grayscale"
                style={{ height: 320 }}
              />
              <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest text-gray-500 shrink-0">
                NEW DELHI, INDIA
              </div>
            </div>
            <div className="hidden lg:flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-black tracking-[-3px] text-5xl text-gray-900 mb-2">AYAN KUMAR</h3>
                <p className="text-xl font-thin tracking-[4px] uppercase text-gray-400">Lead Composer</p>
              </div>
              <p className="font-mono text-sm tracking-wide text-gray-500 uppercase leading-relaxed mt-8">
                10+ years shaping the sonic identity of artists, brands and film projects across genres.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <Link href="/team">
              <Button size="lg" className="uppercase tracking-widest px-12 py-6 text-base">
                View Full Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="relative overflow-hidden py-24 bg-gray-50 border-t border-gray-200">
        <GridBg />
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-end justify-between gap-12">
          <div>
            <p className="font-mono text-sm tracking-widest text-gray-400 uppercase mb-4">
              Ready to create something?
            </p>
            <h2 className="font-black tracking-[-4px] text-5xl md:text-7xl text-gray-900 leading-none uppercase">
              Start a<br />Project
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-2 text-gray-500">
              <span className="text-lg font-medium tracking-wider uppercase">Get In Touch</span>
              <ArrowDownRight className="size-6" />
            </div>
            <Link href="/contact">
              <Button size="lg" className="uppercase tracking-widest px-12 py-6 text-base">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
`, 'utf8');

console.log('Homepage written successfully!');
`, 'utf8');
