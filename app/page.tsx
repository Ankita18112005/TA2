import HeroSection from "@/components/home/HeroSection";
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
