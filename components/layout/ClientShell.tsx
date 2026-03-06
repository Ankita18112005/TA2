"use client";

import LoadingScreen from "@/components/ui/LoadingScreen";

export default function ClientShell({ children }: { children: React.ReactNode }) {
    return (
        <>
            <LoadingScreen />
            {children}
        </>
    );
}
