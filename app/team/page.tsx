/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const members = [
  {
    name: "AYAN MUKHERJEE",
    role: "Lead Composer & Producer",
    location: "NEW DELHI, INDIA",
    skills: ["/ COMPOSITION", "/ PRODUCTION", "/ ARRANGEMENT"],
    image: "images/team/ayanbw.jpg",
    desc: "10+ years shaping the sonic identity of artists, brands and film projects across genres.",
  },
  {
    name: "PAPIA GUPTA",
    role: "Vocalist & Songwriter",
    location: "MUMBAI, INDIA",
    skills: ["/ VOCALS", "/ SONGWRITING", "/ PERFORMANCE"],
    image: "images/team/papiacol.jpg",
    desc: "An award-winning vocalist bringing emotion and depth to every song she touches.",
  },
  {
    name: "SARTHAK GHOSH",
    role: "Sound Engineer",
    location: "BANGALORE, INDIA",
    skills: ["/ MIXING", "/ MASTERING", "/ SOUND DESIGN"],
    image: "images/team/sarthakbw.jpg",
    desc: "Studio-grade engineer ensuring pristine audio across every medium.",
  },
  {
    name: "HRICK SENGUPTA",
    role: "Music Producer",
    location: "KOLKATA, INDIA",
    skills: ["/ PRODUCTION", "/ BEATS", "/ COLLABORATION"],
    image: "images/team/hrickbw.jpg",
    desc: "Innovative producer fusing world music traditions with cutting-edge electronic sounds.",
  },
  
  {
    name: "AYAN MUKHERJEE",
    role: "Lead Composer & Producer",
    location: "NEW DELHI, INDIA",
    skills: ["/ COMPOSITION", "/ PRODUCTION", "/ ARRANGEMENT"],
    image: "images/team/ayancol.jpg",
    desc: "10+ years shaping the sonic identity of artists, brands and film projects across genres.",
  },
  {
    name: "PAPIA GUPTA",
    role: "Vocalist & Songwriter",
    location: "MUMBAI, INDIA",
    skills: ["/ VOCALS", "/ SONGWRITING", "/ PERFORMANCE"],
    image: "images/team/papiacol.jpg",
    desc: "An award-winning vocalist bringing emotion and depth to every song she touches.",
  },
  {
    name: "SARTHAK GHOSH",
    role: "Sound Engineer",
    location: "BANGALORE, INDIA",
    skills: ["/ MIXING", "/ MASTERING", "/ SOUND DESIGN"],
    image: "images/team/sarthakcol.jpg",
    desc: "Studio-grade engineer ensuring pristine audio across every medium.",
  },
  {
    name: "HRICK SENGUPTA",
    role: "Music Producer",
    location: "KOLKATA, INDIA",
    skills: ["/ PRODUCTION", "/ BEATS", "/ COLLABORATION"],
    image: "images/team/hrickcol.jpg",
    desc: "Innovative producer fusing world music traditions with cutting-edge electronic sounds.",
  },
  
];

const GridBg = () => (
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `linear-gradient(to right, #e5e5e5 1px, transparent 1px),
        linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)`,
      backgroundSize: "20px 20px",
      maskImage: `repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
        radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)`,
      WebkitMaskImage: `repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
        radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)`,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
);

export default function Team() {
  return (
    <div className="bg-white">
      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="min-h-[50vh] relative overflow-hidden flex flex-col justify-center py-20">
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

      {/* ── TEAM MEMBERS ──────────────────────────────────────────────────── */}
      {members.map((m, i) => (
        <section
          key={m.name}
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
                className={`text-2xl font-thin tracking-[6px] uppercase text-gray-400 absolute -bottom-8 ${
                  i % 2 === 0 ? "right-0 hidden md:block" : "left-0"
                }`}
              >
                {m.role}
              </p>
            </div>

            {/* Card + Photo row */}
            <div className={`flex gap-6 pt-16 items-start ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}>
              {/* Skills card */}
              <div className="bg-gray-100 p-10 w-full max-w-sm shrink-0 h-fit">
                <div className="font-semibold text-xl space-y-2 text-gray-900">
                  {m.skills.map(s => <div key={s}>{s}</div>)}
                </div>
              </div>

              {/* Photo */}
              <div className="relative flex bg-gray-100 overflow-hidden flex-1 max-w-sm">
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
              <div className="hidden lg:flex flex-col justify-end flex-1 pb-4">
                <p className="font-mono text-sm tracking-wide text-gray-500 uppercase leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── VALUES ────────────────────────────────────────────────────────── */}
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

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 bg-gray-50 border-t border-gray-200">
        <GridBg />
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-end justify-between gap-12">
          <div>
            <p className="font-mono text-sm tracking-widest text-gray-400 uppercase mb-4">
              Ready to create something?
            </p>
            <h2 className="font-black tracking-[-4px] text-5xl md:text-7xl text-gray-900 leading-none uppercase">
              Work With<br />Our Team
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-2 text-gray-500">
              <span className="text-lg font-medium tracking-wider uppercase">Get In Touch</span>
              <ArrowDownRight className="size-6" />
            </div>
            <Link href="/contact">
              <Button size="lg" className="uppercase tracking-widest px-12 py-6 text-base">
                Book a Session
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
