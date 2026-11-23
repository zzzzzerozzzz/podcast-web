"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Share2, Eye, Play, Sparkles } from "lucide-react";
import { formatWan, type Lang, type TopPost } from "@/lib/site-data";
import { EASE_EDITORIAL } from "./MotionPrimitives";

interface HeroReelShowcaseProps {
  posts: TopPost[];
  lang: Lang;
  deckLabel: string;
  deckHint: string;
  badgeTop: string;
  badgeBottom: string;
  reachWord: string;
  likeWord: string;
  shareWord: string;
}

const SLIDE_MS = 4500;

export function HeroReelShowcase({
  posts,
  lang,
  deckLabel,
  deckHint,
  badgeTop,
  badgeBottom,
  reachWord,
  likeWord,
  shareWord,
}: HeroReelShowcaseProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || posts.length <= 1) return;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % posts.length);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [paused, posts.length]);

  const current = posts[active] ?? posts[0];
  const nextIdx = (active + 1) % posts.length;
  const nextPost = posts[nextIdx];

  return (
    <div
      className="relative mx-auto w-full max-w-[360px] md:max-w-[390px] pt-4 pb-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Subtle stacked background preview card for depth */}
      {nextPost ? (
        <motion.div
          key={`back-${nextPost.id}`}
          initial={{ opacity: 0.4, rotate: 5, x: 18 }}
          animate={{ opacity: 0.72, rotate: 5.5, x: 18 }}
          transition={{ duration: 0.6, ease: EASE_EDITORIAL }}
          className="hidden sm:block absolute top-10 right-0 w-[82%] aspect-[9/13] rounded-[2rem] overflow-hidden border border-[#2C3E26]/12 shadow-[0_24px_50px_-24px_rgba(31,39,30,0.28)] bg-[#E9E1D3] pointer-events-none"
        >
          <img
            src={nextPost.img}
            alt=""
            className="w-full h-full object-cover opacity-80 saturate-[0.85]"
          />
          <div className="absolute inset-0 bg-[#1B2419]/35" />
        </motion.div>
      ) : null}

      {/* Floating Top-Left Viral Badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-2 sm:-left-7 top-10 z-20 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E6DEC8] rounded-2xl px-3.5 py-2.5 shadow-[0_14px_30px_-10px_rgba(31,39,30,0.18)]"
      >
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-xl bg-[#D46B34]/12 text-[#D46B34] flex items-center justify-center shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <div>
            <div className="text-[12px] font-bold text-[#1F271E] leading-tight">{badgeTop}</div>
            <div className="text-[10.5px] text-[#636B5E] leading-tight mt-0.5">{badgeBottom}</div>
          </div>
        </div>
      </motion.div>

      {/* Main 9:16 Creator Reel Phone Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
        className="relative z-10 w-[88%] sm:w-[86%] mx-auto aspect-[9/13.2] rounded-[2.1rem] overflow-hidden bg-[#1B2419] border-[6px] border-[#FFFFFF] shadow-[0_32px_70px_-22px_rgba(31,39,30,0.34)]"
      >
        {/* Story/Reel top progress bars */}
        <div className="absolute top-3.5 inset-x-4 z-20 flex gap-1.5">
          {posts.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              aria-label={p.name}
              onClick={() => setActive(idx)}
              className="h-1 flex-1 rounded-full bg-[#FAF7F2]/30 overflow-hidden cursor-pointer"
            >
              {idx < active ? (
                <span className="block h-full w-full bg-[#FAF7F2]" />
              ) : idx === active ? (
                <motion.span
                  key={`prog-${active}-${paused}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: paused ? 0.5 : 1 }}
                  transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                  className="block h-full w-full bg-[#FAF7F2] origin-left"
                />
              ) : null}
            </button>
          ))}
        </div>

        {/* Creator header strip inside phone */}
        <div className="absolute top-7 inset-x-4 z-20 flex items-center justify-between text-[#FAF7F2]">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#D46B34] text-[10px] font-bold flex items-center justify-center">
              Z
            </span>
            <span className="text-[11.5px] font-semibold drop-shadow">{deckLabel}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[10.5px] bg-[#1B2419]/55 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-[#FAF7F2]/20">
            <Play className="w-2.5 h-2.5 fill-current" />
            {current.tag}
          </span>
        </div>

        {/* Animated photo transition with gentle Ken Burns zoom */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0.2, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.1, scale: 0.98 }}
            transition={{ duration: 0.65, ease: EASE_EDITORIAL }}
            className="absolute inset-0"
          >
            <img
              src={current.img}
              alt={current.name}
              className="w-full h-full object-cover"
            />
            {/* Warm cinematic vignette so bottom copy is always legible */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141A13] via-[#141A13]/35 to-[#141A13]/30" />
          </motion.div>
        </AnimatePresence>

        {/* Bottom post caption & live engagement metrics */}
        <div className="absolute bottom-0 inset-x-0 z-20 p-5 text-[#FAF7F2]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`meta-${current.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
            >
              <div className="text-[11px] text-[#E6C98A] font-medium tracking-wide mb-1">
                {current.platform}
              </div>
              <div className="text-[18px] font-bold leading-snug mb-3">{current.name}</div>
              <div className="grid grid-cols-3 gap-2 rounded-2xl bg-[#FAF7F2]/12 backdrop-blur-md border border-[#FAF7F2]/15 p-2.5">
                <div>
                  <div className="flex items-center gap-1 text-[10px] text-[#FAF7F2]/75">
                    <Eye className="w-3 h-3 text-[#E6C98A]" />
                    {reachWord}
                  </div>
                  <div className="font-display font-bold text-[15px] tabular-nums mt-0.5">
                    {formatWan(current.reach, lang)}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[10px] text-[#FAF7F2]/75">
                    <Heart className="w-3 h-3 text-[#F29C78]" />
                    {likeWord}
                  </div>
                  <div className="font-display font-bold text-[15px] tabular-nums mt-0.5">
                    {current.likes.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[10px] text-[#FAF7F2]/75">
                    <Share2 className="w-3 h-3 text-[#9FD39A]" />
                    {shareWord}
                  </div>
                  <div className="font-display font-bold text-[15px] tabular-nums mt-0.5">
                    {current.shares.toLocaleString()}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Floating Bottom-Right Switcher Pill */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 sm:-right-4 bottom-0 z-20 flex items-center gap-2 bg-[#2C3E26] text-[#FAF7F2] rounded-full pl-3.5 pr-2 py-1.5 shadow-[0_14px_28px_-10px_rgba(44,62,38,0.45)] border border-[#FAF7F2]/15"
      >
        <span className="text-[11px] text-[#FAF7F2]/80">{deckHint}</span>
        <div className="flex items-center gap-1">
          {posts.map((p, idx) => (
            <button
              key={`dot-${p.id}`}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={p.name}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === active ? "w-5 bg-[#D46B34]" : "w-2 bg-[#FAF7F2]/35 hover:bg-[#FAF7F2]/60"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
