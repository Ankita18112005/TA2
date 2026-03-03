import LiveShowsHero from "@/components/live-shows/LiveShowsHero";
import FeaturedShows from "@/components/live-shows/FeaturedShows";
import PhotoGallery from "@/components/live-shows/PhotoGallery";
import StatsBar from "@/components/home/StatsBar";
import LiveShowsCta from "@/components/live-shows/LiveShowsCta";

export default function LiveShows() {
    return (
        <div className="bg-white">
            <LiveShowsHero />
            <FeaturedShows />
            <PhotoGallery />
            <StatsBar />
            <LiveShowsCta />
        </div>
    );
}
