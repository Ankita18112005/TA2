import type { Metadata } from "next";
import TeamHero from "@/components/team/TeamHero";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the vocalists, composers, arrangers and engineers behind AMusicals — crafting original Bengali and Hindi music from Kolkata, West Bengal.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Our Team | AMusicals",
    description: "Meet the vocalists, composers, arrangers and engineers behind AMusicals.",
    url: "https://amusicals.in/team",
  },
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
