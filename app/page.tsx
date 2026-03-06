import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";

export const metadata: Metadata = {
  title: "AMusicals | Creating Music",
  description: "Original Bengali compositions, live performances and studio productions by AMusicals — a collective of composers, vocalists and engineers based in Kolkata.",
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
