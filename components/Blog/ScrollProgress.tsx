"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;

            if (progressRef.current) {
                progressRef.current.style.width = `${scroll * 100}%`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1.5 bg-stone-100 z-[60]">
            <div
                ref={progressRef}
                className="h-full bg-primary transition-all duration-150 ease-out w-0"
            />
        </div>
    );
}
