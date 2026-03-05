"use client";

import dynamic from "next/dynamic";

// Dynamic import prevents SSR flash — the loading screen only mounts on the client
const LoadingScreen = dynamic(() => import("@/components/ui/LoadingScreen"), {
    ssr: false,
});

export default function ClientShell({ children }: { children: React.ReactNode }) {
    return (
        <>
            <LoadingScreen />
            {children}
        </>
    );
}
