import HeroSection from "@/components/home/HeroSection";
import FeaturedTracks from "@/components/home/FeaturedTracks";
import StatsBar from "@/components/home/StatsBar";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturedTracks />
      <StatsBar />
      <MeetTheTeam />
      <CtaSection />
    </div>
  );
}
