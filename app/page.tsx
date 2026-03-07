import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";

export const metadata: Metadata = {
  title: "AMusicals | Original Music Composition & Production from Kolkata",
  description: "Original Bengali and Hindi compositions, live performances and studio productions by AMusicals — a collective of composers, vocalists and engineers based in Kolkata, West Bengal.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AMusicals | Original Music from Kolkata",
    description: "Original Bengali and Hindi compositions, live performances and studio productions by AMusicals.",
    url: "https://amusicals.in",
  },
};
import RecentWorks from "@/components/home/RecentWorks";
import FeaturedTracks from "@/components/home/FeaturedTracks";
import StatsBar from "@/components/home/StatsBar";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import LiveShowsBanner from "@/components/team/LiveShowsBanner";
import ContactInfo from "@/components/home/ContactInfo";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <RecentWorks />
      <FeaturedTracks />
      <StatsBar />
      <MeetTheTeam />
      <LiveShowsBanner />
      <ContactInfo />
    </div>
  );
}
