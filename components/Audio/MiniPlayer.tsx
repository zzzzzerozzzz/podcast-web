"use client";

import { useAudio } from "@/lib/audio-context";
import { Play, Pause, X, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Format seconds to MM:SS
function formatTime(seconds: number): string {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function MiniPlayer() {
    const { state, togglePlay, seekTo, closePlayer } = useAudio();
    const [isExpanded, setIsExpanded] = useState(false);

    // Don't render if no episode is loaded
    if (!state.currentEpisode) return null;

    return (
        <div
            className={cn(
                "fixed left-0 right-0 z-50 transition-all duration-300 ease-out",
                // Position above bottom nav on mobile, at bottom on desktop
                "bottom-[88px] md:bottom-0",
                isExpanded ? "h-auto" : "h-auto"
            )}
        >
            {/* Glassmorphism Container */}
            <div className="mx-4 md:mx-auto md:max-w-2xl bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-stone-900/10 border border-stone-200/50 overflow-hidden">

                {/* Mini Bar (Always Visible) */}
                <div className="flex items-center gap-4 p-4">

                    {/* Album Art / Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                        <div className="flex gap-0.5 h-5 items-center">
                            <span className={cn("w-1 bg-white rounded-full transition-all", state.isPlaying ? "h-full animate-[bounce_1s_infinite]" : "h-2")} />
                            <span className={cn("w-1 bg-white rounded-full transition-all", state.isPlaying ? "h-3 animate-[bounce_1.2s_infinite]" : "h-2")} />
                            <span className={cn("w-1 bg-white rounded-full transition-all", state.isPlaying ? "h-full animate-[bounce_0.8s_infinite]" : "h-2")} />
                        </div>
                    </div>

                    {/* Episode Info */}
                    <div className="flex-1 min-w-0">
                        <p className="font-bold text-foreground text-sm truncate">
                            {state.currentEpisode.title}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                            {formatTime(state.currentTime)} / {formatTime(state.duration)}
                        </p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2">
                        {/* Play/Pause */}
                        <button
                            onClick={togglePlay}
                            title={state.isPlaying ? "暫停" : "播放"}
                            aria-label={state.isPlaying ? "暫停" : "播放"}
                            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-md shadow-primary/20"
                        >
                            {state.isPlaying ? (
                                <Pause className="w-5 h-5 fill-current" />
                            ) : (
                                <Play className="w-5 h-5 fill-current ml-0.5" />
                            )}
                        </button>

                        {/* Expand/Collapse */}
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            title={isExpanded ? "收起" : "展開"}
                            aria-label={isExpanded ? "收起" : "展開"}
                            className="w-8 h-8 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center hover:bg-stone-200 transition-colors"
                        >
                            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                        </button>

                        {/* Close */}
                        <button
                            onClick={closePlayer}
                            title="關閉播放器"
                            aria-label="關閉播放器"
                            className="w-8 h-8 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Progress Bar (Click to Seek) */}
                <div
                    className="h-1.5 bg-stone-100 cursor-pointer relative group"
                    onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const percent = ((e.clientX - rect.left) / rect.width) * 100;
                        seekTo(Math.max(0, Math.min(100, percent)));
                    }}
                >
                    <div
                        className="h-full bg-primary transition-all duration-150"
                        style={{ width: `${state.progress}%` }}
                    />
                    {/* Hover indicator */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Expanded View */}
                {isExpanded && (
                    <div className="p-4 pt-3 border-t border-stone-100 space-y-3 animate-in slide-in-from-top-2 duration-200">
                        <p className="text-sm text-muted-foreground font-serif leading-relaxed line-clamp-2">
                            {state.currentEpisode.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{state.currentEpisode.date}</span>
                            <span>{state.currentEpisode.duration}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
