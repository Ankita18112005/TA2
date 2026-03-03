import LiveShowsHero from "@/components/live-shows/LiveShowsHero";
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
