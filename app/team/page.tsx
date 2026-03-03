import TeamHero from "@/components/team/TeamHero";
import TeamMembers from "@/components/team/TeamMembers";
import LiveShowsBanner from "@/components/team/LiveShowsBanner";
import ValuesSection from "@/components/team/ValuesSection";
import TeamCta from "@/components/team/TeamCta";

export default function Team() {
  return (
    <div className="bg-white">
      <TeamHero />
      <TeamMembers />
      <LiveShowsBanner />
      <ValuesSection />
      <TeamCta />
    </div>
  );
}
