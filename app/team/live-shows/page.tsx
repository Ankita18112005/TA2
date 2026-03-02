/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { ArrowLeft, Play, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

/* ── DATA ──────────────────────────────────────────────────────────────────── */

const shows = [
  {
    title: "Kolkata Music Festival 2025",
    date: "15 Dec 2025",
    venue: "Science City Auditorium, Kolkata",
    thumbnail: "/images/live/show1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "An electrifying night of original compositions performed live for a 2,000-strong crowd under the Kolkata skyline.",
  },
  {
    title: "Delhi Indie Showcase",
    date: "22 Oct 2025",
    venue: "The Piano Man Jazz Club, New Delhi",
    thumbnail: "/images/live/show2.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "An intimate evening blending jazz-fusion and cinematic soundscapes for a packed house of music lovers.",
  },
  {
    title: "Mumbai Sessions Live",
    date: "08 Aug 2025",
    venue: "Blue Frog, Mumbai",
    thumbnail: "/images/live/show3.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "A collaborative live session featuring guest artists and spontaneous improvisations.",
  },
];

const gallery = [
  { src: "/images/live/gallery1.jpg", alt: "Live performance wide shot" },
  { src: "/images/live/gallery2.jpg", alt: "Crowd energy" },
  { src: "/images/live/gallery3.jpg", alt: "Backstage moments" },
  { src: "/images/live/gallery4.jpg", alt: "On-stage close-up" },
  { src: "/images/live/gallery5.jpg", alt: "Sound check" },
  { src: "/images/live/gallery6.jpg", alt: "Band together" },
  { src: "/images/live/gallery7.jpg", alt: "Encore moment" },
  { src: "/images/live/gallery8.jpg", alt: "Fans and the stage" },
];

/* ── GRID BG (matches team page) ───────────────────────────────────────────── */

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

/* ── PAGE ───────────────────────────────────────────────────────────────────── */

export default function LiveShows() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="min-h-[50vh] relative overflow-hidden flex flex-col justify-center py-20">
        <GridBg />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-widest text-gray-400 hover:text-amber-500 transition mb-8 uppercase"
          >
            <ArrowLeft className="size-4" /> Back to Team
          </Link>

          <p className="text-sm font-medium tracking-[0.3em] text-gray-400 mb-4 uppercase">
            Captured On Stage
          </p>
          <h1 className="font-black text-gray-900 tracking-[-6px] text-7xl md:text-9xl leading-none">
            LIVE<br />
            <span className="text-amber-500">SHOWS</span>
          </h1>
          <p className="mt-6 max-w-xl text-gray-500 font-mono text-sm tracking-wide uppercase">
            Relive the energy, the crowd and the raw emotion&mdash;
            <br />
            performances that define who we are.
          </p>
        </div>
      </section>

      {/* ── FEATURED SHOWS (video + info cards) ────────────────────────────── */}
      <section className="relative overflow-hidden py-24 bg-gray-50">
        <GridBg />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-sm font-medium tracking-[0.3em] text-amber-500 uppercase mb-2">
            Highlights
          </p>
          <h2 className="font-black tracking-[-4px] text-6xl md:text-7xl text-gray-900 mb-16">
            FEATURED SHOWS
          </h2>

          <div className="space-y-20">
            {shows.map((show, i) => (
              <div
                key={show.title}
                className={`flex flex-col ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10 items-start`}
              >
                {/* Video / Thumbnail */}
                <div className="relative w-full lg:w-3/5 aspect-video bg-gray-200 overflow-hidden group">
                  {activeVideo === i ? (
                    <iframe
                      src={`${show.videoUrl}?autoplay=1`}
                      title={show.title}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    <>
                      <img
                        src={show.thumbnail}
                        alt={show.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                      />
                      <button
                        onClick={() => setActiveVideo(i)}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition"
                      >
                        <div className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                          <Play className="size-8 text-white ml-1" fill="white" />
                        </div>
                      </button>
                    </>
                  )}
                </div>

                {/* Info */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <h3 className="font-black text-3xl md:text-4xl tracking-tight text-gray-900 mb-4 leading-tight">
                    {show.title}
                  </h3>
                  <div className="flex items-center gap-3 text-gray-400 text-sm font-mono tracking-wider uppercase mb-2">
                    <Calendar className="size-4" />
                    {show.date}
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-sm font-mono tracking-wider uppercase mb-6">
                    <MapPin className="size-4" />
                    {show.venue}
                  </div>
                  <p className="text-gray-500 font-mono text-sm tracking-wide leading-relaxed uppercase">
                    {show.description}
                  </p>
                  <button
                    onClick={() => setActiveVideo(activeVideo === i ? null : i)}
                    className="mt-8 inline-flex items-center gap-2 text-amber-500 font-semibold text-sm tracking-widest uppercase hover:text-amber-600 transition"
                  >
                    <Play className="size-4" />
                    {activeVideo === i ? "Close Video" : "Watch Performance"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 bg-white">
        <GridBg />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-sm font-medium tracking-[0.3em] text-amber-500 uppercase mb-2">
            Moments
          </p>
          <h2 className="font-black tracking-[-4px] text-6xl md:text-7xl text-gray-900 mb-16">
            GALLERY
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {gallery.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden group ${
                  i === 0 || i === 5 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover aspect-square grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />
                <p className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition duration-300">
                  {photo.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            ["50+", "Shows Performed"],
            ["20K+", "Live Audience"],
            ["12", "Cities Toured"],
            ["100+", "Hours On Stage"],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="font-black text-5xl md:text-6xl text-amber-500 tracking-tight">
                {stat}
              </p>
              <p className="mt-2 font-mono text-xs tracking-widest text-gray-400 uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
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
    </div>
  );
}
