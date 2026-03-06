import type { Metadata } from "next";
import TeamHero from "@/components/team/TeamHero";

export const metadata: Metadata = {
  title: "Our Team | AMusicals",
  description: "Meet the people behind AMusicals — vocalists, composers, arrangers and engineers crafting original music from Kolkata, West Bengal.",
};
import TeamMembers from "@/components/team/TeamMembers";
import LiveShowsBanner from "@/components/team/LiveShowsBanner";
// import ValuesSection from "@/components/team/ValuesSection";
import ContactInfo from "@/components/home/ContactInfo";

export default function Team() {
  return (
    <div className="bg-white">
      <TeamHero />
      <TeamMembers />
      <LiveShowsBanner />
      {/* <ValuesSection /> */}
      <ContactInfo />
    </div>
  );
}
