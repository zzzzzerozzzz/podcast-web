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
        <main className="max-w-xl mx-auto px-6 pt-12 text-foreground pb-32">

            {/* Header */}
            <header className="mb-10 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Headphones className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight">專屬 Podcast</h1>
                <p className="text-muted-foreground font-serif leading-relaxed">
                    深度對談、冥想引導與成長心法。會員專屬的聽覺圖書館。
                </p>
            </header>

            {/* Episode List */}
            <div className="space-y-6">
                {episodes.map((episode) => (
                    <div
                        key={episode.id}
                        className="group bg-white border border-stone-100 shadow-sm rounded-3xl p-6 transition-all hover:shadow-md hover:border-primary/20 relative overflow-hidden"
                    >
                        {/* Playing Indicator Background */}
                        {playingId === episode.id && (
                            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                        )}

                        <div className="relative flex gap-5 items-start">
                            {/* Play Button / Lock */}
                            <div className="flex-shrink-0 pt-1">
                                {!isLoaded ? (
                                    <div className="w-12 h-12 rounded-full bg-stone-100 animate-pulse" />
                                ) : isSignedIn ? (
                                    <button
                                        onClick={() => handlePlay(episode.id)}
                                        className={cn(
                                            "w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-sm",
                                            playingId === episode.id
                                                ? "bg-primary text-white shadow-primary/30"
                                                : "bg-white border-2 border-primary/10 text-primary hover:border-primary hover:scale-105"
                                        )}
                                    >
                                        {playingId === episode.id ? (
                                            <div className="flex gap-1 h-4 items-center">
                                                <span className="w-1 h-full bg-current rounded-full animate-[bounce_1s_infinite]" />
                                                <span className="w-1 h-3 bg-current rounded-full animate-[bounce_1.2s_infinite]" />
                                                <span className="w-1 h-full bg-current rounded-full animate-[bounce_0.8s_infinite]" />
                                            </div>
                                        ) : (
                                            <Play className="w-5 h-5 ml-1 fill-current" />
                                        )}
                                    </button>
                                ) : (
                                    <SignInButton mode="modal">
                                        <button className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 cursor-pointer hover:bg-stone-200 hover:text-stone-600 transition-colors">
                                            <Lock className="w-5 h-5" />
                                        </button>
                                    </SignInButton>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-2">
                                <div className="flex items-center gap-3 text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {episode.date}</span>
                                    <span className="w-1 h-1 bg-stone-300 rounded-full" />
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {episode.duration}</span>
                                </div>

                                <h3 className={cn("text-lg font-bold leading-tight", playingId === episode.id ? "text-primary" : "text-foreground")}>
                                    {episode.title}
                                </h3>

                                <p className="text-sm text-stone-500 font-serif line-clamp-2 leading-relaxed">
                                    {episode.description}
                                </p>
                            </div>
                        </div>

                        {/* CTA for Non-Members (Inline) */}
                        {!isSignedIn && isLoaded && (
                            <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                                <span className="text-xs font-bold text-primary/70">會員專屬內容</span>
                                <SignInButton mode="modal">
                                    <span className="text-xs font-bold underline cursor-pointer hover:text-primary">解鎖收聽</span>
                                </SignInButton>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
}
