/* ═══════════════════════════════════════════════════════════════════════
   Shared data constants for the Team Ayan Music Portfolio
   ═══════════════════════════════════════════════════════════════════════ */

// ── Navigation ──────────────────────────────────────────────────────────
export const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Our Team" },
    { href: "/live-shows", label: "Live Shows" },
];

// ── Home: Featured Tracks ───────────────────────────────────────────────
export const TRACKS = [
  { title: "Sraboner Sesh Baridhara", genre: "Bengali Original", year: "2025", url: "https://youtu.be/6qBDc4Udo9Q" },
  { title: "Ichhera Jaak Ure", genre: "Bengali Romantic Sad", year: "2025", url: "https://youtu.be/vfLLQYluR6c" },
  { title: "Bou Katha", genre: "Bengali Kirtan", year: "2024", url: "https://youtu.be/VIsw5ncZeTg" },
  { title: "Tomake Chuye Dilam", genre: "Bengali Soulful", year: "2024", url: "https://youtu.be/mMZLM38ePJY" },
];

// ── Team: Members ───────────────────────────────────────────────────────
export const MEMBERS = [
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

// ── Portfolio: Projects ─────────────────────────────────────────────────
export const PROJECTS = [
    { title: "Summer Vibes", category: "Album", year: "2024", desc: "Upbeat summer collection spanning pop, R&B and afrobeats." },
    { title: "Indie Folk Set", category: "Composition", year: "2024", desc: "A 6-track acoustic journey rooted in folk storytelling." },
    { title: "Jazz Nights", category: "Live Recording", year: "2023", desc: "Studio-quality live jazz recordings from an intimate venue." },
    { title: "Serenity", category: "Ambient / Sound Design", year: "2023", desc: "Meditation soundscape crafted for mindfulness apps." },
    { title: "Pop Fusion", category: "Production", year: "2023", desc: "Contemporary pop with fresh arrangements and catchy hooks." },
    { title: "World Blend", category: "World Music", year: "2022", desc: "Global sounds fused with modern electronic production." },
];

// ── Portfolio: Services ─────────────────────────────────────────────────
export const SERVICES = [
    "Music Production",
    "Sound Engineering",
    "Composition & Arrangement",
    "Live Performance",
    "Mixing & Mastering",
    "Music Consultation",
];

// ── Footer: Socials ─────────────────────────────────────────────────────
export const SOCIALS = [
    {
        label: "YouTube",
        href: "https://youtube.com/@teamayan",
        icon: (
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://instagram.com/teamayan",
        icon: (
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.44.41a4.08 4.08 0 0 1 1.52.99c.46.46.78.93.99 1.52.17.47.36 1.27.41 2.44.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.44a4.08 4.08 0 0 1-.99 1.52 4.08 4.08 0 0 1-1.52.99c-.47.17-1.27.36-2.44.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.44-.41a4.08 4.08 0 0 1-1.52-.99 4.08 4.08 0 0 1-.99-1.52c-.17-.47-.36-1.27-.41-2.44C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.44a4.08 4.08 0 0 1 .99-1.52 4.08 4.08 0 0 1 1.52-.99c.47-.17 1.27-.36 2.44-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.84 5.84 0 0 0-2.13 1.38A5.84 5.84 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.38 2.13a5.84 5.84 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.84 5.84 0 0 0 2.13-1.38 5.84 5.84 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.84 5.84 0 0 0-1.38-2.13A5.84 5.84 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
            </svg>
        ),
    },
    {
        label: "Spotify",
        href: "https://open.spotify.com/artist/teamayan",
        icon: (
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm5.5 17.31a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.56-1.16a.75.75 0 1 1-.34-1.46c4.57-1.05 8.5-.6 11.68 1.34a.75.75 0 0 1 .25 1.03Zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.22-1.98-8.14-2.56-11.95-1.4a.94.94 0 1 1-.54-1.8c4.36-1.32 9.77-.68 13.47 1.6a.94.94 0 0 1 .31 1.29Zm.13-3.4C15.23 8.33 8.85 8.12 5.15 9.19a1.12 1.12 0 1 1-.65-2.15c4.24-1.23 11.3-.99 15.76 1.62a1.12 1.12 0 0 1-1.16 1.92v.06Z" />
            </svg>
        ),
    },
    {
        label: "Twitter / X",
        href: "https://x.com/teamayan",
        icon: (
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.49l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.48 3.24H4.3l13.31 17.41Z" />
            </svg>
        ),
    },
];

// ── Live Shows: Featured Shows ──────────────────────────────────────────
export const SHOWS = [
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

// ── Live Shows: Gallery ─────────────────────────────────────────────────
export const GALLERY = [
    { src: "/images/live/gallery1.jpg", alt: "Live performance wide shot" },
    { src: "/images/live/gallery2.jpg", alt: "Crowd energy" },
    { src: "/images/live/gallery3.jpg", alt: "Backstage moments" },
    { src: "/images/live/gallery4.jpg", alt: "On-stage close-up" },
    { src: "/images/live/gallery5.jpg", alt: "Sound check" },
    { src: "/images/live/gallery6.jpg", alt: "Band together" },
    { src: "/images/live/gallery7.jpg", alt: "Encore moment" },
    { src: "/images/live/gallery8.jpg", alt: "Fans and the stage" },
];
