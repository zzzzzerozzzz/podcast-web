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
      {/* MOBILE / TABLET (< lg): Synchronized full-width Reel card */}
      <div className="lg:hidden w-full min-w-0 max-w-full">
        <div className="flex items-center justify-between gap-2 mb-2 px-0.5 min-w-0">
          <div className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#F5D98B] min-w-0 truncate">
            <LiveEqualizer />
            <span className="truncate">{badgeTop}</span>
          </div>
          <span className="text-[11px] text-[#C8BCA9] shrink-0">{deckLabel}</span>
        </div>

        <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-[#1D1813] border border-[#E8C98A]/30 shadow-[0_24px_54px_-18px_rgba(0,0,0,0.85)]">
          {/* Top story progress bars with >=44px accessible hit targets */}
          <div className="absolute top-0 inset-x-3 z-30 flex gap-1.5">
            {posts.map((p, idx) => (
              <button
                key={`m-prog-${p.id}`}
                type="button"
                aria-label={p.name}
                aria-pressed={idx === active}
                onClick={() => setActive(idx)}
                className="flex-1 min-h-[44px] flex items-start pt-3 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F5D98B] rounded-sm"
              >
                <span className="block h-1 w-full rounded-full bg-[#F7EFDD]/28 overflow-hidden">
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
                </span>
              </button>
            ))}
          </div>

          {/* Synchronized slide: photo + tag + platform + bottom metrics switch atomically */}
          <AnimatePresence initial={false}>
            <motion.div
              key={`m-slide-${current.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.32, ease: EASE_EDITORIAL }}
              className="absolute inset-0"
            >
              <motion.img
                src={current.img}
                alt={current.name}
                loading="eager"
                decoding="async"
                initial={{ scale: 1.0, x: 0 }}
                animate={{ scale: 1.08, x: active % 2 === 0 ? -6 : 6 }}
                transition={{ duration: SLIDE_MS / 1000 + 0.4, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-[#14110E]/42 to-[#14110E]/20" />

              <div className="absolute top-6 inset-x-3 z-20 flex items-center justify-between gap-2 min-w-0 pointer-events-none">
                <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold bg-[#161310]/78 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#E8C98A]/25 text-[#F5D98B] shrink-0">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  {current.tag}
                </span>
                <span className="text-[10.5px] font-medium bg-[#161310]/70 backdrop-blur-sm px-2.5 py-1 rounded-full text-[#EDE1CE] truncate max-w-[52%]">
                  {current.platform}
                </span>
              </div>

              <div className="absolute bottom-0 inset-x-0 z-20 p-3.5 text-[#F7EFDD]">
                <div className="text-[16px] font-bold leading-snug mb-2 truncate">
                  {current.name}
                </div>
                <div className="grid grid-cols-3 gap-1.5 rounded-xl bg-[#161310]/82 backdrop-blur-md border border-[#E8C98A]/20 px-2.5 py-2">
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
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-2 flex items-center justify-between gap-2 px-0.5">
          <span className="text-[11px] text-[#B8AB98] truncate">{badgeBottom}</span>
          <div className="inline-flex items-center bg-[#241E18] border border-[#E8C98A]/22 rounded-full pl-3 pr-1 shrink-0">
            <span className="text-[10.5px] text-[#C2B6A3] mr-1">{deckHint}</span>
            {posts.map((p, idx) => (
              <button
                key={`m-dot-${p.id}`}
                type="button"
                onClick={() => setActive(idx)}
                aria-label={p.name}
                aria-pressed={idx === active}
                className="min-w-[34px] min-h-[44px] flex items-center justify-center cursor-pointer active:scale-95 focus-visible:outline-2 focus-visible:outline-[#F5D98B] rounded-full"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-200 ${
                    idx === active ? "w-5 bg-[#E89B5C]" : "w-2 bg-[#E8C98A]/35"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP (lg+): Synchronized 9:16 stacked creator Reel phone deck */}
      <div className="hidden lg:block relative mx-auto w-full max-w-[390px] pt-8 pb-6">
        {nextPost ? (
          <div className="absolute top-14 right-0 w-[82%] aspect-[9/13] rounded-3xl overflow-hidden border border-[#E8C98A]/20 shadow-[0_28px_60px_-24px_rgba(0,0,0,0.85)] bg-[#241F19] pointer-events-none opacity-65 rotate-[5deg] translate-x-4 transition-opacity duration-300">
            <img
              src={nextPost.img}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-70 saturate-[0.85]"
            />
            <div className="absolute inset-0 bg-[#161310]/45" />
          </div>
        ) : null}

        {/* Top-Left Viral Proof Badge (calm static anchor — no distracting infinite bob) */}
        <div className="absolute -left-8 -top-1 z-20 bg-[#221D17]/95 backdrop-blur-md border border-[#E8C98A]/35 rounded-2xl px-3.5 py-2.5 shadow-[0_18px_36px_-12px_rgba(0,0,0,0.75)]">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-[#E89B5C]/18 text-[#F5D98B] flex items-center justify-center shrink-0">
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
        </div>

        {/* Main 9:16 Creator Reel Phone Card */}
        <div className="relative z-10 w-[86%] mx-auto aspect-[9/13.2] rounded-3xl overflow-hidden bg-[#1D1813] border-[3px] border-[#E8C98A]/35 shadow-[0_34px_75px_-22px_rgba(0,0,0,0.9)] transition-transform duration-200 ease-out hover:-translate-y-1">
          {/* Story/Reel top progress bars with large click targets */}
          <div className="absolute top-0 inset-x-4 z-30 flex gap-1.5">
            {posts.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                aria-label={p.name}
                aria-pressed={idx === active}
                onClick={() => setActive(idx)}
                className="flex-1 min-h-[40px] flex items-start pt-3.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F5D98B] rounded-sm"
              >
                <span className="block h-1 w-full rounded-full bg-[#F7EFDD]/28 overflow-hidden">
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
                </span>
              </button>
            ))}
          </div>

          {/* Synchronized slide: photo + header tag + bottom metadata transition together */}
          <AnimatePresence initial={false}>
            <motion.div
              key={`d-slide-${current.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
              className="absolute inset-0"
            >
              <motion.img
                src={current.img}
                alt={current.name}
                loading="eager"
                decoding="async"
                initial={{ scale: 1.0, x: 0, y: 0 }}
                animate={{
                  scale: 1.08,
                  x: active % 2 === 0 ? -8 : 8,
                  y: active % 2 === 0 ? -4 : 4,
                }}
                transition={{ duration: SLIDE_MS / 1000 + 0.4, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161310] via-[#161310]/38 to-[#161310]/26" />

              <div className="absolute top-7 inset-x-4 z-20 flex items-center justify-between text-[#F7EFDD] pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#C5A065] text-[#1D1813] text-[10px] font-bold flex items-center justify-center">
                    Z
                  </span>
                  <span className="text-[11.5px] font-semibold drop-shadow">{deckLabel}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10.5px] bg-[#161310]/72 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-[#E8C98A]/30 text-[#F5D98B]">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  {current.tag}
                </span>
              </div>

              <div className="absolute bottom-0 inset-x-0 z-20 p-5 text-[#F7EFDD]">
                <div className="text-[11px] text-[#E8C98A] font-medium tracking-wide mb-1">
                  {current.platform}
                </div>
                <div className="text-[18px] font-bold leading-snug mb-3">{current.name}</div>
                <div className="grid grid-cols-3 gap-2 rounded-xl bg-[#161310]/78 backdrop-blur-md border border-[#E8C98A]/22 p-2.5">
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
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Switcher Pill */}
        <div className="absolute -right-4 bottom-0 z-20 flex items-center gap-1.5 bg-[#252019]/95 backdrop-blur-md text-[#F7EFDD] rounded-full pl-3.5 pr-1.5 py-0.5 shadow-[0_14px_28px_-10px_rgba(0,0,0,0.8)] border border-[#E8C98A]/28">
          <span className="text-[11px] text-[#C2B6A3] mr-0.5">{deckHint}</span>
          <div className="flex items-center">
            {posts.map((p, idx) => (
              <button
                key={`dot-${p.id}`}
                type="button"
                onClick={() => setActive(idx)}
                aria-label={p.name}
                aria-pressed={idx === active}
                className="min-w-[28px] min-h-[36px] flex items-center justify-center cursor-pointer active:scale-95 focus-visible:outline-2 focus-visible:outline-[#F5D98B] rounded-full"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-200 ${
                    idx === active
                      ? "w-5 bg-[#E89B5C]"
                      : "w-2 bg-[#E8C98A]/35 hover:bg-[#E8C98A]/65"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
