import type { Metadata } from "next";
import LiveShowsHero from "@/components/live-shows/LiveShowsHero";

export const metadata: Metadata = {
    title: "Live Shows | AMusicals",
    description: "Relive the energy of AMusicals on stage — featured performances, photo gallery and highlights from live events across Kolkata.",
};
import FeaturedShows from "@/components/live-shows/FeaturedShows";
import PhotoGallery from "@/components/live-shows/PhotoGallery";
import StatsBar from "@/components/home/StatsBar";
import ContactInfo from "@/components/home/ContactInfo";

export default function LiveShows() {
    return (
        <div className="bg-white">
            <LiveShowsHero />
            <FeaturedShows />
            <PhotoGallery />
            <StatsBar />
            <ContactInfo />
        </div>
    );
}
