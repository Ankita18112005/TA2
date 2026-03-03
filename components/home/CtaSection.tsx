import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GridBg from "@/components/shared/GridBg";

export default function CtaSection() {
    return (
        <section className="relative overflow-hidden py-24 bg-gray-50 border-t border-gray-200">
            <GridBg />
            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-end justify-between gap-12">
                <div>
                    <p className="font-mono text-sm tracking-widest text-gray-400 uppercase mb-4">
                        Ready to create something?
                    </p>
                    <h2 className="font-black tracking-[-4px] text-5xl md:text-7xl text-gray-900 leading-none uppercase">
                        Start a
                        <br />
                        Project
                    </h2>
                </div>
                <div className="flex flex-col items-start md:items-end gap-4">
                    <div className="flex items-center gap-2 text-gray-500">
                        <span className="text-lg font-medium tracking-wider uppercase">
                            Get In Touch
                        </span>
                        <ArrowDownRight className="size-6" />
                    </div>
                    <Link href="/contact">
                        <Button
                            size="lg"
                            className="uppercase tracking-widest px-12 py-6 text-base"
                        >
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
