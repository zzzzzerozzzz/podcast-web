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

const SLIDE_MS = 4800;

function LiveEqualizer() {
  return (
    <span className="inline-flex items-end gap-[2px] h-3 w-3 shrink-0" aria-hidden="true">
      <span className="w-[2.5px] h-full rounded-full bg-[#E89B5C] origin-bottom eq-bar-1" />
      <span className="w-[2.5px] h-full rounded-full bg-[#F5D98B] origin-bottom eq-bar-2" />
      <span className="w-[2.5px] h-full rounded-full bg-[#E89B5C] origin-bottom eq-bar-3" />
    </span>
  );
}

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
      className="w-full min-w-0 max-w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* MOBILE / TABLET (< lg): Full-width animated Reel card with continuous Ken Burns motion */}
      <div className="lg:hidden w-full min-w-0 max-w-full">
        <div className="flex items-center justify-between gap-2 mb-2.5 px-0.5 min-w-0">
          <div className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-[12px] font-bold text-[#F5D98B] min-w-0 truncate">
            <LiveEqualizer />
            <span className="truncate">{badgeTop}</span>
          </div>
          <span className="text-[11px] text-[#C8BCA9] shrink-0">{deckLabel}</span>
        </div>

        <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] rounded-[1.4rem] overflow-hidden bg-[#1D1813] border border-[#E8C98A]/30 shadow-[0_24px_54px_-18px_rgba(0,0,0,0.85)]">
          {/* Top story progress bars */}
          <div className="absolute top-3 inset-x-3 z-20 flex gap-1.5">
            {posts.map((p, idx) => (
              <button
                key={`m-prog-${p.id}`}
                type="button"
                aria-label={p.name}
                onClick={() => setActive(idx)}
                className="h-1 flex-1 rounded-full bg-[#F7EFDD]/28 overflow-hidden cursor-pointer"
              >
                {idx < active ? (
                  <span className="block h-full w-full bg-[#F5D98B]" />
                ) : idx === active ? (
                  <motion.span
                    key={`m-bar-${active}-${paused}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: paused ? 0.5 : 1 }}
                    transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                    className="block h-full w-full bg-[#F5D98B] origin-left"
                  />
                ) : null}
              </button>
            ))}
          </div>

          <div className="absolute top-6 inset-x-3 z-20 flex items-center justify-between gap-2 min-w-0">
            <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold bg-[#161310]/72 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#E8C98A]/25 text-[#F5D98B] shrink-0">
              <Play className="w-2.5 h-2.5 fill-current" />
              {current.tag}
            </span>
            <span className="text-[10.5px] font-medium bg-[#161310]/65 backdrop-blur-sm px-2.5 py-1 rounded-full text-[#EDE1CE] truncate max-w-[52%]">
              {current.platform}
            </span>
          </div>

          {/* Continuous cinema Ken Burns zoom during active slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`m-img-${current.id}`}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.15 }}
              transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
              className="absolute inset-0"
            >
              <motion.img
                src={current.img}
                alt={current.name}
                initial={{ scale: 1.0, x: 0 }}
                animate={{ scale: 1.1, x: active % 2 === 0 ? -8 : 8 }}
                transition={{ duration: SLIDE_MS / 1000 + 0.4, ease: "easeOut" }}
                className="w-full h-full object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-[#14110E]/42 to-[#14110E]/18" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 inset-x-0 z-20 p-3.5 text-[#F7EFDD]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`m-meta-${current.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
              >
                <div className="text-[16px] font-bold leading-snug mb-2 truncate">
                  {current.name}
                </div>
                <div className="grid grid-cols-3 gap-1.5 rounded-xl bg-[#161310]/78 backdrop-blur-md border border-[#E8C98A]/20 px-2.5 py-2">
                  <div className="min-w-0">
                    <div className="text-[10px] text-[#C2B6A3] flex items-center gap-1">
                      <Eye className="w-3 h-3 text-[#F5D98B] shrink-0" />
                      <span className="truncate">{reachWord}</span>
                    </div>
                    <div className="font-display font-bold text-[14px] text-[#F5D98B] tabular-nums">
                      {formatWan(current.reach, lang)}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-[#C2B6A3] flex items-center gap-1">
                      <Heart className="w-3 h-3 text-[#F0A08A] shrink-0" />
                      <span className="truncate">{likeWord}</span>
                    </div>
                    <div className="font-display font-bold text-[14px] text-[#F7EFDD] tabular-nums">
                      {current.likes.toLocaleString()}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-[#C2B6A3] flex items-center gap-1">
                      <Share2 className="w-3 h-3 text-[#C5A065] shrink-0" />
                      <span className="truncate">{shareWord}</span>
                    </div>
                    <div className="font-display font-bold text-[14px] text-[#F7EFDD] tabular-nums">
                      {current.shares.toLocaleString()}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-2.5 flex items-center justify-between gap-2 px-0.5">
          <span className="text-[11px] text-[#B8AB98] truncate">{badgeBottom}</span>
          <div className="inline-flex items-center gap-1.5 bg-[#241E18] border border-[#E8C98A]/22 rounded-full px-2.5 py-1 shrink-0">
            <span className="text-[10.5px] text-[#C2B6A3] mr-0.5">{deckHint}</span>
            {posts.map((p, idx) => (
              <button
                key={`m-dot-${p.id}`}
                type="button"
                onClick={() => setActive(idx)}
                aria-label={p.name}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === active ? "w-5 bg-[#E89B5C]" : "w-2 bg-[#E8C98A]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP (lg+): Dynamic 9:16 stacked creator Reel phone deck with live Ken Burns motion */}
      <div className="hidden lg:block relative mx-auto w-full max-w-[390px] pt-8 pb-6">
        {nextPost ? (
          <motion.div
            key={`back-${nextPost.id}`}
            initial={{ opacity: 0.35, rotate: 5, x: 18 }}
            animate={{ opacity: 0.68, rotate: 5.5, x: 18 }}
            transition={{ duration: 0.6, ease: EASE_EDITORIAL }}
            className="absolute top-14 right-0 w-[82%] aspect-[9/13] rounded-[2rem] overflow-hidden border border-[#E8C98A]/20 shadow-[0_28px_60px_-24px_rgba(0,0,0,0.85)] bg-[#241F19] pointer-events-none"
          >
            <img
              src={nextPost.img}
              alt=""
              className="w-full h-full object-cover opacity-70 saturate-[0.85] ken-burns-b"
            />
            <div className="absolute inset-0 bg-[#161310]/45" />
          </motion.div>
        ) : null}

        {/* Floating Top-Left Viral Badge */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-8 -top-1 z-20 bg-[#221D17]/95 backdrop-blur-md border border-[#E8C98A]/35 rounded-2xl px-3.5 py-2.5 shadow-[0_18px_36px_-12px_rgba(0,0,0,0.75)]"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-xl bg-[#E89B5C]/18 text-[#F5D98B] flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <div>
              <div className="text-[12px] font-bold text-[#F7EFDD] leading-tight flex items-center gap-1.5">
                <LiveEqualizer />
                {badgeTop}
              </div>
              <div className="text-[10.5px] text-[#B8AB98] leading-tight mt-0.5">{badgeBottom}</div>
            </div>
          </div>
        </motion.div>

        {/* Main 9:16 Creator Reel Phone Card */}
        <motion.div
          whileHover={{ y: -5, rotate: -0.6 }}
          transition={{ duration: 0.38, ease: EASE_EDITORIAL }}
          className="relative z-10 w-[86%] mx-auto aspect-[9/13.2] rounded-[2.1rem] overflow-hidden bg-[#1D1813] border-[3px] border-[#E8C98A]/35 shadow-[0_34px_75px_-22px_rgba(0,0,0,0.9)]"
        >
          {/* Story/Reel top progress bars */}
          <div className="absolute top-3.5 inset-x-4 z-20 flex gap-1.5">
            {posts.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                aria-label={p.name}
                onClick={() => setActive(idx)}
                className="h-1 flex-1 rounded-full bg-[#F7EFDD]/28 overflow-hidden cursor-pointer"
              >
                {idx < active ? (
                  <span className="block h-full w-full bg-[#F5D98B]" />
                ) : idx === active ? (
                  <motion.span
                    key={`prog-${active}-${paused}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: paused ? 0.5 : 1 }}
                    transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                    className="block h-full w-full bg-[#F5D98B] origin-left"
                  />
                ) : null}
              </button>
            ))}
          </div>

          <div className="absolute top-7 inset-x-4 z-20 flex items-center justify-between text-[#F7EFDD]">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#C5A065] text-[#1D1813] text-[10px] font-bold flex items-center justify-center">
                Z
              </span>
              <span className="text-[11.5px] font-semibold drop-shadow">{deckLabel}</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10.5px] bg-[#161310]/65 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-[#E8C98A]/30 text-[#F5D98B]">
              <Play className="w-2.5 h-2.5 fill-current" />
              {current.tag}
            </span>
          </div>

          {/* Live animated Reel Ken Burns slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.1 }}
              transition={{ duration: 0.55, ease: EASE_EDITORIAL }}
              className="absolute inset-0"
            >
              <motion.img
                src={current.img}
                alt={current.name}
                initial={{ scale: 1.0, x: 0, y: 0 }}
                animate={{
                  scale: 1.11,
                  x: active % 2 === 0 ? -10 : 10,
                  y: active % 2 === 0 ? -5 : 5,
                }}
                transition={{ duration: SLIDE_MS / 1000 + 0.5, ease: "easeOut" }}
                className="w-full h-full object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161310] via-[#161310]/38 to-[#161310]/26" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 inset-x-0 z-20 p-5 text-[#F7EFDD]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`meta-${current.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
              >
                <div className="text-[11px] text-[#E8C98A] font-medium tracking-wide mb-1">
                  {current.platform}
                </div>
                <div className="text-[18px] font-bold leading-snug mb-3">{current.name}</div>
                <div className="grid grid-cols-3 gap-2 rounded-2xl bg-[#161310]/74 backdrop-blur-md border border-[#E8C98A]/22 p-2.5">
                  <div>
                    <div className="flex items-center gap-1 text-[10px] text-[#C2B6A3]">
                      <Eye className="w-3 h-3 text-[#F5D98B]" />
                      {reachWord}
                    </div>
                    <div className="font-display font-bold text-[15px] text-[#F5D98B] tabular-nums mt-0.5">
                      {formatWan(current.reach, lang)}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[10px] text-[#C2B6A3]">
                      <Heart className="w-3 h-3 text-[#F0A08A]" />
                      {likeWord}
                    </div>
                    <div className="font-display font-bold text-[15px] text-[#F7EFDD] tabular-nums mt-0.5">
                      {current.likes.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[10px] text-[#C2B6A3]">
                      <Share2 className="w-3 h-3 text-[#C5A065]" />
                      {shareWord}
                    </div>
                    <div className="font-display font-bold text-[15px] text-[#F7EFDD] tabular-nums mt-0.5">
                      {current.shares.toLocaleString()}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-4 bottom-0 z-20 flex items-center gap-2 bg-[#252019]/95 backdrop-blur-md text-[#F7EFDD] rounded-full pl-3.5 pr-2 py-1.5 shadow-[0_14px_28px_-10px_rgba(0,0,0,0.8)] border border-[#E8C98A]/28"
        >
          <span className="text-[11px] text-[#C2B6A3]">{deckHint}</span>
          <div className="flex items-center gap-1">
            {posts.map((p, idx) => (
              <button
                key={`dot-${p.id}`}
                type="button"
                onClick={() => setActive(idx)}
                aria-label={p.name}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === active ? "w-5 bg-[#E89B5C]" : "w-2 bg-[#E8C98A]/30 hover:bg-[#E8C98A]/60"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
