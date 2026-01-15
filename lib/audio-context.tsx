"use client";

import { createContext, useContext, useState, useRef, useCallback, useEffect, ReactNode } from "react";

// Episode type definition
export interface Episode {
    id: number;
    title: string;
    description: string;
    duration: string;
    date: string;
    image?: string; // Optional: episode cover image
    audioUrl?: string; // Optional: actual audio file URL
}

// Audio Player state
interface AudioState {
    currentEpisode: Episode | null;
    isPlaying: boolean;
    progress: number; // 0-100
    currentTime: number; // seconds
    duration: number; // seconds
}

// Context value type
interface AudioContextType {
    state: AudioState;
    playEpisode: (episode: Episode) => void;
    togglePlay: () => void;
    pause: () => void;
    seekTo: (progress: number) => void;
    closePlayer: () => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

// Demo audio URL (royalty-free ambient music for testing)
const DEMO_AUDIO_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export function AudioProvider({ children }: { children: ReactNode }) {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [state, setState] = useState<AudioState>({
        currentEpisode: null,
        isPlaying: false,
        progress: 0,
        currentTime: 0,
        duration: 0,
    });

    // Initialize audio element
    useEffect(() => {
        audioRef.current = new Audio();

        const audio = audioRef.current;

        // Update progress
        audio.addEventListener("timeupdate", () => {
            if (audio.duration) {
                setState(prev => ({
                    ...prev,
                    currentTime: audio.currentTime,
                    progress: (audio.currentTime / audio.duration) * 100,
                }));
            }
        });

        // Handle audio loaded
        audio.addEventListener("loadedmetadata", () => {
            setState(prev => ({
                ...prev,
                duration: audio.duration,
            }));
        });

        // Handle audio ended
        audio.addEventListener("ended", () => {
            setState(prev => ({
                ...prev,
                isPlaying: false,
                progress: 0,
                currentTime: 0,
            }));
        });

        return () => {
            audio.pause();
            audio.src = "";
        };
    }, []);

    const playEpisode = useCallback((episode: Episode) => {
        const audio = audioRef.current;
        if (!audio) return;

        // If clicking the same episode, toggle play/pause
        if (state.currentEpisode?.id === episode.id) {
            if (state.isPlaying) {
                audio.pause();
                setState(prev => ({ ...prev, isPlaying: false }));
            } else {
                audio.play();
                setState(prev => ({ ...prev, isPlaying: true }));
            }
            return;
        }

        // New episode - load and play
        audio.src = episode.audioUrl || DEMO_AUDIO_URL;
        audio.play();

        setState({
            currentEpisode: episode,
            isPlaying: true,
            progress: 0,
            currentTime: 0,
            duration: 0,
        });
    }, [state.currentEpisode?.id, state.isPlaying]);

    const togglePlay = useCallback(() => {
        const audio = audioRef.current;
        if (!audio || !state.currentEpisode) return;

        if (state.isPlaying) {
            audio.pause();
            setState(prev => ({ ...prev, isPlaying: false }));
        } else {
            audio.play();
            setState(prev => ({ ...prev, isPlaying: true }));
        }
    }, [state.isPlaying, state.currentEpisode]);

    const pause = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.pause();
        setState(prev => ({ ...prev, isPlaying: false }));
    }, []);

    const seekTo = useCallback((progress: number) => {
        const audio = audioRef.current;
        if (!audio || !audio.duration) return;

        const time = (progress / 100) * audio.duration;
        audio.currentTime = time;
        setState(prev => ({
            ...prev,
            currentTime: time,
            progress,
        }));
    }, []);

    const closePlayer = useCallback(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.pause();
            audio.src = "";
        }
        setState({
            currentEpisode: null,
            isPlaying: false,
            progress: 0,
            currentTime: 0,
            duration: 0,
        });
    }, []);

    return (
        <AudioContext.Provider value={{ state, playEpisode, togglePlay, pause, seekTo, closePlayer }}>
            {children}
        </AudioContext.Provider>
    );
}

export function useAudio() {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error("useAudio must be used within an AudioProvider");
    }
    return context;
}
