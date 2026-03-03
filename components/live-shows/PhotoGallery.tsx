/* eslint-disable @next/next/no-img-element */
import { GALLERY } from "@/constants/data";
import GridBg from "@/components/shared/GridBg";

/** Split array into chunks of given size */
function chunk<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

function GalleryImage({
    photo,
    big = false,
}: {
    photo: { src: string; alt: string };
    big?: boolean;
}) {
    return (
        <div
            className={`relative overflow-hidden group ${big ? "col-span-2 row-span-2" : ""}`}
        >
            <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover aspect-square grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />
            <p className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition duration-300">
                {photo.alt}
            </p>
        </div>
    );
}

export default function PhotoGallery() {
    const sets = chunk(GALLERY, 5);

    return (
        <section className="relative overflow-hidden py-24 bg-white">
            <GridBg />
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <p className="text-sm font-medium tracking-[0.3em] text-amber-500 uppercase mb-2">
                    Moments
                </p>
                <h2 className="font-black tracking-[-4px] text-6xl md:text-7xl text-gray-900 mb-16">
                    GALLERY
                </h2>

                <div className="space-y-2">
                    {sets.map((set, setIndex) => {
                        const bigLeft = setIndex % 2 === 0;
                        const [big, ...smalls] = set;

                        if (bigLeft) {
                            /* Big image LEFT, 4 small images RIGHT */
                            return (
                                <div
                                    key={setIndex}
                                    className="grid grid-cols-2 md:grid-cols-4 gap-2"
                                >
                                    <GalleryImage photo={big} big />
                                    {smalls.map((photo) => (
                                        <GalleryImage key={photo.src} photo={photo} />
                                    ))}
                                </div>
                            );
                        }

                        /* Big image RIGHT, 4 small images LEFT */
                        return (
                            <div
                                key={setIndex}
                                className="grid grid-cols-2 md:grid-cols-4 gap-2"
                            >
                                {smalls.slice(0, 2).map((photo) => (
                                    <GalleryImage key={photo.src} photo={photo} />
                                ))}
                                <GalleryImage photo={big} big />
                                {smalls.slice(2).map((photo) => (
                                    <GalleryImage key={photo.src} photo={photo} />
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
