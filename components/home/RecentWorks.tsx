"use client";

/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import { HERO_STACK_IMAGES } from "@/constants/data";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";

export default function RecentWorks() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="overflow-hidden relative pb-20">
            <div className="mx-auto max-w-7xl relative z-20 px-6">
                <div className="md:flex items-end justify-between">
                    <div className="w-72 h-56 md:w-96 md:h-72 mb-8 md:mb-0 mx-auto md:mx-0">
                        <Swiper
                            modules={[EffectCards, Autoplay]}
                            effect="cards"
                            grabCursor={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            cardsEffect={{
                                slideShadows: true,
                                perSlideOffset: 8,
                                perSlideRotate: 2,
                            }}
                            onSwiper={(swiper) => { swiperRef.current = swiper; }}
                            className="w-full h-full recentworks-swiper"
                        >
                            {HERO_STACK_IMAGES.map((src, i) => (
                                <SwiperSlide
                                    key={i}
                                    className="rounded-2xl overflow-hidden cursor-pointer"
                                    onClick={() => swiperRef.current?.slideNext()}
                                >
                                    <img
                                        src={src}
                                        alt={`recent-work-${i + 1}`}
                                        className="w-full h-full object-cover pointer-events-none"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div>
                        <div className="flex items-center md:justify-end gap-2 text-gray-500">
                            <span className="text-lg font-medium tracking-wider">RECENT WORK</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="m7 7 10 10" /><path d="M17 7v10H7" /></svg>
                        </div>
                        <div className="mt-3 md:text-right">
                            <h2 className="text-5xl font-black uppercase tracking-[-4px] text-gray-900">
                                Music Without Limits
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}