"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface TrackModalProps {
  isOpen: boolean;
  onClose: () => void;
  track: {
    title: string;
    genre: string;
    year: string;
    url: string;
  } | null;
}

function getYouTubeId(url: string): string | null {
  // Handle youtu.be/ID and youtube.com/watch?v=ID
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) return shortMatch[1];
  const longMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (longMatch) return longMatch[1];
  const embedMatch = url.match(/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch) return embedMatch[1];
  return null;
}

export default function TrackModal({ isOpen, onClose, track }: TrackModalProps) {
  const [playing, setPlaying] = useState(false);

  // Reset playing state when modal opens/closes or track changes
  useEffect(() => {
    setPlaying(false);
  }, [isOpen, track]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !track) return null;

  const videoId = getYouTubeId(track.url);
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-2xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl animate-[scaleIn_0.25s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center text-white/80 hover:text-white transition"
          aria-label="Close"
        >
          <X className="size-5" />
        </button>

        {/* Video / Thumbnail area */}
        <div className="relative aspect-video bg-black">
          {playing && videoId ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={track.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {thumbnailUrl && (
                <Image
                  src={thumbnailUrl}
                  alt={track.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              )}
              {/* Dark overlay on thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </>
          )}
        </div>

        {/* Info section */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-white text-xl font-bold tracking-tight">
                {track.title}
              </h3>
              <p className="text-gray-400 text-sm font-mono tracking-wider mt-1">
                {track.genre} &middot; {track.year}
              </p>
            </div>
          </div>

          {!playing && (
            <button
              onClick={() => setPlaying(true)}
              className="mt-5 w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold text-sm tracking-wider uppercase transition flex items-center justify-center gap-2"
            >
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
