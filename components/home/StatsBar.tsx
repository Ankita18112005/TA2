"use client";

import { useRef, useState, useEffect } from "react";
import Counter from "@/components/ui/Counter";

const stats = [
    { value: 6, suffix: "+", label: "Projects", places: [1] },
    { value: 50, suffix: "+", label: "Live Shows", places: [10, 1] },
    { value: 15, suffix: "+", label: "Collaborations", places: [10, 1] },
    { value: 4, suffix: "", label: "Members", places: [1] },
];

export default function StatsBar() {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(false);
                    // brief reset to 0, then animate up
                    requestAnimationFrame(() => setVisible(true));
                } else {
                    setVisible(false);
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="bg-amber-500 py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
                {stats.map((item) => (
                    <div key={item.label}>
                        <div className="flex items-center justify-center">
                            <Counter
                                value={visible ? item.value : 0}
                                places={[...item.places]}
                                fontSize={60}
                                textColor="white"
                                fontWeight={900}
                                gap={0}
                                horizontalPadding={0}
                                borderRadius={0}
                                gradientHeight={0}
                                gradientFrom="transparent"
                                gradientTo="transparent"
                            />
                            <span className="text-6xl font-black">{item.suffix}</span>
                        </div>
                        <p className="text-sm uppercase tracking-[0.3em] mt-2 text-white/70">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
