"use client";

import { useState } from "react";
import { useUser, SignInButton } from "@clerk/nextjs";
import { Play, Lock, Clock, Calendar, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Mock Data for Podcast Episodes
const episodes = [
    {
        id: 1,
        title: "EP01: The Biology of Patience",
        description: "Why rushing your growth is biologically impossible. Lessons from bamboo and redwood trees.",
        duration: "24 min",
        date: "Jan 12",
        isPremium: true
    },
    {
        id: 2,
        title: "EP02: Designing Your Environment",
        description: "How to shape your physical spaces to reduce friction for good habits.",
        duration: "18 min",
        date: "Jan 05",
        isPremium: true
    },
    {
        id: 3,
        title: "EP03: The Art of Doing Nothing",
        description: "Why boredom is the soil of creativity, and how to reclaim it.",
        duration: "32 min",
        date: "Dec 28",
        isPremium: true
    },
    {
        id: 4,
        title: "EP04: Silence as a Strategy",
        description: "Using silence not as an absence of noise, but as a presence of mind.",
        duration: "21 min",
        date: "Dec 20",
        isPremium: true
    }
];

export default function ListenPage() {
    const { isSignedIn, isLoaded } = useUser();
    const [playingId, setPlayingId] = useState<number | null>(null);

    const handlePlay = (id: number) => {
        if (!isSignedIn) return; // Should be handled by UI state, but safety check
        setPlayingId(playingId === id ? null : id);
        // In a real app, this would trigger the global player
    };

    return (
        <main className="max-w-5xl mx-auto px-6 pt-12 text-foreground pb-32">

            {/* Header */}
            <header className="mb-12 space-y-4 md:text-center md:flex md:flex-col md:items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 shadow-sm">
                    <Headphones className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">專屬 Podcast</h1>
                <p className="text-muted-foreground font-serif leading-relaxed text-lg max-w-xl">
                    深度對談、冥想引導與成長心法。<br className="hidden md:block" />一段只屬於會員的靜謐聽覺旅程。
                </p>
            </header>

            {/* Episode Grid - 1 Col Mobile, 2 Col Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {episodes.map((episode) => (
                    <div
                        key={episode.id}
                        className="group bg-white border border-stone-100 shadow-sm rounded-3xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/20 relative overflow-hidden flex flex-col"
                    >
                        {/* Playing Indicator Background */}
                        {playingId === episode.id && (
                            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                        )}

                        <div className="relative flex gap-5 items-start flex-1">
                            {/* Play Button / Lock */}
                            <div className="flex-shrink-0 pt-1">
                                {!isLoaded ? (
                                    <div className="w-14 h-14 rounded-full bg-stone-100 animate-pulse" />
                                ) : isSignedIn ? (
                                    <button
                                        onClick={() => handlePlay(episode.id)}
                                        className={cn(
                                            "w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-sm",
                                            playingId === episode.id
                                                ? "bg-primary text-white shadow-primary/30 scale-105"
                                                : "bg-white border-2 border-primary/10 text-primary hover:border-primary hover:scale-110"
                                        )}
                                    >
                                        {playingId === episode.id ? (
                                            <div className="flex gap-1 h-5 items-center">
                                                <span className="w-1.5 h-full bg-current rounded-full animate-[bounce_1s_infinite]" />
                                                <span className="w-1.5 h-3 bg-current rounded-full animate-[bounce_1.2s_infinite]" />
                                                <span className="w-1.5 h-full bg-current rounded-full animate-[bounce_0.8s_infinite]" />
                                            </div>
                                        ) : (
                                            <Play className="w-6 h-6 ml-1 fill-current" />
                                        )}
                                    </button>
                                ) : (
                                    <SignInButton mode="modal">
                                        <button className="w-14 h-14 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 cursor-pointer hover:bg-stone-100 hover:text-stone-600 transition-colors border border-stone-100">
                                            <Lock className="w-6 h-6" />
                                        </button>
                                    </SignInButton>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-3">
                                <div className="flex items-center gap-3 text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {episode.date}</span>
                                    <span className="w-1 h-1 bg-stone-300 rounded-full" />
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {episode.duration}</span>
                                </div>

                                <h3 className={cn("text-xl font-bold leading-tight group-hover:text-primary transition-colors", playingId === episode.id ? "text-primary" : "text-foreground")}>
                                    {episode.title}
                                </h3>

                                <p className="text-stone-500 font-serif line-clamp-3 leading-relaxed">
                                    {episode.description}
                                </p>
                            </div>
                        </div>

                        {/* CTA for Non-Members (Inline) */}
                        {!isSignedIn && isLoaded && (
                            <div className="mt-6 pt-6 border-t border-stone-100 flex items-center justify-between">
                                <span className="text-xs font-bold text-primary/70 bg-primary/5 px-2 py-1 rounded-md">會員專屬</span>
                                <SignInButton mode="modal">
                                    <span className="text-sm font-bold underline cursor-pointer hover:text-primary flex items-center gap-1">
                                        解鎖收聽 <Lock className="w-3 h-3" />
                                    </span>
                                </SignInButton>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
}
